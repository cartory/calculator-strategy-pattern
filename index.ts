// interface OperationStrategy {
// 	calculate(a: number, b: number): number
// }

// class AddStrategy implements OperationStrategy {
// 	calculate(a: number, b: number): number {
// 		return a + b
// 	}
// }

// class SubtractStrategy implements OperationStrategy {
// 	calculate(a: number, b: number): number {
// 		return a - b
// 	}
// }

// class MultiplyStrategy implements OperationStrategy {
// 	calculate(a: number, b: number): number {
// 		return a * b
// 	}
// }

// class DivisionStrategy implements OperationStrategy {
// 	calculate(a: number, b: number): number {
// 		return a / b
// 	}
// }

// const keyStrategy = {
// 	"+": (calculator: Calculator) => calculator.setStrategy(new AddStrategy()),
// 	"-": (calculator: Calculator) => calculator.setStrategy(new SubtractStrategy()),
// 	"*": (calculator: Calculator) => calculator.setStrategy(new MultiplyStrategy()),
// 	"/": (calculator: Calculator) => calculator.setStrategy(new DivisionStrategy()),
// }

// class Calculator {
// 	private strategy: OperationStrategy

// 	setStrategy(strategy: OperationStrategy): void {
// 		this.strategy = strategy
// 	}

// 	calculate(expression: string): string {
// 		expression = expression.trim()
// 		const symbol = expression.split("").find((char) => "+/-*".includes(char))

// 		try {
// 			keyStrategy[symbol](this)
// 			let [a, b] = expression.split(symbol)

// 			const result = this.strategy.calculate(Number.parseInt(a), Number.parseInt(b))
// 			return result.toString()
// 		} catch (err) {
// 			return "Syntax Error"
// 		}
// 	}
// }

// const calculator = new Calculator()
