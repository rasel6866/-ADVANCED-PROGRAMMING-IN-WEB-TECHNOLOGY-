"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverymanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const deliveryman_entity_1 = require("./deliveryman.entity");
let DeliverymanService = class DeliverymanService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        const deliverymen = await this.repo.find();
        return {
            message: 'All delivery men list',
            data: deliverymen,
        };
    }
    async getOne(id) {
        const deliveryman = await this.repo.findOne({ where: { id } });
        if (!deliveryman) {
            throw new common_1.NotFoundException(`Deliveryman with id ${id} not found`);
        }
        return {
            message: 'Single delivery man',
            data: deliveryman,
        };
    }
    async searchByPhone(phone) {
        const result = await this.repo.find({ where: { phone } });
        return {
            message: 'Search result by phone',
            data: result,
        };
    }
    async count() {
        const count = await this.repo.count();
        return {
            message: 'Total delivery men count',
            data: { count },
        };
    }
    async create(dto) {
        const baseName = dto.name?.trim() || 'user';
        const username = baseName.toLowerCase().replace(/\s+/g, '');
        const fullName = baseName;
        const deliveryman = this.repo.create({
            username,
            fullName,
            isActive: false,
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
    async update(id, dto) {
        const deliveryman = await this.repo.findOne({ where: { id } });
        if (!deliveryman) {
            throw new common_1.NotFoundException(`Deliveryman with id ${id} not found`);
        }
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
    async updatePassword(id, password) {
        const deliveryman = await this.repo.findOne({ where: { id } });
        if (!deliveryman) {
            throw new common_1.NotFoundException(`Deliveryman with id ${id} not found`);
        }
        deliveryman.password = password;
        await this.repo.save(deliveryman);
        return {
            message: 'Password updated successfully',
            data: { id, password },
        };
    }
    async remove(id) {
        const deliveryman = await this.repo.findOne({ where: { id } });
        if (!deliveryman) {
            throw new common_1.NotFoundException(`Deliveryman with id ${id} not found`);
        }
        await this.repo.remove(deliveryman);
        return {
            message: 'Delivery man deleted successfully',
            data: deliveryman,
        };
    }
    async findByFullNameSubstring(substring) {
        const users = await this.repo.find({
            where: { fullName: (0, typeorm_2.ILike)(`%${substring}%`) },
        });
        return {
            message: 'Users whose full name contains substring',
            data: users,
        };
    }
    async findByUsername(username) {
        const user = await this.repo.findOne({
            where: { username: username.toLowerCase() },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with username ${username} not found`);
        }
        return {
            message: 'User found by username',
            data: user,
        };
    }
    async removeByUsername(username) {
        const user = await this.repo.findOne({
            where: { username: username.toLowerCase() },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with username ${username} not found`);
        }
        await this.repo.remove(user);
        return {
            message: 'User removed by username',
            data: user,
        };
    }
};
exports.DeliverymanService = DeliverymanService;
exports.DeliverymanService = DeliverymanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deliveryman_entity_1.DeliverymanEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], DeliverymanService);
//# sourceMappingURL=deliveryman.service.js.map