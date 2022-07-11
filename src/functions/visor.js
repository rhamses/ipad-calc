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
  set newNumber(number){
    this.number.value += String(number)
  }
  calcNumber(){
    this.#breakNumbers();
    return this.number.value;
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
    const numbers = this.number.value.match(/\d/gmi).reverse();
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
      return this.number.value = newNumber.reverse().join("")
    }
  }
}