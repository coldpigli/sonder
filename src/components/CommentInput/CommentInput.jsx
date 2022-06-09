import {
  Avatar,
  Box,
  Button,
  FormControl,
  HStack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { validationMessages } from "constants";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addNewCommentToPost } from "services";
import * as Yup from "yup";

const CommentInput = ({postId}) => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      reply: ""
    },
    validationSchema: Yup.object({
      reply: Yup.string().required(validationMessages.userNameEmpty),
    }),
    onSubmit: (values, actions) => {
      const { reply } = values;
      console.log('reply and postId', reply, postId);
      dispatch(addNewCommentToPost({postId: postId, comment: {text: reply}}));
      actions.resetForm();
    },
  });

  return (
    <VStack p="1rem" align="stretch" spacing="4" as="form" onSubmit={formik.handleSubmit}>
      <HStack align='flex-start' spacing='4'>
        <Avatar size="sm" name={userData.username} src={userData.profileImg}/>
        <FormControl>
        <Textarea
          isInvalid={formik.errors.reply}
          id="reply"
          p="1rem"
          size="xs"
          borderRadius="0.5rem"
          placeholder="What are your thoughts?"
          variant="unstyled"
          bg="#21242D"
          focusBorderColor="none"
          resize="none"
          border="none"
          {...formik.getFieldProps("reply")}
        />
      </FormControl>
      </HStack>
      <Box alignSelf="flex-end">
        <Button bg="#6C5DD3" color="white" size='sm' type="submit">
          Reply
        </Button>
      </Box>
    </VStack>
  );
};

export default CommentInput;
