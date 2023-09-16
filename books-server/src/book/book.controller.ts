import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, EditBookDto } from './dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getBooks() {
    return this.bookService.getBooks();
  }

  @Post()
  createCar(@Body() dto: CreateBookDto) {
    return this.bookService.createBook(dto);
  }

  @Patch(':id')
  editCarById(
    @Param('id', ParseIntPipe) bookId: number,
    @Body() dto: EditBookDto,
  ) {
    return this.bookService.editBookById(bookId, dto);
  }

  @Delete(':id')
  removeBook(@Param('id', ParseIntPipe) bookId: number) {
    this.bookService.removeBook(bookId);
  }
}
