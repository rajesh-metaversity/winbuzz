import React from 'react';
import './Setting.scss'

const Setting = () => {
	const stackArr = ["button Value","button Value","button Value","button Value","button Value","button Value"]
	return (
		<div className='settings_cont'>
			<div className='settings-heading'>Stack Settings</div>
			<div className='values_cont'>
				<div className='values'>{stackArr?.map((item) => {
					return (
						<div key={item} >
							<label>{item }</label>
							<input />
						
							{/* <p>{item }</p> */}
						</div>
					)
				}) }</div>
				<div className='button'>Edit</div>
			</div>

		</div>
	);
};

export default Setting;
