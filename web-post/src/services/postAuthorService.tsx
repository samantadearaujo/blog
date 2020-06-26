import React, { useState, useEffect } from 'react';
import axios from 'axios';

//API's external 
import { POST_URL, AUTHOR_URL } from '../consts/api'

//::Interface
import { Author } from '../interfaces/author';
//import { Post } from '../interfaces/post';
import { PostAuthor } from '../interfaces/postAuthor';
import PostAuthorModel from '../models/postAuthorModel';

//::Service
import { AuthorRepository } from '../repositories/AuthorRespository';
import { PostRepository } from '../repositories/PostRespository';

export class PostAuthorService {

    getAllPostAuthorService = function (): PostAuthorModel[] {

        const authorRepository = new AuthorRepository();
        let authors = authorRepository.getAllAuthorRepository();

        const postRepository = new PostRepository();
        let posts = postRepository.getAllPostsRepository();
        let arr: Array<PostAuthorModel> = [];

        posts.map(item => {
            authors.map(author => {
                if (item.metadata.authorId === author.id) {
                    let pTeste = new  PostAuthorModel(
                        item.title,
                        item.body,
                        item.metadata.publishedAt,
                        author.name,
                        author.id
                    );
                    arr.push(pTeste);
                    

                }
            })
        });
        return arr;

    }

}


/*    //Declaration const
    const [posts, setPosts] = useState<PostAuthor[]>([]);
    const authorService = new AuthorService();
    //const authors = authorService.getAllAuthor();

    //GET API POST(PUBLISHES)
    /*useEffect(() => {
        axios.get<PostAuthor[]>(POST_URL)
            .then(response => {
                //Find Metedata ID Autor with AuthorID
                //Case find the same ID, return Author Name
                response.data.forEach(item => {
                    authors.forEach(author => {
                        if (item.metadata.authorId === author.id) {
                            item.authorName = author.name;
                        }
                    })
                });
                const sumary = response.data
                    .sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt);
                setPosts([...sumary]);
            });
    }, [authors]);*/
