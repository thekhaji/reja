//TASK: A
// function countLetter(letter, word){
//     let count = 0;
//     for(let i=0; i<word.length; i++){
//       if (word[i] === letter){
//         count+=1;
//       }
//     }
//     return count;
//   }
  
//   console.log(countLetter('e', 'engineer'));  

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", //20-30
//     "uzingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foyasi yoq", //60+
// ]

// function maslahatBering(age, callback){
//     if (typeof(age)!== 'number') callback("insert a number", null);
//     else if(age<=20) callback(null, list[0]);
//     else if(age>20 && age<=30) callback(null, list[1]);
//     else if(age>30 && age<=40) callback(null, list[2]);
//     else if(age>40 && age<=50) callback(null, list[3]);
//     else if(age>50 && age<=60) callback(null, list[4]);
//     else {
//         callback(null, list[5])
//         // setTimeout(function(){
//         //     callback(null, list[5])
//         // }, 5000);
//     }

// }

// console.log("passed 0");
// maslahatBering(65, (err, data)=>{
//     if(err) console.log("ERROR:", err);
//     console.log("javob:",data);
// });
// console.log("reached 1");

//Async

// async function maslahatBering(age){
//     if (typeof(age)!== 'number')throw new Error("insert a number");
//     else if(age<=20) return list[0];
//     else if(age>20 && age<=30) return list[1];
//     else if(age>30 && age<=40) return list[2];
//     else if(age>40 && age<=50) return list[3];
//     else if(age>50 && age<=60) return list[4];
//     else {
//             return list[5];
//     }

// }

// call via then && catch
// console.log("passed 0");
// maslahatBering(65)
//     .then((data) => {
//         console.log("javob:", data)
//     })
//     .catch((err)=>{
//         console.log("Error",err);
//     })
// console.log("reached 1");


//async & await
// async function run(){
//     let javob = await maslahatBering(20);
//     console.log("javob:", javob);
//     javob = await maslahatBering(30);
//     console.log("javob:", javob);
//     javob = await maslahatBering(45);
//     console.log("javob:", javob);
// }

// run();


//Task B

function countDigits(string){
    let count = 0;
    for(let i=0; i<string.length; i++){
        switch (string[i]){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                count+=1;
                break;          
        }
    }
    return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));