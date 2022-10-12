import { Container, Center, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell } from "react-table";
import { Document, Packer, Paragraph, TextRun } from "docx";
import saveAs from "file-saver";

import { getCurrentLoggedInUser } from "../../../current-user/current-user-action";
import Table from "../../../table/components/Table";
import { getDepartmentById } from "../../all-departments/actions/all-departments-action";
import reportTable from "./my-department-table";

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
  }, [dispatch, currentLoggedInUser]);

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

  const downloadMyDepartmentData = async () => {
    const departmentData: any[] = [];
    department?.users.forEach((item: any) => {
      const res = reportTable(item);
      res.forEach((tableItem) => {
        departmentData.push(tableItem);
      });
      departmentData.push(new Paragraph(""));
      departmentData.push(new Paragraph(""));
      departmentData.push(new Paragraph(""));
    });
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Users per department - ${department.name}`,
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            ...departmentData,
          ],
        },
      ],
    });
    await Packer.toBlob(document).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, `CompanySY ${department.name}.docx`);
    });
  };

  return (
    <Container maxW={"100%"} mt={"100px"}>
      <Center>
        <Table
          data={department?.users}
          columns={columnsUsersPerDepartment}
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
          onClick={() => downloadMyDepartmentData()}
        >
          My department as .docx
        </Button>
      </Center>
    </Container>
  );
};

export default MyDepartment;
