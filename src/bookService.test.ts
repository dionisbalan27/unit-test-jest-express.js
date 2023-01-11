import BookService from './bookService';
import BookRepo from './bookRepo';

describe('BookService', () => {
    beforeEach(() =>{
        jest.resetAllMocks();
    });

    describe('BookService.__getBookDetail', () => {
        it('should return book detail', async () => {
            //arrange
            const bookID = 1;
            const mockResponse = {
                id: 1,
                title: 'ABC',
                author: 'John Doe',
                page: 1
            };

            BookRepo.getBookDetail = jest.fn().mockResolvedValue(mockResponse);

            //act
            const result = await BookService.getBookDetail(bookID);

            //assert
            expect(result).toEqual(mockResponse);
            expect(BookRepo.getBookDetail).toHaveBeenCalledTimes(1);
            expect(BookRepo.getBookDetail).toBeCalledWith(bookID);
        });
    });

    describe('BookService.__removeBook', () => {
        it('should return true remove book', async () => {
            //arrange
            const bookID = 2;
            const mockBookDetail = {
                id: 2,
                title: 'ABC',
                author: 'John Doe',
                page: 1
            };
            const mockResponse = true;

            BookRepo.getBookDetail = jest.fn().mockResolvedValue(mockBookDetail);
            BookRepo.removeBook = jest.fn().mockResolvedValue(mockResponse);

            //act
            const result = await BookService.removeBook(bookID);

            //assert
            expect(result).toEqual(mockResponse);

            // assert BookRepo.getBookDetail
            expect(BookRepo.getBookDetail).toHaveBeenCalledTimes(1);
            expect(BookRepo.getBookDetail).toBeCalledWith(bookID);

            //assert BookRepo.removeBook
            expect(BookRepo.removeBook).toHaveBeenCalledTimes(1);
            expect(BookRepo.removeBook).toBeCalledWith(bookID);
        });

        it('should throw error book is not found', () => {
            //arrange
            const bookID = 2;
            const mockBookDetail = null;
            const errorMessage = 'Book is not found';

            BookRepo.getBookDetail = jest.fn().mockResolvedValue(mockBookDetail);

            //act
            const result = BookService.removeBook(bookID);

            //assert
            expect(result).rejects.toThrowError(errorMessage);
            expect(BookRepo.getBookDetail).toHaveBeenCalledTimes(1);
            expect(BookRepo.getBookDetail).toBeCalledWith(bookID);
        });
    });
});