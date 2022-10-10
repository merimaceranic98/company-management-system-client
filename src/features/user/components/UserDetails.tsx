import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  ModalOverlay,
} from "@chakra-ui/react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import saveAs from "file-saver";

const UserDetails = (props: any) => {
  const { userById, setIsUserDetailsModalOpen, isUserDetailsModalOpen } = props;

  const getDocxDocument = async () => {
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "FIRST NAME",
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: userById?.firstName,
                  color: "#000000",
                  font: "Arial",
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "LAST NAME",
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: userById?.lastName,
                  color: "#000000",
                  font: "Arial",
                }),
              ],
            }),

            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "EMAIL",
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: userById?.email,
                  color: "#000000",
                  font: "Arial",
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "ROLE",
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: userById?.role,
                  color: "#000000",
                  font: "Arial",
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "YEARS OF EMPLOYEMENT",
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: userById?.yearsOfEmployement,
                  color: "#000000",
                  font: "Arial",
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "GENDER",
                  color: "#E53E3E",
                  font: "Arial",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: userById?.gender,
                  color: "#000000",
                  font: "Arial",
                }),
              ],
            }),
          ],
        },
      ],
    });

    await Packer.toBlob(document).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(
        blob,
        `CompanySY ${userById?.firstName} ${userById?.lastName}.docx`
      );
    });
  };
  return (
    <Modal
      isOpen={isUserDetailsModalOpen}
      onClose={setIsUserDetailsModalOpen}
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"14px"}>Single user details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={"column"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              mb={"1rem"}
              alignItems={"center"}
            >
              <Text
                mr={"4px"}
                color={"red.500"}
                fontWeight={"bold"}
                fontSize={"14px"}
              >
                FIRST NAME
              </Text>
              <Text fontSize={"14px"}>{userById?.firstName}</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              mb={"1rem"}
              alignItems={"center"}
            >
              <Text
                mr={"4px"}
                color={"red.500"}
                fontWeight={"bold"}
                fontSize={"14px"}
              >
                LAST NAME
              </Text>
              <Text fontSize={"14px"}>{userById?.lastName}</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              mb={"1rem"}
              alignItems={"center"}
            >
              <Text
                mr={"4px"}
                color={"red.500"}
                fontWeight={"bold"}
                fontSize={"14px"}
              >
                EMAIL
              </Text>
              <Text fontSize={"14px"}>{userById?.email}</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              mb={"1rem"}
              alignItems={"center"}
            >
              <Text
                mr={"4px"}
                color={"red.500"}
                fontWeight={"bold"}
                fontSize={"14px"}
              >
                ROLE
              </Text>
              <Text fontSize={"14px"}>{userById?.role}</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              mb={"1rem"}
              alignItems={"center"}
            >
              <Text
                mr={"4px"}
                color={"red.500"}
                fontWeight={"bold"}
                fontSize={"14px"}
              >
                YEARS OF EMPLOYEMENT
              </Text>
              <Text fontSize={"14px"}>{userById?.yearsOfEmployement}</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              mb={"1rem"}
              alignItems={"center"}
            >
              <Text
                mr={"4px"}
                color={"red.500"}
                fontWeight={"bold"}
                fontSize={"14px"}
              >
                GENDER
              </Text>
              <Text fontSize={"14px"}>{userById?.gender.toLowerCase()}</Text>
            </Box>
          </Flex>
          <Flex justifyContent={"flex-end"}>
            <Button
              size="xs"
              backgroundColor={"red.500"}
              color={"white"}
              _hover={{ backgroundColor: "red.500" }}
              _focus={{ backgroundColor: "red.500" }}
              onClick={() => getDocxDocument()}
            >
              Download .docx
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default UserDetails;
