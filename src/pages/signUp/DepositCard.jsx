import React from 'react'

const DepositCard = ({name,bonus}) => {
  return (
    <div className='deposite_card'>
    <p>{name}</p>
    <span >{bonus}</span>
</div>
  )
}

export default DepositCard
