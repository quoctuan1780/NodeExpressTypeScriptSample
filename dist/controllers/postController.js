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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostById = exports.GetPost = exports.CreatePost = void 0;
const postService_1 = require("../services/postService");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const file = req.file;
        // var host = req.get('host');
        // var protocol = req.protocol;
        // //var fileBuffer = fs.readFileSync(file.path);
        // const fileName = v4();
        // const extension = path.extname(file.originalname);
        // fs.writeFileSync(`${__dirname}/../../public/images/${fileName}${extension}`, file.buffer);  
        // delete req.files;
        //req.body.imageUrl = `${protocol}://${host}/images/${fileName}${extension}`;
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
