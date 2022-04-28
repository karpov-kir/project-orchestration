"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
(0, server_1.boot)(process.env.HOST, process.env.PORT ? parseInt(process.env.PORT) : undefined);
//# sourceMappingURL=index.js.map