---
Course: 'COMP 250'
Subject: 'Computer Science'
LectureNumber: 3
---
# Object Oriented Programming in Java

- This Operator: this instance!
- getters and setters...
- static = same for the class (no this)

## Inheritance
- Example, Can extend SportTeam to make it specific to certain sports
  - Can then override generic methods
- Super() calls constructor of superclass
- can also use super.(method call) to call methods in parent class
- If hockeyTeam is subtype of SportTeam we can do this...
  - SportTeam bruins = new HockeyTeam(), but can't do it other way around!

### Overloading vs Overriding
- Overloading = multiple methods in **SAME** class with **SAME** name, distinguished by different arguments, modifiers, return types.
- Overriding = methods with identical signatures but one in parent and other in child class! Therefore child class one is done for children.

### Exceptions
- try{} catch. finally. throw new exception...
- methods can throws exception. This means that the exception propagates to previous method call.
