import { Container, Paper } from "@mantine/core";

import { useStyles } from "./Books.styles";
import { Book } from "@/modules/book";
import { AddBook } from "@/modules/book/add-book/AddBook";

export function Books() {
  const { classes } = useStyles();
  return (
    <Container my="md">
      <Container className={classes.container}>
        <AddBook />
        <Book />
        <Book />
        <Paper h={350} w={300} withBorder></Paper>
        <Paper h={350} w={300} withBorder></Paper>
        <Paper h={350} w={300} withBorder></Paper>
        <Paper h={350} w={300} withBorder></Paper>
      </Container>
    </Container>
  );
}
