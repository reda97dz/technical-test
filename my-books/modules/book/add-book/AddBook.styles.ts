import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    height: 370,
    width: 300,
    position: "relative",
    // ":active": {
    //   transform: "scale(0.98)",
    // },
    border: `1px solid ${theme.colors.indigo[1]}`,
    background: theme.colors.indigo[0],
  },
}));
