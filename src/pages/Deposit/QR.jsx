import React from 'react';

import './styles.scss';

const QR = ({ selectedImage }) => {
	return (
		<div className="qr_cont">
			<div className="qr_heading">QR code for payment</div>
			<div className="qr_body">
				<div className="walmart">Walmart</div>
				<div className="display_name">
					<span className='labe'>
						<label>Display Name</label>
						<input />
					</span>
					<span style={{marginTop: "50px", color: "green"}}>
						<p style={{ width: '100%', border: '1px solid white' }}>QR Code</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default QR;
