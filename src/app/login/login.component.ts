import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userID = '';
  password = '';
  errorHint = '';
  imageURL = [
    '../../assets/images/login/senna_1920_1200.jpg',
    '../../assets/images/login/64138434_p0.jpg'
  ];
  i = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      // document.getElementById('container').style.backgroundImage = `url(${this.imageURL[this.i]})`;
      // this.i++;
      // this.i %= this.imageURL.length;
      // console.log(this.i);
    }, 2000);
    document.getElementById('container').style.backgroundImage = `url(${this.imageURL[0]})`;
    console.log(window.innerWidth);
    console.log(window.outerWidth);
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
