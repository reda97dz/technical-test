import {
  ActionIcon,
  Card,
  Flex,
  Group,
  Text,
  TextInput,
  Textarea,
  Title,
  Tooltip,
} from "@mantine/core";
import { useStyles } from "./Book.styles";
import { IconTrash } from "@tabler/icons-react";
import { useToggle } from "@mantine/hooks";

export function Book() {
  const { classes } = useStyles();
  const [editTitle, toggleEditTitle] = useToggle();
  const [editAuthor, toggleEditAuthor] = useToggle();

  return (
    <Card className={classes.card}>
      {editTitle ? (
        <Textarea
          autoFocus
          placeholder="Book Title"
          value="The Hitchhicker's Guide To The Galaxy"
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
            The Hitchhicker's Guide To The Galaxy
          </Title>
        </Tooltip.Floating>
      )}
      {editAuthor ? (
        <TextInput
          placeholder="Author"
          value="Douglas Adams"
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
            Douglas Adams
          </Title>
        </Tooltip.Floating>
      )}
      <Textarea my="sm" minRows={6} placeholder="Notes" />
      <Group position="apart">
        <Flex direction="column">
          <Text fz="sm" c="dimmed">
            Created at
          </Text>
          <Text fz="sm">09/11/2999</Text>
        </Flex>

        <ActionIcon color="red">
          <IconTrash size={18} />
        </ActionIcon>

        <Flex direction="column">
          <Text fz="sm" c="dimmed">
            Updated at
          </Text>
          <Text fz="sm">09/11/2999</Text>
        </Flex>
      </Group>
    </Card>
  );
}
