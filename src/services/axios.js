
import axios from "axios"


export default {

    listar: (api) => {
        return axios.get(`http://10.0.1.8:3000/${api}`)
    }
}