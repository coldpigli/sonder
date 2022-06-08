import { Box, Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react'
import { validationMessages } from 'constants';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { editPost } from 'services';
import * as Yup from "yup";

const EditPostModal = ({isOpen, onClose, post}) => {

  const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          postData: post.content
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
          postData: Yup.string().required(validationMessages.userNameEmpty),
        }),
        onSubmit: (values, actions) => {
          const { postData } = values;
          dispatch(editPost({...post, content: postData}));
          onClose();
          actions.resetForm();
        },
      });

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#21242D" as='form' onSubmit={formik.handleSubmit}>
          <Box>
          <ModalHeader color="#808191">Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
                <Textarea
                isInvalid={formik.errors.postData}
                id="postData"
                p="1rem"
                size="sm"
                borderRadius="1rem"
                placeholder="Pen your thoughts down"
                variant="unstyled"
                bg="#242731"
                color="white"
                focusBorderColor="none"
                resize="none"
                border="none"
                {...formik.getFieldProps("postData")}
                />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#6C5DD3" color='white' mr={3} type="submit">
              Edit
            </Button>
            <Button variant='outline' bg="transparent" color='#6C5DD3' onClick={onClose}>Discard</Button>
          </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default EditPostModal;