import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, VStack } from "@chakra-ui/react"
import { validationMessages } from "constants";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signupUser } from "services";
import * as Yup from "yup";

const SignupForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/feed";
    const {authToken} = useSelector((state)=>state.auth);

    const formik = useFormik({
        initialValues: {
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: ""
        },
        validationSchema: Yup.object({
          username: Yup.string()
            .required(validationMessages.userNameEmpty)
            .min(4, validationMessages.userNameShort),
          firstname: Yup.string()
            .required(validationMessages.userNameEmpty),
          lastname: Yup.string()
          .required(validationMessages.userNameEmpty),
          email: Yup.string()
            .email(validationMessages.emailFormat)
            .required(validationMessages.emailEmpty),  
          password: Yup.string()
            .required(validationMessages.passwordEmpty)
            .min(8, validationMessages.passwordShort),
        }),
        onSubmit: (values, actions) => {
          const {username, email, password, firstname, lastname} = values;
          dispatch(signupUser({username, email, password, firstname, lastname}))
          actions.resetForm();
        },
      })

  useEffect(()=>{
    if(authToken){
      navigate("/feed", {replace: true})
    }
  },[authToken])

  return (
    <VStack as="form" spacing="1rem" onSubmit={formik.handleSubmit} w={{base: "100%",md: "80%",xl: "80%"}}>

      <FormControl isInvalid={formik.errors.firstname && formik.touched.firstname}>
        <FormLabel htmlFor="firstname">First Name</FormLabel>
        <Input id="firstname" type="text" {...formik.getFieldProps("firstname")} />
        <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.lastname && formik.touched.lastname}>
        <FormLabel htmlFor="lastname">Last Name</FormLabel>
        <Input id="lastname" type="text" {...formik.getFieldProps("lastname")} />
        <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
      </FormControl>

       <FormControl isInvalid={formik.errors.username && formik.touched.username}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" type="text" {...formik.getFieldProps("username")} />
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl> 

      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" {...formik.getFieldProps("email")} />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.password && formik.touched.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        <FormHelperText>Must contain atleast 8 characters</FormHelperText>
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>

      <Button minW="100%" type="submit">
        Signup
      </Button>
    </VStack>
  )
}

export default SignupForm