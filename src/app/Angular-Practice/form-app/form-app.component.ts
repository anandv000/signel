import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-app',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-app.component.html',
  styleUrl: './form-app.component.scss'
})
export class FormAppComponent implements OnInit{

  form!: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(12), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['',[Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['',Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)],
      confirmPassword: ['',Validators.required],
      dob: ['',Validators.required],
      contectNumber: ['',[Validators.required,Validators.minLength(10), Validators.pattern(/^\d+$/)]]
    },{validators: this.groupValidators});
  }

  groupValidators: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  };

  togglePasswordVisibility(password:string) {
    if(password === 'password') {
      this.showPassword = !this.showPassword;
    } else if(password === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit() {
    if(this.form.valid) {
      console.log("MyFormData:", this.form.value);
      this.form.reset();
    } else {
      console.log("MyFormData is Invalid");
    }
  }

}
