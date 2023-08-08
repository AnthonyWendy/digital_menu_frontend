import { useQuery } from "../../node_modules/@tanstack/react-query/build/lib/useQuery";
import axios, {AxiosPromise} from "../../node_modules/axios/index";
import { FoodData } from "../interface/FoodData";

const URL = 'http://localhost:8080';

const fechtData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(URL + '/food');
    return response;
}

export function useFoodData(){

    const query = useQuery({
        queryFn: fechtData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }

}