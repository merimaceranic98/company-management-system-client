import { useEffect } from "react";
import { PieChart as ReactPieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Flex, Text, Center } from "@chakra-ui/react";

import { getNumberPerDifferentGender } from "../actions/genders-actions";

const GendersStatisticsPieChart = () => {
  const dispatch = useDispatch();
  const genders = useSelector((state: any) => state.genders.genders);

  useEffect(() => {
    dispatch(getNumberPerDifferentGender() as any);
  }, [dispatch]);

  return (
    <Container mt={100}>
      <Center>
        <Flex flexDirection={"column"} mb={5}>
          <Box flexDirection={"row"} display={"flex"}>
            <Text mr={2}>Number of male employees:</Text>
            <Text color={"red.500"} fontWeight={"bold"}>
              {genders[0]?.numberOfMale ? genders[0]?.numberOfMale : 0}
            </Text>
          </Box>
          <Box flexDirection={"row"} display={"flex"}>
            <Text mr={2}>Number of female employees:</Text>
            <Text color={"red.500"} fontWeight={"bold"}>
              {genders[0]?.numberOfFemale ? genders[0]?.numberOfFemale : 0}
            </Text>
          </Box>
        </Flex>
      </Center>
      <ReactPieChart
        style={{
          backgroundColor: "inherit",
          height: "400px",
          color: "red",
        }}
        lineWidth={50}
        animate={true}
        data={[
          {
            title: "Male",
            value: genders[0]?.numberOfMale ? genders[0]?.numberOfMale : 0,
            color: "#E53E3E",
          },
          {
            title: "Female",
            value: genders[0]?.numberOfFemale ? genders[0]?.numberOfFemale : 0,
            color: "#000",
          },
        ]}
      />
    </Container>
  );
};

export default GendersStatisticsPieChart;
