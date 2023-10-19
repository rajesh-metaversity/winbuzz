import { FormControl } from '@mui/material';

import sytled from '@mui/material/styles/styled';

export const RadioStyled = sytled(FormControl)(({ theme }) => ({
	// display: "none",

	'& .MuiFormGroup-root': {
		display: 'flex',
		flexDirection: 'row'
	},

	[theme.breakpoints.down(780)]: {
		// border: "1px solid red",
        padding: '10px',
        

		'& .MuiFormControlLabel-label': {
            fontSize: '12px',
            color: '#666',
            
        }
      
	}
}));
