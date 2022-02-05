/*arquivo responsavel por adicionar o "axios" á aplicação */
import axios from "axios"


export default {

    listar: (api) => {
        return axios.get(api)
    }
}