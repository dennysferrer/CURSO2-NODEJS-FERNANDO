const axios = require('axios')


const httpClientPlugin = {
    get: async(url) => {
        // const response = await fetch(url);
        // return await response.json();
        const response = await axios.get(url);
        return response;
        
    }
}


module.exports = {
    http: httpClientPlugin
}