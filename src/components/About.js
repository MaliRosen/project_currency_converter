import React from 'react'


export function About() {
    if(localStorage.getItem("obj")!==""){
        var data = localStorage.getItem("obj");
        var a =JSON.parse(data);
    }
    
    return (
        <>
          <table >
            HISTORY
            <thead>
                <tr>                   
                    <td>AMOUNT</td>
                    <td>FROM</td>
                    <td>TO</td>
                    <td>Result</td>
                </tr>
            </thead>
           {a?.map(data =>(
            <tr>   
                <td>{data?.amount}</td>             
                <td>{data?.to}</td>
                <td>{data?.from}</td>
                <td>{data?.newValue}</td>
                           
            </tr>
           ))}
          </table>
        </>
    )
}

