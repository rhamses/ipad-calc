export class FormulaClass {
  constructor(){
    this.firstNumber = 0
    this.secondNumber = 0
    this.finalValue = 0
    this.action = null
    this.operation = null
    this.currentPressedButton = null
  }
  set setNumber(newNumber) {
    if(this.firstNumber === 0) {
      this.firstNumber = newNumber
    } else if (this.secondNumber === 0){
      this.secondNumber = newNumber
    } else {
      return
    }
  }
  set setAction(newAction) {
    this.action = newAction
    this.#findAction()
  }
  get result(){
    return this.finalValue ? this.finalValue : this.firstNumber;
  }
  #doCalculation(){
    console.log(this.firstNumber, this.operation, this.secondNumber)
    this.finalValue = eval(this.firstNumber + this.operation + this.secondNumber)
    this.firstNumber = this.finalValue;
  }
  #findAction(){
    console.log("action", this.action, this.action.action)
    switch(this.action.action){
      case "reset":
        this.#resetState()
      break;
      case "minus one":
        this.operation = "*"
        this.secondNumber = -1
        this.#doCalculation()
      break;
      case "percentage":
        this.operation = "/"
        this.secondNumber = 100
        this.#doCalculation()
      break;
      case "+":
        this.operation = this.action.action
        this.secondNumber = 0
      break;
      case "-":
        this.operation = this.action.action
        this.secondNumber = 0
      break;
      case "*":
        this.operation = this.action.action
        this.secondNumber = 0
      break;
      case "/":
        this.operation = this.action.action
        this.secondNumber = 0
      break;
      case "=":
        this.#doCalculation()
      break;
      case "x2":
        this.finalValue = Math.pow(this.firstNumber, 2);
        this.firstNumber = this.finalValue
      break;
      case "x3":
        this.finalValue = Math.pow(this.firstNumber, 3);
        this.firstNumber = this.finalValue
      break;
      case "xy":
        this.operation = this.action.action
        if(this.secondNumber){
            this.finalValue = Math.pow(this.firstNumber, this.secondNumber);
            this.firstNumber = this.finalValue
        }
      break;
      case "10x":
        this.operation = this.action.action
        this.finalValue = Math.pow(10, this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "1/x":
        this.operation = this.action.action
        this.finalValue = 1 / this.firstNumber;
        this.firstNumber = this.finalValue
      break;
      case "raiz2":
        this.operation = this.action.action
        this.finalValue = Math.sqrt(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "raiz3":
        this.operation = this.action.action
        this.finalValue = Math.cbrt(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "raizy":
        this.operation = this.action.action
        if(this.secondNumber){
          this.finalValue = Math.pow(this.firstNumber, 1/this.secondNumber);
          this.firstNumber = this.finalValue
        }
      break;
      case "log10":
        this.operation = this.action.action
        this.finalValue = Math.log10(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "x!":
        this.operation = this.action.action
        let factorial = this.firstNumber;
        let result = 1
        while(factorial > 0) {
          result = factorial * result
          factorial--
        }
        this.finalValue = result;
        this.firstNumber = this.finalValue
      break;
      case "sin":
        this.operation = this.action.action
        this.finalValue = Math.sin(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "sinh":
        this.operation = this.action.action
        this.finalValue = Math.sinh(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "cos":
        this.operation = this.action.action
        this.finalValue = Math.cos(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "cosh":
        this.operation = this.action.action
        this.finalValue = Math.cosh(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "tan":
        this.operation = this.action.action
        this.finalValue = Math.tan(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "tanh":
        this.operation = this.action.action
        this.finalValue = Math.tanh(this.firstNumber);
        this.firstNumber = this.finalValue
      break;
      case "E":
        this.operation = this.action.action
        this.finalValue = Math.E;
        this.firstNumber = this.finalValue
      break;
      case "pi":
        this.operation = this.action.action
        this.finalValue = Math.PI;
        this.firstNumber = this.finalValue
      break;
      case "random":
        this.operation = this.action.action
        this.finalValue = Math.random();
        this.firstNumber = this.finalValue
      break;
    }
  }
  #resetState(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.finalValue = 0;
    this.operation = null;
  }
}