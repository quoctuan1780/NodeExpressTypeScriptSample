import fs from 'fs';
import {v4} from 'uuid';
import path from 'path';
import {Response} from 'express';
import {CreateImage, DeleteImage} from '../services/imageService';

const createImage = async (req: any, res: Response) => {
    try {
        const file = req.file;
        const host = req.get('host');
        const protocol = req.protocol;
        const fileName = v4();
        const extension = path.extname(file.originalname);
        fs.writeFileSync(`${__dirname}/../../public/images/${fileName}${extension}`, file.buffer);  
        req.body.imageUrl = `${protocol}://${host}/images/${fileName}${extension}`;
        req.body.originalname = file.originalname;

        return await CreateImage(req, res);
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
}

const deleteImage = async(req: any, res: Response) => {
    try {
        const host = req.get('host');
        const protocol = req.protocol;
        const srcs = Array.isArray(req.query.id) ? req.query.id : [req.query.id];

        let filesName = [] as any[];

        for(let item of srcs){
            filesName.push(item.replace(`${protocol}://${host}/images/`, ''));
        }

        if(filesName.length > 0){
            for(let item of filesName){
                const fileDir = `${__dirname}/../../public/images/${item}`;

                if(fs.existsSync(fileDir)){
                    fs.unlinkSync(fileDir);
                }
            }
        }

        return await DeleteImage(req, res, srcs);
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
}

export { createImage as CreateImage, deleteImage as DeleteImage}