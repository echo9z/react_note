import { Injectable } from '@nestjs/common';
interface IStudent {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStudents(): IStudent[] {
    return [
      { id: 1, name: 'tom', age: 15 },
      { id: 2, name: 'tom2', age: 14 },
      { id: 3, name: 'tom3', age: 18 },
    ];
  }
}
