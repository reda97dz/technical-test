import {
  ActionIcon,
  Card,
  Flex,
  Group,
  Menu,
  Text,
  TextInput,
  Textarea,
  Title,
  Tooltip,
} from "@mantine/core";
import { useStyles } from "./Book.styles";
import { IconTrash } from "@tabler/icons-react";
import { useDebouncedValue, useDidUpdate, useToggle } from "@mantine/hooks";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";

interface BookProps {
  book: Book;
}

export function Book(props: BookProps) {
  const router = useRouter();
  const { classes } = useStyles();
  const { book } = props;
  const [editTitle, toggleEditTitle] = useToggle();
  const [editAuthor, toggleEditAuthor] = useToggle();

  const [title, setTitle] = useState(book.title);
  const [debouncedTitle] = useDebouncedValue(title, 300);

  const [author, setAuthor] = useState(book.author);
  const [debouncedAuthor] = useDebouncedValue(author, 300);

  const [note, setNote] = useState(book.note ?? "");
  const [debouncedNote] = useDebouncedValue(note, 300);

  const updateBook = async (data: EditBook) => {
    const response = await fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useDidUpdate(() => {
    updateBook({
      author: debouncedAuthor,
      title: debouncedTitle,
      note: debouncedNote,
    });
  }, [debouncedTitle, debouncedAuthor, debouncedNote]);

  const deleteBook = async () => {
    const res = await fetch(`http://localhost:3000/books/${book.id}`, {
      method: "DELETE",
    });

    if (res.status === 200) router.replace(router.asPath);
  };

  return (
    <Card className={classes.card}>
      {editTitle ? (
        <Textarea
          autoFocus
          placeholder={"Book Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          styles={{
            wrapper: {
              minHeight: 58,
            },
            input: {
              whiteSpace: "pre-wrap",
              border: "none",
              lineHeight: 1.45,
              background: "transparent",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "black",
              padding: 0,
              paddingTop: "0 !important",
              paddingBottom: "0 !important",
            },
          }}
        />
      ) : (
        <Tooltip.Floating label="Click to edit the title" color="gray">
          <Title
            size="h4"
            mih={58}
            onClick={() => {
              toggleEditTitle();
              if (editAuthor) toggleEditAuthor();
            }}
            style={{ userSelect: "none" }}
          >
            {title}
          </Title>
        </Tooltip.Floating>
      )}
      {editAuthor ? (
        <TextInput
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          my="sm"
          required
          styles={{
            input: {
              border: "none",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: 1.45,
              fontWeight: 700,
              color: "#4c6ef5",
              padding: 0,
              paddingTop: "0 !important",
              paddingBottom: "0 !important",
            },
          }}
        />
      ) : (
        <Tooltip.Floating label="Click to edit the author" color="gray">
          <Title
            size="h6"
            color="indigo"
            my="lg"
            onClick={() => {
              toggleEditAuthor();
              if (editTitle) toggleEditTitle();
            }}
            style={{ userSelect: "none" }}
          >
            {author}
          </Title>
        </Tooltip.Floating>
      )}
      <Textarea
        my="sm"
        minRows={6}
        placeholder="Notes"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <Group position="apart">
        <Flex direction="column">
          <Text fz="sm" c="dimmed">
            Created at
          </Text>
          <Text fz="sm">{dayjs(book.createdAt).format("DD/MM/YYYY")}</Text>
        </Flex>

        <Menu>
          <Menu.Target>
            <ActionIcon color="red">
              <IconTrash size={18} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item color="red" onClick={deleteBook}>
              Delete book
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Flex direction="column">
          <Text fz="sm" c="dimmed">
            Updated at
          </Text>
          <Text fz="sm">{dayjs(book.updatedAt).format("DD/MM/YYYY")}</Text>
        </Flex>
      </Group>
    </Card>
  );
}
