import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  datas:any;
  constructor(private http:HttpClient,private router:Router){
  
  }
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.http.get('http://localhost:3000/posts/').subscribe(res=>{
      this.datas=res;
    })
  }
  
  deleteHello(id:number){
    this.http.delete('http://localhost:3000/posts/'+ id).subscribe(res=>{
      console.log(res);
      this.getData();
      alert("if you wany delete confirm")
    })
  }
  }

