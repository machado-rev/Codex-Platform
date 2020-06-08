import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { debounceTime, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';
import { ShareService } from 'src/app/services/share.service';
import { CustomValidators } from './custom-validators';

declare var $: any;
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
})
export class LoginSignupComponent implements OnInit {
  isFreelancer: Boolean;
  usernameExist: Boolean = false;
  toRender: String;
  roleSelected: String;
  form: FormGroup;
  verifyCode: FormGroup;
  loginform: FormGroup;
  loadingBtnContent = `<i class="fa fa-circle-o-notch fa-spin"></i> Hold On...`;
  originalBtnContent;
  submitted: boolean = false;
  resetPasswordForm;
  constructor(
    public role: ActivatedRoute,
    public router: Router,
    public http: HttpService,
    public storage: StorageService,
    public share: ShareService,
    private fb: FormBuilder
  ) {
    this.form = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
      fullName: new FormControl(null, { validators: [Validators.required] }),
      userName: new FormControl(null, { validators: [Validators.required] }),
      phoneNumber: new FormControl(null, {validators:[Validators.minLength(10), Validators.maxLength(10)]}),
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            Validators.minLength(6)
          ])
        ],
      typeUser: new FormControl(null, { validators: [Validators.required] }),
      }
    );
  }

  ngOnInit(): void {

    this.verifyCode = new FormGroup({
      userName: new FormControl(null, { validators: [Validators.required] }),
      typeUser: new FormControl(null, { validators: [Validators.required] }),
      verifyCode: new FormControl(null, { validators: [Validators.required] }),
    });

    this.resetPasswordForm = new FormGroup({
      userName: new FormControl(null, { validators: [Validators.required] }),
      typeUser: new FormControl(null, { validators: [Validators.required] }),
      verifyCode: new FormControl(null, { validators: [Validators.required] }),
      newPassword: new FormControl(null, { validators: [Validators.required] }),
      cpassword: new FormControl(null, { validators: [Validators.required] }),
    });

    this.loginform = new FormGroup({
      userName: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
      typeUser: new FormControl(null, { validators: [Validators.required] }),
    });

    this.role.params.subscribe((result) => {
      this.roleSelected = result.role;
      this.toRender = result.render;
      console.log(this.roleSelected);
      if (this.roleSelected == 'freelancer') {
        this.isFreelancer = true;
      } else {
        this.isFreelancer = false;
      }
      if (this.toRender == 'signup') this.showSignup();
      else this.showLogin();
    });

    this.formFunctions();

    fromEvent(document.getElementById('username'), 'keyup')
      .pipe(debounceTime(1000))
      .subscribe(() => {
        console.log(this.form.value.userName);
        let data;
        if (this.isFreelancer) {
          data = {
            userName: this.form.value.userName,
            typeUser: 0,
          };
        } else {
          data = {
            userName: this.form.value.userName,
            typeUser: 1,
          };
        }
        console.log(data);
        this.http
          .postToBackend('/users/check/username', data)
          .then((res: any) => {
            console.log(res);
            if (res.statusCode == 7007) {
              document.getElementById('username').style.backgroundImage =
                "url('/assets/img/icons/close.png')";
              this.usernameExist = true;
            } else {
              document.getElementById('username').style.backgroundImage =
                "url('/assets/img/icons/check.png')";
              this.usernameExist = false;
            }
          });
      });
  }

  openVerifyModal() {
    Swal.fire({
      title: 'Email not verified!',
      text: 'You have not verified your email on this platform',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Send verification link',
      cancelButtonText: 'Close',
    }).then((result) => {
      if (result.value) {
        const data = {
          username: this.loginform.value.userName,
          isSignup: true,
          typeUser: this.loginform.value.typeUser,
        };
        this.http.postToBackend('/users/resend', data).then((res: any) => {
          console.log(res)
          if (res.statusCode == 7000) {
            this.form.patchValue({
              userName: this.loginform.value.userName
            })
            this.showVerify();
            Swal.fire(
              'Mail Sent!',
              'The link have been sent to your mail, please click the link to verify your account',
              'success'
            );
          } else {
            Swal.fire('Registeration Failed', res.msg, 'error');
          }
        });
      }
    });
  }

  verifyFreelancer() {
    this.verifyCode.patchValue({
      userName: this.form.value.userName,
    });
    if (this.isFreelancer) {
      this.verifyCode.patchValue({
        typeUser: 0,
      });
    } else {
      this.verifyCode.patchValue({
        typeUser: 1,
      });
    }
    console.log(this.verifyCode.value);
    if (this.verifyCode.invalid) return;
    console.log(this.verifyCode.value);
    this.http
      .postToBackend('/users/email/verify', this.verifyCode.value)
      .then((res: any) => {
        console.log(res);
        if(res.statusCode == 7000) {
          Swal.fire(
            'Verification Successfull!',
            'Your mail is verified successfully. You can login now',
            'success'
          ).then(response=> {
            console.log(response)
            this.showLogin();
          })
        }else {
          Swal.fire(
            'Verification Failed!',
            'Your code is incorrect. Please enter the correct code.',
            'error'
          ).then(response=> {
            console.log(response)
            // this.showLogin();
          })
        }

      });
  }

  loginFreelancer() {
    var loginBtn;
    loginBtn = $('#loginBtn');
    this.originalBtnContent = loginBtn.val();
    loginBtn.html(this.loadingBtnContent);

    if (this.isFreelancer) {
      this.loginform.patchValue({
        typeUser: 0,
      });
    } else {
      this.loginform.patchValue({
        typeUser: 1,
      });
    }
    console.log(this.loginform.value);
    if (this.loginform.invalid) {
      loginBtn.html('Login');
      return
    }

    console.log(this.loginform.value);
    this.http
      .postToBackend('/users/login', this.loginform.value)
      .then((res: any) => {
        console.log(res);
        loginBtn.html('Login');
        if (res.statusCode == 7005) {
          Swal.fire(
            'Login Failed!',
            'Username not exist, please enter correct Username',
            'error'
          );
          return;
        } else if (res.statusCode == 7004) {
          Swal.fire('Login Failed!', 'Incorrect Password', 'warning');
          return;
        } else if (res.statusCode == 7010) {
          return this.openVerifyModal();
        } else if (res.statusCode == 7000) {
          this.storage.saveUser(res.data.user);
          this.storage.saveToken(res.data.token);
          this.share.updateUser(res.data.user);
          this.share.updateToken(res.data.token);
          if (this.isFreelancer) {
            this.storage.saveUserRole('freelancer');
            this.share.updateUserRole('freelancer');
            if(!res.data.user.profile_filled) this.router.navigate(['/register-freelancer']);
            else this.router.navigate(['/freelancer']);
          } else {
            this.storage.saveUserRole('employer');
            this.share.updateUserRole('employer');
            this.router.navigate(['/employer']);
          }
        }
      });
  }

  formFunctions() {
    $(document).ready(function () {
      'use strict';

      var usernameError = true,
        emailError = true,
        passwordError = true,
        passConfirm = true;

      // Detect browser for css purpose
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
      }

      // Label effect
      $('input').focus(function () {
        $(this).siblings('label').addClass('active');
      });

      // Reload page
      $('a.profile').on('click', function () {
        location.reload(true);
      });
    });
  }

  showSignup() {
    $('.signup-piece').removeClass('switched');
    $('.reset-piece').addClass('switched');
    $('.login-piece').addClass('switched');
    $('.verify-piece').addClass('switched');
  }

  showLogin() {
    $('.login-piece').removeClass('switched');
    $('.signup-piece').addClass('switched');
    $('.reset-piece').addClass('switched');
    $('.verify-piece').addClass('switched');
  }

  showVerify() {
    $('.signup-piece').addClass('switched');
    $('.reset-piece').addClass('switched');
    $('.login-piece').addClass('switched');
    $('.verify-piece').removeClass('switched');
  }

  showReset(){
    $('.signup-piece').addClass('switched');
    $('.login-piece').addClass('switched');
    $('.verify-piece').addClass('switched');
    $('.reset-piece').removeClass('switched');
  }

  forgotPassword(){
    Swal.fire({
      title: 'Reset Password',
      text:'Enter your User to get the reset password',
      input: 'text',
      inputPlaceholder: 'Enter your Username',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      //preConfirm: (login) => {
        // return fetch(`//api.github.com/users/${login}`)
        //   .then(response => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText)
        //     }
        //     return response.json()
        //   })
        //   .catch(error => {
        //     Swal.showValidationMessage(
        //       `Mail does not exist`
        //     )
        //   })
      //},
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        let data;
        if (this.isFreelancer) {
          this.resetPasswordForm.patchValue({
            userName: result.value,
            typeUser: 0
          })
          data = {
            isSignup:false,
            userName: result.value,
            typeUser: 0
          };
        } else {
          this.resetPasswordForm.patchValue({
            userName: result.value,
            typeUser: 1
          })
          data = {
            isSignup:false,
            userName: result.value,
            typeUser: 1
          };
        }
        console.log(data)
        this.http
        .postToBackend('/users/resend', data)
        .then((res: any) => {
          console.log(res)
          if(res.statusCode === 7000) {
            this.showReset();
            Swal.fire(
              'Mail Sent!',
              'Link have been sent to your mail for reset password',
              'success'
            )
          }else if(res.statusCode === 7005) {
            Swal.fire(
              'Failed!',
              'Username not found',
              'error'
            )
          }else {
            Swal.fire(
              'Failed!',
              'Password reset failed try after sometime',
              'error'
            )
          }
        });
      }
    })
  }

  resetPassword() {
    console.log(this.resetPasswordForm.value);
    if(this.resetPasswordForm.invalid) return;
    console.log(this.resetPasswordForm.value);
    this.http.postToBackend('/users/password/reset',this.resetPasswordForm.value)
    .then((res: any) => {
      console.log(res)
      if(res.statusCode === 7000) {
        Swal.fire(
          'Password Reset!',
          'Your Password is Reset Successfull',
          'success'
        )
        this.showLogin();
      } else {
        Swal.fire(
          'Failed!',
          'Your Password is Reset is failed. Try after sometime',
          'error'
        )
      }
    })
    .catch(err=> {
      console.log(err)
    })
  }

  register() {
    var signupBtn;
    signupBtn = $('#signupBtn');
    this.originalBtnContent = signupBtn.val();
    signupBtn.html(this.loadingBtnContent);
    if (this.isFreelancer) {
      this.form.patchValue({
        typeUser: 0,
      });
    } else {
      this.form.patchValue({
        typeUser: 1,
      });
    }
    console.log(this.form.value);
    this.submitted = true;
    if (this.form.invalid || this.usernameExist) {
      signupBtn.html('Signup Now');
      return;
    };
    if (this.form.value.phoneNumber == null || this.form.value.phoneNumber == '')
      this.form.removeControl('phoneNumber');
    console.log(this.form.value);


    this.http
      .postToBackend('/users/register', this.form.value)
      .then((res: any) => {
        signupBtn.html('Signup Now');
        console.log(this.originalBtnContent,this.loadingBtnContent);
        console.log(res);
        if (res.statusCode == 7007) {
          Swal.fire(
            'Registeration Failed',
            'Email already exits, please choose a diffrent email',
            'error'
          );
        } else if (res.statusCode == 7000) {
          Swal.fire(
            'Registeration Successfull',
            'A code have been sent to your mail, please enter the code to verify your account',
            'success'
          );
          this.showVerify();
        } else {
          Swal.fire('Registeration Failed', res.msg, 'error');
        }
      });
      //console.log("original content");
  }
}

