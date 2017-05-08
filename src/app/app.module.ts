import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Nl2brPipe } from './nl2br.pipe';

@NgModule({
    declarations: [
        AppComponent,
        Nl2brPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MdToolbarModule,
        MdButtonModule,
        MdInputModule,
        MdCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
