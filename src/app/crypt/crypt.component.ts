import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {CryptActivity} from "../crypt-activity";

@Component({
    selector: 'app-crypt',
    templateUrl: './crypt.component.html',
    styleUrls: ['./crypt.component.css']
})
export class CryptComponent implements OnInit, OnDestroy {

    private activityProgress: number;
    private activityColor: string;
    private activityRepeat;
    private activities: CryptActivity[];

    constructor(private http:Http) {
        this.activityProgress = 0;
        this.activityColor = "primary"
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.http.get("http://127.0.0.1:5000/stop")
        this.activityRepeat.unsubscribe();
    }

    startActivity() {
        if(this.activityRepeat) {
            this.activityRepeat.unsubscribe();
        }
        this.http.get("http://127.0.0.1:5000/start")
            .subscribe(res=> {
                this.activityColor = "primary";
                this.activityRepeat = Observable.interval(400)
                    .subscribe(data => {
                        this.getActivityProgress();
                    })
            }, err=> {
                this.activityColor = "warn";
                console.log(err)
            })
    }

    stopActivity() {
        this.http.get("http://127.0.0.1:5000/stop")
            .subscribe(res=> {
                this.activityColor = "primary";
                this.activityRepeat.unsubscribe();
            }, err=> {
                this.activityColor = "warn";
                console.log(err)
            })
    }

    getActivityProgress() {
        this.http.get("http://127.0.0.1:5000/progress")
            .subscribe(res => {
                console.log("response");
                let info = res.json();
                if (info.Jobs) {
                    console.log("Success");
                    this.activityColor = "primary";
                    this.activities = info.Jobs;
                    if(!info.Running) {
                        this.activityRepeat.unsubscribe();
                    }
                } else {
                    console.log("Failure");
                    this.activityColor = "warn";
                }
            }, res=> {
                console.log("Error");
                console.log(res);
                this.activityColor = "warn";
            })
    }

}
