class Tile {
    constructor(desc, frequency, sound, pedal){
        this.htmlElement = document.querySelector("#"+desc);
        this.frequency = frequency;
        this.sound = sound;
        this.pressed = false;
        this.pedal = pedal;
    }

    startSound(){
        if (!this.pressed) {
            if(!tilesList[key].ended){
                tilesList[key].currentTime = 0;
            }
            tilesList[key].play();
            this.pressed = true;
        }
    }

    stopSound(){
        if(this.pressed){
            sound.playRate= 500;
            setTimeout(()=>{
                this.sound.p
            },100);
            this.pressed = false;
        }
    }

    changeStyle(){

    }
}