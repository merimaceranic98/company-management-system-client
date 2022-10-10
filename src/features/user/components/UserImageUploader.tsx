import { Text, Button, Container, Image } from "@chakra-ui/react";
import { useDropzone, DropzoneOptions, FileRejection } from "react-dropzone";

import upload from "../../../images/upload.png";

type props = {
  onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
};

function UserImageUploader(props: props) {
  const { onDrop } = props;

  const options: DropzoneOptions = {
    noClick: true,
    noKeyboard: true,
    onDrop,
  };
  const { getRootProps, getInputProps, open } = useDropzone(options);

  return (
    <Container
      display={"flex"}
      justifyContent={"space-between"}
      pt={"2px"}
      pb={"2px"}
      ml={0}
      border="1px solid rgba(0,0,0,0.1)"
      alignItems="center"
      borderRadius="md"
      maxW={"auto"}
      {...getRootProps()}
      zIndex={0}
    >
      <Text>{"Browse or drag&drop"}</Text>
      <Button
        _hover={{
          background: "#fff",
          color: "#ED2130",
        }}
        _focus={{
          background: "#fff",
          color: "#ED2130",
        }}
        backgroundColor={"#fff"}
        onClick={open}
      >
        <Image src={upload} />
      </Button>
      <input {...getInputProps()} />
    </Container>
  );
}

export default UserImageUploader;
