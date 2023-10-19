import { FormControl } from "@mui/material";

import sytled from '@mui/material/styles/styled';

export const RadioStyled = sytled(FormControl)({
    
    // display: "none",

    '& .MuiFormGroup-root': {
        display: "flex",
        flexDirection: "row"
        
    
    },
 
});

