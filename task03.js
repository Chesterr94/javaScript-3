/*let basketMoney = +prompt('Введите сумму корзины товаров');

if (isNaN(basketMoney)){
  console.log('Вы ввели некорректное значение cуммы')
  } else{
    let basketGoods = +prompt('Введите количество товаров');

      if (isNaN(basketGoods)){
        console.log('Вы ввели некорректное значение количества товаров')
        } else{
        let promoCode = prompt('Введите промокод');

        const  calculate =sum => {
          if (basketGoods >= 10){
            sum *= 0.97;
          }

          if (basketMoney > 30000){
            sum = basketMoney - 30000 * 0.85;
          }

          if (promoCode === 'METHED'){
            sum *=0.9;
          }else if(promoCode === 'G3H2Z1'){
            sum -=500;
          }

          return sum;
        }

        console.log ('У Вас ' + (basketGoods) + ' товаров, с примененными скидками и промокодами, сумма составляет ' + (calculate(basketMoney)) + ' гривен!');
            } 
  }
*/


const basketMoney = +prompt('Введите сумму корзины товаров');

const basketGoods = +prompt('Введите количество товаров');

const promoCode = prompt('Введите промокод');

const  calculate =sum => {
  if (basketGoods >= 10){
    sum *= 0.97;
  }

  if (basketMoney > 30000) {
    sum = basketMoney - 30000 * 0.85;
  }

  if (promoCode === 'METHED') {
    sum *=0.9;
  }else if (basketMoney >= 2000 && promoCode === 'G3H2Z1') {
    sum -=500;
  }

  return sum;
}

console.log ('У Вас ' + (basketGoods) + ' товаров, с примененными скидками и промокодами, сумма составляет ' + (calculate(basketMoney)) + ' гривен!');




