package com.example.search;

public class SearchAlgorithms {

    /**
     * Performs a Linear Search to find a product by productId.
     * Time Complexity:
     * - Best Case: O(1) - Product is at the first index.
     * - Average Case: O(N) - Product is in the middle.
     * - Worst Case: O(N) - Product is at the last index or not present.
     * Space Complexity: O(1) - Iterative search using constant extra space.
     */
    public static Product linearSearch(Product[] products, String targetId) {
        for (Product product : products) {
            if (product.getProductId().equals(targetId)) {
                return product;
            }
        }
        return null; // Not found
    }

    /**
     * Performs a Binary Search to find a product by productId.
     * Note: The products array MUST be sorted by productId beforehand.
     * Time Complexity:
     * - Best Case: O(1) - Product is at the middle element.
     * - Average Case: O(log N) - Divide and conquer search.
     * - Worst Case: O(log N) - Product is at the leaf level or not present.
     * Space Complexity: O(1) - Iterative binary search.
     */
    public static Product binarySearch(Product[] products, String targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].getProductId().compareTo(targetId);

            if (comparison == 0) {
                return products[mid]; // Found
            } else if (comparison < 0) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
        return null; // Not found
    }
}
