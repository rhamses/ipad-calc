export class Responsive {
  constructor() {
    this.isPortrait = null
    this.monitorOrientation();    
  }

  get orientation(){
    return this.isOrientation()
  }

  get PWAisInstalled(){
    return {
      'pwa-installed': window.navigator.standalone
    }
  }

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