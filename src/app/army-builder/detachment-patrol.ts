import {Detachment} from "./detachment";

export class DetachmentPatrol extends Detachment {
    constructor() {
        super();

        this.Name = "Patrol";
        this.CP = 0;
        this.HQ.min = 1;
        this.HQ.max = 2;
        this.Troops.min = 1;
        this.Troops.max = 3;
        this.Elites.max = 2;
        this.FastAttack.max = 2;
        this.HeavySupport.max = 2;
        this.Fliers.max = 2;
    }
}
