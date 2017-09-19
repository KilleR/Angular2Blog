import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {
    MdAutocompleteModule,
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdProgressBarModule, MdSelectModule,
    MdSidenavModule,
    MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PostComponent} from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CryptComponent } from './crypt/crypt.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        DashboardComponent,
        BlogComponent,
        PageNotFoundComponent,
        CryptComponent,
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
