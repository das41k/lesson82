console.log('Задание 1')
function helloPeople(name) {
  return "Hello, " + name
}
const myName = "Dima"
console.log(helloPeople(myName))

console.log('Задание 3')
function calculator(number1,number2,operator) {
  if (operator == "minus") {
    return number1 - number2
  } else if (operator == "plus") {
    return number1 + number2
  } else if (operator == "multiply") {
    return number1 * number2
  } else if (operator == "del") {
    return number1 / number2
  } else {
    return "Некоректная операция, используйте plus,minus,del,multiply"
  } 
}
const a = 10
const b = 5
oper = 'multiply'
console.log(calculator(a,b,oper))

console.log('Задание 2')
function elitMass(array) {
  let str = ''
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      str += array[i] + ' '
    }
  }
  return str
}
let arr = [0,23,45,23,65,2,4,5,1]
console.log(elitMass(arr))