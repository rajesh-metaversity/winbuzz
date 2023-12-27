import {  RouterProvider } from "react-router-dom";
import { router } from "./PagesRoutes";
import { useState } from 'react';
const Routes = () => {
	return (
		<div>
			<RouterProvider router={router()} />
		</div>
	);
};

export default Routes;
