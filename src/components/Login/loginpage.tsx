import React, {useRef} from 'react';

const LoginPage: React.FC = props => {

    const usernameRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        sessionStorage.setItem('username', usernameRef.current!.value);
        window.location.href = "/posts";
    }

    return (
        <form className="container" onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input className="form-control" type="text" name="username" id="username" ref={usernameRef} required/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}

export default LoginPage;
