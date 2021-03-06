"use strict"

class Personagem extends Inimigo {
    
    constructor(x, y, width, height, speed) {
        super(x, y, width, height, speed)
    }

    detect_movement(code) {
        if (this.walkingSound.paused==true) {
            var music = JSON.parse(localStorage.getItem('sound'));
            this.walkingSound.volume = music.effectsVolume
            this.walkingSound.play()
        }
        if (this.keyStatus.walkUp==false && (code=="ArrowUp" || code=="KeyW")) {
            this.keyStatus.walkUp=true
        } else if (this.keyStatus.walkDown==false && (code=="ArrowDown" || code=="KeyS")) {
            this.keyStatus.walkDown=true
        } else if (this.keyStatus.walkLeft==false && (code=="ArrowLeft" || code=="KeyA")) {
            this.keyStatus.walkLeft=true
        } else if (this.keyStatus.walkRight==false && (code=="ArrowRight" || code=="KeyD")) {
            this.keyStatus.walkRight=true
        }
    }
}