import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { Task, emptyMessage } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] | emptyMessage[] {
    return this.tasksService.getAllTask();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto): Task {
    // console.log(newTask);
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Task[] {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() newTask: UpdateTaskDto): Task {
    return this.tasksService.updateTask(id, newTask);
  }
}
