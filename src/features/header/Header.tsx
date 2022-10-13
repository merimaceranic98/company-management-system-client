import { Box, Button, Center, Container, Text } from "@chakra-ui/react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { logout } from "../registration/actions/auth-action";
import { headerActiveLinkColor, headerLinkColor } from "../../constants";
import Error from "../error/component/Error";

const Header = () => {
  const isLoggedIn = useSelector((state: any) => state.currentUser.isLoggedIn);
  const isError = useSelector((state: any) => state.errors.error);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (isError) {
      setIsErrorModalOpen(true);
    }
  }, [isError]);

  const logoutUser = () => {
    dispatch(logout() as any);
    if (!isError) {
      navigate("/");
    }
  };

  return (
    <Container maxW={"100%"} position={"fixed"} zIndex={2} top={0} p={4} mb={3}>
      <Center
        display={"flex"}
        w={"80%"}
        m={"0 auto"}
        justifyContent={"space-between"}
      >
        <Link to={"/"}>
          <Text
            backgroundColor={"gray.50"}
            border={"1px solid #CBD5E0"}
            p={1}
            borderRadius={"8px"}
            color={
              location.pathname === "/"
                ? headerActiveLinkColor
                : headerLinkColor
            }
            fontSize={"14px"}
            fontWeight={"medium"}
          >
            CompanySY
          </Text>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to={"/statistics"}>
              <Text
                backgroundColor={"gray.50"}
                border={"1px solid #CBD5E0"}
                p={1}
                borderRadius={"8px"}
                color={
                  location.pathname === "/statistics"
                    ? headerActiveLinkColor
                    : headerLinkColor
                }
                fontSize={"14px"}
                fontWeight={"medium"}
              >
                Statistics
              </Text>
            </Link>
            <Link to={"/all-departments"}>
              <Text
                backgroundColor={"gray.50"}
                border={"1px solid #CBD5E0"}
                p={1}
                borderRadius={"8px"}
                color={
                  location.pathname === "/all-departments"
                    ? headerActiveLinkColor
                    : headerLinkColor
                }
                fontSize={"14px"}
                fontWeight={"medium"}
              >
                Departments
              </Text>
            </Link>
            <Link to={"/my-department"}>
              <Text
                backgroundColor={"gray.50"}
                border={"1px solid #CBD5E0"}
                p={1}
                borderRadius={"8px"}
                color={
                  location.pathname === "/my-department"
                    ? headerActiveLinkColor
                    : headerLinkColor
                }
                fontSize={"14px"}
                fontWeight={"medium"}
              >
                My Department
              </Text>
            </Link>
            <Link to={"/all-teams"}>
              <Text
                backgroundColor={"gray.50"}
                border={"1px solid #CBD5E0"}
                p={1}
                borderRadius={"8px"}
                color={
                  location.pathname === "/all-teams"
                    ? headerActiveLinkColor
                    : headerLinkColor
                }
                fontSize={"14px"}
                fontWeight={"medium"}
              >
                All Teams
              </Text>
            </Link>
            <Link to={"/my-team"}>
              <Text
                fontSize={"14px"}
                fontWeight={"medium"}
                backgroundColor={"gray.50"}
                border={"1px solid #CBD5E0"}
                p={1}
                borderRadius={"8px"}
                color={
                  location.pathname === "/my-team"
                    ? headerActiveLinkColor
                    : headerLinkColor
                }
              >
                My Team
              </Text>
            </Link>
            <Link to={"/my-profile"}>
              <Text
                backgroundColor={"gray.50"}
                border={"1px solid #CBD5E0"}
                p={1}
                borderRadius={"8px"}
                fontSize={"14px"}
                fontWeight={"medium"}
                color={
                  location.pathname === "/my-profile"
                    ? headerActiveLinkColor
                    : headerLinkColor
                }
              >
                My Profile
              </Text>
            </Link>
            <Button
              backgroundColor={"red.500"}
              color={"white"}
              _hover={{ backgroundColor: "red.500" }}
              _focus={{ backgroundColor: "red.500" }}
              size={"sm"}
              onClick={() => logoutUser()}
            >
              Log out
            </Button>
          </>
        ) : (
          <Box>
            <Link to={"/register"}>
              <Button
                backgroundColor={"red.500"}
                _hover={{ backgroundColor: "red.500" }}
                _focus={{ backgroundColor: "red.500" }}
                size={"sm"}
                color={"white"}
                mr={2}
              >
                Register
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button
                backgroundColor={"red.500"}
                _hover={{ backgroundColor: "red.500" }}
                _focus={{ backgroundColor: "red.500" }}
                size={"sm"}
                color={"white"}
              >
                Login
              </Button>
            </Link>
          </Box>
        )}
      </Center>
      {isError && (
        <Error
          isErrorModalOpen={isErrorModalOpen}
          setIsErrorModalOpen={setIsErrorModalOpen}
          setIsSubmitButtonClicked={() => {
            return false;
          }}
        />
      )}
    </Container>
  );
};

export default Header;
