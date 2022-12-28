import axios from "axios";
import enviroment from "../../../env/enviroment";
import { User } from "../../Model/User/User.model";

class AuthService{

  register=async(data:User)=>{
    return new Promise((resolve,reject)=>{
       try {
        axios.post<User>(enviroment.BASE_URL+'user/getregister',data)
        .then((res)=>{
            console.log(res);
            resolve(res)
        }).catch((error)=>{
            console.log(error);
            
        })
       } catch (error) {
            console.log(error);
            
       }
    })
  }

}

export default new AuthService;