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

    const [selectedAuthor] = useState();
    const [publish, setPublish] = useState("");
    let [itemsInitial, setItemsInitial] = useState<postAuthorModel[]>([]);
    const postAuthorService = new PostAuthorService();
    const _initial = postAuthorService.getAllPostAuthorService();
    let posts = _initial;

    const authorService = new AuthorService();
    let authors = authorService.getAllAuthorService();
    let authorId = -1


    useEffect(() => {
        const orderBy = _initial.sort((a, b) => b.publishedAt - a.publishedAt)
         setItemsInitial(orderBy);   
    }, [authors]);

    
    //Select post by Author
    function handleSelectAuthor(event: ChangeEvent<HTMLSelectElement>) {
        authorId = parseInt(event.target.value);
        if (authorId > 0) {
            let filterItems = _initial;
            filterItems = filterItems.filter(item => item.authorID === authorId);
            posts = filterItems;
            setItemsInitial(posts);
        } else {
            setItemsInitial([..._initial]);
        }
    }

    //Funtion Order By data
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

/*

    */
