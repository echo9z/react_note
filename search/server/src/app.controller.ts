import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface IStudent {
  id: number;
  name: string;
  age: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/students')
  getStudents(): IStudent[] {
    return this.appService.getStudents();
  }
}
