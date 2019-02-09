import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f2258104adfee6a6e1ed0f1ee074ced762899ab7ad9e7b7f99a77eca613d4fae'
  }

});