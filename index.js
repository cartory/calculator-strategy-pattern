var AddStrategy = /** @class */ (function () {
    function AddStrategy() {
    }
    AddStrategy.prototype.calculate = function (a, b) {
        return a + b;
    };
    return AddStrategy;
}());
var SubtractStrategy = /** @class */ (function () {
    function SubtractStrategy() {
    }
    SubtractStrategy.prototype.calculate = function (a, b) {
        return a - b;
    };
    return SubtractStrategy;
}());
var MultiplyStrategy = /** @class */ (function () {
    function MultiplyStrategy() {
    }
    MultiplyStrategy.prototype.calculate = function (a, b) {
        return a * b;
    };
    return MultiplyStrategy;
}());
var DivisionStrategy = /** @class */ (function () {
    function DivisionStrategy() {
    }
    DivisionStrategy.prototype.calculate = function (a, b) {
        return a / b;
    };
    return DivisionStrategy;
}());
var keyStrategy = {
    "+": function (calculator) { return calculator.setStrategy(new AddStrategy()); },
    "-": function (calculator) { return calculator.setStrategy(new SubtractStrategy()); },
    "*": function (calculator) { return calculator.setStrategy(new MultiplyStrategy()); },
    "/": function (calculator) { return calculator.setStrategy(new DivisionStrategy()); }
};
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Calculator.prototype.calculate = function (expression) {
        expression = expression.trim();
        var symbol = expression.split("").find(function (char) { return "+/-*".includes(char); });
        try {
            keyStrategy[symbol](this);
            var _a = expression.split(symbol), a = _a[0], b = _a[1];
            var result = this.strategy.calculate(Number.parseInt(a), Number.parseInt(b));
            return result.toString();
        }
        catch (err) {
            return "Syntax Error";
        }
    };
    return Calculator;
}());
var calculator = new Calculator();
