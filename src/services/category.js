import axios from "axios";

const BASEURL = "http://192.168.1.166:8080/api";

async function saveCategory(values) {
    return await axios.post(BASEURL + "/v1/save-category", values);
}

async function getCategory() {
    return await axios.get(BASEURL + "/v2/get-all-category");
}

export {saveCategory, getCategory};