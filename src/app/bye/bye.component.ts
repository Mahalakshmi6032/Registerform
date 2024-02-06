import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit {
  ballForm!:FormGroup;
  
   constructor (private like:FormBuilder,private router: Router,private http: HttpClient) {
    this.ballForm = this.like.group ({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
}

ngOnInit(): void {
}

login(): void {
  this.http.get<any>("http://localhost:3000/posts").subscribe((res: any) => {
    const user = res.find((a: any) => {
      return a.username === this.ballForm.value.username && a.password === this.ballForm.value.password
    });
    if (user) {
      localStorage.setItem('currentuser', JSON.stringify(user));
      this.router.navigate(['/data']);
      console.log(user);
      alert('user login successfully')
    }
    else {
      alert("invalid credentials");
    }
  })
}
}
