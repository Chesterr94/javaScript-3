let numberOne = +prompt('Введите первое число');
let numberTwo = +prompt('Введите второе число');

const euclideanAlgorithm = (a,b) => {
	if (b !== 0) {
		const c = a % b;
			return euclideanAlgorithm(b, c);
		} else {
			return a;
		}
}

console.log ('Найбольший общий делитель двух заданых чисел это ' + euclideanAlgorithm(numberOne,numberTwo));

//решение я нашел в инернетах

