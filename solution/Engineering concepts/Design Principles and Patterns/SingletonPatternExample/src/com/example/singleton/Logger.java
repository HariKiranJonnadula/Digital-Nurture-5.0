package com.example.singleton;

public class Logger {
    // Private static instance of the same class (volatile to ensure thread safety during double-checked locking)
    private static volatile Logger instance;

    // Private constructor to prevent instantiation from outside the class
    private Logger() {
        // Prevent instantiation via reflection
        if (instance != null) {
            throw new IllegalStateException("Logger instance already initialized. Use getInstance() instead.");
        }
    }

    // Public static method to get the single instance of the Logger class
    public static Logger getInstance() {
        if (instance == null) { // First check (no locking)
            synchronized (Logger.class) {
                if (instance == null) { // Second check (with locking)
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    // Logger methods to log messages
    public void log(String message) {
        System.out.println("[INFO] " + System.currentTimeMillis() + ": " + message);
    }

    public void logError(String errorMessage) {
        System.err.println("[ERROR] " + System.currentTimeMillis() + ": " + errorMessage);
    }
}
