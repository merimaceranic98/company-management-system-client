import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  Button,
  FormLabel,
  FormControl,
  Input,
  Flex,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserById } from "../actions/user-action";
import Error from "../../error/component/Error";
import { useEffect, useState } from "react";
import { getNumberPerDifferentGender } from "../../genders/actions/genders-actions";

const EditUser = (props: any) => {
  const { isModalOpen, setIsModalOpen, userById } = props;
  const { handleSubmit, register } = useForm();
  const isError = useSelector((state: any) => state.errors.error);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const dispatch = useDispatch();

  const genders = useSelector((state: any) => state.genders.genders);
  useEffect(() => {
    dispatch(getNumberPerDifferentGender() as any);
  }, [dispatch]);

  function onSubmit(values: FieldValues) {
    dispatch(updateUserById(userById.id, values, genders) as any);
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (isError) {
      setIsErrorModalOpen(true);
    }
  }, [isError]);

  const closeUserModal = () => {
    setIsModalOpen(false);
    setIsErrorModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"14px"}>Edit user profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel htmlFor="firstName" fontSize={"14px"}>
                  First name
                </FormLabel>
                <Input
                  id="firstName"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                  mb={1}
                  fontSize={"14px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="lastName" fontSize={"14px"}>
                  Last name
                </FormLabel>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                  mb={1}
                  fontSize={"14px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="role" fontSize={"14px"}>
                  Role
                </FormLabel>
                <Input
                  id="role"
                  placeholder="Role"
                  {...register("role", {
                    required: "This is required",
                    minLength: {
                      value: 2,
                      message: "Minimum length should be 4",
                    },
                  })}
                  mb={1}
                  fontSize={"14px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="yearsOfEmployement" fontSize={"14px"}>
                  Years of employment
                </FormLabel>
                <Input
                  id="yearsOfEmployement"
                  placeholder="Years of employment"
                  {...register("yearsOfEmployement", {
                    required: "This is required",
                  })}
                  mb={1}
                  fontSize={"14px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="gender" fontSize={"14px"}>
                  Gender
                </FormLabel>
                <Select
                  {...register("gender", {
                    required: "This is required",
                  })}
                  placeholder="Choose gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female"> Female</option>
                </Select>
              </FormControl>
              <Flex justifyContent={"space-between"} mt={4} mb={4}>
                <Button
                  backgroundColor={"red.500"}
                  _hover={{ backgroundColor: "red.500" }}
                  _focus={{ backgroundColor: "red.500" }}
                  type="submit"
                  size={"sm"}
                >
                  Submit
                </Button>
                <Button
                  border="1px solid #E53E3E"
                  color="#E53E3E"
                  onClick={() => closeUserModal()}
                  size={"sm"}
                >
                  Close edit modal
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {isError && (
        <Error
          isErrorModalOpen={isErrorModalOpen}
          setIsErrorModalOpen={setIsErrorModalOpen}
          setIsSubmitButtonClicked={() => {
            return false;
          }}
        />
      )}
    </>
  );
};

export default EditUser;
