import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdProgressBarModule,
    MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PostComponent} from './post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MdToolbarModule,
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdProgressBarModule,
        MdIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
