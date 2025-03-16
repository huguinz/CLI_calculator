/************************************************************************************
 * Objective: Validar todos os dados que chegam da função de um arquivo externo
 * Date: 16.03.2025
 * Author: Hugo Lopes
 * Version: 1.0
 * ***********************************************************************************/

const importOperationFunction = require('./module/main.js')
const readlineLibrary = require('readline')

const UserDataEntry = readlineLibrary.createInterface({
	input: process.stdin,
	output: process.stdout,
})

UserDataEntry.question('Digite o primeiro número: ', (firstNumber) => {
	if (!isNaN(firstNumber)) {
		UserDataEntry.question('Digite o segundo número: ', (secondNumber) => {
			if (!isNaN(secondNumber)) {
				UserDataEntry.question('Digite alguma dessas operações[+, -, *, /]: ', (operation) => {
					operation = String(operation)
					if (firstNumber == '' || secondNumber == '' || operation == '') {
						console.log('ERRO: É necessário a entrada de todos os dados!')
						process.exit(0)
					}
					if (operation != '+' && operation != '-' && operation != '*' && operation != '/') {
						console.log('Selecione uma operação válida!')
						process.exit(0)
					} else {
						let result
						result = importOperationFunction.getMathOperationsCalculator(firstNumber, secondNumber, operation)

						if (result != undefined) {
							console.log(`O resultado da operação é: ${result.toFixed(2)}`)
							UserDataEntry.close()
						}
					}
				})
			} else {
				console.log('ERRO: Digite um número válido! OBS: Não é permitido "," para decimais, somente "."!')
				process.exit(0)
			}
		})
	} else {
		console.log('ERRO: Digite um número válido! OBS: Não é permitido "," para decimais, somente "."!')
		process.exit(0)
	}
})
