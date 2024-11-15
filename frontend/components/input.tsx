"use client";

import React from 'react'


const styles = {
    box:`

    `,
    InputBox:`
        text-black
        text-2xl
        lg:w-96
        lg:h-24
        h-24
        w-48
        rounded 
        overflow-hdden
        shadow-lg
        relative
        border border-gray-500
        text-center
    `
}



const input = () => {
  return (
    <div className={styles.box} >
        <input className={styles.InputBox} type='text' /*value={userInput} onChange={handleInputChange}*/ placeholder='ここにタイピングしてくれ' />
          
    </div>
  )
}

export default input