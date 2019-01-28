import axios from 'axios';

const apiRoute = 'http://localhost:7000';

export function postApi(name) {
    return (dispatch) => {
        axios.post(`${apiRoute}`, { "name": name })
            //como funciona el response?????
            .then(response => {
                dispatch({
                    type: 'POST_API',
                    payload: response.data
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}
