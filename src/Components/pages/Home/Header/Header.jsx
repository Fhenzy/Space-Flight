import React from 'react';
import "../../../../Global.css"
import Typography from '@mui/material/Typography';

function Header() {

    return (
        <div className='center'>
            <Typography variant="h2" component="div" gutterBottom mt={2}>
                Noticias do espaço
            </Typography>      
        </div>
    )
}
export default Header