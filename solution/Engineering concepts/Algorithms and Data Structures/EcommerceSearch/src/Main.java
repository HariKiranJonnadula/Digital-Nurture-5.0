import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Testing E-commerce Platform Search Function ===");

        // 1. Initialize product array
        Product[] products = {
            new Product("P105", "Wireless Mouse", "Electronics"),
            new Product("P101", "Mechanical Keyboard", "Electronics"),
            new Product("P108", "Office Chair", "Furniture"),
            new Product("P103", "USB-C Hub", "Electronics"),
            new Product("P102", "Monitor Stand", "Office Supplies"),
            new Product("P107", "Leather Journal", "Stationery"),
            new Product("P104", "Water Bottle", "Fitness"),
            new Product("P106", "Desk Lamp", "Furniture")
        };

        String targetId = "P106";
        System.out.println("Searching for Product ID: " + targetId);

        // 2. Perform Linear Search (unsorted array is fine)
        System.out.println("\n--- Testing Linear Search ---");
        Product resultLinear = SearchAlgorithms.linearSearch(products, targetId);
        System.out.println("Result: " + resultLinear);

        // 3. Sort array by productId for Binary Search
        System.out.println("\nSorting product array for Binary Search...");
        Arrays.sort(products);
        System.out.println("Sorted products:");
        for (Product p : products) {
            System.out.println("  " + p);
        }

        // 4. Perform Binary Search (must be sorted array)
        System.out.println("\n--- Testing Binary Search ---");
        Product resultBinary = SearchAlgorithms.binarySearch(products, targetId);
        System.out.println("Result: " + resultBinary);

        // 5. Compare & Analysis
        System.out.println("\n--- Time Complexity Comparison ---");
        System.out.println("Linear Search: Worst-case O(N) because it checks elements one by one.");
        System.out.println("Binary Search: Worst-case O(log N) because it halves the search space each step.");
        System.out.println("Recommendation: Binary Search is much faster for large lists, but requires sorting, which takes O(N log N). Use Binary Search when lookups are frequent relative to modifications.");

        System.out.println("\n=== Search Test Completed ===");
    }
}
