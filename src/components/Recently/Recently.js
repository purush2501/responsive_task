import React from 'react';
import CustomCard from '../CustomCard/CustomCard';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Recently() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const numberOfCardsToShow = isMobile ? 2 : 4;
    return (
        <>
            <div style={{ margin: isMobile ? '4% 0' : '2% 0', fontSize: '16px', fontWeight: 'bold' }}>RECENTLY VIEWED PRODUCTS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: isMobile ? 'space-evenly' : 'space-between', marginBottom: '20px' }}>
                {[...Array(numberOfCardsToShow)].map((_, index) => (
                    <CustomCard key={index} />
                ))}
            </div>
        </>
    );
}

export default Recently;
