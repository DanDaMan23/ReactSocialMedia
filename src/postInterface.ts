export interface PostProps {
    id: string;
    username: string;
    title: string;
    description: string;
    comments: {id: string, username: string, comment: string}[];
}