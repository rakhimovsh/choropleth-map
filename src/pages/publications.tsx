
import useQueryParams from "../hooks/useQueryParams";
import {useNavigate} from "react-router-dom";


const elementStyles = {
    margin: '0 auto',
    padding: '20px'
}
const Publications = () => {
    const [countryName] = useQueryParams('countryName');
    const navigate = useNavigate()
    return (
        <div style={elementStyles}>
            <button onClick={()=> navigate(-1)}> Go back</button>
            <ul>
                <li>Country name: <strong>{countryName}</strong></li>
                <li>Information about country: <strong>Lorem!!!</strong></li>
            </ul>
        </div>
    );
};

export default Publications;