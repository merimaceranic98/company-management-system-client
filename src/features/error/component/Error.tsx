import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { showErrorMessage } from "../action/error-action";

const Error = (props: any) => {
  const { isErrorModalOpen, setIsErrorModalOpen } = props;
  const dispatch = useDispatch();
  const onClose = () => {
    setIsErrorModalOpen(false);
    dispatch(showErrorMessage(false) as any);
  };
  return (
    <>
      <Modal isOpen={isErrorModalOpen} onClose={setIsErrorModalOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"red.500"} fontWeight={"bold"}>
            Error!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Oops! Something went wrong. Please try again!</ModalBody>

          <ModalFooter>
            <Button
              backgroundColor={"red.500"}
              _hover={{ backgroundColor: "red.500" }}
              _focus={{ backgroundColor: "red.500" }}
              size={"sm"}
              mr={3}
              onClick={() => onClose()}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Error;
