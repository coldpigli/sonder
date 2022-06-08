import { Alert, AlertIcon, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, VStack } from "@chakra-ui/react"
import { validationMessages } from "constants";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "services";
import * as Yup from "yup";

const SignupForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {authToken, authStatus} = useSelector((state)=>state.auth);

    const formik = useFormik({
        initialValues: {
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: ""
        },
        validationSchema: Yup.object({
          username: Yup.string()
            .required(validationMessages.userNameEmpty)
            .min(4, validationMessages.userNameShort),
          firstName: Yup.string()
            .required(validationMessages.userNameEmpty),
          lastName: Yup.string()
          .required(validationMessages.userNameEmpty),
          email: Yup.string()
            .email(validationMessages.emailFormat)
            .required(validationMessages.emailEmpty),  
          password: Yup.string()
            .required(validationMessages.passwordEmpty)
            .min(8, validationMessages.passwordShort),
        }),
        onSubmit: (values, actions) => {
          const {username, email, password, firstName, lastName} = values;
          dispatch(signupUser({username, email, password, firstName, lastName}))
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

      <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
        <FormLabel htmlFor="firstname">First Name</FormLabel>
        <Input id="firstname" type="text" {...formik.getFieldProps("firstName")} />
        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.lastName && formik.touched.lastName}>
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <Input id="lastname" type="text" {...formik.getFieldProps("lastName")} />
        <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
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
      {authStatus==="failed"?<Alert status='error' bg='red.500' borderRadius='0.5rem'>
        <AlertIcon color='white'/>
        Fail to signup. Username Already exists
      </Alert>:null}
      <Button minW="100%" type="submit" bg='primary'>
        Signup
      </Button>
    </VStack>
  )
}

export default SignupForm