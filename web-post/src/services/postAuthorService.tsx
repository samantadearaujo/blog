import {useEffect } from 'react';

//::Model's
import PostAuthorModel from '../models/postAuthorModel';

//::Repositories
import { AuthorRepository } from '../repositories/AuthorRespository';
import { PostRepository } from '../repositories/PostRespository';

export class PostAuthorService {

    //:: This class setting information POSTS and Authores
    //:: import modules repositories (Author and Post) 
    getAllPostAuthorService = function (): PostAuthorModel[] {

        //::Const's - Instance Class's
        const authorRepository = new AuthorRepository();
        const postRepository = new PostRepository();

        //::Let's import's functions ans Array
        let authors = authorRepository.getAllAuthorRepository();       
        let posts = postRepository.getAllPostsRepository();
        let postsAuthors: Array<PostAuthorModel> = [];

        useEffect(() => {
            //:: GET o ID Author(post) and ID Author(author)
            //:: AND SET NAME AUTHOR, TITLE, BODY, PUBLISHEDAT 
            posts.map(item => {
                authors.map(author => {
                    if (item.metadata.authorId === author.id) {
                        let pTeste = new PostAuthorModel(
                            item.title,
                            item.body,
                            item.metadata.publishedAt,
                            author.name,
                            author.id
                        );
                        postsAuthors.push(pTeste);
                    }
                })
            });
        }, [postsAuthors]);

        //::only return because, use this information 
        //:: View... 
        return postsAuthors;
    }

}
