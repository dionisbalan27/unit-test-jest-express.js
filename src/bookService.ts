import BookRepo from './bookRepo';
import Book from './bookModel';

class BookService {
    getBookDetail(bookId: number): Promise<Book | null> {
        return BookRepo.getBookDetail(bookId);
    }

    async removeBook(bookId: number): Promise<number> {
        const book = await BookRepo.getBookDetail(bookId);
        if (!book) {
            throw new Error('Book is not found');
        }
        return BookRepo.removeBook(bookId);
    }
}

export default new BookService();