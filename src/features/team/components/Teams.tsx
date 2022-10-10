import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";

import Table from "../../table/components/Table";
import { getAllTeams, getTeamById } from "../actions/team-action";

const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state: any) => state.teams.teams);
  const team = useSelector((state: any) => state.teams.team);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getAllTeams() as any);
  }, []);

  const getTeamDetails = (teamId: number) => {
    dispatch(getTeamById(teamId) as any);
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
                  onOpen();
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
  const columnsUserPerTeams = React.useMemo(
    () => [
      {
        Header: "FIRST NAME",
        accessor: "firstName",
      },
      {
        Header: "LAST NAME",
        accessor: "lastName",
      },
      {
        Header: "EMAIL",
        accessor: "email",
      },
      {
        Header: "GENDER",
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
        Header: "ROLE",
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
        <Box display={"flex"} p={4} m={"0 auto"} pl={"0px"} pr={"0px"}>
          <Table
            data={teams}
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
            <ModalHeader fontSize={"14px"}>Team details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table
                data={team?.users}
                columns={columnsUserPerTeams}
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
                color={"white"}
                size={"sm"}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Container>
  );
};

export default Teams;
