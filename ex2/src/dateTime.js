import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <h3><center>CURRENT DATE AND TIME</center></h3>
            <p><center>Time : {date.toLocaleTimeString()}</center></p>
            <p><center>Date : {date.toLocaleDateString()}</center></p>

        </div>
    )
}

export default DateTime;
