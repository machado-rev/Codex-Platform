import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
    isFreelancer: Boolean;
    toRender:String;
    roleSelected:String;
  constructor(public role: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {

    this.role.params.subscribe(result => {
        this.roleSelected = result.role;
        this.toRender = result.render;
        console.log(this.roleSelected);
        if(this.roleSelected == 'freelancer'){
           this.isFreelancer = true;
        }
        else {
            this.isFreelancer = false;
        }
        if(this.toRender == 'signup')
        this.showSignup();
        else
        this.showLogin();
    });
   
    this.formFunctions();
   
  }

  verifyFreelancer(){
    this.router.navigate(['/register-freelancer'])
  }

  loginFreelancer(){
    this.router.navigate(['/freelancer'])
  }

  loginEmployer(){
    this.router.navigate(['/employer'])
  }
  formFunctions(){
    $(document).ready(function () {

        'use strict';
    
        var usernameError = true,
            emailError    = true,
            passwordError = true,
            passConfirm   = true;
    
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

  showSignup(){
    $('.signup-piece').removeClass('switched');
    $('.login-piece').addClass('switched');
  }


  showLogin(){
    $('.signup-piece').addClass('switched');
    $('.login-piece').removeClass('switched');
  }

  showVerify(){
    $('.signup-piece').addClass('switched');
    $('.login-piece').addClass('switched');
    $('.verify-piece').removeClass('switched');
  }

}

//UNUSED CODE
        //    // form switch
        //    $('a.switch').click(function (e) {
        //     $(this).toggleClass('active');
        //     e.preventDefault();


        //     if ($('a.switch').hasClass('active')) {
        //         $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        //     } else {
        //         $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        //     }
        //});

  // Form validation
        // $('input').blur(function () {
    
        //     // User Name
        //     if ($(this).hasClass('name')) {
        //         if ($(this).val().length === 0) {
        //             $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
        //             usernameError = true;
        //         } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
        //             $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
        //             usernameError = true;
        //         } else {
        //             $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        //             usernameError = false;
        //         }
        //     }
        //     // Email
        //     if ($(this).hasClass('email')) {
        //         if ($(this).val().length == '') {
        //             $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
        //             emailError = true;
        //         } else {
        //             $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        //             emailError = false;
        //         }
        //     }
    
        //     // PassWord
        //     if ($(this).hasClass('pass')) {
        //         if ($(this).val().length < 8) {
        //             $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
        //             passwordError = true;
        //         } else {
        //             $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        //             passwordError = false;
        //         }
        //     }
    
        //     // PassWord confirmation
        //     if ($('.pass').val() !== $('.passConfirm').val()) {
        //         $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
        //         passConfirm = false;
        //     } else {
        //         $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        //         passConfirm = false;
        //     }
    
        //     // label effect
        //     if ($(this).val().length > 0) {
        //         $(this).siblings('label').addClass('active');
        //     } else {
        //         $(this).siblings('label').removeClass('active');
        //     }
        // });
    
    
        // Form submit
        // $('form.signup-form').submit(function (event) {
        //     event.preventDefault();
    
        //     if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
        //         $('.name, .email, .pass, .passConfirm').blur();
        //     } else {
        //         $('.signup, .login').addClass('switched');
    
        //         setTimeout(function () { $('.signup, .login').hide(); }, 700);
        //         setTimeout(function () { $('.brand').addClass('active'); }, 300);
        //         setTimeout(function () { $('.heading').addClass('active'); }, 600);
        //         setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
        //         setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
        //         setTimeout(function () { $('.form').hide(); }, 700);
        //     }
        // });