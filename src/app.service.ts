import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello = [
    {
      title: ' hola',
      desc: 'perrito',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
}
