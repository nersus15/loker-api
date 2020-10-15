import { Controller } from '@nestjs/common';

@Controller('lokers')
export class LokersController {
  function index(){
    console.log("this is loker controller");
  }
}
