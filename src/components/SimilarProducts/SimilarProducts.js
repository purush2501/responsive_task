import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomCard from '../CustomCard/CustomCard'

function SimilarProducts() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const numberOfCardsToShow = isMobile ? 2 : 8;
    return (
        <>
            <div style={{ margin: isMobile ? '4% 0' : '2% 0', fontSize: '16px', fontWeight: 'bold' }}>SIMILAR PRODUCTS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '20px' }}>
                {[...Array(numberOfCardsToShow)].map((_, index) => (
                    <CustomCard key={index} />
                ))}
            </div>
        </>
    )
}

export default SimilarProducts