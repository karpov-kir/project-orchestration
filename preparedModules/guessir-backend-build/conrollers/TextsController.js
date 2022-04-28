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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextsController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const nanoid_1 = require("nanoid");
const typeorm_2 = require("typeorm");
const dto_1 = require("../dto");
const entities_1 = require("../entities");
let TextsController = class TextsController {
    constructor(textsRepository) {
        this.textsRepository = textsRepository;
    }
    async find() {
        return this.textsRepository.find({
            take: 100,
        });
    }
    async findById(id) {
        const text = await this.textsRepository.findOne({
            id,
        });
        if (!text) {
            throw new common_1.NotFoundException();
        }
        return text;
    }
    async create(newTextDto) {
        const newText = await this.textsRepository.save({
            ...newTextDto,
            id: (0, nanoid_1.nanoid)(20),
        });
        return (0, class_transformer_1.plainToClass)(entities_1.Text, newText);
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TextsController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TextsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTextDto]),
    __metadata("design:returntype", Promise)
], TextsController.prototype, "create", null);
TextsController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('texts'),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Text)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TextsController);
exports.TextsController = TextsController;
//# sourceMappingURL=TextsController.js.map