import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {
    MdAutocompleteModule,
    MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule, MdProgressBarModule,
    MdSelectModule,
    MdSidenavModule, MdTableModule,
    MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PostComponent} from './post/post.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BlogComponent} from './blog/blog.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CryptComponent} from './crypt/crypt.component';
import {CryptActivityComponent} from './crypt-activity/crypt-activity.component';
import { MephalaTestComponent } from './mephala-test/mephala-test.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        BlogComponent,
        PageNotFoundComponent,
        CryptComponent,
        CryptActivityComponent,
        MephalaTestComponent,
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
        MdGridListModule,
        MdTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}

