"use client";

import React, { useState, useEffect } from 'react';


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

interface InputProps{
    input: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.box} >
        <input className={styles.InputBox} type='text' value={props.input} onChange={props.onChange} placeholder='ここにタイピングしてくれ' />
        
    </div>
  )
}

export default Input