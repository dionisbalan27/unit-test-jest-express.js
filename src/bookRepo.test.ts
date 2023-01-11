import BookRepo from './bookRepo';
import Book from './bookModel';

describe('BookRepo', () => {
    beforeEach(() =>{
        jest.resetAllMocks();
    });

    describe('BookRepo.__getBookDetail', () => {
        it('should return book detail', async () => {
            //arrange
            const bookID = 1;
            const mockResponse = {
                id: 1,
                title: 'ABC',
                author: 'John Doe',
                page: 1
            }

            Book.findOne = jest.fn().mockResolvedValue(mockResponse);

            //act
            const result = await BookRepo.getBookDetail(bookID);

            //assert
            expect(result).toEqual(mockResponse);
            expect(Book.findOne).toHaveBeenCalledTimes(1);
            expect(Book.findOne).toBeCalledWith({
                where: {
                    id: bookID
                }
            });
        });
    });

    describe('BookRepo.__removeBook', () => {
        it('should return true remove book', async () => {
            //arrange
            const bookID = 1;
            const mockResponse = true;

            Book.destroy = jest.fn().mockResolvedValue(mockResponse);

            //act
            const result = await BookRepo.removeBook(bookID);

            //assert
            expect(result).toEqual(mockResponse);
            expect(Book.destroy).toHaveBeenCalledTimes(1);
            expect(Book.destroy).toBeCalledWith({
                where: {
                    id: bookID
                }
            });
        });
    });
});