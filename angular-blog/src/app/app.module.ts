import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentdoisComponent } from './pages/contentdois/contentdois.component';
import { SecondBigCardComponent } from './components/second-big-card/second-big-card.component';
import { ThirdBigCardComponent } from './components/third-big-card/third-big-card.component';
import { ContenttresComponent } from './pages/contenttres/contenttres.component';
import { FourthBigCardComponent } from './components/fourth-big-card/fourth-big-card.component';
import { ContentquatroComponent } from './pages/contentquatro/contentquatro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    ContentdoisComponent,
    SecondBigCardComponent,
    ThirdBigCardComponent,
    ContenttresComponent,
    FourthBigCardComponent,
    ContentquatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
