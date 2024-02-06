import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   data:any
  constructor(private http:HttpClient) { }

updateemployee(id:number,data:any) {
  return this.http.put('http://localhost:3000/posts/'+id,data);
}
fetchData(id:number){
  return this.http.get('http://localhost:3000/posts/'+id);
}

postdata(data:any){
  return this.http.post('http://localhost:3000/posts',data);
}
}
