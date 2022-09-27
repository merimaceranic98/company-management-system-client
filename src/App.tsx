import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routing/routes";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        {ROUTES.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
