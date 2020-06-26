//FUNCTION::: CONVERTER UnixTime to String

import { Post } from "src/interfaces/post";
//import { PostAuthor } from "src/interfaces/postAuthor";

export const FormatUnixtoDate = (unixtime: number) => {

    let date = new Date(unixtime);

    let day = date.getDate().toString().padStart(2, '0');
    let month = parseInt(date.getMonth().toString() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString()

    const dayEnd = date.getDate().toString().padStart(2, '0');
    const monthEnd = (date.getMonth() + 1).toString().padStart(2, '0');
    const yearEnd = date.getFullYear().toString().padStart(4, '0'); 


    let dateEnd = `${dayEnd}-${monthEnd}-${yearEnd}`

    return dateEnd;

}
