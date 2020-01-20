import { Component, OnInit } from '@angular/core';
import { style, animate, AnimationBuilder, keyframes, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [
    trigger('changeBk', [])
  ]
})
export class LoginComponent implements OnInit {

  userID = '';
  password = '';
  errorHint = '';
  imageURL = [
    '../../assets/images/login/senna_skin_1920_1200.jpg',
    '../../assets/images/login/senna_1920_1200.jpg',
    '../../assets/images/login/64138434_p0.jpg'
  ];
  i = 1;
  bgShow: HTMLElement;
  bgTransition: HTMLElement;
  bgChangeAnimate: any;
  // tslint:disable-next-line:variable-name
  constructor(private _builder: AnimationBuilder) { }

  ngOnInit() {  // 初始化背景图片
    this.bgShow = document.getElementById('bg-show');
    this.bgTransition = document.getElementById('bg-transition');
    this.bgShow.style.backgroundImage = `url(${this.imageURL[0]})`;
    this.bgTransition.style.backgroundImage = `url(${this.imageURL[1]})`;
    this.bgChangeAnimate = this._buildAnimation().create(this.bgShow);
    setInterval(() => {
      this.changeBg();
    }, 2000);
  }

  changeBg() {
    // 背景切换策略：先做动画-前景切图-前景显示-背景切图
    this.bgChangeAnimate.play();
    setTimeout(() => {
      this.bgShow.style.backgroundImage = `url(${this.imageURL[this.i]})`;
    }, 1000);
    setTimeout(() => {
      this.i++;
      this.i %= this.imageURL.length;
      this.bgTransition.style.backgroundImage = `url(${this.imageURL[this.i]})`;
    }, 2000);
  }

  private _buildAnimation() {
    return this._builder.build([
      animate('1000ms ease-out', style({
        opacity: 0
      }))
    ]);
  }

  cleanID() {
    this.userID = '';
  }
  cleanErrorHint() {
    this.errorHint = '';
  }

  login() {
    if (this.userID === '') {
      this.errorHint = '账号不能为空';
      const inputID = document.getElementById('id');
      inputID.focus();
      inputID.addEventListener('input', this.cleanErrorHint);
      return;
    }
    if (this.password === '') {
      this.errorHint = '密码不能为空';
      const inputPW = document.getElementById('password');
      inputPW.focus();
      inputPW.addEventListener('input', this.cleanErrorHint);
      return;
    }
    this.errorHint = '';
  }
}
