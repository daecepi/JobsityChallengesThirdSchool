class Tile {
    constructor(type ,desc, frequency, sound, pedal){
        this.type = type;
        this.htmlElement = document.querySelector("#"+desc);
        console.log(desc);
        this.frequency = frequency;
        this.sound = sound;
        this.pressed = false;
        this.pedal = pedal;
    }

    startSound(){
        if (!this.pressed) {
            if(!this.sound.ended){
                this.sound.currentTime = 0;
            }
            this.htmlElement.style.background = "var(--darker-soft-tile)";
            this.sound.play();
            this.pressed = true;
        }
    }

    stopSound(){
        if(this.pressed){
            
            this.htmlElement.style.background = "var(--primary-soft-tile)"; 
            
            setTimeout(() => {
                this.sound.pause();
            }, 500);
            this.pressed = false;
        }
    }

    changeStyle(isOn){
        if (isOn) {
            
        }else{

        }
    }
}