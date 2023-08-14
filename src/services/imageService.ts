import sequelize from 'sequelize';
import Image from '../models/image';
import { Response } from 'express';

const createImage = async (req: any, res: Response) => {
    try {
        const result = await Image.create({
            url: req.body.imageUrl,
            originalName: req.body.originalname
        });

        return res.status(201).json({ result });
    }
    catch (e: any) {
        return res.status(500).send(e.message);
    }
}

const deleteImage = async (req: any, res: Response, urls: any[]) => {
    try {
        const result = await Image.destroy({where: {url: urls}});

        return res.status(204).json({ result });
    }
    catch (e: any) {
        return res.status(500).send(e.message);
    }
}

export { createImage as CreateImage, deleteImage as DeleteImage} 