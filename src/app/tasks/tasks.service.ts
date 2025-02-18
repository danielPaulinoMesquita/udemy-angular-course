import {NewTaskData} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Master Angular lorem ipsum dolor sit amet',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master 2 Angular',
      summary: 'Master Angular lorem ipsum dolor sit amet',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Third 3 Angular',
      summary: 'Master Angular lorem ipsum dolor sit amet',
      dueDate: '2025-12-31'
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Master Third 4 Angular',
      summary: 'Testing Angular lorem ipsum dolor sit amet',
      dueDate: '2025-12-31'
    }
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId:string) {
    return this.tasks.filter((task) => task.userId === userId)
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().toISOString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
    this.saveTask()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTask()
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
