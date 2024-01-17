import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const BodyContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const Div = styled.div`
`;

export const DescriptionDiv = styled.div`
display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const LeftSection = styled.div`
flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  max-width: 850px;
  height: 1020px;
  margin-left: 5%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 400px;  
  max-height: 540px; 
  object-fit: cover;
  display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RightSection = styled.div`
  flex: 1;
  margin-left: 20px;
  max-width: 600px;
`;

export const PricingDetails = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const StrikeDownPrice = styled.span`
  color: gray;
  margin-left: 10px;
  text-decoration: line-through;
  font-size: 14px;
`;

export const Discount = styled.span`
  color: green;
  margin-left: 5px;
  font-size: 14px;
`;

export const Description = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: 600;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const YellowStar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const GrayText = styled.span`
  color: gray;
`;

export const BlackText = styled.span`
  color: black;
  font-weight: 500;
`;

export const HeartIcon = styled(FavoriteIcon)`
  cursor: pointer;
`;

export const OffersSection = styled.div`
  margin-top: 20px;
`;

export const OffersHeader = styled.div`
  font-weight: bold;
  margin: 20px 0;
  display: flex;
`;

export const OffersCardContainer = styled.div`
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OfferCard = styled.div`
  min-width: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #b3d9ff;  

  box-shadow: 4px 4px 2px #3498db; 
  margin-bottom: 20px;
`;

export const OfferIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const OfferDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledDivider = styled.div`
  /* Add any specific styles for Divider */
`;

export const StyledBadge = styled.div`
  /* Add any specific styles for Badge */
`;

export const ImageCarouselSection = styled.div`
  margin-top: 20px;
`;

export const CarouselHeader = styled.div`
  font-weight: bold;
  margin: 20px 0;
  display: flex;
`;

export const ImageCarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  max-height: 250px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  margin-right: 10px;
  border: 1px solid purple;
  border-right: none;
  border-bottom: none;

  &:last-child {
    border-right: 1px solid purple;
  }
`;


export const SelectSizeSection = styled.div`
  margin-top: 20px;
`;

export const SelectSizeHeader = styled.div`
  font-weight: bold;
  margin: 10px 0;
  color: beige;
`;

export const SizeGuide = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const SizeBoxContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SizeBox = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 4px 4px 2px #D3D3D3; 

  &:last-child {
    margin-right: 0;
  }
`;

export const AddToCartSection = styled.div`
  margin: 40px 0;
  width: 100%;
`;

export const AddToCartButton = styled.button`
  background-color: #1fd655;
  padding: 20px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #D3D3D3;
  box-shadow: 3px 3px 2px #FFDB58; 
  width: 100%;
`;

export const CheckDeliverySection = styled.div`
  margin-top: 20px;
`;

export const PincodeInputContainer = styled.div`
  display: flex;
  margin-top: 10px;
  box-shadow: 3px 3px 2px #0096FF; 
`;

export const PincodeInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid blue;
  border-radius: 4px 0 0 4px;
`;

export const CheckButton = styled.button`
  background-color: lightblue;
  color: #0096FF;
  padding: 8px;
  border: 1px solid blue;
  border-radius: 0 4px 4px 0;
  min-width: 100px;
  font-weight: 700;
`;

