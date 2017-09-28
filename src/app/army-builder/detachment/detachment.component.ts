import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Detachment} from "../detachment";

@Component({
    selector: 'app-detachment',
    templateUrl: './detachment.component.html',
    styleUrls: ['./detachment.component.css']
})
export class DetachmentComponent implements OnInit {
    @Input() detachment: Detachment;
    @Output() CP: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
        // this.CP.emit(this.detachment.CP)
    }

    ngOnInit() {
    }

}
