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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverymanController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const deliveryman_service_1 = require("./deliveryman.service");
const create_deliveryman_dto_1 = require("./dto/create-deliveryman.dto");
const pdf_validation_pipe_1 = require("./pipes/pdf-validation.pipe");
let DeliverymanController = class DeliverymanController {
    deliverymanService;
    constructor(deliverymanService) {
        this.deliverymanService = deliverymanService;
    }
    getAllDeliverymen() {
        return this.deliverymanService.getAll();
    }
    getDeliverymanById(id) {
        return this.deliverymanService.getOne(id);
    }
    searchByPhone(phone) {
        return this.deliverymanService.searchByPhone(phone);
    }
    getCount() {
        return this.deliverymanService.count();
    }
    createDeliveryman(body) {
        return this.deliverymanService.create(body);
    }
    createDeliverymanWithFile(body, document) {
        const dtoWithFile = {
            ...body,
            documentUrl: document.originalname,
        };
        return this.deliverymanService.create(dtoWithFile);
    }
    updateDeliveryman(id, body) {
        return this.deliverymanService.update(id, body);
    }
    updatePassword(id, password) {
        return this.deliverymanService.updatePassword(id, password);
    }
    deleteDeliveryman(id) {
        return this.deliverymanService.remove(id);
    }
    findByFullNameSubstring(name) {
        return this.deliverymanService.findByFullNameSubstring(name);
    }
    findByUsername(username) {
        return this.deliverymanService.findByUsername(username);
    }
    removeByUsername(username) {
        return this.deliverymanService.removeByUsername(username);
    }
};
exports.DeliverymanController = DeliverymanController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "getAllDeliverymen", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "getDeliverymanById", null);
__decorate([
    (0, common_1.Get)('search/by-phone'),
    __param(0, (0, common_1.Query)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "searchByPhone", null);
__decorate([
    (0, common_1.Get)('stats/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "getCount", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deliveryman_dto_1.CreateDeliverymanDto]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "createDeliveryman", null);
__decorate([
    (0, common_1.Post)('register-with-file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('document')),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new pdf_validation_pipe_1.PdfValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deliveryman_dto_1.CreateDeliverymanDto, typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "createDeliverymanWithFile", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_deliveryman_dto_1.UpdateDeliverymanDto]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "updateDeliveryman", null);
__decorate([
    (0, common_1.Patch)(':id/password'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "deleteDeliveryman", null);
__decorate([
    (0, common_1.Get)('search/by-fullname'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "findByFullNameSubstring", null);
__decorate([
    (0, common_1.Get)('username/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "findByUsername", null);
__decorate([
    (0, common_1.Delete)('username/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliverymanController.prototype, "removeByUsername", null);
exports.DeliverymanController = DeliverymanController = __decorate([
    (0, common_1.Controller)('deliveryman'),
    __metadata("design:paramtypes", [deliveryman_service_1.DeliverymanService])
], DeliverymanController);
//# sourceMappingURL=deliveryman.controller.js.map