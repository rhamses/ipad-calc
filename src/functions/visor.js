import { ref, watch } from 'vue'
export class VisorClass {
  constructor({chunkSize, visorID}){
    this.chunk = chunkSize
    this.number = ref(null)
    this.visorID = visorID
    this.visorFontSize = ref({fontSize: "600%"})
    this.#watchNumber()
  }
  get showNumber(){
    console.log("showNumber", this.number.value)
    if(this.number.value == null){
      return 0
    }                 
    return this.number.value;
  }
  get fontSize(){
    return this.visorFontSize.value
  }
  get rawNumber(){
    const number = this.#numberToString(this.number.value)
    return number
  }
  set newNumber(number){
    this.#setNewNumber(number)
  }
  calcNumber(){
    if(this.number.value) {
      this.#breakNumbers()
      return this.number.value;
    }
  }
  clearVisor(){
    this.number.value = ""
  }
  #watchNumber(){
    watch(this.number, async(newValue, oldValue) => {
      const visor = document.querySelector("#visor");
      const fakeVisor = document.querySelector("#fakevisor");
      fakeVisor.innerHTML = newValue;
      const fakeVisorWidth = fakeVisor.clientWidth - fakeVisor.clientWidth * (8/100)
      // console.log(newValue, fakeVisor.clientWidth, visor.clientWidth)
      if(fakeVisorWidth >= visor.clientWidth) {
        const oldFontSize = Number(this.visorFontSize.value.fontSize.replace("%",''))
        const newFontSize =  oldFontSize - oldFontSize * (20/100) + "%";
        this.visorFontSize.value = ({"fontSize": newFontSize})
      }
    })
  }  
  #breakNumbers(){
    let numbers = String(this.rawNumber)
    const decimal = (numbers.includes(".")) ? numbers.split(".")[1] : null;
    numbers = (numbers.includes(".")) ? numbers.split(".")[0] : numbers;
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
    console.log("setNewNumber", nwNumber)
    const number = this.#numberToString(this.number.value)
    if(number) {
      this.number.value += String(nwNumber)
    } else if(nwNumber === "," && this.number.value == null) {
      this.number.value = "0" + String(nwNumber)
    } else {
      this.number.value = String(nwNumber)
    }
  }
  #numberToString(number){
    const numberToString = String(number);
    if(numberToString && numberToString.match(/\d/gmi)) {
      return numberToString.replaceAll(".","").replaceAll(",",".")
      // return Number(numberToString.replaceAll(".","").replaceAll(",","."))
    }
  }
}