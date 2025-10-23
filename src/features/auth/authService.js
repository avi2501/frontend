// here we fisrt import the axios for API call and 
// the send the registeration form data to /user/api/ url api call and 
// also store the response item in localstronge


import axios from 'axios';
const API_URL = 'https://backend-lac-pi.vercel.app/'; // 👈 check this

const register = async (userData) =>{
    const response= await axios.post (API_URL, userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {register}
export default authService;
