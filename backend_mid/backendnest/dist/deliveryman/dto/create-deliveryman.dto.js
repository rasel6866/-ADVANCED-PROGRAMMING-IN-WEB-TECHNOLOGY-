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
exports.UpdateDeliverymanDto = exports.CreateDeliverymanDto = void 0;
const class_validator_1 = require("class-validator");
class CreateDeliverymanDto {
    name;
    password;
    phone;
    documentUrl;
}
exports.CreateDeliverymanDto = CreateDeliverymanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[A-Za-z ]+$/, {
        message: 'Name must not contain special characters',
    }),
    __metadata("design:type", String)
], CreateDeliverymanDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password must be at least 6 characters long',
    }),
    (0, class_validator_1.Matches)(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
    }),
    __metadata("design:type", String)
], CreateDeliverymanDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^01[0-9]{9}$/, {
        message: 'Phone must start with 01 and be 11 digits',
    }),
    __metadata("design:type", String)
], CreateDeliverymanDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeliverymanDto.prototype, "documentUrl", void 0);
class UpdateDeliverymanDto {
    name;
    password;
    phone;
    documentUrl;
}
exports.UpdateDeliverymanDto = UpdateDeliverymanDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[A-Za-z ]+$/, {
        message: 'Name must not contain special characters',
    }),
    __metadata("design:type", String)
], UpdateDeliverymanDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password must be at least 6 characters long',
    }),
    (0, class_validator_1.Matches)(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
    }),
    __metadata("design:type", String)
], UpdateDeliverymanDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^01[0-9]{9}$/, {
        message: 'Phone must start with 01 and be 11 digits',
    }),
    __metadata("design:type", String)
], UpdateDeliverymanDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDeliverymanDto.prototype, "documentUrl", void 0);
//# sourceMappingURL=create-deliveryman.dto.js.map