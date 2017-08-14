import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  volume : Number;

  /**
   * 音频源
   */
  audioSrc : string;

  constructor() { }

  ngOnInit() {
    this.volume = 1;
    this.audioSrc = 'http://ad72d9d82859ce062cb4.b0.upaiyun.com/apicloud/76285fe040681b170a6d310a52d196ef.mp3';
  }

}
