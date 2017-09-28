import {DetachmentSection} from "./detachment-section";
import {Unit} from "./unit";

export class Detachment {
    Name: string;
    CP: number;
    HQ: DetachmentSection;
    Troops: DetachmentSection;
    Elites: DetachmentSection;
    FastAttack: DetachmentSection;
    HeavySupport: DetachmentSection;
    Transports: DetachmentSection;
    LordOfWar: DetachmentSection;
    Fliers: DetachmentSection;
    Fortifications: DetachmentSection;

    get cost(): number {
        return this.getCost()
    }

    constructor() {
        this.HQ = new DetachmentSection();
        this.HQ.name = "HQ";
        this.Troops = new DetachmentSection();
        this.Troops.name = "Troops";
        this.Elites = new DetachmentSection();
        this.Elites.name = "Elites";
        this.FastAttack = new DetachmentSection();
        this.FastAttack.name = "Fast Attack";
        this.HeavySupport = new DetachmentSection();
        this.HeavySupport.name = "Heavy Support";
        this.Transports = new DetachmentSection();
        this.Transports.name = "Transports";
        this.LordOfWar = new DetachmentSection();
        this.LordOfWar.name = "Lords of War";
        this.Fliers = new DetachmentSection();
        this.Fliers.name = "Fliers";
        this.Fortifications = new DetachmentSection();
        this.Fortifications.name = "Fortificatons";
    }

    getCost() {
        let total = 0;

        total += this.HQ.cost;

        return total;
    }
}
