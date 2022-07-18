import { ref, watch } from 'vue'
export class VisorClass {
  constructor({chunkSize, visorID}){
    this.chunk = chunkSize
    this.number = ref(null)
    this.visorID = visorID
    this.visorFontSize = ref({fontSize: "600%"})
    this.hasOperation = false
    this.#watchNumber()
  }
  get showNumber(){
    if(this.number.value == null){
      return 0
    }
    return this.number.value;
  }
  get fontSize(){
    return this.visorFontSize.value
  }
  get rawNumber(){
    const number = Number(this.#numberToString(this.number.value))
    return number
  }
  set newNumber(number){
    this.#setNewNumber(number)
  }
  calcNumber(){
    this.#breakNumbers()
    return this.number.value;
  }
  clearVisor(){
    this.number.value = 0
  }
  #watchNumber(){
    watch(this.number, async(newValue, oldValue) => {
      const visor = document.querySelector("#visor");
      const fakeVisor = document.querySelector("#fakevisor");
      fakeVisor.innerHTML = newValue;
      const fakeVisorWidth = fakeVisor.clientWidth - fakeVisor.clientWidth * (8/100)
      if(fakeVisorWidth >= visor.clientWidth) {
        const oldFontSize = Number(this.visorFontSize.value.fontSize.replace("%",''))
        const newFontSize =  oldFontSize - oldFontSize * (20/100) + "%";
        this.visorFontSize.value = ({"fontSize": newFontSize})
      }
    })
  }
  #breakNumbers(){
    let numbers = this.#numberToString(this.number.value)
    const decimal = (numbers.includes(",")) ? numbers.split(",")[1] : null;
    numbers = (numbers.includes(",")) ? numbers.split(",")[0] : numbers;
    numbers = numbers.match(/\d/gmi).reverse()
    const parts = Math.ceil(numbers.length/this.chunk)
    const newNumber = []
    if(numbers.length > 3) {
      for (let index = 0; index < parts; index++) {
        const sliceBegin = index * this.chunk;
        const sliceEnd = (index * this.chunk) + this.chunk;
        if(index + 1 < parts) {
          newNumber.push(...numbers.slice(sliceBegin, sliceEnd))
          newNumber.push('.')
        } else {
          newNumber.push(...numbers.slice(sliceBegin, numbers.length))
        }
      }
      // adding the decimal point as comma
      if(this.number.value.includes(",")) {
        newNumber.unshift(decimal , ',')
      }
      // adding minus sinal again
      if(this.number.value.includes("-")) {
        newNumber.push('-')
      }
      console.log("newNumber", newNumber)
      return this.number.value = String(newNumber.reverse().join(""))
    }
  }
  #setNewNumber(nwNumber) {
    if(this.number.value == null) {
      if(nwNumber === ",") {
        this.number.value = "0" + this.#numberToString(nwNumber)
      } else {
        this.number.value = this.#numberToString(nwNumber)
      }
    } else if(this.hasOperation) {
      this.number.value = this.#numberToString(nwNumber)
    } else {
      this.number.value += this.#numberToString(nwNumber)
    }
  }
  #numberToString(number){
    let numberToString = String(number);
    if(numberToString.length === 2 && numberToString.split("")[0] === "0") {
      numberToString = numberToString.substring(1,numberToString.length)
      return numberToString
    } else if(numberToString.match(/\d/gmi)) {
      if(this.hasOperation && number % 1 !== 0){
        return numberToString.replaceAll(".",",")
      } else {
        return numberToString.replaceAll(".","").replaceAll(",",".")
      }
    } else {
      return numberToString
    }
  }
}