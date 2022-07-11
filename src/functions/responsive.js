export class Responsive {
  constructor() {
    this.isPortrait = null
    this.monitorOrientation();    
  }
// Initialize variable with checkOrientation value
  static get orientation(){
    return this.isOrientation()
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
      return false 
    } else {
      return true
    }
  }

}