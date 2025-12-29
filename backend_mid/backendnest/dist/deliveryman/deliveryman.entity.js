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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverymanEntity = void 0;
const typeorm_1 = require("typeorm");
let DeliverymanEntity = class DeliverymanEntity {
    id;
    username;
    fullName;
    isActive;
    password;
    phone;
    documentUrl;
    normalizeUsername() {
        if (this.username) {
            this.username = this.username.toLowerCase().trim();
        }
        if (this.fullName) {
            this.fullName = this.fullName.trim();
        }
    }
};
exports.DeliverymanEntity = DeliverymanEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DeliverymanEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], DeliverymanEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], DeliverymanEntity.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DeliverymanEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 150 }),
    __metadata("design:type", String)
], DeliverymanEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 20 }),
    __metadata("design:type", String)
], DeliverymanEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DeliverymanEntity.prototype, "documentUrl", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliverymanEntity.prototype, "normalizeUsername", null);
exports.DeliverymanEntity = DeliverymanEntity = __decorate([
    (0, typeorm_1.Entity)('deliverymen')
], DeliverymanEntity);
//# sourceMappingURL=deliveryman.entity.js.map