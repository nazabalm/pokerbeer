import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import theme from "../src/theme";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
