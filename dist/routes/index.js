"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const imageController_1 = require("../controllers/imageController");
const router = express_1.default.Router();
exports.PostRouter = router;
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
router.post('/post', postController_1.CreatePost);
router.get('/post', postController_1.GetPost);
router.get('/post/:id', postController_1.GetPostById);
router.post('/image/upload', upload.single('image'), imageController_1.CreateImage);
router.delete('/image', imageController_1.DeleteImage);
