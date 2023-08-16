import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import React, {FC} from "react";
import {RoutPaths} from "../helpers/constans";
import { Main} from "../pages";



const Navigation: FC = () => {
    return(
        <Routes>
            <Route path={RoutPaths.MAIN} element={<Main/>}/>
        </Routes>
    )
}

export default React.memo(Navigation)