//::Interface
import { Author } from '../interfaces/author';

//::Repositories 
import { AuthorRepository } from '../repositories/AuthorRespository';

export class AuthorService {

    //::Import - data repository
    getAllAuthorService = function (): Author[] {

        const authorRepository = new AuthorRepository();
        let authors = authorRepository.getAllAuthorRepository();

        return authors;

    };
};
