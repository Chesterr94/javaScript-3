
let cash = +prompt('Введите сумму для конвертации в гривну');

if (isNaN(cash)){ 
console.log('Введите числовую сумму')
}

let currencyCheck = prompt("Введите вашу валюту, евро или доллар");

if (currencyCheck === "евро"){
  const getCurrencyConversion = money => {
    let euroСoefficient = 42;
    return money * euroСoefficient;
  }
  console.log(getCurrencyConversion(cash) + " - гривен при конвертации с евро");
} else  if (currencyCheck === "доллар"){
    const getCurrencyConversion = money => {
      let euroСoefficient = 38;
      return money * euroСoefficient;
    }
  console.log(getCurrencyConversion(cash) + " - гривен при конвертации с доллара");
  } else {
      console.log("Введите только название валюты!")
};



