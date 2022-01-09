
import axios from "axios"


export default {

    listar: (api) => {
        return axios.get(`http://localhost:3000/${api}`)
    }
}