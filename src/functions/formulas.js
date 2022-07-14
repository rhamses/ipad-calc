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
    console.log('asdasd')
    return this.finalValue ? this.finalValue : this.firstNumber;
  }
  #doCalculation(){
    console.log(this.firstNumber, this.operation, this.secondNumber)
    this.finalValue = eval(this.firstNumber + this.operation + this.secondNumber)
    this.firstNumber = this.finalValue;
  }
  #findAction(){
    console.log("action", this.action.action)
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
    }
  }
  #resetState(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.finalValue = 0;
    this.operation = null;
  }
}