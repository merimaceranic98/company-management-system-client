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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";

import Table from "../../../table/components/Table";
import { getUserById } from "../../../user/actions/user-action";
import EditUser from "../../../user/components/EditUser";

import {
  getAllDepartments,
  getDepartmentById,
} from "../actions/all-departments-action";

const AllDepartments = () => {
  const departments = useSelector(
    (state: any) => state.departments.departments
  );
  const department = useSelector((state: any) => state.departments.department);
  const userById = useSelector((state: any) => state.users.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getAllDepartments() as any);
  }, [dispatch]);

  const viewEmpleyees = (props: any) => {
    dispatch(getDepartmentById(Number(props.value)) as any);
    onOpen();
  };

  const editEmployee = (props: any) => {
    dispatch(getUserById(Number(props.value)) as any);
    onClose();
    setIsModalOpen(true);
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
    [viewEmpleyees]
  );

  const columnsUsersPerDepartment = React.useMemo(
    () => [
      {
        Header: "First name",
        accessor: "firstName",
      },
      {
        Header: "Last name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
        Cell: function idCell(props: Cell) {
          return (
            <Flex justifyContent={"center"}>
              {props.value ? props.value : "Not assigned"}
            </Flex>
          );
        },
      },
      {
        Header: "Edit",
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
                  editEmployee(props);
                }}
              >
                Edit employee
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
          <Table
            data={departments}
            columns={columns}
            marginTop={20}
            mediumTableSize={"70vw"}
          />
        </Box>
      </Center>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW={"auto"}>
            <ModalHeader fontSize={"14px"}>
              Employees per department
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table
                data={department?.users}
                columns={columnsUsersPerDepartment}
                marginTop={0}
                mediumTableSize={"100vw"}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                backgroundColor={"red.500"}
                _hover={{ backgroundColor: "red.500" }}
                _focus={{ backgroundColor: "red.500" }}
                onClick={onClose}
                size={"sm"}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <EditUser
        userById={userById}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </Container>
  );
};

export default AllDepartments;
