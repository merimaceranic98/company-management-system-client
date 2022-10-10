import { Container, Center, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";
import { Document, Packer, Paragraph, TextRun } from "docx";
import saveAs from "file-saver";

import { getCurrentLoggedInUser } from "../../current-user/current-user-action";
import Table from "../../table/components/Table";
import reportTable from "../../department/my-department/components/my-department-table";
import { getTeamById } from "../actions/team-action";

const MyTeam = () => {
  const dispatch = useDispatch();
  const currentLoggedInUser = useSelector(
    (state: any) => state.currentUser.info
  );
  const team = useSelector((state: any) => state.teams.team);

  useEffect(() => {
    dispatch(
      getCurrentLoggedInUser(
        Number(window.localStorage.getItem("userId"))
      ) as any
    );
  }, [dispatch]);

  useEffect(() => {
    if (currentLoggedInUser?.teamId) {
      dispatch(getTeamById(currentLoggedInUser?.teamId) as any);
    }
  }, [dispatch, currentLoggedInUser]);

  const columnsUserPerTeams = React.useMemo(
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

  const downloadMyTeamData = async () => {
    const teamData: any[] = [];
    team?.users?.forEach((item: any) => {
      const res = reportTable(item);
      res?.forEach((tableItem) => {
        teamData.push(tableItem);
      });
      teamData.push(new Paragraph(""));
      teamData.push(new Paragraph(""));
      teamData.push(new Paragraph(""));
    });
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Users per team - ${team.name}`,
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            ...teamData,
          ],
        },
      ],
    });
    await Packer.toBlob(document).then((blob) => {
      saveAs(blob, `CompanySY ${team?.name}.docx`);
    });
  };

  return (
    <Container maxW={"100%"} mt={"100px"}>
      {team && (
        <>
          <Center>
            <Table
              data={team?.users}
              columns={columnsUserPerTeams}
              marginTop={0}
              mediumTableSize={"70vw"}
            />
          </Center>
          <Center>
            <Button
              backgroundColor={"red.500"}
              _hover={{ backgroundColor: "red.500" }}
              _focus={{ backgroundColor: "red.500" }}
              color={"white"}
              size={"xs"}
              onClick={() => downloadMyTeamData()}
            >
              My team as .docx
            </Button>
          </Center>
        </>
      )}
    </Container>
  );
};

export default MyTeam;
