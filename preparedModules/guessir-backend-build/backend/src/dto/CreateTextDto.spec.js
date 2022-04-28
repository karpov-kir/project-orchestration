"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const CreateTextDto_1 = require("./CreateTextDto");
describe(CreateTextDto_1.CreateTextDto, () => {
    it('should throw correct validation errors', async () => {
        expect(await (0, class_validator_1.validate)((0, class_transformer_1.plainToInstance)(CreateTextDto_1.CreateTextDto, {}))).toEqual([
            expect.objectContaining({
                constraints: {
                    isNotEmpty: 'title should not be empty',
                    maxLength: 'title must be shorter than or equal to 500 characters',
                },
            }),
            expect.objectContaining({
                constraints: {
                    isNotEmpty: 'text should not be empty',
                    maxLength: 'text must be shorter than or equal to 4000 characters',
                },
            }),
        ]);
        expect(await (0, class_validator_1.validate)((0, class_transformer_1.plainToInstance)(CreateTextDto_1.CreateTextDto, {
            allowShowingFirstLetters: 'test',
            allowShowingText: 'test',
            description: {},
        }))).toEqual(expect.arrayContaining([
            expect.objectContaining({
                constraints: {
                    maxLength: 'description must be shorter than or equal to 4000 characters',
                },
            }),
            expect.objectContaining({
                constraints: {
                    isBoolean: 'allowShowingFirstLetters must be a boolean value',
                },
            }),
            expect.objectContaining({
                constraints: {
                    isBoolean: 'allowShowingText must be a boolean value',
                },
            }),
        ]));
    });
});
//# sourceMappingURL=CreateTextDto.spec.js.map