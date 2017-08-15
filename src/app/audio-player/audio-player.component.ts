import { Component, OnInit , ElementRef , Input } from '@angular/core';
// import { ElementRef } from "_@angular_core@4.3.4@@angular/core/src/core";
// import { ElementRef } from "@angular/core/src/core";

/**
 * 界面上看不到的组件 , 负责发出声音
 */
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
  // ],provide
})
export class AudioPlayerComponent implements OnInit {

  /**
   * 音量
   */
  @Input()
  volume: Number;

  /**
   * 音频源
   */
  @Input()
  audioSrc: string;

  /**
   * 存 整个组件的dom
   */
  public nativeElement: any;

  // constructor( ) {
  //
  // }

  constructor( private elementRef: ElementRef ) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnInit() {
    // this.volume = 1;
    // this.audioSrc = 'http://ad72d9d82859ce062cb4.b0.upaiyun.com/apicloud/76285fe040681b170a6d310a52d196ef.mp3';
  }

  playAudio(): void {

    // 根据 标签的名称 来选择
    this.nativeElement.querySelector('audio').play();

    // 错误 this.nativeElement.querySelector('myAudio').play();

    // 失败 document.getElementById('myAudio').play();

    // 失败 $('myAudio').(); // todo
    // 失败 myAudio.play();
    // console.log( "playAudio()" );

  }

}
