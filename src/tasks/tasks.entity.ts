export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

// type TaskStatus = 'pending' | 'progress' | 'done';

export class emptyMessage {
  message: string;
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
