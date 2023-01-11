import Book from './bookModel';

class BookRepo {
    getBookDetail(bookID: number): Promise<Book | null> {
        return Book.findOne({
            where: {
                id: bookID
            }
        });
    }

    removeBook(bookID: number): Promise<number> {
        return Book.destroy({
            where: {
                id: bookID
            }
        });
    }
}

export default new BookRepo();