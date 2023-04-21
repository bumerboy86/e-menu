import axios from "axios";
import { dataBaseApi } from "./apiUrl";

export const dataBaseInstans = axios.create({
    baseURL: dataBaseApi
})