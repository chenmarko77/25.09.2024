// let i = 0
// while (i<50) {
//     i++
//     console.log(`ЦЕ моє ${i} віджиманя`)
//   }

// let password = '';
// do {
//   password = prompt('Введіть пароль довше 4-х символів', '');
// } while (password.length < 5);


// console.log('Ввели пароль: ', password);

// let i = 0

// do {
//     i++
//       console.log(`ЦЕ моє ${i} віджиманя`)
//   }  while (i<50) 

      
    // for (let index = 1; index <= 50; index++) {
    //     console.log(`ЦЕ мій ${index} 00$`)

    // }

    // for (let Math = 0; Math < 11; Math++) {
    //     console.log(`5 * ${Math} = ${ 5 * Math}`);    
    // }

    // for (let i = 1; i <= 50; i += 1) {
    //     console.log(`Це моє ${i} віджимання`)
    //     if (i === 25) {
    //         break;
    //     }
    // }

    // const number = 20;
    // for (let i = 1; i < number; i += 1) {
    //   if (i === 6) {
    //     continue;
    //   }
    //   else if (i === 11) {
    //     continue;
    //   }
    //   else if (i === 19) {
    //     continue;
    //   }
    //   console.log(`Це моє ${i} віджимання`);
    // }








//     let i = 0
// while (i<5) {
//     i++
//     console.log(`ЦЕ моє ${i} віджиманя`)
//   }

// let i = 0

// do {
//     i++
//       console.log(`ЦЕ моє ${i} віджиманя`)
//   }  while (i<5) 

// for (let number = 1; number < 6; number++) {
//     console.log(`Число ${number}`);
// }

// let num = 3;
//         while (num) {
//             console.log(num);
//             num -= 1;
//         }

        // for (let number = 0; number < 5; number++) {
        //     console.log(`Число ${number}`);
        // }

//         let number = 0
// while (number<5) {
//     number++
//     console.log(`Число ${number}`)
//   }


// let s = Number(prompt('enter average score'))

// for (let index = 0; index < 1000000; index++) {
// let s = Number(prompt('enter average score'))
// if (s < 7) {
//     break
// } 
// }



// for (let index = 0; index < 1000; index++) {
//     if (index % 2 !== 0) {
//         console.log(index);
        
//     }
    
// }


// TASK1
//         let num = Number(prompt('Enter number > 100')) 
// while (num<=100) { 
//     num = Number(prompt('Enter number > 100')) 
// console.log(num); 
//          }

// TASK2
 
// let totalSalary = 0 
// let employees = Number(prompt('Enter number of employees')) 
// for (let index = 0; index < employees; index++) { 
//     totalSalary = totalSalary + (Math.floor(Math.random() * (1000 - 500 + 1)) + 500); 
// } 
// alert(`Total salary = ${totalSalary}`)



 // TASK3
let min = Number(prompt('Enter min number')) 
let max = Number(prompt('Enter max number')) 
let sum = 0 
for (let index = min; index <= max; index++){ 
   if (index % 2 == 0){ 
    sum=sum+index 
   } 
} 
alert(`Sum of odd numbers in range from ${min} till ${max} = ${sum}`)