import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import { Divider } from '@mui/material';

const CustomerRatingsAndReviews = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ display: 'flex' }}>CUSTOMER RATINGS AND REVIEWS</h4>

            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>4.0</div>
                    <div style={{ marginLeft: '10px', fontSize: '14px', color: 'lightgray' }}>84 Reviews</div>
                    <div style={{ marginLeft: '10px' }}>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <StarIcon key={index} style={{ color: index <= 4 ? 'yellow' : 'lightgray' }} />
                        ))}
                    </div>
                </div>
            </div>
            <Divider />
            <div>
                <ReviewComponent />
            </div>
        </div>
    );
};

export default CustomerRatingsAndReviews;
