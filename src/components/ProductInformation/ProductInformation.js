import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

const ProductInformation = () => {
    const sections = [
        {
            icon: <DescriptionOutlinedIcon />,
            title: 'Product Description',
            additionalInfo: 'Manufacture, Care, and Fit',
            content: 'Your product description goes here.',
        },
        {
            icon: <LocalShippingOutlinedIcon />,
            title: 'Free Shipping',
            additionalInfo: 'We offer free shipping across India',
            content: 'Your product description goes here.',
        },
        {
            icon: <CachedOutlinedIcon />,
            title: '14 Days Returns & Exchange',
            additionalInfo: 'Know about return & exchange policy',
            content: 'Your product description goes here.',
        },
    ];

    return (
        <div>
            <span style={{ display: 'flex', fontWeight: '500', margin: '30px 0', fontSize: '16px' }}>Product Information</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {sections.map((section, index) => (
                    <>
                        <Accordion key={index} style={{boxShadow: 'none'}}>
                            <AccordionSummary expandIcon={<AddOutlinedIcon />} style={{ padding: '10px' }}>
                                <div style={{ marginRight: '10px' }}>{section.icon}</div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <div>{section.title}</div>
                                    <div style={{ color: 'lightgray' }}>{section.additionalInfo}</div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>{section.content}</p>
                            </AccordionDetails>
                        </Accordion>
                    </>
                ))}
            </div>
        </div>
    );
};

export default ProductInformation;
