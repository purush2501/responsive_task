import React, { useState } from 'react';
import {
    BodyContainer,
    LeftSection,
    Image,
    RightSection,
    PricingDetails,
    Price,
    StrikeDownPrice,
    Discount,
    Description,
    Rating,
    YellowStar,
    GrayText,
    HeartIcon,
    OffersSection,
    OffersHeader,
    OffersCardContainer,
    OfferCard,
    OfferIcon,
    OfferDescription,
    Div,
    BlackText,
    SelectSizeSection,
    SizeGuide,
    SizeBoxContainer,
    SizeBox,
    AddToCartSection,
    AddToCartButton,
    CheckDeliverySection,
    PincodeInputContainer,
    PincodeInput,
    CheckButton,
    ImageCarouselSection,
    CarouselHeader,
    ImageCarouselContainer,
    ImageContainer,
} from './styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import cowprintBack from '../../images/cowprint_back.png';
import cowprintClose from '../../images/cowprint_close.png';
import cowprintFront from '../../images/cowprint_front.png';
import cowprintSide from '../../images/cowprint_side.png';
import ProductInformation from '../ProductInformation/ProductInformation';
import CustomerRatingsAndReviews from '../CustomerRatingsAndReviews/CustomerRatingsAndReviews';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import Recently from '../Recently/Recently';
import Footer from '../Footer/Footer';

const Body = () => {
    const [isWishlistSelected, setWishlistSelected] = useState(false);
    const images = [cowprintBack, cowprintClose, cowprintFront, cowprintSide];
    const [disabled] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const handleWishlistClick = () => {
        setWishlistSelected(!isWishlistSelected);
    };

    const renderImageButtons = () => {
        return (
            <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '10px', justifyContent: 'space-between', width: '90%' }}>
                <>
                    <ArrowBackIcon style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', padding: '5px' }} />
                </>
                <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
                    <ShareIcon style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', padding: '5px', cursor: 'pointer' }} />
                    {isWishlistSelected ? (
                        <HeartIcon onClick={handleWishlistClick} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', padding: '5px', color: '#d500f9' }} />
                    ) : (
                        <FavoriteBorderOutlinedIcon color="inherit" onClick={handleWishlistClick} style={{ cursor: 'pointer', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', padding: '5px', }} />
                    )}
                    <ShoppingBagIcon style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', padding: '5px', cursor: 'pointer' }} />
                </div>
            </div>
        );
    };

    return (
        <BodyContainer style={{ display: 'flex', flexDirection: 'column', padding: isMobile ? '0 0' : '' }}>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : '' }}>
                {isMobile ? (
                    <div>
                        <img key={cowprintFront} src={cowprintFront} alt={cowprintFront} />
                        {renderImageButtons()}
                    </div>
                ) : (
                    <LeftSection>
                        {images.map((src, index) => (
                            <Image key={index} src={src} alt={`Image ${index + 1}`} />
                        ))}
                    </LeftSection>
                )}

                <RightSection>
                    <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <PricingDetails>
                                <Price>
                                    ₹1299
                                    <StrikeDownPrice>₹2499</StrikeDownPrice>
                                    <Discount>20% off</Discount>
                                </Price>
                            </PricingDetails>

                            <Description>Cowprint printed Oversized Fit</Description>

                            <Rating>
                                <YellowStar>★</YellowStar>
                                <BlackText>4.5</BlackText>
                                <GrayText>&nbsp;&nbsp;2k</GrayText>
                            </Rating>
                        </Div>
                        {!isMobile &&
                            <Div>
                                {isWishlistSelected ? (
                                    <HeartIcon onClick={handleWishlistClick} style={{ color: '#d500f9' }} />
                                ) : (
                                    <FavoriteBorderOutlinedIcon color="inherit" onClick={handleWishlistClick} style={{ cursor: 'pointer' }} />
                                )}

                            </Div>}
                    </Div>

                    <OffersSection>
                        <OffersHeader>OFFERS</OffersHeader>
                        <OffersCardContainer>
                            {[1, 2, 3].map((index) => (
                                <OfferCard key={index} style={{ minWidth: isMobile ? '90%' : '' }}>
                                    <Div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <OfferIcon>%</OfferIcon>
                                        <OfferDescription>
                                            <div style={{ fontSize: '16px', color: '#3498db' }}>Buy 2 tees at just ₹699</div>
                                            <div style={{ fontSize: '12px', color: 'black' }}>Add any 2 tees to the card to avail</div>
                                        </OfferDescription>
                                    </Div>
                                    <Div>
                                        <div style={{ textAlign: 'right', color: 'gray' }}>{index}/3</div>
                                    </Div>
                                </OfferCard>
                            ))}
                        </OffersCardContainer>
                    </OffersSection>

                    <ImageCarouselSection>
                        <CarouselHeader>COLOR-BEIGE</CarouselHeader>
                        <ImageCarouselContainer>
                            {images.map((src, index) => (
                                <ImageContainer key={index}>
                                    <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src={src} alt='' />
                                </ImageContainer>
                            ))}
                        </ImageCarouselContainer>
                    </ImageCarouselSection>

                    <SelectSizeSection>
                        <SizeGuide>
                            <div style={{ fontWeight: '500' }}>SELECT SIZE</div>
                            <div style={{ color: 'purple', marginRight: '10px' }}>SIZE GUIDE</div>
                        </SizeGuide>
                        <SizeBoxContainer>
                            {[28, 30, 32, 34, 36, 38, 40, 42].map((size) => (
                                <SizeBox key={size}>
                                    {size === 32 && <div style={{ textDecoration: 'line-through', opacity: disabled ? 0.2 : 1 }}>{size}</div>}
                                    {size === 36 && <div>{size}</div>}
                                    {size !== 32 && size !== 36 && <div>{size}</div>}
                                </SizeBox>
                            ))}
                        </SizeBoxContainer>
                    </SelectSizeSection>

                    <AddToCartSection style={{ position: isMobile ? 'relative' : '', right: isMobile ? '10px' : '', bottom: isMobile ? '0' : '' }}>
                        <AddToCartButton>ADD TO CART</AddToCartButton>
                    </AddToCartSection>

                    <CheckDeliverySection>
                        <div style={{ display: 'flex', margin: '20px 0', fontWeight: '500' }}>CHECK FOR DELIVERY DETAILS</div>
                        <PincodeInputContainer style={{ width: isMobile ? '95%' : '' }}>
                            <PincodeInput placeholder="ENTER PINCODE" />
                            <CheckButton>Check</CheckButton>
                        </PincodeInputContainer>
                    </CheckDeliverySection>
                    <ProductInformation />
                    <CustomerRatingsAndReviews />
                </RightSection>
            </div>
            <SimilarProducts />
            <Recently />
            <Footer />
        </BodyContainer>
    );
};

export default Body;
