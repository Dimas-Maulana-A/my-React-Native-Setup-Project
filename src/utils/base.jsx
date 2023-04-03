import Config from "react-native-config";

console.log(Config)

const baseLogin = `${Config.BASE_URL}user/login`
const baseUser = `${Config.BASE_URL}user/`
const baseRole = `${Config.BASE_URL}role/`
const baseProduct = `${Config.BASE_URL}product/`
const baseImage = `${Config.BASE_URL}img/`
const baseTransc = `${Config.BASE_URL}transaction/`

export {
    baseLogin,
    baseUser,
    baseRole,
    baseProduct,
    baseImage,
    baseTransc
}

