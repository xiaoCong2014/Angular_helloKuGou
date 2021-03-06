import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SayHelloComponent } from './say-hello/say-hello.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import {PlayAudioServiceService} from './service/play-audio-service.service';

// import { PlayAudioServiceService } from
// 错的
// import { SayHelloComponent } from './src/app/say-hello/say-hello.component';
// import { AudioPlayerComponent } from './src/app/audio-player/audio-player.component';

@NgModule({

  declarations: [
    AppComponent ,
    SayHelloComponent ,
    AudioPlayerComponent
  ],

  imports: [
    BrowserModule
  ],

  providers: [
    PlayAudioServiceService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
