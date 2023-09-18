import { Button, Group, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

export function AddBookForm() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      title: "",
      author: "",
      note: "",
    },
  });

  type Form = typeof form.values;

  async function submitProject(values: Form) {
    const response = await fetch(`http://localhost:3000/books/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status === 201) {
      router.replace(router.asPath);
      form.reset();
    }
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
