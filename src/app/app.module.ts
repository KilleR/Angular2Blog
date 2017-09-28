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
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BlogComponent} from './blog/blog.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CryptComponent} from './crypt/crypt.component';
import {CryptActivityComponent} from './crypt-activity/crypt-activity.component';
import { DetachmentComponent } from './army-builder/detachment/detachment.component';
import { DetachmentSectionComponent } from './army-builder/detachment-section/detachment-section.component';
import { LopSocImagesComponent } from './lop-soc-images/lop-soc-images.component';
import { LopSocImageDetailComponent } from './lop-soc-image-detail/lop-soc-image-detail.component';
import { ArmyBuilderComponent } from './army-builder/army-builder.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        BlogComponent,
        PageNotFoundComponent,
        CryptComponent,
        CryptActivityComponent,
        DetachmentComponent,
        DetachmentSectionComponent,
        LopSocImagesComponent,
        LopSocImageDetailComponent,
        ArmyBuilderComponent,
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
