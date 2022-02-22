import axios from 'axios';
const API_URL = 'http://localhost:8080/'
class SearchmdService{
    getString(){
        return axios.get(API_URL);
    }
}
export default new SearchmdService();