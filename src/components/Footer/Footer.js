import React, { useState } from 'react';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Divider,
    InputAdornment,
    Input,
    Collapse,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [categoriesExpanded, setCategoriesExpanded] = useState(false);
    const [aboutUsExpanded, setAboutUsExpanded] = useState(false);
    const [companyExpanded, setCompanyExpanded] = useState(false);

    const handleCompanyToggle = () => {
        setCompanyExpanded((prev) => !prev);
    };

    const handleCategories = () => {
        setCategoriesExpanded((prev) => !prev);
    };

    const handleAboutUs = () => {
        setAboutUsExpanded((prev) => !prev);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#007f5f',
                padding: '20px',
                color: '#fff',
                textAlign: 'left',
            }}
        >
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? '' : 'space-between' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ fontWeight: 'bold', fontSize: '40px', marginBottom: '10px', marginleft: '10px' }}>
                        JOIN OUR VIERDO FAM <br />
                        AND STAY UPDATED
                    </Box>

                    <Box sx={{ lineHeight: isMobile ? '' : '0.5rem' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Curabitur tristique sapien eget odio consectetur</p>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    <Input
                        type="text"
                        placeholder="vierdo@yahoo.com"
                        style={{
                            padding: '5px',
                            borderRadius: '4px',
                            border: '1px solid #333',
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                            marginBottom: '10px',
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <Button variant="contained" color="secondary">
                                    SUBSCRIBE
                                </Button>
                            </InputAdornment>
                        }
                    />
                </Box>
            </div>

            <Box sx={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Box sx={{ fontWeight: 'bold' }}>Instagram</Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={{ fontWeight: 'bold' }}>LinkedIn</Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={{ fontWeight: 'bold' }}>WhatsApp</Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={{ fontWeight: 'bold' }}>Twitter</Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>

            <Divider sx={{ margin: '20px 0' }} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : '',
                    justifyContent: isMobile ? '' : 'space-between',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#000'
                }}
            >
                <div>
                    <Box sx={{ fontWeight: 'bold', fontSize: '16px', marginBottom: isMobile ? '2px' : '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>CATEGORIES</span>
                        {isMobile && <span>
                            <Button
                                variant="text"
                                color="inherit"
                                onClick={handleCategories}
                                sx={{ fontSize: '14px' }}
                            >
                                {companyExpanded ? '-' : '+'}
                            </Button>
                        </span>}
                    </Box>
                    <Collapse in={isMobile ? categoriesExpanded : true}>
                        <div style={{ fontSize: '14px', display: isMobile ? 'flex' : '', flexDirection: 'column', lineHeight: isMobile ? '1px' : '', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <p>Category 1</p>
                            <p>Category 2</p>
                            <p>Category 3</p>
                            <p>Category 4</p>
                            <p>Category 5</p>
                        </div>
                    </Collapse>
                </div>

                {!isMobile &&
                    <div style={{ marginBottom: '10px', fontSize: '14px', lineHeight: isMobile ? '1px' : '' }}>
                        <p>Category 6</p>
                        <p>Category 7</p>
                        <p>Category 8</p>
                        <p>Category 9</p>
                        <p>Category 10</p>
                    </div>
                }

                <div>
                    <Box sx={{ fontWeight: 'bold', fontSize: '16px', marginBottom: isMobile ? '2px' : '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>COMPANY</span>
                        {isMobile && <span>
                            <Button
                                variant="text"
                                color="inherit"
                                onClick={handleCompanyToggle}
                                sx={{ fontSize: '14px' }}
                            >
                                {companyExpanded ? '-' : '+'}
                            </Button>
                        </span>}
                    </Box>
                    <Collapse in={isMobile ? companyExpanded : true}>
                        <div style={{ fontSize: '14px', display: isMobile ? 'flex' : '', flexDirection: 'column', lineHeight: isMobile ? '1px' : '', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Work With Us</p>
                        </div>
                    </Collapse>
                </div>

                <div>
                    <Box sx={{ fontWeight: 'bold', fontSize: '16px', marginBottom: isMobile ? '2px' : '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>FOR CUSTOMERS</span>
                        {isMobile && <span>
                            <Button
                                variant="text"
                                color="inherit"
                                onClick={handleAboutUs}
                                sx={{ fontSize: '14px' }}
                            >
                                {companyExpanded ? '-' : '+'}
                            </Button>
                        </span>}
                    </Box>
                    <Collapse in={isMobile ? aboutUsExpanded : true}>
                        <div style={{ fontSize: '14px', display: isMobile ? 'flex' : '', flexDirection: 'column', lineHeight: isMobile ? '1px' : '', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <p>Contact Us</p>
                            <p>FAQ's</p>
                            <p>Track Order</p>
                            <p>Return Policy</p>
                            <p>Shopping Policy</p>
                        </div>
                    </Collapse>

                </div>
            </Box>

            <Divider sx={{ margin: '20px 0' }} />
            <Box style={{ color: '#000' }}>&copy; 2023 Vierdo</Box>
        </Box>
    );
}

export default Footer;
