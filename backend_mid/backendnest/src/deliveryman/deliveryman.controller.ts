// src/deliveryman/deliveryman.controller.ts
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
  UseInterceptors,
  UploadedFile,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeliverymanService } from './deliveryman.service';
import {
  CreateDeliverymanDto,
  UpdateDeliverymanDto,
} from './dto/create-deliveryman.dto';
import { PdfValidationPipe } from './pipes/pdf-validation.pipe';

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

  // 3) GET /deliveryman/search/by-phone?phone=...  (@Query)
  @Get('search/by-phone')
  searchByPhone(@Query('phone') phone: string) {
    return this.deliverymanService.searchByPhone(phone);
  }

  // 4) GET /deliveryman/stats/count  -> total number
  @Get('stats/count')
  getCount() {
    return this.deliverymanService.count();
  }

  // 5) POST /deliveryman/register  (@Body, DTO, JSON body)
  @Post('register')
  @UsePipes(new ValidationPipe())
  createDeliveryman(@Body() body: CreateDeliverymanDto) {
    return this.deliverymanService.create(body);
  }

  // EXTRA (Task 2 main demo) – form-data + PDF file
  // POST /deliveryman/register-with-file
  // form-data fields:
  //  - name (text)
  //  - password (text)
  //  - phone (text)
  //  - document (file, PDF)
  @Post('register-with-file')
  @UseInterceptors(FileInterceptor('document'))
  @UsePipes(new ValidationPipe())
  createDeliverymanWithFile(
    @Body() body: CreateDeliverymanDto,
    @UploadedFile(new PdfValidationPipe()) document: Express.Multer.File,
  ) {
    const dtoWithFile: CreateDeliverymanDto = {
      ...body,
      documentUrl: document.originalname,
    };

    return this.deliverymanService.create(dtoWithFile);
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

  // 8) DELETE /deliveryman/:id   (by numeric id)
  @Delete(':id')
  deleteDeliveryman(@Param('id', ParseIntPipe) id: number) {
    return this.deliverymanService.remove(id);
  }

  // ---------- TASK 3 EXTRA ROUTES ----------

  // A) Retrieve users whose full name contains a specific substring
  // GET /deliveryman/search/by-fullname?name=karim
  @Get('search/by-fullname')
  findByFullNameSubstring(@Query('name') name: string) {
    return this.deliverymanService.findByFullNameSubstring(name);
  }

  // B) Retrieve a user based on their unique username
  // GET /deliveryman/username/:username
  @Get('username/:username')
  findByUsername(@Param('username') username: string) {
    return this.deliverymanService.findByUsername(username);
  }

  // C) Remove a user based on their unique username
  // DELETE /deliveryman/username/:username
  @Delete('username/:username')
  removeByUsername(@Param('username') username: string) {
    return this.deliverymanService.removeByUsername(username);
  }
}