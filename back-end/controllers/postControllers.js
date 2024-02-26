import { uploadPicture } from "../middleware/uploadPictureMiddleware";
import { fileRemover } from "../utils/fileRemover";
import{v4 as uuid4} from 'uuid';

import Post from "../models/Post";

//Register User
const createPost = async (req, res, next) => {
  try {
    const post = new Post({
        title: "sample title",
        caption: 'sample caption',
        slug: uuidv4(),
        body: {
            
        }
    });

  } catch (error) {
    next(error);
  }
};

export {
  createPost,
   
};
