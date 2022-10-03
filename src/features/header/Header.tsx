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
        <Text>CompanySY</Text>
        <Text>Statistics</Text>
        {isLoggedIn ? (
          <>
            <Link to={"/all-departments"}>
              <Text
                color={
                  location.pathname === "/all-departments"
                    ? headerActiveLinkColor
                    : headerLinkColor
                }
              >
                Departments
              </Text>
            </Link>
            <Text>My Department</Text>
            <Text>All Teams</Text>
            <Text>My Team</Text>
            <Text>My Profile</Text>
            <Button
              backgroundColor={"red.500"}
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
            <Link to={"/"}>
              <Button
                backgroundColor={"red.500"}
                _hover={{ backgroundColor: "red.500" }}
                _focus={{ backgroundColor: "red.500" }}
                size={"sm"}
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
