import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID FC9J58H9YEojxHfDI4dDpH59xtkx30CpINPgcRhNbWE'
    }
});