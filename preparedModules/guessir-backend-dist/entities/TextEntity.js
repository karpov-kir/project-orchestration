var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
export let TextEntity = class TextEntity {
    pk;
    id;
    title;
    description;
    text;
    allowShowingFirstLetters;
    allowShowingText;
    createdAt;
    updatedAt;
};
__decorate([
    PrimaryGeneratedColumn(),
    Exclude(),
    __metadata("design:type", Number)
], TextEntity.prototype, "pk", void 0);
__decorate([
    Column({
        length: 20,
    }),
    Index({ unique: true }),
    __metadata("design:type", String)
], TextEntity.prototype, "id", void 0);
__decorate([
    Column({
        length: 500,
    }),
    __metadata("design:type", String)
], TextEntity.prototype, "title", void 0);
__decorate([
    Column({
        length: 4000,
        nullable: true,
    }),
    __metadata("design:type", String)
], TextEntity.prototype, "description", void 0);
__decorate([
    Column({
        length: 4000,
    }),
    __metadata("design:type", String)
], TextEntity.prototype, "text", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], TextEntity.prototype, "allowShowingFirstLetters", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], TextEntity.prototype, "allowShowingText", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], TextEntity.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], TextEntity.prototype, "updatedAt", void 0);
TextEntity = __decorate([
    Entity('texts')
], TextEntity);
//# sourceMappingURL=TextEntity.js.map