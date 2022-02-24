import React, { useEffect, useReducer } from 'react';


const initialState = {
    users: [],
    album: [],
    loading: true,
    error1: '',
    error2: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADUSER':
            return { ...state, loading: false, users: action.payload, error1: '', };
        case 'LOADALBUM':
            return { ...state, loading: false, album: action.payload, error2: '', };
        case 'ERROR1':
            return { ...state, users: [], error1: action.payload }
        case 'ERROR2':
            return { ...state, album: [], error2: action.payload }
        default:
            return state;
    }
}


const FetchingData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch({
                type: 'LOADUSER',
                payload: data
            })
            )
            .catch(error => dispatch({ type: 'ERROR1', payload: 'user not found.something went wrong' }))
    }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => dispatch({
                type: 'LOADALBUM',
                payload: data
            })
            )
            .catch(error => dispatch({ type: 'ERROR2', payload: 'album not found.something went wrong' }))
    }, [])
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Data Fetching</h2>
            <br />
            <h3>Users</h3>
            {state.error1 && <h4 style={{ color: 'red' }}>{state.error1}</h4>}
            {state.loading ? "Loading..." :
                <>
                    {
                        state?.users?.map(user => (
                            <div key={user.id}>

                                <h4>{user.name}</h4>
                            </div>
                        ))
                    }
                </>


            }

            <br />
            <h3>Album</h3>
            {state.error2 && <h4 style={{ color: 'red' }}>{state.error2}</h4>}
            {state.loading ? 'Loading...' :

                <>
                    {
                        state.album?.slice(0, 10).map(element => (
                            <h4 key={element.id}>{element.title}</h4>
                        )
                        )}
                </>

            }

        </div>
    );
};

export default FetchingData;