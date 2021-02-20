import React from 'react';
import {useParams, useLocation,useHistory} from 'react-router-dom';


// const User = ({match})=>{
//     return (
//         <>
//         <h1>{match.params.fname}</h1>
//         </>
//     )
// }


const User = ()=>{
    const {fname,lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return (
        <>
        <h1>{fname} {lname}</h1>
        <h3>My current location is {location.pathname}</h3>
        {location.pathname == `/user/Tanmoy/Sarkar` ? <button onClick={()=>history.goBack()}>Click Me</button>:null}
        <button onClick={()=>history.push("/")}>Home</button>
        </>
    )
}

export default User;