import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import {BlogComponent} from "../blog/blog.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {CryptComponent} from "../crypt/crypt.component";

const routes: Routes = [
    {
        path: 'army',
        component: DashboardComponent,
        data: {title: "Army Builder"}
    },
    {
        path: 'crypt',
        component: CryptComponent,
        data: {title: "Crypt Test"}
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