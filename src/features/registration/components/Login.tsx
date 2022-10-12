import { useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { login } from "../actions/auth-action";
import Error from "../../error/component/Error";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();
  const isError = useSelector((state: any) => state.errors.error);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      setIsErrorModalOpen(true);
    }
    if (!isError && isSubmitButtonClicked) {
      navigate("/");
    }
  }, [isError]);

  function onSubmit(data: any) {
    dispatch(login(data) as any);
    setIsSubmitButtonClicked(true);
  }
  return (
    <Container
      mt={"100px"}
      border={"1px solid #2D3748"}
      p={4}
      borderRadius={"8px"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="name">Email</FormLabel>
          <Input
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Required field",
            })}
            mb={1}
          />
          <FormLabel htmlFor="name">Password</FormLabel>
          <Input
            id="password"
            placeholder="Password"
            type={"password"}
            {...register("password", {
              required: "Required field",
              minLength: { value: 4, message: "Minimum length should be 4!" },
            })}
            mb={1}
          />
        </FormControl>
        <Button
          mt={4}
          backgroundColor={"red.500"}
          _hover={{ backgroundColor: "red.500" }}
          _focus={{ backgroundColor: "red.500" }}
          isLoading={isSubmitting}
          type="submit"
          color={"white"}
          w={"100%"}
        >
          Login
        </Button>
      </form>
      {isError && (
        <Error
          isErrorModalOpen={isErrorModalOpen}
          setIsErrorModalOpen={setIsErrorModalOpen}
          setIsSubmitButtonClicked={setIsSubmitButtonClicked}
        />
      )}
    </Container>
  );
};

export default Login;
