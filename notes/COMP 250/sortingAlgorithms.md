---
Course: 'COMP 250'
Subject: 'Computer Science'
LectureNumber: 5
---
# Sorting Algorithms
## Insertion sort
- Start with 2nd element is it greater or equal to previous, switch if so otherwise don't
- Worst case: Reverse order so you have to swap 1 + 2 + ... n-1 times.
  - That sum is (n-1)(n/2) from the formula n(n+1)/2 is all the natural numbers added from 1 to n
- Best case: Already sorted so you only do n swaps!

## Merge Sort
- 3 Parts: Divide, Conquer, Combine!
- **Divide:**
  - Divide n-element sequence to be sorted into two sets of n/2 elements each
- **Conquer:**
  - Sort the two subsequences recursively with MERGE SORT
- **Combine:**
  - Merge the sequences to get sorted array!
```java
MergeSort(A,p,r) //sort A[p..r] by divide & Conquer
if(p < r)
  q = (p+r/2) //middle
    MergeSort(A,p,q) //beginning to middle
    MergeSort(A,q+1,r) // middle to end
    Merge(A,p,q,r) //Combine array from start to middle to end
