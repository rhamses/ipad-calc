import { ref } from 'vue'
export class VisorClass {
  constructor(){
    this.chunk = 3
    this.number = ref(0)
  }
  get showNumber(){
    if(Number(this.number.value)) {
      this.number.value = Number(this.number.value)
    } else {
      this.number.value = this.number.value
    }
    return this.number.value;
  }
  set newNumber(number){
    this.number.value += String(number)
  }

  calcNumber(){
    this.#breakNumbers();
    return this.number.value;
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