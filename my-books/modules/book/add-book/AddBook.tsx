import { Button, Card } from "@mantine/core";
import { useStyles } from "./AddBook.styles";
import { AddBookForm } from "./AddBookForm";
import { useState } from "react";

export function AddBook() {
  const { classes } = useStyles();
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      {show ? (
        <Card className={classes.card}>
          <Button
            style={{
              position: "absolute",
              top: 5,
              zIndex: 99,
              right: 5,
            }}
            compact
            variant="subtle"
            color="red"
            onClick={() => setShow(false)}
          >
            Hide
          </Button>
          <AddBookForm />
        </Card>
      ) : (
        <Button onClick={() => setShow(true)}>Add new book</Button>
      )}
    </>
  );
}
