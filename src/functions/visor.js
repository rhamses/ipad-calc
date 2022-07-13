import { ref, watch } from 'vue'
export class VisorClass {
  constructor({chunkSize, visorID}){
    this.chunk = chunkSize
    this.number = ref(0)
    this.visorID = visorID
    this.visorFontSize = ref({fontSize: "600%"})
    this.#watchNumber()
  }
  get showNumber(){
    if(Number(this.number.value)) {
      this.number.value = Number(this.number.value)
    } else {
      this.number.value = this.number.value
    }
    return this.number.value;
  }
  get fontSize(){
    return this.visorFontSize.value
  }
  get rawNumber(){
    if(typeof this.number.value === "string" && this.number.value.match(/\d/gmi)) {
      return Number(this.number.value.replace(".","").replace(",","."))
    }
    return this.number.value
  }
  set newNumber(number){
    this.#setNewNumber(number)
  }
  calcNumber(){
    this.#breakNumbers();
    return this.number.value;
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
    const decimal = (this.number.value.includes(",")) ? this.number.value.split(",")[1] : null;
    let numbers = (this.number.value.includes(",")) ? this.number.value.split(",")[0] : this.number.value;
    numbers = numbers.match(/\d/gmi).reverse()
    const parts = Math.ceil(numbers.length/this.chunk)
    const newNumber = []
    // console.log("numbers", numbers, "parts", parts, "decimal", decimal)
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
      return this.number.value = newNumber.reverse().join("")
    }
  }
  #setNewNumber(nwNumber) {
    console.log("setNewNumberm", nwNumber)
    if(!Number.isInteger(nwNumber) && String(nwNumber) !== ",") {
      console.log(",,,")
      nwNumber = String(nwNumber).replace(".",",")
    }
    this.number.value += String(nwNumber)
  }
}