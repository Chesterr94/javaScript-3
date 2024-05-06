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
if (typeof result === "number") {
    console.log ("Найменшее число из заданых это " + result);
  } else {
    console.log ("Вводите не равнозначные числа");
  }


