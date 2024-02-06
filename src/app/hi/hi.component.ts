import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
   helloForm:FormGroup;
   data:any;
   constructor (private like:FormBuilder,private http: HttpClient,private router:Router) {
    this.helloForm = this.like.group ({
      username: ['',[Validators.required, Validators.minLength(5)]],
      password: ['',[Validators.required, Validators.minLength(5)]],
      phone: ['',[Validators.required, Validators.minLength(10)]],
      age: ['',[Validators.required]],
      address: ['',[Validators.required]],
      state: ['',[Validators.required]],
      city: ['',[Validators.required]]
    })
   }
   ngOnInit(): void {
     
   }
postdata() {
  this.http.post("http://localhost:3000/posts",this.helloForm.value).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/bye']);
  alert("submit successfully");
 })
}
}
