import {Route, Routes} from "react-router-dom";
import Map from "./pages/map";
import Publications from "./pages/publications";

const Router = () => {
    return (
        <Routes>
            <Route path={''} element={<Map/>}/>
            <Route path={'/publication'} element={<Publications/>}/>
        </Routes>
    );
};

export default Router;