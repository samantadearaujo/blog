export interface Post {
    title: string,
    body: string,
    metadata: {
        publishedAt: number,
        authorId: number,
    }
}
