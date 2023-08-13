"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostById = exports.GetPost = exports.CreatePost = void 0;
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const postService_1 = require("../services/postService");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.files.image;
        var host = req.get('host');
        var protocol = req.protocol;
        var fileBuffer = fs_1.default.readFileSync(file.path);
        const fileName = (0, uuid_1.v4)();
        const extension = path_1.default.extname(file.name);
        fs_1.default.writeFileSync(`${__dirname}/../../public/images/${fileName}${extension}`, fileBuffer);
        delete req.files;
        req.body.imageUrl = `${protocol}://${host}/images/${fileName}${extension}`;
        return yield (0, postService_1.CreatePost)(req, res);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.CreatePost = createPost;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, postService_1.GetPost)(req, res);
});
exports.GetPost = getPost;
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, postService_1.GetPostById)(req, res);
});
exports.GetPostById = getPostById;
