import Post from '../models/post';
import { Request, Response } from 'express';

const getPost = async (req: Request, res: Response) => {
    const result = await Post.findAll();

    return res.status(200).json({ result });
};

const getPostById = async (req: Request, res: Response) => {

    const params = { id: req.params.id }
    const result = await Post.findOne({ where: params});
    return res.status(200).json({ result });
};

const createPost = async (req: Request, res: Response) => {
    try {
        const result = await Post.create({
            title: req.body.title,
            content: req.body.content,
            imageUrl: req.body.imageUrl
        });

        return res.status(201).json({ result });
    }
    catch (e: any) {
        return res.status(500).send(e.message);
    }
}

export { createPost as CreatePost, getPost as GetPost, getPostById as GetPostById } 