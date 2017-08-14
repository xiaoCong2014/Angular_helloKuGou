import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
    this.title = 'Lenka.jpg';
    this.imgSrc = '../../assets/image/Lenka.jpg';
  }

  sayHello() {
    // log.
    console.log('sayHello');
  }

}
