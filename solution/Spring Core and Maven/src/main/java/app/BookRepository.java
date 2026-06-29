package app;

public class BookRepository {
    public void save() {
        System.out.println("[REPOSITORY] Saving book record to database...");
    }

    public void findAll() {
        System.out.println("[REPOSITORY] Fetching all book records from database...");
    }
}
