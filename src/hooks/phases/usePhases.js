import { useState } from "react"
import { GetPhases } from "../../helpers/Phases";

export const usePhases = () => {
    const [dataPhases, setDataPhases] = useState([]);
    const [errorPhases, setErrorPhases] = useState(null);
    const [isLoadignPhases, setIsLoadignPhases] = useState(true);

    const getPhases = async () => {
        try {
            const data = await GetPhases();
            setIsLoadignPhases(false);
            setDataPhases(data.data.fases)
        } catch (err) {
            console.log(err)
        }
    }


    return {
        getPhases,
        dataPhases,
        isLoadignPhases
    }
}
