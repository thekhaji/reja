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

const e = require("express");

  
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

// // call via then && catch
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

// function countDigits(string){
//     let count = 0;
//     for(let i=0; i<string.length; i++){
//         switch (string[i]){
//             case '1':
//             case '2':
//             case '3':
//             case '4':
//             case '5':
//             case '6':
//             case '7':
//             case '8':
//             case '9':
//             case '0':
//                 count+=1;
//                 break;          
//         }
//     }
//     return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));


// TASK C
// let time = new Date();

// class Shop{
//     non;
//     lagmon;
//     cola;
//     constructor(newNon, newLagmon, newCola){
//         this.non = newNon;
//         this.lagmon = newLagmon;
//         this.cola = newCola;
//     }

//     qoldiq(){
//         console.log(`hozir ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
//         //console.log("hozir " + time.getHours() +":"+time.getMinutes()+":"+time.getSeconds());
//         console.log(this.non+"ta non,"+this.lagmon+"ta lagmon va "+this.cola+"ta cola mavjud!");
//         // console.log(`${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cole mavjud!`);
//     }
//     sotish(product, quantity){
//         if(product == 'non')
//             this.non -= quantity;
//         else if(product == 'lagmon')
//             this.lagmon -= quantity;
//         else if(product == 'cola')
//             this.cola -= quantity;
//         else
//             console.log("this product is not availabe");
//     }
//     qabul(product, quantity){
//         if(product == 'non')
//             this.non += quantity;
//         else if(product == 'lagmon')
//             this.lagmon += quantity;
//         else if(product == 'cola')
//             this.cola += quantity;
//         else
//             console.log("this type of product is not availabe");
//     }

// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish('non', 3);
// shop.qoldiq();
// shop.qabul('cola', 4);
// shop.qoldiq();

//TASK-D

// function checkContent(firstWord, secondWord){
//     let flag = false; 
//     if (firstWord.length == secondWord.length){
//         flag = true;
//         for(let i = 0; i<firstWord.length; i++){
//             if(secondWord.includes(firstWord[i])){
//                 secondWord.replace(firstWord[i],"")
//             }
//             else{
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     return flag;
// }

// console.log(checkContent("ffalse", "eslfaf"));


//TASK-E

// function getReverse(word){
//     let reversedWord = '';
//     for(let i = word.length - 1; i>=0; i--){
//         reversedWord += word[i];
//     }
//     return reversedWord;
// }

// console.log(getReverse("MIT12"));

function findDoublers(word){
    for(let i=0; i<word.length; i++){
        for(let m=0; m<word.length; m++){
            if(i===m)
                continue;
            else if(word[i] === word[m]){
                return true;
            }
        }
    }
    return false;
}

console.log(findDoublers("Timur"));