import { CreateDeliverymanDto, UpdateDeliverymanDto } from './dto/create-deliveryman.dto';
import { Repository } from 'typeorm';
import { DeliverymanEntity } from './deliveryman.entity';
export declare class DeliverymanService {
    private readonly repo;
    constructor(repo: Repository<DeliverymanEntity>);
    getAll(): Promise<{
        message: string;
        data: any;
    }>;
    getOne(id: number): Promise<{
        message: string;
        data: any;
    }>;
    searchByPhone(phone: string): Promise<{
        message: string;
        data: any;
    }>;
    count(): Promise<{
        message: string;
        data: {
            count: any;
        };
    }>;
    create(dto: CreateDeliverymanDto): Promise<{
        message: string;
        data: any;
    }>;
    update(id: number, dto: UpdateDeliverymanDto): Promise<{
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
    remove(id: number): Promise<{
        message: string;
        data: any;
    }>;
    findByFullNameSubstring(substring: string): Promise<{
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
