import React, { useState } from 'react';


const Search = ()=>{
    const [img,setImg] = useState("");
    const inputEvent = (event)=>{
        const q = event.target.value;
        setImg(event.target.value);
    }
    return (
        <>
        <input type="text" name="search" placeholder="Search Anything" onChange={inputEvent} />
        {img != null ? <img src= {`https://source.unsplash.com/300x400/?${img}`} /> : null}
        </>
    )
}


export default Search;