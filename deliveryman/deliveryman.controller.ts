import {

  Controller,

  Get,

  Post,

  Put,

  Patch,

  Delete,

  Param,

  Body,

  Query,

  ParseIntPipe,

} from '@nestjs/common';

import { DeliverymanService } from './deliveryman.service';

import {

  CreateDeliverymanDto,

  UpdateDeliverymanDto,

} from './dto/create-deliveryman.dto';
 
@Controller('deliveryman')

export class DeliverymanController {

  constructor(private readonly deliverymanService: DeliverymanService) {}
 
  // 1) GET /deliveryman  -> sob deliveryman

  @Get()

  getAllDeliverymen() {

    return this.deliverymanService.getAll();

  }
 
  // 2) GET /deliveryman/:id  (@Param)

  @Get(':id')

  getDeliverymanById(@Param('id', ParseIntPipe) id: number) {

    return this.deliverymanService.getOne(id);

  }
 
  // 3) GET /deliveryman/search?phone=...  (@Query)

  @Get('search/by-phone')

  searchByPhone(@Query('phone') phone: string) {

    return this.deliverymanService.searchByPhone(phone);

  }
 
  // 4) GET /deliveryman/count  -> total number

  @Get('stats/count')

  getCount() {

    return this.deliverymanService.count();

  }
 
  // 5) POST /deliveryman/register  (@Body, DTO)

  @Post('register')

  createDeliveryman(@Body() body: CreateDeliverymanDto) {

    return this.deliverymanService.create(body);

  }
 
  // 6) PUT /deliveryman/:id  (full update)

  @Put(':id')

  updateDeliveryman(

    @Param('id', ParseIntPipe) id: number,

    @Body() body: UpdateDeliverymanDto,

  ) {

    return this.deliverymanService.update(id, body);

  }
 
  // 7) PATCH /deliveryman/:id/password  (only password update)

  @Patch(':id/password')

  updatePassword(

    @Param('id', ParseIntPipe) id: number,

    @Body('password') password: string,

  ) {

    return this.deliverymanService.updatePassword(id, password);

  }
 
  // 8) DELETE /deliveryman/:id

  @Delete(':id')

  deleteDeliveryman(@Param('id', ParseIntPipe) id: number) {

    return this.deliverymanService.remove(id);

  }

}

 