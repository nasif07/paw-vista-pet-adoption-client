import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://paw-vista-pet-adoption-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;