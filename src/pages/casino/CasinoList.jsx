import React, { useEffect, useState } from 'react';
import { useQtechMutation } from '../../Services/Qtech/Qtech';

const CasinoList = ({ list }) => {
  const [active, setActive] = useState(0);

	console.log(list, 'list');

	const [trigger, { data: gamelist }] = useQtechMutation();

	console.log(gamelist, 'alksdjf');

	console.log(active, 'active');

	// useEffect(() => {
	// 	if (qtechAuth?.data?.access_token) {
	// 		trigger({
	// 			gameCategory: 'LIVECASINO',
	// 			provider: '',
	// 			token: qtechAuth?.data?.access_token
	// 		});
	// 	}
	// }, [qtechAuth?.data?.access_token]);


	return (
		<>
			{/* <div>{trigge }</div> */}
				<p className='int_casino'>Int Casino</p>
			<div className="int_casoini_list_all">
				<ul>
					{list?.map((item, index) => {
						// console.log(item, "item")
						return (
							<>
								<li
									className={index === active && 'active'}
									onClick={() => {
										setActive(index);
									}}
									key={item?.gameCode}>
									{item?.name}
								</li>
							</>
						);
					})}
				</ul>
				
			</div>
			{/* <div className='int_casino_sub-list'>
			<ul className=''>
				<li>wferfve</li>
				<li>wferfve</li>
				<li>wferfve</li>
				<li>wferfve</li>
				</ul>
				</div> */}
		</>
	);
};

export default CasinoList;
