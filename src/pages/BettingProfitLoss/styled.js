import { Select } from '@mui/material';
import sytled from '@mui/material/styles/styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const BettingStyled = sytled(DatePicker)(({theme}) => ({
    '& .MuiInputBase-input': {
        padding: "5px",
        // display: "none"

    },
    [theme.breakpoints.down(780)]: {
		width: '100%',
        color: "#939393",
        border: "1px solid rgba(170,170,170,.3)",
        // padding: "10px"
	}
    
 
}));

export const SelectStyles = sytled(Select)(({ theme }) => ({
	color: 'black',
	// width: '100%',
    padding: '0px',
    width: "100px",
    textAlign: "end",
	'& .MuiInputBase-input': {
		padding: '5px 14px',
		width: "100%",
		marginRight: "10px"

	},
	
	[theme.breakpoints.down(780)]: {
		width: '100%',
		border: "1px solid rgba(170,170,170,.3)",
        color: "#939393",
        // padding: "10px"
	}
}));