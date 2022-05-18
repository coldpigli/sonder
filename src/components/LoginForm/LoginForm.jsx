import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { validationMessages } from "constants";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(validationMessages.emailFormat)
        .required(validationMessages.emailEmpty),
      password: Yup.string()
        .required(validationMessages.passwordEmpty)
        .min(8, validationMessages.passwordShort),
    }),
    onSubmit: (values, actions) => {
      actions.resetForm();
      navigate("/feed", {replace: true});
    },
  });

  return (
    <VStack as="form" spacing="1rem" onSubmit={formik.handleSubmit} w={{base: "100%",md: "80%",xl: "80%"}}>
      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" {...formik.getFieldProps("email")} />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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
        <FormHelperText>Must contain atleast 8 characters</FormHelperText>
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>
      <Button minW="100%" type="submit">
        Login
      </Button>
    </VStack>
  );
};

export default LoginForm;
