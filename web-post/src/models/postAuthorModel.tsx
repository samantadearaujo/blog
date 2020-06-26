class PostAuthorModel {
    title: string;

    body: string;

    publishedAt: number;

    authorName: string;

    authorID:number;

    constructor(title,body,publishedAt,authorName,authorID){
        this.title = title;
        this.body = body;
        this.publishedAt = publishedAt;
        this.authorName = authorName;
        this.authorID = authorID;
    }
}

export default PostAuthorModel;