import { DeliverymanService } from './deliveryman.service';
import { CreateDeliverymanDto, UpdateDeliverymanDto } from './dto/create-deliveryman.dto';
export declare class DeliverymanController {
    private readonly deliverymanService;
    constructor(deliverymanService: DeliverymanService);
    getAllDeliverymen(): Promise<{
        message: string;
        data: any;
    }>;
    getDeliverymanById(id: number): Promise<{
        message: string;
        data: any;
    }>;
    searchByPhone(phone: string): Promise<{
        message: string;
        data: any;
    }>;
    getCount(): Promise<{
        message: string;
        data: {
            count: any;
        };
    }>;
    createDeliveryman(body: CreateDeliverymanDto): Promise<{
        message: string;
        data: any;
    }>;
    createDeliverymanWithFile(body: CreateDeliverymanDto, document: Express.Multer.File): Promise<{
        message: string;
        data: any;
    }>;
    updateDeliveryman(id: number, body: UpdateDeliverymanDto): Promise<{
        message: string;
        data: any;
    }>;
    updatePassword(id: number, password: string): Promise<{
        message: string;
        data: {
            id: number;
            password: string;
        };
    }>;
    deleteDeliveryman(id: number): Promise<{
        message: string;
        data: any;
    }>;
    findByFullNameSubstring(name: string): Promise<{
        message: string;
        data: any;
    }>;
    findByUsername(username: string): Promise<{
        message: string;
        data: any;
    }>;
    removeByUsername(username: string): Promise<{
        message: string;
        data: any;
    }>;
}
