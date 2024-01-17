import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box, IconButton, Divider } from '@mui/material';
import smile from '../../images/smile_side.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const CustomCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                maxWidth: isMobile? 175 : 300,
                maxHeight: 500,
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '70%',
                    backgroundColor: '#f4f4f4',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#2ecc71',
                        color: '#fff',
                        padding: '4px',
                        borderRadius: '5px',
                        zIndex: 1,
                    }}
                >
                    NEW
                </Box>
                <img
                    src={smile}
                    alt="Product tshirt"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
            </Box>

            <Box sx={{ padding: '15px' }}>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} >
                    <span>
                        <span style={{ fontSize: '14px', color: '#2ecc71', marginRight: '5px' }}>₹1299</span>
                        <span style={{ textDecoration: 'line-through', fontSize: '12px', color: '#999' }}>₹2499</span>
                    </span>
                    <span style={{ fontSize: '12px', color: '#2ecc71' }}>20% OFF</span>
                </div>

                <div style={{ color: '#333', marginBottom: '10px' }}>Black Vierdo T-shirt</div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#333',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <span style={{ color: '#ff9800', marginRight: '5px' }}>★</span>
                        4.5{' '}
                        <span style={{ color: '#999', marginX: '5px' }}>|</span> 2k{' '}
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#008080', }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff69b4', }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#87ceeb', }} />
                        <span style={{ color: '#999', marginLeft: '5px' }}>+2</span>
                    </div>
                </div>

                <Divider />

                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #ddd', paddingTop: '10px', }} >
                    <div style={{ color: '#333' }}>ADD TO CART</div>
                    <IconButton color="primary">
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default CustomCard;
