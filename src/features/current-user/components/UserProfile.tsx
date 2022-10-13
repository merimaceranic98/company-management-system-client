import { Box, Container, Flex, Img, Text, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hookz/web";

import { getCurrentLoggedInUser } from "../current-user-action";

const UserProfile = () => {
  const dispatch = useDispatch();
  const currentLoggedInUser = useSelector(
    (state: any) => state.currentUser.info
  );
  const isLargeDevice = useMediaQuery("only screen and (min-width: 80em)");
  const boxProps = isLargeDevice ? { whileHover: { scale: 1.1 } } : {};

  const boxPropsLinks = isLargeDevice
    ? { whileHover: { scale: 1.1, color: "#FC8181" } }
    : {};
  useEffect(() => {
    dispatch(
      getCurrentLoggedInUser(
        Number(window.localStorage.getItem("userId"))
      ) as any
    );
  }, []);

  return (
    <Container mt={"100px"} w={"80%"} pl={0} pr={0}>
      <Flex gap={"32px"}>
        <Flex
          w={"50%"}
          borderRadius={"48px"}
          flexDirection={"column"}
          border={"1px solid #CBD5E0"}
          backgroundColor={"#F7FAFC"}
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
              <Text
                fontWeight={"bold"}
                color={"red.500"}
                fontSize={"16px"}
                mr={"3px"}
              >
                First name:
              </Text>
              <Text>{currentLoggedInUser.firstName}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text
                fontWeight={"bold"}
                color={"red.500"}
                fontSize={"16px"}
                mr={"3px"}
              >
                Last name:
              </Text>
              <Text>{currentLoggedInUser.lastName}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text
                fontWeight={"bold"}
                color={"red.500"}
                fontSize={"16px"}
                mr={"3px"}
              >
                Role:
              </Text>
              <Text>{currentLoggedInUser.role}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text
                fontWeight={"bold"}
                color={"red.500"}
                fontSize={"16px"}
                mr={"3px"}
              >
                Years of employement:
              </Text>
              <Text>{currentLoggedInUser.yearsOfEmployement}</Text>
            </Box>
            <Box p={2} display={"flex"}>
              <Text
                fontWeight={"bold"}
                color={"red.500"}
                fontSize={"16px"}
                mr={"3px"}
              >
                Email:
              </Text>
              <Text>{currentLoggedInUser.email}</Text>
            </Box>
          </Box>
        </Flex>
        <Flex w={"50%"} gap={"32px"} flexDirection={"column"}>
          <Box
            backgroundColor={"#F7FAFC"}
            border={"1px solid #CBD5E0"}
            p={"20px"}
            borderRadius={"16px"}
            as={motion.div}
            {...boxProps}
            whileTap={{ scale: 0.9 }}
          >
            <Text fontSize={"12px"} fontWeight={"bold"}>
              {`Your department is ${currentLoggedInUser.department.name}`}
            </Text>
            <Text
              as={motion.div}
              {...boxPropsLinks}
              whileTap={{ scale: 0.9 }}
              color={"red.500"}
              fontWeight={"bold"}
            >
              <Link to={"/my-department"}>Visit the department!</Link>
            </Text>
          </Box>
          <Box
            backgroundColor={"#F7FAFC"}
            border={"1px solid #CBD5E0"}
            p={"20px"}
            borderRadius={"16px"}
            as={motion.div}
            {...boxProps}
            whileTap={{ scale: 0.9 }}
          >
            <Text
              fontSize={"12px"}
              fontWeight={"bold"}
            >{`Your team is ${currentLoggedInUser.team.name}`}</Text>
            <Text
              as={motion.div}
              {...boxPropsLinks}
              whileTap={{ scale: 0.9 }}
              color={"red.500"}
              fontWeight={"bold"}
            >
              <Link to={"/my-team"}>Visit the team!</Link>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default UserProfile;
