import {
  Container,
  Box,
  Button,
  Flex,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";
import Table from "../../../table/components/Table";

import {
  getAllDepartments,
  getDepartmentById,
} from "../actions/all-departments-action";

const AllDepartments = () => {
  const departments = useSelector(
    (state: any) => state.departments.departments
  );
  const department = useSelector((state: any) => state.departments.department);
  console.log("Department is, ", department);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getAllDepartments() as any);
  }, [dispatch]);

  const viewEmpleyees = (props: any) => {
    dispatch(getDepartmentById(Number(props.value)) as any);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Department",
        accessor: "name",
      },
      {
        Header: "Details",
        accessor: "id",
        Cell: function idCell(props: Cell) {
          return (
            <Flex justifyContent={"center"}>
              <Button
                mb={1}
                size="xs"
                backgroundColor={"red.500"}
                _hover={{ backgroundColor: "red.500" }}
                _focus={{ backgroundColor: "red.500" }}
                onClick={() => {
                  viewEmpleyees(props);
                }}
              >
                View employees
              </Button>
            </Flex>
          );
        },
      },
    ],
    []
  );
  return (
    <Container maxW={"100%"} mt={"100px"}>
      <Center>
        <Box display={"flex"} p={4} m={"0 auto"} pl={"0px"} pr={"0px"}>
          <Table data={departments} columns={columns} />
        </Box>
      </Center>
      <>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              Merima
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Container>
  );
};

export default AllDepartments;
