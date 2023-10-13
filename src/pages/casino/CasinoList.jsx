import React, { useState } from 'react'

const CasinoList = ({list}) => {
    const [active,setActive]= useState(0)
  return (
    <>
       <div className="int_casoini_list_all">
                    <ul>
                        {list.map((item,index)=>{
                            return(
                                <>
                                <li className= {index ===active &&"active"} onClick={()=>setActive(index)}>{item}</li>
                                </>
                            )
                        })}
                        
                    </ul>
                </div>
    </>
  )
}

export default CasinoList
