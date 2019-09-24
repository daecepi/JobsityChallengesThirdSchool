class Tile {
    constructor(type, sound, baseSustainability){
        this.type = type;
        this.htmlElement = undefined;
        this.sound = sound;
        this.sound.playbackRate = baseSustainability;

        this.pressed = false;
        this.pedalFlag = true;
    }

    startSound(sustain, volume){
        if(sustain){
            this.sound.playbackRate = 0.5;
        }else{
            this.sound.playbackRate = 1.2;
            this.pedalFlag = false;
        }
        this.sound.volume = volume;
        if (!this.pressed) {
            if(!this.sound.ended){
                this.sound.currentTime = 0;
            }
            this.htmlElement.style.background = "var(--darker-"+this.type+"-tile)";
            console.log(this.sound.volume);
            this.sound.play();
            this.pressed = true;
        }
    }

    stopSound(){
        if(this.pressed){
            this.htmlElement.style.background = "var(--primary-"+this.type+"-tile)";
            //Accelerate finish of the sound since pedal is not pressed
            if (!this.pedalFlag) {
                this.sound.playbackRate = 1.4;
                this.pedalFlag = true;
            }
            this.pressed = false;
        }
    }

    assignDomReference(reference){
        if(this.htmlElement === undefined){
            this.htmlElement = reference;
        }
    }
}