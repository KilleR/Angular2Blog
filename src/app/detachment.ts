import {DetachmentSection} from "./detachment-section";

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

    constructor() {
        this.HQ = new DetachmentSection();
        this.HQ.Name = "HQ";
        this.Troops = new DetachmentSection();
        this.Troops.Name = "Troops";
        this.Elites = new DetachmentSection();
        this.Elites.Name = "Elites";
        this.FastAttack = new DetachmentSection();
        this.FastAttack.Name = "Fast Attack";
        this.HeavySupport = new DetachmentSection();
        this.HeavySupport.Name = "Heavy Support";
        this.Transports = new DetachmentSection();
        this.Transports.Name = "Transports";
        this.LordOfWar = new DetachmentSection();
        this.LordOfWar.Name = "Lords of War";
        this.Fliers = new DetachmentSection();
        this.Fliers.Name = "Fliers";
        this.Fortifications = new DetachmentSection();
        this.Fortifications.Name = "Fortificatons";
    }
}
