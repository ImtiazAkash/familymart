import axios from "axios";

const BASEURL = "http://192.168.1.166:8080/api";

async function saveProduct(values) {
    return await axios.post(BASEURL + "/v1/create-product", values);
}

async function getProduct() {
    return await axios.get(BASEURL + "/v2/get-all-product");
}

export {saveProduct, getProduct};