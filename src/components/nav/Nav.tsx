import React, { FC } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import NavDesktop from "./desktop/NavDesktop";
import NavMobile from "./mobil/NavMobile";



const Nav: FC = () => {
    const matches = useMediaQuery('(min-width: 1000px)');
    return matches? <NavDesktop/> : <NavMobile/>
};

export default Nav;