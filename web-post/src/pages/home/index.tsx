import React, { useEffect, useState, ChangeEvent } from 'react';

//::Styles
import './styles.css';
//::End Styles

//::Components - Funciotion General, Const
import { FormatUnixtoDate } from '../../components/formatUnixtoDate';
//::End Components


//::Interfaces
import postAuthorModel from 'src/models/postAuthorModel';
//::End Interface

//::Services
import { PostAuthorService } from '../../services/postAuthorService'
import { AuthorService } from '../../services/authorService';
import PostAuthorModel from 'src/models/postAuthorModel';
//::End Services


const Home = () => {

    //::Instance Services
    const authorService = new AuthorService();
    const postAuthorService = new PostAuthorService();

    const [selectedAuthor] = useState();
    const [publish, setPublish] = useState("");    
   
    const _initial = postAuthorService.getAllPostAuthorService();
    const authors = authorService.getAllAuthorService();

    let [itemsInitial, setItemsInitial] = useState<postAuthorModel[]>([]);
    let posts = _initial;  
    
    let authorId = -1

    //:: Why use this? Onload Page informations 
    useEffect(() => {
        const orderBy = _initial.sort((a, b) => b.publishedAt - a.publishedAt)
         setItemsInitial(orderBy);   
    }, [authors]);

    
    //::Select post by Author
    function handleSelectAuthor(event: ChangeEvent<HTMLSelectElement>) {
        authorId = parseInt(event.target.value);
        if (authorId > 0) {
            let filterItems = _initial;
            filterItems = filterItems.filter(item => item.authorID === authorId);
            posts = filterItems.sort((a, b) => b.publishedAt - a.publishedAt);
            setItemsInitial(posts);
        } else {
            setItemsInitial([..._initial]);
        }
    }

    //::Funtion Order By DESC and ASC
    function handleSelectOrderBy(orderby: string) {
        let orderByPost: PostAuthorModel[];

        if (orderby === "asc") {
            orderByPost = posts.sort((a, b) => a.publishedAt - b.publishedAt);

        } else {
            orderByPost = posts.sort((a, b) => b.publishedAt - a.publishedAt);
        }
        setItemsInitial([...orderByPost]);

    }

    return (
        <div id="main">
            <div id="orderBy-filter">
                <div id="filter">
                    <label htmlFor="author">
                        Filter by:
                </label>
                    <select
                        name="author"
                        id="author"
                        value={selectedAuthor}
                        onChange={handleSelectAuthor}>
                        <option value="0"> Author </option>
                        {authors.map(
                            author =>
                                (
                                    <option
                                        key={author.id}
                                        value={author.id}
                                    >
                                        {author.name}
                                    </option>
                                ))}
                    </select>
                </div>
                <div id="order">
                    <label>
                        Order by:
                </label>
                    <button className="button-orderby" onClick={() => handleSelectOrderBy("asc")}>Asc</button>
                    <button className="button-orderby" onClick={() => handleSelectOrderBy("desc")}>Desc</button>

                </div>
            </div>
            <div className="inner">
                <div className="thumbnails">
                    {itemsInitial.map(item => (
                        <div className="box" key={item.title}>
                            <div className="inner">
                                <h3>
                                    <a onClick={() => setPublish(item.title)}>
                                        {item.title}
                                    </a>
                                </h3>
                                {
                                    publish === item.title
                                    &&
                                    <p>
                                        {item.body}
                                    </p>

                                }
                                <span><strong>Author:</strong>{item.authorName}</span>
                                <span className="spanRight">Published:
                            {FormatUnixtoDate(item.publishedAt)}</span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Home;
