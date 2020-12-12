interface PaletteInterface {
  primary: string;
  black: ColorInterface;
}

interface ColorInterface {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
}

declare global {
  interface Theme {
    palette: PaletteInterface;
  }
}

const colors = {
  black: {
    900: "#212121",
    800: "#424242",
    700: "#616161",
    600: "#757575",
    500: "#9e9e9e",
    400: "#bdbdbd",
    300: "#e0e0e0",
    200: "#eeeeee",
    100: "#f5f5f5",
    50: "#fafafa",
  },
};

const theme: Theme = {
  palette: {
    primary: colors.black[900],
    black: colors.black,
  },
};

export default theme;
