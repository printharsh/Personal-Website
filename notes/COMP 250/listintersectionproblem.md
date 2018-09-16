---
Course: 'COMP 250'
Subject: 'Computer Science'
LectureNumber: 6
---
### Solution 1 - Nested for loops **O(n^2) Brute Force**
*Note: The following code is written in JAVA for readability, would ideally want syntax highlighting with Pseudcode**
```java
//Input: 2 Arrays A and B. Elements are assumed distinct (No two students with same name)
//Output: The # of elements in A n B
int[] A; //Assume contains all students in A
int[] B; //Assume contains all students in B

int numOfStudents = 0;
for(int i = 0; i < A.length; i++){
  for(int j = 0; j < B.length; j++){
    if(A[i] == B[j]){
      numOfStudents++;
    }
  }
}

return numOfStudents;
```

### Solution 2 - Binary Search **O(log(n))** _Specifically log base 2, but will find it doesn't matter later on..._
```java
int numOfStudents = 0;
B = sort(B);

for(int i =0; i < A.length; i++){
  if(binarySearch(B, B.length, A[i])){
    numOfStudents++;
  }
}

return numOfStudents;

private void sort()
