const initState = {
    posts: [
        {id: '1', title: 'Title1', body: 'some text here '},
        {id: '2', title: 'Title2', body: 'some more text here '},
        {id: '3', title: 'Title3', body: 'more and more text here '}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;