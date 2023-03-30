import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModuleModule } from './core-module/core-module.module';
import { YoutubeModuleModule } from './youtube-module/youtube-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModuleModule,
    YoutubeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
