"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../entities");
const mockRepository_1 = require("../testUtils/mockRepository");
const TextsController_1 = require("./TextsController");
const text = {
    pk: 1,
    id: 'id',
    title: 'Title',
    description: 'Description',
    text: 'Text',
    allowShowingFirstLetters: true,
    allowShowingText: true,
    updatedAt: new Date(),
    createdAt: new Date(),
};
const { pk: _pk, ...serializedText } = text;
describe(TextsController_1.TextsController, () => {
    let textsController;
    let textsRepository;
    beforeEach(() => {
        textsRepository = (0, mockRepository_1.mockRepository)();
        textsController = new TextsController_1.TextsController(textsRepository);
    });
    describe('find', () => {
        it('should return an array of serialized texts', async () => {
            const result = [(0, class_transformer_1.plainToInstance)(entities_1.Text, text)];
            jest.spyOn(textsRepository, 'find').mockResolvedValue(result);
            expect(await textsController.find()).toEqual([serializedText]);
        });
    });
    describe('findById', () => {
        it('should find and return a sanitized text by id', async () => {
            jest.spyOn(textsRepository, 'findOne').mockResolvedValue((0, class_transformer_1.plainToInstance)(entities_1.Text, text));
            expect(await textsController.findById('test')).toEqual(serializedText);
        });
        it('should return 404 exception if the text is not found', async () => {
            jest.spyOn(textsRepository, 'findOne').mockResolvedValue(undefined);
            await expect(textsController.findById('test')).rejects.toEqual(new common_1.NotFoundException());
        });
        it('should throw an error if the search query fails', async () => {
            jest.spyOn(textsRepository, 'findOne').mockRejectedValue(new Error('Test'));
            await expect(textsController.findById('test')).rejects.toEqual(new Error('Test'));
        });
    });
    describe('create', () => {
        it('should return a serialized text', async () => {
            jest.spyOn(textsRepository, 'save').mockResolvedValue(text);
            expect(await textsController.create({})).toEqual(serializedText);
        });
    });
});
//# sourceMappingURL=TextController.spec.js.map