import api from "./api";

export const getData = async (endpoint) => {
    try {
      const res = await api.get(endpoint);
      return res.data;
    } catch (err) {
      console.error("API ERROR:", err.message);
      throw err;
    }
  };


export const postData = async(endpoint,payload) =>{
    try{
        const res = await api.get(endpoint,payload);
        return res.data;
    }
catch(err){
    handleError(err);
}
};

const handleError = (err) =>{
    if(err.response){
        throw new Error(err.response.data.message || `Error :${err.response.status}`);
    }
    else if(err.request){
        throw new Error('No responce from server, please check your connection.');
    }
    else{
        throw new Error(err.message || 'something went wrong')
    }
};

