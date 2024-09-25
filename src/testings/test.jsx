import { useEffect } from "react";
import { getProjects } from "../services/API";

const [ProjectData,setProjectData]= useEffect()
const fetchData = async () =>{
    try {
        const {data} = await getProjects()
        setProjectData(data)
    } catch (error) {
        console.warn(error);
    }
}