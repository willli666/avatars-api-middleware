"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouthImages = exports.noseImages = exports.eyeImages = exports.imageFileNames = exports.imageFilePaths = void 0;
const path_1 = __importDefault(require("path"));
const avatars_utils_1 = require("avatars-utils");
const imageDir = path_1.default.join(__dirname, '..', 'img');
exports.imageFilePaths = (type) => avatars_utils_1.filePaths(path_1.default.join(imageDir, type));
exports.imageFileNames = (type) => avatars_utils_1.fileNames(path_1.default.join(imageDir, type));
exports.eyeImages = exports.imageFilePaths('eyes');
exports.noseImages = exports.imageFilePaths('nose');
exports.mouthImages = exports.imageFilePaths('mouth');
