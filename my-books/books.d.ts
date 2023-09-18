interface Book {
  id: number;
  title: string;
  author: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
  userId: number | null;
}

interface EditBook {
  title?: string;
  author?: string;
  note?: string;
}
