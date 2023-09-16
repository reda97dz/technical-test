import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    height: 370,
    width: 300,
    cursor: "pointer",
    // ":active": {
    //   transform: "scale(0.998)",
    // },
    border: `1px solid ${theme.colors.teal[0]}`,
    backgroundImage: theme.fn.linearGradient(
      45,
      theme.colors.teal[0],
      theme.colors.red[0]
    ),
  },
}));
