export interface IAuthor {
    objectId: string;
    name: string;
    email: string;

}

export interface iBlog {
    objectId: string;
    title: string;
    category: string;
    content: string;
    thumbnail: string;
    created: number;
    author: IAuthor;
}

export interface BlogInput {
    title: string;
    category: string;
    content: string;
    thumbnail: string;
  }