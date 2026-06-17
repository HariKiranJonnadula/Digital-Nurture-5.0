package com.example.forecast;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Testing Financial Forecasting ===");

        double presentValue = 1000.0; // Starting investment of $1000
        double growthRate = 0.05;     // 5% annual growth rate
        int years = 10;               // Forecast for 10 years

        System.out.println("Present Value: $" + presentValue);
        System.out.println("Annual Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Forecast Period: " + years + " years\n");

        // 1. Standard Recursive Calculation
        System.out.println("--- Recursive Calculation ---");
        long startTime = System.nanoTime();
        double futureValueRecursive = Forecasting.calculateFutureValue(presentValue, growthRate, years);
        long endTime = System.nanoTime();
        System.out.printf("Future Value (Recursive): $%.2f\n", futureValueRecursive);
        System.out.println("Execution Time: " + (endTime - startTime) + " ns");

        // 2. Memoized Recursive Calculation
        System.out.println("\n--- Memoized Recursive Calculation ---");
        startTime = System.nanoTime();
        double futureValueMemo = Forecasting.calculateFutureValueMemoized(presentValue, growthRate, years);
        endTime = System.nanoTime();
        System.out.printf("Future Value (Memoized): $%.2f\n", futureValueMemo);
        System.out.println("Execution Time: " + (endTime - startTime) + " ns");

        // 3. Iterative Calculation
        System.out.println("\n--- Iterative Calculation (Optimized) ---");
        startTime = System.nanoTime();
        double futureValueIterative = Forecasting.calculateFutureValueIterative(presentValue, growthRate, years);
        endTime = System.nanoTime();
        System.out.printf("Future Value (Iterative): $%.2f\n", futureValueIterative);
        System.out.println("Execution Time: " + (endTime - startTime) + " ns");

        // 4. Yearly breakdown to show progression
        System.out.println("\n--- Yearly Forecast Breakdown ---");
        for (int i = 0; i <= years; i++) {
            double value = Forecasting.calculateFutureValueIterative(presentValue, growthRate, i);
            System.out.printf("Year %2d: $%.2f\n", i, value);
        }

        // 5. Analysis
        System.out.println("\n--- Complexity & Optimization Analysis ---");
        System.out.println("1. Time Complexity: All implementations run in O(Y) time, where Y is the number of years.");
        System.out.println("2. Space Complexity: ");
        System.out.println("   - Standard Recursive: O(Y) stack space due to recursive call stack.");
        System.out.println("   - Iterative: O(1) space, avoiding call stack overhead entirely.");
        System.out.println("3. Risk: For extremely large forecast periods (e.g. thousands of years), standard recursion can throw a StackOverflowError.");
        System.out.println("4. Optimization: Iteration is highly preferred here because the problem has linear state transition. Memoization or dynamic programming is useful if rates fluctuate dynamic/stochastically or branches exist (e.g., Monte Carlo simulations).");

        System.out.println("\n=== Forecasting Test Completed ===");
    }
}
