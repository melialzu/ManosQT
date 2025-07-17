import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './users.service';
import { faCircleCheck, faIdCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  faCircleCheck=faCircleCheck
  faIdCard=faIdCard
  
 
  registerForm = new FormGroup({
    name: new FormControl('',{nonNullable: true, validators:[Validators.required]}),
    lastName: new FormControl('',{nonNullable: true, validators:[Validators.required]}),
    email: new FormControl('',{nonNullable: true, validators:[Validators.required, Validators.email]}),
    password: new FormControl('',{nonNullable: true, validators:[Validators.required] }),
    dateBirth: new FormControl(new Date(),{nonNullable: true}),
  });


  constructor(private usersService:UsersService) {

  }



  get name() {return this.registerForm.get('name')!}
  get lastName() {return this.registerForm.get('lastName')!}
  get email() {return this.registerForm.get('email')!}
  get password() {return this.registerForm.get('password')!}



  signUp() {
    if (this.registerForm.valid) {
    this.usersService.save(this.registerForm.getRawValue()).subscribe((newUser) => {
      console.log('new user',newUser);
    })
  }

  }
}

