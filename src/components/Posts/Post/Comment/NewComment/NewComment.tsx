import React, {useRef} from 'react';

interface NewCommentProps {
    addComment: (postId: string, username: string, comment: string) => void;
    postId: string;
}

const NewComment: React.FC<NewCommentProps> = props => {

    const commentRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.addComment(props.postId, sessionStorage.username, commentRef.current!.value);
        commentRef.current!.value = "";
    }

    const commentForm = (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <input type="text" className="form-control" id="comment" name="comment" ref={commentRef}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );

    return (
        <div>
            {commentForm}
        </div>
    );
};

export default NewComment;



