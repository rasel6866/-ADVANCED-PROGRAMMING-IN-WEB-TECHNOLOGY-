// src/deliveryman/deliveryman.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateDeliverymanDto,
  UpdateDeliverymanDto,
} from './dto/create-deliveryman.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { DeliverymanEntity } from './deliveryman.entity';
 
@Injectable()
export class DeliverymanService {
  constructor(
    @InjectRepository(DeliverymanEntity)
    private readonly repo: Repository<DeliverymanEntity>,
  ) {}
 
  // ---------- BASIC CRUD (old task 1) ----------
 
  // GET /deliveryman
  async getAll() {
    const deliverymen = await this.repo.find();
    return {
      message: 'All delivery men list',
      data: deliverymen,
    };
  }
 
  // GET /deliveryman/:id
  async getOne(id: number) {
    const deliveryman = await this.repo.findOne({ where: { id } });
    if (!deliveryman) {
      throw new NotFoundException(`Deliveryman with id ${id} not found`);
    }
    return {
      message: 'Single delivery man',
      data: deliveryman,
    };
  }
 
  // GET /deliveryman/search/by-phone?phone=...
  async searchByPhone(phone: string) {
    const result = await this.repo.find({ where: { phone } });
    return {
      message: 'Search result by phone',
      data: result,
    };
  }
 
  // GET /deliveryman/stats/count
  async count() {
    const count = await this.repo.count();
    return {
      message: 'Total delivery men count',
      data: { count },
    };
  }
 
  // POST /deliveryman/register  (and register-with-file)
  async create(dto: CreateDeliverymanDto) {
    // username & fullName for Task-3 schema
    const baseName = dto.name?.trim() || 'user';
    const username = baseName.toLowerCase().replace(/\s+/g, '');
    const fullName = baseName;
 
    const deliveryman = this.repo.create({
      username,
      fullName,
      isActive: false, // default
      password: dto.password,
      phone: dto.phone,
      documentUrl: dto.documentUrl,
    });
 
    const saved = await this.repo.save(deliveryman);
    return {
      message: 'Delivery man created successfully',
      data: saved,
    };
  }
 
  // PUT /deliveryman/:id
  async update(id: number, dto: UpdateDeliverymanDto) {
    const deliveryman = await this.repo.findOne({ where: { id } });
    if (!deliveryman) {
      throw new NotFoundException(`Deliveryman with id ${id} not found`);
    }
 
    // Update extra fields (phone/password/documentUrl) + fullName if you want
    if (dto.name) {
      deliveryman.fullName = dto.name;
    }
    if (dto.password) {
      deliveryman.password = dto.password;
    }
    if (dto.phone) {
      deliveryman.phone = dto.phone;
    }
    if (dto.documentUrl) {
      deliveryman.documentUrl = dto.documentUrl;
    }
 
    const updated = await this.repo.save(deliveryman);
    return {
      message: 'Delivery man updated successfully',
      data: updated,
    };
  }
 
  // PATCH /deliveryman/:id/password
  async updatePassword(id: number, password: string) {
    const deliveryman = await this.repo.findOne({ where: { id } });
    if (!deliveryman) {
      throw new NotFoundException(`Deliveryman with id ${id} not found`);
    }
 
    deliveryman.password = password;
    await this.repo.save(deliveryman);
 
    return {
      message: 'Password updated successfully',
      data: { id, password },
    };
  }
 
  // DELETE /deliveryman/:id
  async remove(id: number) {
    const deliveryman = await this.repo.findOne({ where: { id } });
    if (!deliveryman) {
      throw new NotFoundException(`Deliveryman with id ${id} not found`);
    }
 
    await this.repo.remove(deliveryman);
 
    return {
      message: 'Delivery man deleted successfully',
      data: deliveryman,
    };
  }
 
  // ---------- TASK 3 SPECIFIC OPERATIONS ----------
 
  // 1) Retrieve users whose full name contains a specific substring
  async findByFullNameSubstring(substring: string) {
    const users = await this.repo.find({
      where: { fullName: ILike(`%${substring}%`) },
    });
    return {
      message: 'Users whose full name contains substring',
      data: users,
    };
  }
 
  // 2) Retrieve a user based on their unique username
  async findByUsername(username: string) {
    const user = await this.repo.findOne({
      where: { username: username.toLowerCase() },
    });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return {
      message: 'User found by username',
      data: user,
    };
  }
 
  // 3) Remove a user based on their unique username
  async removeByUsername(username: string) {
    const user = await this.repo.findOne({
      where: { username: username.toLowerCase() },
    });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
 
    await this.repo.remove(user);
 
    return {
      message: 'User removed by username',
      data: user,
    };
  }
}