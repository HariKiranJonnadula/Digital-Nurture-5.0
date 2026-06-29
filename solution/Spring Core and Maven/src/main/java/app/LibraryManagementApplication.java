package app;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("=== Starting Library Management Application (Spring XML Context) ===");

        // Load applicationContext.xml from classpath (Exercise 1)
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve bookService bean (Exercise 2)
        BookService service = context.getBean("bookService", BookService.class);

        // Verify bean operations
        service.registerBook();
        service.listAvailableBooks();

        System.out.println("=== Library Management Application Completed Successfully ===");
    }
}
