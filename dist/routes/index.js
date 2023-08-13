"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const router = express_1.default.Router();
exports.PostRouter = router;
var multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
router.post("/post", multipartMiddleware, postController_1.CreatePost);
router.get('/post', postController_1.GetPost);
router.get('/post/:id', postController_1.GetPostById);
