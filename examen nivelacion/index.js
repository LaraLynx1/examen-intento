const studentGrades = [20,15,49,60,80,100]

const turnIntoLetter.forEach(grade => {
    if(grade<=100 & grade>=90){return "A"}
    if(grade<=89 & grade>=80){return "B"}
    if(grade<=79 & grade>=70){return "C"}
    if(grade<=69 & grade>=60){return "D"}
    if(grade<60){return "F"}
}); 

const results = turnIntoLetter (studentGrades)
console.log(results)


