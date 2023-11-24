import React, { useEffect, useState } from 'react';
import './Setting.scss'
import { useGetStakeMutation, useSetStakeMutation } from '../../Services/Settings/Settings';

const Setting = () => {
	const stackArr = ["Button Value", "Button Value", "Button Value", "Button Value", "Button Value", "Button Value"]
	
	const [trigger, { data: stakeBalance, status, error, isError, isLoading }] = useSetStakeMutation();

	const [trigge, { data: getStake, status: getStakeStatus, error: getError, isLoading: getLoading }] = useGetStakeMutation();


	const [activeStack, setActiveStack] = useState(false);

	const [stakeValue, setStakeValue] = useState({});

	useEffect(() => {
		trigge()
	}, []);

	useEffect(() => {
		setStakeValue(stakeBalance?.data);
	}, [stakeBalance]);
	
	const stackHandleChnager = (name, finalValue) => {
		setStakeValue(prev => {
			return {
				...prev,
				[name]: Number(finalValue)
			};
		});
	};

	const betPlaceHandler = () => {
		// item = item;
		trigger(stakeValue)
	};
	const obj = stakeValue && Object.keys(stakeValue);

	return (
		<div className='settings_cont'>
			<div className='settings-heading'>Stack Settings</div>
			<div className='values_cont'>
				<div className='values'>
					{obj?.map((item) => {
					return (
						<div key={item} className='stake_value-cont'>
							<label>{item }</label>
							<input value={stakeValue[item]} onChange={e => stackHandleChnager(item, e.target.value)}/>
						</div>
					)
				}) }</div>
				<div className='button' onClick={() => betPlaceHandler()}>EDIT</div>
			</div>

		</div>
	);
};

export default Setting;
