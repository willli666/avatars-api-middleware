"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize = exports.combine = exports.parseSize = void 0;
const sharp_1 = __importDefault(require("sharp"));
const avatars_utils_1 = require("avatars-utils");
const minSize = 40;
const maxSize = 400;
exports.parseSize = avatars_utils_1.parseSizeFactory(minSize, maxSize);
exports.combine = (face) => sharp_1.default(face.eyes)
    .composite([{ input: face.mouth }, { input: face.nose }])
    .flatten({ background: face.color });
exports.resize = (rawSize) => {
    const size = exports.parseSize(rawSize);
    return sharp_1.default().resize(size.width, size.height);
};
