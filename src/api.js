import axios from "axios";

export const fetchSelect1Data = () => axios.get("/api/select1");
export const fetchSelect2Data = (id) => axios.get(`/api/select2/${id}`);
export const fetchSelect3Data = (id) => axios.get(`/api/select3/${id}`);
export const fetchSelect4Data = (id) => axios.get(`/api/select4/${id}`);
