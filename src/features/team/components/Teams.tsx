import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";

import Table from "../../table/components/Table";
import {
  getUsersWithoutTeam,
  updateUserAssignTeam,
} from "../../user/actions/user-action";
import { getAllTeams, getTeamById } from "../actions/team-action";

const Teams = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const teams = useSelector((state: any) => state.teams.teams);
  const [teamNumber, setTeamNumber] = useState(null);
  const team = useSelector((state: any) => state.teams.team);
  const usersWithoutTeam = useSelector(
    (state: any) => state.users.usersWithoutTeam
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getAllTeams() as any);
  }, []);

  useEffect(() => {
    if (teamNumber !== null) {
      dispatch(getTeamById(Number(teamNumber)) as any);
      dispatch(getUsersWithoutTeam() as any);
    }
  }, [teamNumber]);

  const getTeamDetails = (teamId: any) => {
    setTeamNumber(teamId);
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

  function onSubmit(values: FieldValues) {
    const data = {
      teamId: team.id,
    };
    dispatch(updateUserAssignTeam(values.id, data) as any);
  }
  return (
    <Container maxW={"100%"} mt={"100px"}>
      <Center>
        <Box display={"flex"} p={4} m={"0 auto"} pl={"0px"} pr={"0px"}>
          <Table
            data={teams.filter((x: any) => x.id !== 0)}
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
              {team && (
                <Table
                  data={team?.users}
                  columns={columnsUserPerTeams}
                  marginTop={0}
                  mediumTableSize={"100vw"}
                />
              )}
            </ModalBody>
            <ModalFooter
              justifyContent={
                usersWithoutTeam.length > 0 ? "space-between" : "flex-end"
              }
            >
              {usersWithoutTeam.length > 0 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex alignItems={"center"}>
                    <FormControl mr={2}>
                      <Select
                        height={"30px"}
                        {...register("id", {
                          required: "This is required",
                        })}
                        placeholder="Add team member"
                      >
                        {usersWithoutTeam.map((item: any) => {
                          return (
                            <option
                              key={item.id}
                              value={item.id}
                            >{`${item.firstName} ${item.lastName}`}</option>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <Button
                      type="submit"
                      backgroundColor={"red.500"}
                      _hover={{ backgroundColor: "red.500" }}
                      _focus={{ backgroundColor: "red.500" }}
                      color={"white"}
                      size={"sm"}
                      pl={10}
                      pr={10}
                    >
                      Save changes
                    </Button>
                  </Flex>
                </form>
              )}
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
