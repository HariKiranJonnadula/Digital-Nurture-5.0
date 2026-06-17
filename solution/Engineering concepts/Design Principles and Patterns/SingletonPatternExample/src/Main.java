
public class Main {
    public static void main(String[] args) {
        System.out.println("=== Testing Singleton Pattern (Logger) ===");

        // Get Logger instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Check if both instances are reference-equal
        if (logger1 == logger2) {
            System.out.println("SUCCESS: logger1 and logger2 refer to the exact same instance.");
        } else {
            System.out.println("FAILURE: logger1 and logger2 are different instances!");
        }

        // Test logging methods
        logger1.log("Application started.");
        logger2.log("Performing some business operation.");
        logger1.logError("A database timeout occurred (simulated).");

        // Concurrent/Multi-threaded test to verify thread-safety
        System.out.println("\nTesting Singleton thread-safety with concurrent access...");
        Runnable task = () -> {
            Logger threadLogger = Logger.getInstance();
            System.out.println("Thread " + Thread.currentThread().getName() + " got Logger instance hash: " + threadLogger.hashCode());
        };

        Thread t1 = new Thread(task, "Thread-1");
        Thread t2 = new Thread(task, "Thread-2");
        Thread t3 = new Thread(task, "Thread-3");

        t1.start();
        t2.start();
        t3.start();

        try {
            t1.join();
            t2.join();
            t3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("\n=== Singleton Test Completed ===");
    }
}
