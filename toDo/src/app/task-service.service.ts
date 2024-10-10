import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  valid: any;
  constructor(private http: HttpClient) {}
  saveTask(data: any) {
    console.log(data);
    return this.http.post('http://localhost:8000/app/saveTask', data);
  }
  updateTask(data: any) {
    return this.http.post('http://localhost:8000/app/updateTask', data);
  }
  getAllTasks() {
    return this.http.get('http://localhost:8000/app/allList');
  }
  findTask(data: any) {
    return this.http.post('http://localhost:8000/app/findTask', data);
  }
  deleteTask(data: any) {
    return this.http.post('http://localhost:8000/app/deleteTask', data);
  }
}
