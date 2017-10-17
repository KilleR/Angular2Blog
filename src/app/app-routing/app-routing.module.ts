import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from "../blog/blog.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {CryptComponent} from "../crypt/crypt.component";
import {MephalaTestComponent} from "../mephala-test/mephala-test.component";
import {LogisticsComponent} from "../logistics/logistics.component";

const routes: Routes = [
    {
        path: 'crypt',
        component: CryptComponent,
        data: {title: "Crypt Test"}
    },
    {
        path: 'logistics',
        component: LogisticsComponent,
        data: {title: "Logistics Tools"}
    },
    {
        path: 'mephala',
        component: MephalaTestComponent,
        data: {title: "Mephala Test"}
    },
    {
        path: '',
        component: BlogComponent,
        data: {title: "Dev Blog"}
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }