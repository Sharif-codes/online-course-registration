# 1. Features of The Project


- Show all the courses in cards by mentioning cover image, course name, details, price and credit.
- Select Courses and add to the course List (Cart).
- User cannot take same course again.
- User cannot take more than 20 credit and thus it will show a warning.


# 2. State Management

I have used useState hook for state management. In usesState hook there are one variable to hold the current state value and one function for updating the state.
In this React Project total five state has been declared. Out of them four states have been in the App.jsx component and one state in the Card.jsx component.

### In App component:
From Cards components four props has been passed: course, addCredit, price, remaining. Each of the state are handled by useState Hook. for the numbers initial value taken as 0 and for the object taken as an Empty array

### In Cards Component:

All the courses data comes from the Fake Api or the 'Course.json' fetched and stored in to the card state variable by updating the state by using the setCourse function. The initial state value taken as an empty array.