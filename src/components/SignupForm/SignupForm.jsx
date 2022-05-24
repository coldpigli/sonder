import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, VStack } from "@chakra-ui/react"
import { validationMessages } from "constants";
import { useFormik } from "formik";
import { signUp } from "services";
import * as Yup from "yup";

const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
        username: "",
        email: "",
        password: "",
        },
        validationSchema: Yup.object({
          username: Yup.string()
            .required(validationMessages.userNameEmpty)
            .min(4, validationMessages.userNameShort),
          email: Yup.string()
            .email(validationMessages.emailFormat)
            .required(validationMessages.emailEmpty),  
          password: Yup.string()
            .required(validationMessages.passwordEmpty)
            .min(8, validationMessages.passwordShort),
        }),
        onSubmit: (values, actions) => {
          const {username, email, password} = values;
          signUp(username, email, password);
          actions.resetForm();
        },
      })

  return (
    <VStack as="form" spacing="1rem" onSubmit={formik.handleSubmit} w={{base: "100%",md: "80%",xl: "80%"}}>
       <FormControl isInvalid={formik.errors.username && formik.touched.username}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" type="text" {...formik.getFieldProps("username")} />
        <FormHelperText>Make it Unique. Make it you.</FormHelperText>
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl> 
      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" {...formik.getFieldProps("email")} />
        <FormHelperText>We'll never share your email.</FormHelperText>
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