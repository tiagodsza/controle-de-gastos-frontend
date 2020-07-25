import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000';

const controle_gastos_api = axios.create({
  baseURL
});



export default controle_gastos_api;