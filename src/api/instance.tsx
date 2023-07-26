import axios from "axios";
const token = JSON.parse(localStorage.getItem("users") || '{}');
console.log(token);

export const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        // Dấu chấm than chắc chắn dữ liệu có và không phải null
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Authorization: `Bearer ${token.accessToken}`
    }
})