import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    post(url, obj) {
        return httpClient.post(url, obj)
    }

    put(url, obj) {
        return httpClient.put(url, obj);
    }

    delete(url) {
        return httpClient.delete(url)
    }

    get(url, obj) {
        return httpClient.get(url)
    }
}

export default ApiService;