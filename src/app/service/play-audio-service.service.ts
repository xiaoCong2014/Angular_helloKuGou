import { Injectable } from '@angular/core';
import {AudioPlayerComponent} from '../audio-player/audio-player.component';

/**
 * 播放音频服务
 */
@Injectable()
export class PlayAudioServiceService {

  // @Injectable
  // a33udioPlayerComponent: AudioPlayerComponent;

  // constructor( private audioPlayerComponent: AudioPlayerComponent ) { }// todo 服务里引入组件 失败 . 组件里引入服务 OK

  constructor(  ) { }//

  playAudio(): void {
    // this.audioPlayerComponent.playAudio();

    // myAudio.play();

    console.log("PlayAudioServiceService playAudio()");
  }
}
