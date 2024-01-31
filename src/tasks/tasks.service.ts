import { Injectable } from '@nestjs/common';
import { Task, TaskStatus, emptyMessage } from './tasks.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  private task: Task[] = [];

  private emptyTasks: emptyMessage[] = [
    {
      message: 'Empty tasks',
    },
  ];

  getTaskById(id: string): Task {
    return this.task.find((item) => item.id === id);
  }

  getAllTask(): Task[] | emptyMessage[] {
    return this.task.length > 0 ? this.task : this.emptyTasks;
  }

  createTask(title: string, description: string) {
    const newTask = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };

    this.task.push(newTask);

    return newTask;
  }

  deleteTask(id: string) {
    this.task = this.task.filter((item) => item.id !== id);
    return this.task;
  }

  updateTask(id: string, updatingFields: UpdateTaskDto): Task {
    const oldTask = this.getTaskById(id);
    const newTask: Task = Object.assign(oldTask, updatingFields);

    this.task = this.task.map((item) => (item.id === id ? newTask : item));

    return newTask;
  }
}
