import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

//API's external 
//import { POST_URL } from '../consts/api';

//::Interface
//import { PostAuthor } from '../interfaces/postAuthor';
//import { Author } from '../interfaces/author';


export class PostService {

    getAllPostService = function(){
        console.log('POST SERVICE');
    }    
};

/*
  getAllPost = function (authors: Author[]): PostAuthor[] {
        //Declaration const
        const [sumarys, setSumary] = useState<PostAuthor[]>([]);


        //GET API POST(PUBLISHES)
        useEffect(() => {
            axios.get<PostAuthor[]>(POST_URL)
                .then(response => {
                    //Find Metedata ID Autor with AuthorID 
                    //Case find the same ID, return Author Name
                    response.data.map(item => {
                        authors.map(author => {
                            console.log(authors);
                            if (item.metadata.authorId === author.id) {
                                item.authorName = author.name;
                            }
                        })
                    });
                    const sumary = response.data
                        .sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt);
                    setSumary(sumary);
                });
        }, [authors]);

        return sumarys;
    };
    */

