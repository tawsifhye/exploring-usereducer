import React, { useEffect, useReducer } from 'react';


const initialState = {
    users: [],
    album: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADUSER':
            return { ...state, users: action.setData };
        case 'LOADALBUM':
            return { ...state, album: action.setData };

        default:
            return initialState
    }
}


const FetchingData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch({
                type: 'LOADUSER',
                setData: data
            }))
    }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => dispatch({
                type: 'LOADALBUM',
                setData: data
            }))
    }, [])


    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Data Fetching</h2>
            {
                state.users?.map(user => (
                    <div key={user.id}>

                        <h4>{user.name}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default FetchingData;