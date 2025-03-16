/************************************************************************************
 * Objective: Programar uma função que tem o objetivo de fazer calculos matemáticos
 * Date: 16.03.2025
 * Author: Hugo Lopes
 * Version: 1.0
 * ***********************************************************************************/

const getMathOperationsCalculator = (firstNumber, secondNumber, mathOperation) => {
	mathOperation = String(mathOperation)
	let resultOperation

	if (mathOperation == '+') {
		resultOperation = Number(firstNumber) + Number(secondNumber)
	} else if (mathOperation == '-') {
		resultOperation = Number(firstNumber) - Number(secondNumber)
	} else if (mathOperation == '*') {
		resultOperation = Number(firstNumber) * Number(secondNumber)
	} else if (mathOperation == '/') {
		if (secondNumber == '0') {
			return 'Não é possível fazer divisão por 0!'
		} else {
			resultOperation = Number(firstNumber) - Number(secondNumber)
		}
	}
	return resultOperation
}

module.exports = {
	getMathOperationsCalculator,
}
