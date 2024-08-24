import { Component, computed, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class Example1Component implements OnInit{

  //Set and Computed method//

  firtName = signal<String>('Johan');

  lastName = signal<String>('Dow');

  // fullName = this.firtName() + ' ' + this.lastName();
  fullName = computed(()=> this.firtName() + ' ' + this.lastName());

  form!: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required])
    })
  }
  
  onSubmit() {
    this.firtName.set(this.form.controls['firstName'].value);
    this.lastName.set(this.form.controls['lastName'].value);
    // console.log(this.form.controls['firstName'].value);
    // console.log(this.form.controls['lastName'].value);
  }

}
