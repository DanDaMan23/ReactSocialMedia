import React from 'react';

interface NewCommentProps {
    addComment: (postId: string, username: string, comment: string) => void;
}

const NewComment: React.FC<NewCommentProps> = props => {

    const commentForm = (
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="comment" name="comment"/>
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



