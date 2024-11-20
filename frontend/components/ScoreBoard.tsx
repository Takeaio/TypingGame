import React from 'react';


const styles = {
    container:`
        flex
        items-center
        justify-center
        
    `,

}


interface ScoreBoardProps {
    score: number;
    missCount: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, missCount }) => {
    return (
        <div className={styles.container}>
            <div className="flex-row text-4xl mt-[5%] mb-[10%]">
                <p>スコア: {score}</p>
                <p>ミス回数: {missCount}</p>
            </div>
        </div>
    );
};

export default ScoreBoard;
