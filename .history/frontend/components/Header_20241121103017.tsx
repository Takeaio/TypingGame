import { useEffect } from "react";

const styles = {
    container:`
        flex
        items-center
        justify-center
    `,
    header_text:`
        text-4xl
        mb-[20%]
    `
}

interface HeaderProps {
    text1: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header_text}>
                {props.text1}
            </h2>
        </div>
    )
}

export default Header