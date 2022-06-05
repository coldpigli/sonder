import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { validationMessages } from "constants";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "services/userServices";
import * as Yup from "yup";

const EditProfile = ({ isOpen, onClose, btnRef }) => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { firstName, lastName, profileImg, portfolioUrl, bio } = userData;
  const formik = useFormik({
    initialValues: {
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      portfolioUrl: portfolioUrl ?? "",
      bio: bio ?? "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstName: Yup.string().required(validationMessages.userNameEmpty),
      lastName: Yup.string().required(validationMessages.userNameEmpty),
    }),
    onSubmit: (values, actions) => {
      const { firstName, lastName, portfolioUrl, bio } = values;   
      dispatch(editUser({firstName, lastName, portfolioUrl, bio}))
      actions.resetForm();
    },
  });

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="xl"
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent bg="#21242D" color="white">
        <Box as="form" onSubmit={formik.handleSubmit}>
          <DrawerCloseButton />
          <DrawerHeader>Edit your profile</DrawerHeader>

          <DrawerBody>
            <VStack align="stretch">
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.lastName && formik.touched.lastName}
              >
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  {...formik.getFieldProps("lastName")}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.bio && formik.touched.bio}>
                <FormLabel htmlFor="bio">Bio</FormLabel>
                <Textarea
                  id="bio"
                  type="text"
                  {...formik.getFieldProps("bio")}
                />
                <FormErrorMessage>{formik.errors.bio}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.errors.portfolioUrl && formik.touched.portfolioUrl
                }
              >
                <FormLabel htmlFor="portfolioUrl">Portfolio</FormLabel>
                <Input
                  id="portfolioUrl"
                  type="url"
                  {...formik.getFieldProps("portfolioUrl")}
                />
                <FormErrorMessage>
                  {formik.errors.portfolioUrl}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Save
            </Button>
          </DrawerFooter>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default EditProfile;
