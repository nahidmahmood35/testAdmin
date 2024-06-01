import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Layout/header/header.component';
import { SidenavComponent } from './Layout/sidenav/sidenav.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    DeshboardComponent,
    PageOneComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
