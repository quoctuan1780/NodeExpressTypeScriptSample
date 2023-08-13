import express from 'express';
import {CreatePost, GetPost, GetPostById} from'../controllers/postController';
const router = express.Router();
var multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

router.post("/post", multipartMiddleware, CreatePost);
router.get('/post', GetPost);
router.get('/post/:id', GetPostById);

export { router as PostRouter};