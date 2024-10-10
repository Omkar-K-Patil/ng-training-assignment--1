import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskServiceService } from '../task-service.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allTaskData: any;
  addTaskForm: any;
  tempData: any;
  addModal = false;
  useAdd = true;
  tempId: number = 0;

  constructor(private TaskServiceService: TaskServiceService) {}
  refresh() {
    this.TaskServiceService.getAllTasks().subscribe((res: any) => {
      this.allTaskData = res;
      console.log(this.allTaskData);
    });
  }
  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskStatus: new FormControl(''),
      taskDate: new FormControl(''),
      taskPriority: new FormControl(''),
      taskDesc: new FormControl(''),
    });
    this.refresh();
  }
  saveTask(formdata: any) {
    this.TaskServiceService.saveTask({ data: formdata }).subscribe(
      (res: any) => {
        this.addModal = false;
        this.refresh();
      }
    );
  }
  updateTask(formdata: any) {
    this.TaskServiceService.updateTask({
      data: formdata,
      id: this.tempId,
    }).subscribe((res: any) => {
      this.addModal = false;
      this.refresh();
    });
  }
  TaskModal(show: boolean) {
    if (show) this.addModal = true;
    else this.addModal = false;
  }
  editTask(id: any) {
    this.tempId = id;
    this.useAdd = false;
    this.TaskServiceService.findTask({ data: id }).subscribe((res: any) => {
      console.log(res);
      this.addModal = true;
      let formattedDate;
      console.log(res.taskDate);
      const date = new Date(res.taskDate);
      formattedDate = date.toISOString().split('T')[0];
      console.log(formattedDate);
      this.addTaskForm.patchValue({
        taskName: res.taskName,
        taskStatus: res.taskStatus,
        taskDate: formattedDate,
        taskPriority: res.taskPriority,
        taskDesc: res.taskDesc,
      });
    });
  }
  deleteTask(id: any) {
    this.TaskServiceService.deleteTask({ data: id }).subscribe((res: any) => {
      this.refresh();
    });
  }
}
