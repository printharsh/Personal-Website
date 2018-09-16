---
Course: 'COMP 250'
Subject: 'Computer Science'
LectureNumber: 4
---
# Recursive Algorithms
- Have a base case and a recursive case.
  - base case: answered directly
  - recursive case: can be described in terms of smaller occurences of same problem

## binarySearch
- inputs: sorted array, starting index, ending index, number to find
- Recursive case:
  - Get middle index between two indices
  - Check if number @ middle index is greater or less than or equal to number we are finding
    - if greater then take middle index + 1 --> ending index
    - if smaller then take starting index --> middle index - 1
- Base Case:
  - if equal then return! OR if two indices are equal then the number was not found
  - if starting index is greater than ending index then number was also not found
    - happens when number we are trying to find is greater than or less than the extremes

## fibonacci numbers
- base cases:
  - Fib 0 = 0
  - Fib 1 = 1
- Recursive case
  - while n > 1 keep adding fib n-1 and fib n-2

### Note: RECURSION IS NOT ALWAYS EFFICIENT. FIBONACCI too many calls to fib0 and fib1
