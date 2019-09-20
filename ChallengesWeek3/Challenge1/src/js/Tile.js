class Tile {
    constructor(type ,desc, frequency, sound, pedal){
        this.type = type;
        this.htmlElement = document.querySelector("#"+desc);
        this.frequency = frequency;
        this.sound = sound;
        this.sound.playbackRate = 1.2;

        this.pressed = false;
        this.pedal = pedal;
    }

    startSound(sustain){
        if(sustain){
            this.sound.playbackRate = 0.5;
        }else{
            this.sound.playbackRate = 1.2;
        }
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
            this.pressed = false;
        }
    }
}