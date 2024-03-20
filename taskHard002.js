let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');

const findMin = (a,b) => {
  if (a > b){
  return b;
  }if (a === b){
  return;
  }else{
  return a;
  }
}
const result = findMin(number1,number2);
  if (result === undefined) {
    console.log ("Вводите не равнозначные числа");
  } else {
    console.log ("Найменшее число из заданых это " + result);
  }


