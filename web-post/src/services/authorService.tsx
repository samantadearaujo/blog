import React, { useState, useEffect } from 'react';
import axios from 'axios';

//API's external 
import { AUTHOR_URL } from '../consts/api';

//::Interface
import { Author } from '../interfaces/author';

import { AuthorRepository } from '../repositories/AuthorRespository';

export class AuthorService {
    
   
    getAllAuthorService = function ():Author[] {
       
        const authorRepository = new AuthorRepository();
        let authors = authorRepository.getAllAuthorRepository();

    return authors;

    };

};




/*
   getAllAuthor = function ():Author[] {
        //Declaration let
    const [authors, setAuthors] = useState<Author[]>([]);

    //GET api data Author
    useEffect(() => {
        //This case author get data api
        axios.get<Author[]>(AUTHOR_URL)
            .then(response => {
                setAuthors(response.data);
            });
    }, []);

    return authors;

    };
*/