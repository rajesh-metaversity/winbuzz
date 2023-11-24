import React from 'react';
import './Setting.scss'

const Setting = () => {
	const stackArr = ["Button Value", "Button Value", "Button Value", "Button Value", "Button Value", "Button Value"]
	
	const [trigger, { data: withdrawBalance, status, error, isError, isLoading }] = useWithdrawBalanceMutation();
	return (
		<div className='settings_cont'>
			<div className='settings-heading'>Stack Settings</div>
			<div className='values_cont'>
				<div className='values'>{stackArr?.map((item) => {
					return (
						<div key={item} className='stake_value-cont'>
							<label>{item }</label>
							<input />
						</div>
					)
				}) }</div>
				<div className='button'>EDIT</div>
			</div>

		</div>
	);
};

export default Setting;
