package com.example.forecast;

import java.util.HashMap;
import java.util.Map;

public class Forecasting {

    // Cache for memoization to store previously computed values for years
    private static final Map<Integer, Double> memoCache = new HashMap<>();

    /**
     * Calculates future value using a simple recursive approach.
     * Formula: FV = PV * (1 + rate)^years
     * Recursive relation: FV(years) = FV(years - 1) * (1 + rate)
     * 
     * Time Complexity: O(N) where N is the number of years.
     * Space Complexity: O(N) due to recursion stack depth.
     */
    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        // Base case: If years is 0, future value is the current value
        if (years == 0) {
            return currentValue;
        }
        
        // Recursive call: FV for (years) = FV for (years - 1) * (1 + growthRate)
        return calculateFutureValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    /**
     * Calculates future value using a memoized recursive approach.
     * This avoids recalculation of values when computing multiple times for same parameters.
     * Useful in complex scenarios (e.g., branching forecasts or dynamic growth rates).
     * 
     * Time Complexity: O(N) on first run, O(1) for cached queries.
     * Space Complexity: O(N) for cache storage and call stack.
     */
    public static double calculateFutureValueMemoized(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }

        if (memoCache.containsKey(years)) {
            return memoCache.get(years);
        }

        double result = calculateFutureValueMemoized(currentValue, growthRate, years - 1) * (1 + growthRate);
        memoCache.put(years, result);
        return result;
    }

    /**
     * Calculates future value iteratively.
     * This is the optimal solution as it prevents stack overflow for large inputs.
     * 
     * Time Complexity: O(N)
     * Space Complexity: O(1) - constant space.
     */
    public static double calculateFutureValueIterative(double currentValue, double growthRate, int years) {
        double futureValue = currentValue;
        for (int i = 0; i < years; i++) {
            futureValue *= (1 + growthRate);
        }
        return futureValue;
    }
}
