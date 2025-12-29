import { PipeTransform } from '@nestjs/common';
export declare class PdfValidationPipe implements PipeTransform {
    transform(file: Express.Multer.File): any;
}
