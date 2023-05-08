
//   let p1 = getProduct();
//   console.log(p1);
//   */

//   //FUNCTION AS A STATEMENT
//   function greet(a,b){
//    let add = a+b;
   
//      console.log(add);
//    return add;
//   }

//   // invoke the function
//   greet(9,6);


//   function getproduct(){
//     let product1 = {
//         Id:3098,
//         Title:'royal blue set',
//         price:`KSH ${850} /=`
//     };

  
//   //console.log(product1);
//     return  product1;
//   }

//   let p1 =getproduct();
//   console.log(p1);


//   //lets see if f(x) declaration/statement can have objects passed into it
//    //create a function that changes the title of the boo
//    function updateName( product2){

//     product2.Title ='nimnbus 2000';
//     return product2;
//    }

   
//   //lets creat the product first
//   let product2 = {
//     Title: 'lord of the ring',
//     Id: `L${102}`,
//     Price: `KSH ${200} /=`
//   };

//   //lets call the f(x) and pass the prod key we wanna change
//   console.log(product2);//old name
//   let updated = updateName(product2);//gets updated
//   console.log(updated);//updated name

// //**********FUNCTION EXPRESSION**************** */
//   const add = function (num1,num2){
//     let sum = num1+ num2; 
//     return sum;
// }
// let res = add(8,9);
// console.log(`result of the cosnt function is -> ${res}`);

//normal func without args
// function myfunc1(){
//    console.log(2*4);
// }
// myfunc1();

// //normal func with args
// function myfunc2(x){
//    console.log(x*4);
// }
// myfunc2(7);

// //normal funct stored in a variablewith 2 args
// let myfunc3 = (x,y)=>{
//    console.log(x*y);
// }
//myfunc3(5,9);

// let array =[40,50,60];

// array.forEach(Element=>{
//  //  console.log(Element);
//    while (Element ===50){
//       console.log(Element*5);
//       break;
//    }
// })


let display =document.querySelector(".input");
let digits = Array.from(document.querySelectorAll(".numbers"));
//console.log(digits);


digits.forEach((digits)=>{
   digits.addEventListener("click", function(e){
      
      switch(e.target.innerText){
         case "C":
            display.value =" ";
            break;
         case "←":
            display.value = display.value.slice(0,-1);
            break;
         case "=":
            
            try{
                 let result = eval(display.value);
              display.value = result;
            }catch{ display.value ="ERROR!!";}
            break;
         case "ANS":
            display.value = result;
            break;
            default:
               display.value +=e.target.innerText;
      }
   })
})

