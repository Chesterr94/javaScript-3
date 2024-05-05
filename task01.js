const isCheckNumber = cash => {
	if (isNaN(cash)) {
		console.log('Введите числовую сумму');
		return false;
	}
	return true;
}

const isCurrencyCorrect = currency => {
	if (currency === 'евро' || currency === 'доллар') {
		return true;
	}
	console.log('Ошибка Введите вашу валюту, евро или доллар');
	return false;
}

const coefficientEuro = 42;
const coefficientDollar = 38;

const cash = +prompt('Введите желаемую сумму валюты для конвертации в гривну');

if (!isCheckNumber(cash)) {
	console.log('Работа завершена');
} else {
	const currency = prompt('Введите вашу валюту, евро или доллар');

	if (isCurrencyCorrect(currency)) { 
		console.log ('Работа завершена, всего хорошего');
	} else {
		if (currency === "доллар") {
			let conversionDollar = (cash * coefficientDollar);
			console.log('Cумма в гривнах:' + conversionDollar);
		} 

		if (currency === "евро") {
			let conversionEuro = (cash * coefficientEuro);
			console.log('Cумма в гривнах:' + conversionEuro);
		}
	}
}
