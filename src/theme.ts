import { createTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";

const palette = createPalette({
  primary: {
    light: "#F5FFFA",
    main: "#00B17C",
  },
});

const typography = createTypography(palette, {
  fontFamily: "Vazir-FD-WOL",
  body1: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "19px",
  },
  body2: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "22px",
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "22px",
  },
});

const theme = createTheme({
  palette,
  typography,
  spacing: 8,

  props: {
    MuiButton: {
      disableElevation: true,
    },
  },

  overrides: {
    MuiButton: {
      root: {
        padding: 10,
      },
    },
    MuiTable: {
      root: {
        direction: "rtl",
      },
    },
    MuiTableCell: {
      root: {
        ...typography.body1,
      },
      head: {
        color: "white",
        backgroundColor: palette.primary.main,
        padding: 10,

        "&:first-child": {
          borderTopRightRadius: 5,
        },

        "&:last-child": {
          borderTopLeftRadius: 5,
        },
      },
    },
    MuiTableRow: {
      root: {
        backgroundColor: "white",

        "&:nth-of-type(odd)": {
          backgroundColor: palette.primary.light,
        },
      },
    },
  },
});

export default theme;
