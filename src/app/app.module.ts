import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {
    MdAutocompleteModule,
    MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule, MdProgressBarModule,
    MdSelectModule,
    MdSidenavModule,
    MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PostComponent} from './post/post.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BlogComponent} from './blog/blog.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CryptComponent} from './crypt/crypt.component';
import {CryptActivityComponent} from './crypt-activity/crypt-activity.component';
import { LopSocImagesComponent } from './lop-soc-images/lop-soc-images.component';
import { LopSocImageDetailComponent } from './lop-soc-image-detail/lop-soc-image-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        DashboardComponent,
        BlogComponent,
        PageNotFoundComponent,
        CryptComponent,
        CryptActivityComponent,
        LopSocImagesComponent,
        LopSocImageDetailComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MdToolbarModule,
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdProgressBarModule,
        MdIconModule,
        MdSidenavModule,
        MdListModule,
        MdSelectModule,
        MdAutocompleteModule,
        MdGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
