import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  LOGGED_IN_DEFAULT_LAYOUT_ROUTES,
  LOGGED_OUT_NO_LAYOUT_ROUTES,
} from "./routing/routes";
import Header from "./features/header/Header";

function App() {
  const isLoggedIn = useSelector((state: any) => state.currentUser.isLoggedIn);

  return (
    <ChakraProvider>
      <Header />
      <Routes>
        {isLoggedIn
          ? LOGGED_IN_DEFAULT_LAYOUT_ROUTES.map((item) => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<item.element />}
                />
              );
            })
          : LOGGED_OUT_NO_LAYOUT_ROUTES.map((item) => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<item.element />}
                />
              );
            })}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
