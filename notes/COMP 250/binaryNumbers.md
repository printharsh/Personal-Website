---
Course: 'COMP 250'
Subject: 'Computer Science'
LectureNumber: 2
---
# Binary Numbers
## How to convert any base to decimal:
  - Number in Decimal = Sum, starting from i = 0 of: d[i] * b^i
  - Where:
    - **i** = digit # starting from the right (in 123, 3 would be digit 0)
    - **array d[]** = all of the digits example {1,0,0,1}
    - **b** = base, example 2 for binary.

## Operations on Decimals:
  - (int) division by 10 means dropping the rightmost digit
  - multiplying by 10 means shifting left by one digit
  - mod of 10 gives the rightmost digit
  - Knowing this...
    - The same operations can be done with binary but divide and mod by 2 instead!

### Decimal to Binary Algorithm:
```java
//m = number, b[] = digits, i = digit place from right
int i = 0;
while(m > 0){
  b[i] = m%2; //mods by 2 to get the digit!
  m = m/2;
  i = i++;
}

//Now array b[] has all the digits of the decimal number from right to left!
```

## Bounds for binary numbers of bits N
- Upper Bound: log base 2 of m + 1
- Lower Bound: log base 2 of m
- How many bits do we need?
  - The largest integer less than or equal to log base 2 m + 1, so that rounded down!

- Fixed size representation:
  - 8 bits is called a byte. 1 bit is either a 0 or a 1. (typically 8,16,32,64 ...)
  - 8 bit \#1 would be: 00000001, fixed size of 8 bits.
