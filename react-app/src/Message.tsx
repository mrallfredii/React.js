function Message() {
    //js xml
    const name = 'alfred';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>hello you!</h1>
}

export default Message;