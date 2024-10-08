import axios from "axios";

export const signup = async ({name, email, password}) => {
    try {
        const{data} = await axios.post('http://localhost:5000/api/users/register',{
            name,
            email,
            password,
        });
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);

    }
};

export const login = async ({email, password}) => {
    try {
        const{data} = await axios.post('http://localhost:5000/api/users/login',{
            email,
            password,
        });
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);

    }
};

export const getUserProfile = async ({token}) => {
    try {

        const config = {
            headers:{
                Authorization:`Bear ${token}`,
            },
        };

        const{data} = await axios.post('http://localhost:5000/api/users/profile',config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);

    }
};