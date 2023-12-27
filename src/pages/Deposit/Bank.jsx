import React from 'react'
// import './Bank.scss'
import './styles.scss'

const Bank = ({selectedImage}) => {
  return (
      <div className='bank_cont'>
          <p className='bank-name'><span>Bank Name</span><span>{selectedImage?.bankName }</span></p>
          <p className='account_number'><span>Account Number</span><span>{selectedImage?.accountNumber }</span></p>
          <p className='ifsc_code'><span>IFSC Code</span><span>{selectedImage?.ifsc }</span></p>
          <p className='account_holder'><span>Account Holder Name</span><span>{selectedImage?.accountHolderName }</span></p>
    </div>
  )
}

export default Bank