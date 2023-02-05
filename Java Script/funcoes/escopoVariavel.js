
// var a = 1;

// function f1(){
//     let b = 2;
//     console.log("f1() - a: ", a)
//     console.log("f1() - b: ", b)
// }

// function f2(){
//     console.log("f2() - a: ", a)
//     console.log("f2() - b: ", b)
// }

// f1();
// f2();

// console.log("a: ", a)
// console.log("b: ", b)


// const q = (n) => n * n;
// const result = q(4)
// console.log(result)
// console.log(q(4))

//   function leitura() {
//     x = -1;
//     while (x <= 0)
//       x = ("Digite um valor: ");
//     return x;
//   }

//   const result = leitura() 
//   console.log(result)

var x = 10;
var y = 20;

function troca() {
  var aux = x;
  x = y;
  y = aux;
}

troca();
console.log("x =", x, "e y =", y);