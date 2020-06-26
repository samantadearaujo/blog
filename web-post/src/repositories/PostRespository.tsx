import React, { useState, useEffect } from 'react';
import axios from 'axios';

//API's external 
import { POST_URL } from '../consts/api';

//::Interface
import { Author } from '../interfaces/author';
import { Post } from 'src/interfaces/post';
import PostAuthorModel from 'src/models/postAuthorModel';

export class PostRepository {

    getAllPostsRepository = function (): Post[] {

        const [posts, setPosts] = useState<Post[]>([]);

        //GET api data Author
        useEffect(() => {
            //This case author get data api
            axios.get<Post[]>(POST_URL)
                .then(response => {
                    setPosts(response.data);
                });
        }, []);

        return posts;
        
    }

};
