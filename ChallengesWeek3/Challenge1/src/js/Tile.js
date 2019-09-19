class Tile {
    constructor(type ,desc, frequency, sound, pedal){
        this.type = type;
        this.htmlElement = document.querySelector("#"+desc);
        this.frequency = frequency;
        this.sound = sound;
        this.sound.playbackRate = 0.8;

        this.pressed = false;
        this.pedal = pedal;
    }

    startSound(sustain){
        if(sustain){
            this.sound.playbackRate = 0.5;
        }
        if (!this.pressed) {
            if(!this.sound.ended){
                this.sound.currentTime = 0;
            }
            if (this.type === "soft") {
                this.htmlElement.style.background = "var(--darker-soft-tile)";
            }else{
                this.htmlElement.style.background = "var(--darker-dark-tile)";
            }
            this.sound.play();
            this.pressed = true;
        }
    }

    stopSound(){
        if(this.pressed){
            if (this.type === "soft") {
                this.htmlElement.style.background = "var(--primary-soft-tile)";
            }else{
                this.htmlElement.style.background = "var(--primary-dark-tile)";
            }
            this.pressed = false;
        }
    }

    changeStyle(isOn){
        if (isOn) {
            
        }else{

        }
    }
}