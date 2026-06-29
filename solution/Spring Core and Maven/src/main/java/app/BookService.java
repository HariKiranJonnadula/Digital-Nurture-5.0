package app;


public class BookService {
    private BookRepository bookRepository;

    // Setter method for dependency injection (Exercise 2)
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("[SERVICE] BookRepository dependency injected via setter.");
        this.bookRepository = bookRepository;
    }

    public void registerBook() {
        System.out.println("[SERVICE] Registering a new book...");
        bookRepository.save();
    }

    public void listAvailableBooks() {
        System.out.println("[SERVICE] Listing all books...");
        bookRepository.findAll();
    }
}
