import fs from 'fs';
import {v4} from 'uuid';
import path from 'path';
import {Request, Response} from 'express';
import {CreatePost, GetPost, GetPostById} from '../services/postService';

const createPost = async (req: any, res: Response) => {
    try {
        const file = req.files.image;
        var host = req.get('host');
        var protocol = req.protocol;
        var fileBuffer = fs.readFileSync(file.path);
        const fileName = v4();
        const extension = path.extname(file.name);
        fs.writeFileSync(`${__dirname}/../../public/images/${fileName}${extension}`, fileBuffer);  
        delete req.files;

        req.body.imageUrl = `${protocol}://${host}/images/${fileName}${extension}`;

        return await CreatePost(req, res);
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
}

const getPost = async (req: Request, res: Response) => {
    return await GetPost(req, res);
};

const getPostById = async (req: Request, res: Response) => {
    return await GetPostById(req, res);
};

export { createPost as CreatePost, getPost as GetPost, getPostById as GetPostById}