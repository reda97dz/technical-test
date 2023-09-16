import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 2fr))",
    gridGap: "2.5em",
    gridAutoFlow: "dense",
    padding: "1em",
    justifyItems: "center",
  },
}));
