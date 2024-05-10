import sytled from '@mui/material/styles/styled';
import { Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const SelectStyles = sytled(Select)(({ theme }) => ({
	color: 'black',
	// width: '100%',
	padding: '0px',
	'& .MuiInputBase-input': {
		padding: '7.5px 14px',
		width: "100%",
		marginRight: "10px"

	},
	
	[theme.breakpoints.down(780)]: {
		width: '100%',
		border: "1px solid rgba(170,170,170,.3)",
		color: "#939393"
	}
}));


export const DatStyles = sytled(DatePicker)(({ theme }) => ({
	// color: 'black',
	// width: '100px',
	// padding: '0px',
	'& .MuiFormControl-root': {
		// padding: '7.5px 14px'
	},
	

	
	[theme.breakpoints.down(780)]: {
		width: '100%',
		border: "1px solid rgba(170,170,170,.3)",
		borderRadius: "5px"

		
		
	}
}));


