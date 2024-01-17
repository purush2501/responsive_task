import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import cowprintBack from '../../images/cowprint_back.png';
import cowprintClose from '../../images/cowprint_close.png';
import cowprintFront from '../../images/cowprint_front.png';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const ReviewComponent = () => {
    const images = [cowprintBack, cowprintClose, cowprintFront];
    return (
        <div style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'gray' }}>
                    <div style={{ color: 'gray' }}>John Doe</div>
                    <VerifiedUserIcon fontSize='small' color='success'/>
                    <div style={{ color: 'green' }}>Verified Buyer</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'gray' }}>
                    <div>7 months ago</div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                <StarIcon style={{ color: 'yellow' }} />
                <div style={{ color: 'gray' }}>4</div>
                <div style={{ color: 'lightgray' }}>|</div>
                <div style={{ color: 'gray' }}>Cowprint printer, Size L</div>
            </div>

            <div style={{ marginTop: '5px' }}>
                <div style={{ fontWeight: 'bold', color: 'red', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FavoriteIcon />
                    <div style={{ color: 'black' }}>Superb product</div>
                </div>
                <div style={{ color: 'gray', display: 'flex' }}>Great quality and nice design. Will buy more products from Vierdo</div>
            </div>

            <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Images ${index + 1}`} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                ))}
            </div>
        </div>
    );
};

export default ReviewComponent;
