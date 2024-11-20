"use client";

import React, { useState, useEffect } from 'react';


const styles = {
    container:`
        flex
        items-center
        justify-center
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
        mt-[10%]
    `
}

interface InputProps{
    input: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.container} >
        <input className={styles.InputBox} type='text' value={props.input} onChange={props.onChange} placeholder='ここにタイピングしてくれ' />
        
    </div>
  )
}

export default Input