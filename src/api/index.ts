import axios from "axios"

export const get = async (url: string, params = {}, header = {}) => {
    const reponse = await axios.get(url, {
        ...params,
        headers: header
    })
    const { data } = reponse
    return data
}