import { Button, Group, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";

export function AddBookForm() {
  const form = useForm({
    initialValues: {
      title: "",
      author: "",
      note: "",
    },
  });

  type Form = typeof form.values;

  function submitProject(values: Form) {
    console.log(values);
  }

  return (
    <form onSubmit={form.onSubmit(submitProject)}>
      <TextInput
        autoFocus
        placeholder="Book Title*"
        required
        {...form.getInputProps("title")}
        styles={{
          wrapper: {
            minHeight: 58,
          },
          input: {
            border: "none",
            background: "transparent",
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "black",
            padding: 0,
          },
        }}
      />
      <TextInput
        placeholder="Author*"
        required
        my="sm"
        {...form.getInputProps("author")}
        styles={{
          input: {
            border: "none",
            background: "transparent",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "#4c6ef5",
            padding: 0,
          },
        }}
      />
      <Textarea
        my="xs"
        placeholder="Any notes in mind?"
        {...form.getInputProps("note")}
        minRows={6}
      />
      <Group position="center">
        <Button type="submit" mt="xs">
          Add
        </Button>
      </Group>
    </form>
  );
}
