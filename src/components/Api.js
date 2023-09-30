import axios from 'axios';
import { Addition } from '../redux/Dataslice';
export const SignUpdata = async(data)=>{
    try {
       const res = await axios.post('http://localhost:8001/api',data)
    } catch (error) {
        console.log(error)
        
    }
}

export const LoginData = async(data,dispatch)=>{
    try {
       const res = await axios.post('http://localhost:8001/api/login',data) 
       dispatch(Addition(res.data))
    } catch (error) {
        console.log(error)
        
    }
}