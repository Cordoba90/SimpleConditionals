let gradeNotes = prompt("Enter your score here ")

if (gradeNotes > 89 && gradeNotes <= 100 ) {
   console.log(`Your score is ${gradeNotes} , so your grade is A`)
} else if (gradeNotes > 69 && gradeNotes <= 89 ) {
   console.log(`Your score is ${gradeNotes} , so your grade is B`) 
} else if (gradeNotes > 59 && gradeNotes <= 69 ) {
   console.log(`Your score is ${gradeNotes} , so your grade is C`) 
} else if (gradeNotes > 49 && gradeNotes <= 59 ) {
   console.log(`Your score is ${gradeNotes} , so your grade is D`) 
} else if (gradeNotes >= 0 && gradeNotes <= 49 ) {
   console.log(`Your score is ${gradeNotes} , so your grade is F`)    
}  else {
  console.log("Yanlis Girdiniz")
} 
 gradeNotes > 89 && gradeNotes <=100 ? console.log(`Your score is ${gradeNotes} , so your grade is A`) : gradeNotes > 69 && gradeNotes <= 89  ?  console.log(`Your score is ${gradeNotes} , so your grade is B`) : gradeNotes > 59 && gradeNotes <= 69 ?
 console.log(`Your score is ${gradeNotes} , so your grade is C`) : gradeNotes > 49 && gradeNotes <= 59 ? console.log(`Your score is ${gradeNotes} , so your grade is D`) :
 gradeNotes >= 0 && gradeNotes <= 49 ? console.log(`Your score is ${gradeNotes} , so your grade is F`) :
 console.log("Yanlis Girdiniz")