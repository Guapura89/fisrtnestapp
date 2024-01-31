import { TaskStatus } from './tasks.entity';
import { IsString, IsEnum, MinLength, IsOptional } from 'class-validator';

// export interface CreateTaskDto extends Pick<Task, 'title' | 'description'> {}

export class CreateTaskDto {
  @IsString()
  @MinLength(4)
  title: string;

  @IsString()
  @MinLength(4)
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @MinLength(4)
  @IsOptional()
  title?: string;

  @IsString()
  @MinLength(4)
  @IsOptional()
  description?: string;

  @IsString()
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
