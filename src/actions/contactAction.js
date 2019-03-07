import { GET_CONTACTS , 
        GET_CONTACT,
        DELETE_CONTACT, 
        ADD_CONTACT,
        UPDATE_CONTACT} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    })
}
export const getContact = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log('res single user',res.data);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    })
}
export const deleteContact = (id) => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    } catch(e) {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    }
    
}
export const addContact = (contact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users',contact);
    console.log('post res', res);
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
}
export const updateContact = (contact) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact);
    console.log('put res', res);
    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    });
}