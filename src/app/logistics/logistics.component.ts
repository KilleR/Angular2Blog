import {Component, OnInit} from '@angular/core';
import {Http, RequestOptionsArgs} from "@angular/http";
import {Device} from "./device";
import {RouterDataSource} from "./router-data-source";

@Component({
    selector: 'app-logistics',
    templateUrl: './logistics.component.html',
    styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {
    serialNumber: string = 'S162E18032581';
    router: Device;

    displayedColumns = ['routerid', 'orderid', 'devicetype', 'orderdate', 'serial', 'mac'];
    routerDataSource: RouterDataSource;

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    getDeviceDetails() {
        let serial = this.serialNumber;
        this.http.post("http://devblog.juniperbridge.net/assets/logisticsService.php", {serialNumber: serial})
            .subscribe(res => {
                let resJson = res.json();

                console.log(resJson);
                if (resJson.status == 1) {
                    this.router = new Device;
                    this.router.routerId = resJson.router.routerid;
                    this.router.orderId = resJson.router.routerorderid;
                    this.router.deviceType = resJson.stock.manufacturer + " - " + resJson.stock.oui
                    this.router.orderDate = resJson.router.createtime;
                    this.router.serial = resJson.stock.serialnumber;
                    this.router.mac = resJson.stock.mac;
                }
            })
    }
}

