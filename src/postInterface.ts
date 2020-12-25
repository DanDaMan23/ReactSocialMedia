export interface PostProps {
    id: string;
    title: string;
    description: string;
    comments: {id: string, comments: string}[];
}