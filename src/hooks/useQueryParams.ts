import {useSearchParams} from "react-router-dom";

const UseQueryParams = (query: string) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return [searchParams.get(query)]
};

export default UseQueryParams;