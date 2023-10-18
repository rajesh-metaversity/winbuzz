import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { message } from "antd";
export const dynamicBaseQuery = async (args, WebApi, extraOptions) => {
	const rawBaseQuery = fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	});
	const result = await rawBaseQuery(args, WebApi, extraOptions);
	if (result?.error) {
		const responseMessage = result?.error?.data?.message;
		const status = result?.error?.status;
		if (status === 401) {
			localStorage.clear();
			// window.location.replace('/');
		}
		console.log(responseMessage);
	}
	return result;
	// if (result?.data.status === 200 || result?.data.status) {
	//   message.success(result?.data?.message);
	// } else if (result?.data.status === false) {
	//   message.error(result?.data?.message);
	// }
};
