package app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        System.out.println("=== Testing SLF4J + Logback Logging ===");

        // 1. Exercise 1: Logging basic error and warning messages
        logger.error("This is an error message (simulating database connection failure).");
        logger.warn("This is a warning message (simulating low disk space warning).");

        // 2. Exercise 2: Parameterized Logging
        String username = "JohnDoe";
        int loginAttempts = 3;
        logger.info("User {} attempted login. Total failed attempts: {}", username, loginAttempts);

        // 3. Information and debug logs (since root level is DEBUG, these will show up in both Console and app.log)
        logger.info("Application initialized successfully.");
        logger.debug("Debugging values: count=42, status=active, code=xyz");

        System.out.println("=== Logging Test Completed ===");
    }
}
