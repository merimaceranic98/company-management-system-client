import { useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/auth-action";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(data: any) {
    dispatch(login(data) as any);
    navigate("/");
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
          w={"100%"}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;