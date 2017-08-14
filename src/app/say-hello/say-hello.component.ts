import { Component, OnInit } from '@angular/core';
import {PlayAudioServiceService} from '../service/play-audio-service.service';

/**
 * 播放组件 , 是个图片按钮  <br>
 * 被点击的时候 , 使能发出声音的组件发声
 */
@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {

  /**
   * 鼠标移动的图片上面
   */
  title: string;

  /**
   * 图片地址
   */
  imgSrc: string;

  constructor( private playAudioServiceService: PlayAudioServiceService) {
  }

  ngOnInit() {
    this.title = 'Lenka.jpg';
    this.imgSrc = '../../assets/image/Lenka.jpg';
  }

  sayHello() {
    // console.log('sayHello');
    this.playAudioServiceService.playAudio();
  }

}
