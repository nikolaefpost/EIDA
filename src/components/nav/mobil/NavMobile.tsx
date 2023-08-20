import React, {FC} from 'react';
import {menu} from "../../../assets";
import {useCycle, motion} from "framer-motion";
import styles from "../nav.module.scss";
import MobilMenu from './MobilMenu';


const NavMobile: FC = () => {

    const [isOpen, toggleOpen] = useCycle<boolean>(false, true);
    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className={styles.content}
        >
            <img src={menu} onClick={() => toggleOpen()} alt="menu"/>
            <MobilMenu toggleOpen={toggleOpen} open={isOpen}/>
        </motion.div>
    );
};

export default NavMobile;