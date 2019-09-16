/**
 * Class that will hold the logic concept of a piano
*/

class Piano{
    constructor (keysSupported) {
        super();
        this.numOctets = 1;
        this.keyAssignmentList = keysSupported.split("");
        this.handlers = {};

        //Assigning the handlers dynamically
        changeNumberOctets(this.numOctets);
    }

    changeNumberOctets(octets) {
        if (this.numOctets ) {
            
        }
        for (let octect = 0; octect < numOctets; octect++) {
            for (let index = 0; index < 12; index++) {
                this.handlers[(index+(octect*12))] = this.keyAssignmentList.shift();
            }
        }
    }

}

modules.exports = Piano;