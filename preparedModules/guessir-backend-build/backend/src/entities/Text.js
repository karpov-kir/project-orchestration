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
exports.Text = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let Text = class Text {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], Text.prototype, "pk", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 20,
    }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], Text.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 500,
    }),
    __metadata("design:type", String)
], Text.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 4000,
        nullable: true,
    }),
    __metadata("design:type", String)
], Text.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 4000,
    }),
    __metadata("design:type", String)
], Text.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Text.prototype, "allowShowingFirstLetters", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Text.prototype, "allowShowingText", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Text.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Text.prototype, "updatedAt", void 0);
Text = __decorate([
    (0, typeorm_1.Entity)('texts')
], Text);
exports.Text = Text;
//# sourceMappingURL=Text.js.map