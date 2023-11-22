import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Form!: FormGroup;
  validationMessages = {
    Id: {
      required: 'ID is required.'
    },
    Firstname: {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 3 characters.'
    },
    Lastname: {
      required: 'Last Name is required.',
      minlength: 'Last Name must be at least 3 characters.'
    },
    DateOfBirth: {
      required: 'Date of Birth is required.'
    },
    PhoneNumber: {
      required: 'Phone Number is required.',
      minlength: 'Phone Number must be at least 9 characters.'
    },
    Email: {
      required: 'Email is required.',
      minlength: 'Email must be at least 8 characters.',
      email: 'Please enter a valid email address.'
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      Id: [null, Validators.required],
      Firstname: ['', [Validators.required, Validators.minLength(3)]],
      Lastname: ['', [Validators.required, Validators.minLength(3)]],
      DateOfBirth: [null, Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      Email: ['', [Validators.required, Validators.minLength(8), Validators.email]]
    });
  }
  onSubmit() {
    if (this.Form.valid) {
      const userData: any = this.Form.value;
      console.log(userData);
    }
  }
}
