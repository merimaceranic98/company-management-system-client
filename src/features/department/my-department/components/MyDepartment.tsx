import { Container, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";
import { getCurrentLoggedInUser } from "../../../current-user/current-user-action";
import Table from "../../../table/components/Table";
import { getDepartmentById } from "../../all-departments/actions/all-departments-action";

const MyDepartment = () => {
  const dispatch = useDispatch();

  const currentLoggedInUser = useSelector(
    (state: any) => state.currentUser.info
  );
  const department = useSelector((state: any) => state.departments.department);

  useEffect(() => {
    dispatch(
      getCurrentLoggedInUser(
        Number(window.localStorage.getItem("userId"))
      ) as any
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDepartmentById(currentLoggedInUser.departmentId) as any);
  }, [dispatch]);

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
        Header: "Gender",
        accessor: "gender",
        Cell: function idCell(props: Cell) {
          return (
            <Flex justifyContent={"center"}>
              {props.value ? props.value : "Not assigned"}
            </Flex>
          );
        },
      },
      {
        Header: "Years of employement",
        accessor: "yearsOfEmployement",
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
    ],
    []
  );

  return (
    <Container maxW={"100%"} mt={"100px"}>
      <Center>
        <Table
          data={department?.users}
          columns={columnsUsersPerDepartment}
          marginTop={0}
          mediumTableSize={"70vw"}
        />
      </Center>{" "}
    </Container>
  );
};

export default MyDepartment;
