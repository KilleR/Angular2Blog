import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
    selector: 'app-lop-soc-image-detail',
    templateUrl: './lop-soc-image-detail.component.html',
    styleUrls: ['./lop-soc-image-detail.component.css']
})
export class LopSocImageDetailComponent implements OnInit {
    private image: string;
    private sub: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            (params) =>
                this.image = params['image']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

}
