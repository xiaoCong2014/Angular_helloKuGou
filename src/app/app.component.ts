import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // appTitle : string = 'app';

  title: string = 'Lenka.jpg';
  imgSrc: string = '../assets/image/Lenka.jpg';


  volume: Number = 1;
  audioSrc: string = 'http://ad72d9d82859ce062cb4.b0.upaiyun.com/apicloud/76285fe040681b170a6d310a52d196ef.mp3';
}
