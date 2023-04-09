var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
export class CreateTextDtoRequest {
    title;
    description;
    text;
    allowShowingFirstLetters = false;
    allowShowingText = false;
}
__decorate([
    IsNotEmpty(),
    MaxLength(500),
    __metadata("design:type", String)
], CreateTextDtoRequest.prototype, "title", void 0);
__decorate([
    MaxLength(4000),
    IsOptional(),
    __metadata("design:type", String)
], CreateTextDtoRequest.prototype, "description", void 0);
__decorate([
    IsNotEmpty(),
    MaxLength(4000),
    __metadata("design:type", String)
], CreateTextDtoRequest.prototype, "text", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Object)
], CreateTextDtoRequest.prototype, "allowShowingFirstLetters", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Object)
], CreateTextDtoRequest.prototype, "allowShowingText", void 0);
//# sourceMappingURL=CreateTextDtoRequest.js.map