import { Books } from "@/modules/books/";

interface HomeProps {
  data: Book[];
}

export default function Home({ data }: HomeProps) {
  return <Books books={data} />;
}

Home.getInitialProps = async () => {
  try {
    const response = await fetch("http://localhost:3000/books");
    const data: Book[] = await response.json();
    return {
      data,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      data: [],
    };
  }
};
