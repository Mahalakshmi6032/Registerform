import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  data:any;
  id!: number;
  updateForm!:FormGroup;
  username: any;
  dataid:any;
  employee:any;

  constructor(private service:UserService,private http:HttpClient,
    private formbuilder:FormBuilder,private activatedRoute:ActivatedRoute,private router:Router) {

      this.updateForm =this.formbuilder.group({
        username:'',
        password:'',
        phone:'',
        age:'',
        address:'',
        state:'',
        city:''
      })
    }
    ngOnInit():void{
      this.activatedRoute.paramMap.subscribe((param:Params)=>{
        this.dataid=param['get']('id');
        console.log("data id is",this.dataid);
      })
      this.service.fetchData(this.dataid).subscribe((data:any)=>{
        this.employee=data;
        console.log(this.employee);
        this.updateForm.setValue({
          username:this.employee.name,
          password:this.employee.password,
          phone:this.employee.phone,
          age:this.employee.age,
          address:this.employee.address,
          state:this.employee.state,
          city:this.employee.city
        })
      })
    }
  update(){
    const employeedata=this.updateForm.value
    this.service.updateemployee(this.dataid,employeedata).subscribe((res:any)=>{
      this.router.navigate(["/data"]);
      console.log(res);
      alert("update Successfully")
    })
  }
}
