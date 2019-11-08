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
  constructor() { }

  ngOnInit() {
  }

  cleanID() {
    this.userID = '';
  }

  login() {
    if (this.userID === '') {
      this.errorHint = '账号不能为空';
      document.getElementById('id').focus();
      return;
    }
    if (this.password === '') {
      this.errorHint = '密码不能为空';
      document.getElementById('password').focus();
      return;
    }
    this.errorHint = '';
  }
}
