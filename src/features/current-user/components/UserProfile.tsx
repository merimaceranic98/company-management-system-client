import { Box, Container, Flex, Img, Text, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentLoggedInUser } from "../current-user-action";

const UserProfile = () => {
  const dispatch = useDispatch();
  const currentLoggedInUser = useSelector(
    (state: any) => state.currentUser.info
  );

  useEffect(() => {
    dispatch(
      getCurrentLoggedInUser(
        Number(window.localStorage.getItem("userId"))
      ) as any
    );
  }, []);

  return (
    <Container mt={"100px"} w={"80%"} pl={0} pr={0}>
      <Flex gap={"16px"}>
        <Flex
          w={"50%"}
          borderRadius={"48px"}
          flexDirection={"column"}
          border={"2px solid #EDF2F7"}
        >
          <Box p={"40px"} pb={"20px"}>
            <Img borderRadius={"50%"} src={currentLoggedInUser.image} />
          </Box>
          <Box
            textAlign={"center"}
            fontSize={"24px"}
            fontWeight={"bold"}
            pb={"20px"}
          >
            {`Hi ${currentLoggedInUser.firstName}!`}
          </Box>
          <Divider />
          <Box pl={"20px"} pt={2} pb={"40px"}>
            <Box p={2} display={"flex"}>
              <Text fontWeight={"medium"} fontSize={"16px"} mr={"3px"}>
                First name:
              </Text>
              <Text>{currentLoggedInUser.firstName}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text fontWeight={"medium"} fontSize={"16px"} mr={"3px"}>
                Last name:
              </Text>
              <Text>{currentLoggedInUser.lastName}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text fontWeight={"medium"} fontSize={"16px"} mr={"3px"}>
                Role:
              </Text>
              <Text>{currentLoggedInUser.role}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text fontWeight={"medium"} fontSize={"16px"} mr={"3px"}>
                Years of employement:
              </Text>
              <Text>{currentLoggedInUser.yearsOfEmployement}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text fontWeight={"medium"} fontSize={"16px"} mr={"3px"}>
                Email:
              </Text>
              <Text>{currentLoggedInUser.email}</Text>
            </Box>
          </Box>
        </Flex>
        <Flex w={"50%"} backgroundColor={"green"} flexDirection={"column"}>
          <Box>My department</Box>
          <Box>My team</Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default UserProfile;
