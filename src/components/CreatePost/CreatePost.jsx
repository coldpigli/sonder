import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import { MdImage, MdOutlineEmojiEmotions } from "react-icons/md";
import Picker from "emoji-picker-react";
import { useFormik} from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { validationMessages } from "constants";
import { useDispatch } from "react-redux";
import { addNewPost } from "services";

const CreatePost = () => {
  const [emojiPickerActive, setEmojiPickerActive] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      postData: ""
    },
    validationSchema: Yup.object({
      postData: Yup.string().required(validationMessages.userNameEmpty),
    }),
    onSubmit: (values, actions) => {
      const { postData } = values;
      dispatch(addNewPost({content: postData}));
      actions.resetForm();
    },
  });

  const handleEmojiPicker = () => {
    setEmojiPickerActive((prev) => !prev);
  };

  return (
    <Box borderRadius="1rem" as="form" onSubmit={formik.handleSubmit}>
      <Flex align="center" w="full">
        <Box flex="1">
          <FormControl>
            <Textarea
              isInvalid={formik.errors.postData}
              id="postData"
              p="1rem"
              size="sm"
              borderRadius="1rem"
              placeholder="Pen your thoughts down"
              variant="unstyled"
              bg="lightBlue"
              focusBorderColor="none"
              resize="none"
              border="none"
              {...formik.getFieldProps("postData")}
            />
          </FormControl>
        </Box>
      </Flex>
      <HStack mt="1rem" justify="space-between">
        <Box>
          <IconButton
            variant="ghost"
            fontSize="1.5rem"
            color="lightGrey"
            onClick={handleEmojiPicker}
            icon={<MdOutlineEmojiEmotions />}
            _focus={{
              outline: "none",
            }}
          />
          {emojiPickerActive && (
            <Picker
              pickerStyle={{
                color: "lightGrey",
                boxShadow: "none",
                border: "none",
              }}
            />
          )}
        </Box>
        <Button bg="primary" type="submit">
          Post
        </Button>
      </HStack>
    </Box>
  );
};

export default CreatePost;
