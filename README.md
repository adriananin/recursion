# Recursive Functions and Merge Sort

## Recursive Functions

This repository contains a collection of recursive functions implemented in JavaScript. Recursive functions are functions that call themselves within their own definition. They can be used to solve various problems by breaking them down into smaller subproblems and solving each subproblem using the same function.

### Functions

1. `fibs(num, res = [], sum = 0)`: Generates the Fibonacci sequence up to the given number `num`. Returns an array containing the Fibonacci numbers.

2. `factorial(num, fac = 1)`: Calculates the factorial of the given number `num`. Returns the factorial value as an integer.

3. `sumRange(num, sum = 1, val)`: Calculates the sum of numbers from 1 to the given number `num`. Returns the sum as an integer.

4. `power(b, e, i = 0)`: Calculates the power of a base `b` raised to an exponent `e`. Returns the result as an integer.

5. `all(arr, cb, i)`: Checks if all elements in the array `arr` satisfy the condition specified by the callback function `cb`. Returns `true` if all elements pass the test; otherwise, returns `false`.

6. `productOfArray(arr, i = 0, prod = 1)`: Calculates the product of all elements in the array `arr`. Returns the product as an integer.

## Merge Sort

Merge Sort is a widely used comparison-based sorting algorithm that follows the divide-and-conquer approach. It divides the input array into two halves, recursively sorts each half, and then merges the two sorted halves to produce the final sorted output.

### Algorithm

1. **Divide**: Divide the unsorted array into two halves.
2. **Conquer**: Recursively sort each half separately using Merge Sort.
3. **Merge**: Merge the two sorted halves to create a single sorted array.

### Implementation

The provided JavaScript code demonstrates the implementation of the Merge Sort algorithm using a recursive approach. It consists of two main functions: `mergeSort` and `merge`.

### Usage

To use the provided Merge Sort implementation, follow these steps:

1. Copy the `mergeSort` and `merge` functions into your JavaScript project or file.
2. Create an unsorted array that you want to sort.
3. Call the `mergeSort` function, passing the unsorted array as an argument. The function will return the sorted array.

## Notes

- Recursive functions can be a powerful tool for solving problems, but they may lead to stack overflow errors if used with large input values. Exercise caution when dealing with large datasets.
- The provided implementation is for educational purposes and may not be optimized for performance. Depending on the specific use case, further optimization might be needed.
- Feel free to explore and use these functions in your projects or modify them to suit your requirements.
