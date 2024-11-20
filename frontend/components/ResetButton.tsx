import React from 'react';

const styles={
    container:`
        flex 
        items-center 
        justify-center
    `,
    button: `
        bg-blue-500
        text-white
        py-2
        px-4
        rounded
        shadow-lg
        hover:bg-blue-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    `
}


interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
        <input className={styles.button} id="reset" type="button" value="Restart" onClick={onClick} />
    </div>


  )
};

export default ResetButton;
