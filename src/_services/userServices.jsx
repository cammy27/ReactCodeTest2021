import userActions from "../_actions/user.actions";
import credentials from  "../_helpers/credentials";

import axios from "axios";


    const authenticate = async (values) => {
    if(credentials.username === values.username && credentials.password ===  values.password){
        return true;
    }
    else 
    return false;
    }

    const userListService =  async() =>{
        try {
            let resp = await axios.get(
             "https://randomuser.me/api/0.8/?results=20"
            );
            if(localStorage.getItem('users')){
                return JSON.parse(localStorage.getItem('users'))
            }
            else{
                return resp.data.results;
            }
          } catch (err) {}
    }
const userServices ={
    authenticate,
    userListService
}

export default userServices;

