export class FormulaClass {
  constructor(){
    this.firstNumber = null
    this.secondNumber = null
    this.action = null
    this.operation = null
    this.result = null
    this.currentPressedButton = null
  }
  set setNumber(newNumber) {
    console.log("formula newNumber)", newNumber)
    if(this.firstNumber === null) {
      this.firstNumber = newNumber
    } else {
      this.secondNumber = newNumber
    }
  }
  set setAction(newAction) {
    this.action = newAction
    this.#findAction()
  }
  #doCalculation(){
    console.log(this.firstNumber, this.operation, this.secondNumber)
    this.result = eval(this.firstNumber + this.operation + this.secondNumber)
    this.firstNumber = this.result;
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
      break;
    }
  }
  #resetState(){
    this.firstNumber = null;
    this.secondNumber = null;
    this.operation = null;
    this.result = 0;
  }
}