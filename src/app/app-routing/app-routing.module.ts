import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "../blog/blog.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {CryptComponent} from "../crypt/crypt.component";
import {LopSocImagesComponent} from "../lop-soc-images/lop-soc-images.component";
import {LopSocImageDetailComponent} from "../lop-soc-image-detail/lop-soc-image-detail.component";
import {ArmyBuilderComponent} from "../army-builder/army-builder.component";

const routes: Routes = [
    {
        path: 'army',
        component: ArmyBuilderComponent,
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
    {
        path: 'lopsoc',
        component: LopSocImagesComponent,
        data: {title: "LOpSoc Images"}
    },
    {
        path: 'lopsoc/:image',
        component: LopSocImageDetailComponent,
        data: {title: "LOpSoc Images"}
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