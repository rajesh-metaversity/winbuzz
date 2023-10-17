import sytled from '@mui/material/styles/styled';
import { Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const SelectStyles = sytled(Select)({
	color: 'black',
	width: '100px',
	padding: '0px',

	'& .MuiInputBase-input': {
		padding: '7.5px 14px'
	}
});
