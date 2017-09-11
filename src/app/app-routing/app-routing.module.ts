import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import {BlogComponent} from "../blog/blog.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: 'blog',
        component: DashboardComponent,
    },
    {
        path: '',
        component: BlogComponent,
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }