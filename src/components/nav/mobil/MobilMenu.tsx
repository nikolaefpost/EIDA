import React, {FC} from 'react';
import {motion} from "framer-motion";
import cn from "classnames";
import {contacts, navData, schedule} from "../../../constants";

import styles from "../nav.module.scss";

const variants = {
    open: {
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100},
            delay: 1,
        }
    },
    closed: {
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(25px at 20px -50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

interface IMobilMenuProps {
    open: boolean;
    toggleOpen: () => void;
}

const MobilMenu: FC<IMobilMenuProps> = ({open, toggleOpen}) => {

    const childVariants = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: -250,
        },
    }
    return (
        <motion.div
            variants={sidebar}
            initial={false}
            animate={open ? "open" : "closed"}
            className={cn(styles.mobile_menu)}>
            <motion.div
                className={cn(styles.container)}
                variants={variants}
                initial={false}
                animate={open ? "visible" : "hidden"}
            >
                {navData.map((item, i) => (
                    <motion.div
                        key={item.href}
                        onClick={toggleOpen}
                        animate={open ? 'visible' : 'hidden'}
                        variants={childVariants}
                        transition={{delay: i * .1 + .5, ease: 'easeOut'}}
                    >
                        <a href={item.href} className={styles.item_menu}>{item.title}</a>
                    </motion.div>
                ))}
                <motion.div
                    initial={false}
                    className={styles.contacts}
                    onClick={toggleOpen}
                    animate={open ? "open" : "closed"}
                    variants={variants}
                >
                    <div>
                        <h3>Наші контакти</h3>
                        <div className={styles.contacts_block}>
                            {contacts.map(item => (
                                <div key={item.name} className={styles.item}>
                                    <img src={item.icon} alt={item.name}/>
                                    <div>{item.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                   <div>
                       <h3>Розклад роботи</h3>
                       <div className={styles.schedule}>{schedule}</div>
                   </div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default MobilMenu;