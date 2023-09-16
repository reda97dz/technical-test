import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto, EditBookDto } from './dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  getBooks() {
    return this.prisma.book.findMany({});
  }

  async createBook(dto: CreateBookDto) {
    const book = await this.prisma.book.create({
      data: dto,
    });
    return book;
  }

  async removeBook(bookId: number) {
    const book = await this.prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    await this.prisma.book.delete({
      where: {
        id: bookId,
      },
    });
  }

  async editBookById(bookId: number, dto: EditBookDto) {
    const book = await this.prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) throw new ForbiddenException('Access to resources denied');

    return this.prisma.book.update({
      where: {
        id: bookId,
      },
      data: {
        ...dto,
      },
    });
  }
}
