import React, {useRef} from 'react';

interface NewPostProps {
    onNewPost: (title: string, description: string) => void;
}

const NewPost: React.FC<NewPostProps> = props => {

    const titleInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        props.onNewPost(titleInputRef.current!.value, descriptionInputRef.current!.value);
        titleInputRef.current!.value = "";
        descriptionInputRef.current!.value = "";
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" name="title" id="title" ref={titleInputRef} required/>
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" ref={descriptionInputRef} required></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">POST</button>
        </form>
    )
};

export default NewPost;