import { Container, Box, Button, Flex, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../table/components/Table";

import { getAllDepartments } from "../actions/all-departments-action";

const AllDepartments = () => {
  const departments = useSelector(
    (state: any) => state.departments.departments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDepartments() as any);
  }, [dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Department",
        accessor: "name",
      },
      {
        Header: "Details",
        accessor: "id",
        Cell: function idCell() {
          return (
            <Flex justifyContent={"center"}>
              <Button
                mb={1}
                size="xs"
                backgroundColor={"red.500"}
                _hover={{ backgroundColor: "red.500" }}
                _focus={{ backgroundColor: "red.500" }}
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
    </Container>
  );
};

export default AllDepartments;
