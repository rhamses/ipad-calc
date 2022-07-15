import { ref, watch } from 'vue'
export class Responsive {
  constructor() {
    this.isPortrait = ref(null)
    this.isOrientation()
    this.monitorOrientation();
    watch(this.isPortrait, (newValue, oldValue) => {
      this.isPortrait.value  = newValue
    })
  }
// Initialize variable with checkOrientation value
  get orientation(){
    return this.isPortrait.value
  }
// check to see if PWA is installed on iOS devices. If so, add css class to container
  static get isInstalled(){
    return {
      'pwa-installed': window.navigator.standalone
    }
  }
// Check the same checkOrientation function every time the orientation changes
  monitorOrientation(){
    window.addEventListener('resize', () => this.isOrientation())
  }
  isOrientation(){
    if(window.matchMedia("(orientation: portrait)").matches) {
      this.isPortrait.value = false
    } else {
      this.isPortrait.value = true
    }
  }

}