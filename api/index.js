"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const departments_1 = __importDefault(require("./routes/departments"));
const regions_1 = __importDefault(require("./routes/regions"));
const router = express_1.default.Router();
router.use('/departments', departments_1.default);
router.use('/regions', regions_1.default);
exports.default = router;
