import express from 'express';
import {CreatePost, GetPost, GetPostById} from'../controllers/postController';
import {CreateImage, DeleteImage} from'../controllers/imageController';
const router = express.Router();
import multer from 'multer'

const upload = multer();

router.post('/post', CreatePost);
router.get('/post', GetPost);
router.get('/post/:id', GetPostById);

router.post('/image/upload', upload.single('image'), CreateImage);
router.delete('/image', DeleteImage);

export { router as PostRouter};