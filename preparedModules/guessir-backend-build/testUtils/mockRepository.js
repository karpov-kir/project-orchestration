"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRepository = void 0;
const mockRepository = () => {
    return {
        find: jest.fn(),
        findOne: jest.fn(),
        save: jest.fn(),
    };
};
exports.mockRepository = mockRepository;
//# sourceMappingURL=mockRepository.js.map