import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Container mt={"3rem"} maxW={"auto"}>
      <Center display={"flex"} flexDirection={"column"} mt={"200px"}>
        <Flex alignItems={"center"} mb={10}>
          <Box fontSize={"24px"} mr={"3px"}>
            Build your products with
          </Box>
          <Box fontWeight={"bold"} fontSize={"24px"} color={"red.500"}>
            CompanySY
          </Box>
        </Flex>
        <Flex flexDirection={"row"} display={"flex"}>
          <Text mr={"3px"} fontSize={"32px"}>
            We are CompanySY with millions of
          </Text>
          <Text fontSize={"32px"}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("ideas.")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("solutions.")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("stories.")
                  .start();
              }}
            />
          </Text>
        </Flex>
      </Center>
    </Container>
  );
};
export default Home;
