import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm = new FormGroup({
    name: new FormControl('', Validators.required),
    key: new FormControl('',  [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  });
  returnUrl: string;

  get name() { return this.signInForm.get('name'); }
  get key() { return this.signInForm.get('key'); }

  constructor(private auth: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onLogin(type: string) {
    if (type === 'user' && !this.signInForm.valid) {
      return;
    }
    const user: User = {
      type,
      name: type === 'user' ? this.name.value : 'Guest',
      key: type === 'user' ? this.key.value : undefined
    };
    this.auth.login(user);
    this.router.navigate([this.returnUrl]);
  }

}
