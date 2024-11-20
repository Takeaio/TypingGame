import React from 'react';

const styles={
    container:`
        flex
        items-center
        justify-center
    `,
    title:`
        text-4xl
    `,
    word:`
        text-center
        text-8xl
        
    `
}


interface WordDisplayProps {
    word: string;
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
    return (
        <div className={styles.container}>
            <div className="flexflex-row">
                <h2 className={styles.title}>
                    次の文字をタイピングするのだ！！
                </h2>
                <h2 className={styles.word}>
                    {word}
                </h2>
            </div>
        </div>

    )
};    

export default WordDisplay;
