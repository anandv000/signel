import { Component, OnInit } from '@angular/core';
import { IEmployee } from './Interfaces/employee';
import { HttpService } from './http.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet,RouterLink],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnInit {
  constructor(private service: HttpService) {}
  employeeList: IEmployee[] = [];
  form!: FormGroup;
  isAddForm: boolean = false;
  ngOnInit(): void {
    this.createForm();
    this.service.getAllEmployee().subscribe((res: any) => {
      this.employeeList = res;
      console.log(this.employeeList);
    });
  }

  addForm() {
    this.isAddForm = !this.isAddForm;
  }

  createForm() {
    this.form =  new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      age: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required]),
    })
  }

  onSave() {
    this.service.postEmployee(this.form.value).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
