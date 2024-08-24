import { Component, effect, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-example3',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './example3.component.html',
  styleUrl: './example3.component.scss'
})
export class Example3Component implements OnInit{

  employList = signal([
    {
      firstName: 'John',
      lastName: 'Doe',
      password: 'password123'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      password: 'mysecurepassword'
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      password: 'alicepass2024'
    },
    {
      firstName: 'Bob',
      lastName: 'Williams',
      password: 'bobpassword!'
    }
  ])

  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  
  onSubmit() {
    this.employList.update((data:any)=>{
      return data = [...data,this.form.value];
    })
    console.log(this.form.value);
  }
  effect = effect(()=> {
    console.log('it called :')
    this.employList()
  })


}
