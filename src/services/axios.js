
import axios from "axios"


export default {

    listar: (api) => {
        return axios.get(api)
    }
}