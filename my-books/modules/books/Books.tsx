import { Container, Paper } from "@mantine/core";

import { useStyles } from "./Books.styles";
import { Book } from "@/modules/book";
import { AddBook } from "@/modules/book/add-book/AddBook";

interface BooksProps {
  books: Book[];
}

export function Books(props: BooksProps) {
  const { classes } = useStyles();
  const { books } = props;

  const booksList = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <Container my="md">
      <Container className={classes.container}>
        <AddBook />
        {booksList}
      </Container>
    </Container>
  );
}
