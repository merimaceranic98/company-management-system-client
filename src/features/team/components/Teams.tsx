import { Box, Button, Center, Container, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";

import Table from "../../table/components/Table";
import { getAllTeams } from "../actions/team-action";

const Teams = () => {
  const dispatch = useDispatch();
  const department = useSelector((state: any) => state.teams.teams);

  useEffect(() => {
    dispatch(getAllTeams() as any);
  }, []);

  const getTeamDetails = (teamId: number) => {
    console.log("Team id is, ", teamId);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Team",
        accessor: "name",
      },
      {
        Header: "Team details",
        accessor: "id",
        Cell: function idCell(props: Cell) {
          return (
            <Flex justifyContent={"center"}>
              <Button
                mb={1}
                size="xs"
                backgroundColor={"red.500"}
                color={"white"}
                _hover={{ backgroundColor: "red.500" }}
                _focus={{ backgroundColor: "red.500" }}
                onClick={() => {
                  getTeamDetails(props.value);
                }}
              >
                View team details
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
            data={department}
            columns={columns}
            marginTop={20}
            mediumTableSize={"70vw"}
          />
        </Box>
      </Center>
    </Container>
  );
};

export default Teams;
