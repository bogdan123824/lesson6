import React, { FC } from 'react';
import Reviews from './Review.png';
import Heart from './heart.png';
import Scale from './scales.png';
import { Cont, TopSell, MyCompWrapper, Cont2, Img, Icon, Icon2, Icon3, IconSecond, Icon4, Icon5, Text, Name, Review, Img2, Icon6, Icon7, Hearts, Scales, Price,GrayPrice, BuyBtn, New, Log} from './MyComp.styled';

interface MyCompProps {}

const MyComp: FC<MyCompProps> = () => (
 <MyCompWrapper>
   <Cont>
   <TopSell>Топ продажу</TopSell>
   <Log src='https://www.istore.ua/upload/iblock/374/xek8is9ql6g83jqo02r5s6ey2vwc9n27/50e50.png'></Log><Img src='https://www.istore.ua/upload/resize_cache/iblock/e7f/tw7s6j5zmeum7f61b0pwg1wypv6v9cyg/275_170_1/apple_iphone_15_pro_1_tb_natural_titanium_esim.png'></Img>
    <Hearts src={Heart}></Hearts>
    <Scales src={Scale}></Scales>
    <New>Новинка</New>
    <IconSecond></IconSecond>
    <Icon4></Icon4>
    <Icon5></Icon5>
    <Icon7></Icon7>
    <Text>64 GB</Text>
    <Text>128 GB</Text>
    <Text>256 GB</Text>
    <Text>512 GB</Text>
    <Name>Apple iphone 15 pro max  256 гб Gray titanium</Name>
    <Review><Img2 src={Reviews}></Img2>Залишити відгук</Review>
    <Price>60 000 грн<GrayPrice>69 000 грн</GrayPrice></Price>
    <BuyBtn>Купить</BuyBtn>
   </Cont>
    <Cont2>
    <TopSell>Топ продажу</TopSell>
    <Log src='https://www.istore.ua/upload/iblock/374/xek8is9ql6g83jqo02r5s6ey2vwc9n27/50e50.png'></Log><Img src='https://www.istore.ua/upload/resize_cache/iblock/e7f/tw7s6j5zmeum7f61b0pwg1wypv6v9cyg/275_170_1/apple_iphone_15_pro_1_tb_natural_titanium_esim.png'></Img>
    <Hearts src={Heart}></Hearts>
    <Scales src={Scale}></Scales>
    <New>Новинка</New>
    <Icon></Icon>
    <Icon2></Icon2>
    <Icon3></Icon3>
    <Icon6></Icon6>
    <Text>64 GB</Text>
    <Text>128 GB</Text>
    <Text>256 GB</Text>
    <Text>512 GB</Text>
    <Name>Apple iPhone 15 Pro 1 Тб Natural Titanium eSIM</Name>
    <Review><Img2 src={Reviews}></Img2>Залишити відгук</Review>
    <Price>40 000 грн<GrayPrice>50 000 грн</GrayPrice></Price>
    <BuyBtn>Купить</BuyBtn>
    </Cont2>

    </MyCompWrapper>
 
);

export default MyComp;
