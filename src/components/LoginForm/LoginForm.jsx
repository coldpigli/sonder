import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { validationMessages } from "constants";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "services";
import * as Yup from "yup";

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {authToken, authStatus} = useSelector((state)=>state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(validationMessages.emailEmpty),
      password: Yup.string()
        .required(validationMessages.passwordEmpty)
        .min(8, validationMessages.passwordShort),
    }),
    onSubmit: (values, actions) => {
      const {username, password} = values;
      dispatch(loginUser({username, password}))
      actions.resetForm();
    },
  });

  useEffect(()=>{
      if(authToken){
        navigate("/feed", {replace: true});
      }
  }, [authToken])
  console.log("authStuas", authStatus)
  return (
    <VStack as="form" spacing="1rem" onSubmit={formik.handleSubmit} w={{base: "100%",md: "80%",xl: "80%"}}>
      <FormControl isInvalid={formik.errors.username && formik.touched.username}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" type="username" {...formik.getFieldProps("username")} />
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={formik.errors.password && formik.touched.password}
      >
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>
      {authStatus==="failed"?<Alert status='error'>
        <AlertIcon/>
        Username or Password is incorrect
      </Alert>:null}
      <Button minW="100%" type="submit">
        Login
      </Button>
    </VStack>
  );
};

export default LoginForm;
