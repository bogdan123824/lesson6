import React from 'react';
import Card from './Component/Card';
import './App.css';
import arrow from './arrow.png'

// var productsInfo = [
//   { image: 'https://content.rozetka.com.ua/goods/images/preview/294109030.jpg', title: 'Клавиатура проводная Logitech G PRO', price: '10 000 грн'},
//   { image: 'https://content.rozetka.com.ua/goods/images/preview/352645649.jpg', title: 'Видеокарта Palit GeForce RTX 4070 Ti', price: '39 000 грн'},
//   { image: 'https://content2.rozetka.com.ua/goods/images/preview/333552395.jpg', title: 'Корпус 2E Alfa E130 (2E-E130)', price: '2 000 грн'},
//   { image: 'https://content2.rozetka.com.ua/goods/images/preview/408812049.png', title: 'Кабель питания для роутера с 5 в на 12 В от', price: '400 грн'},
//   { image: 'https://content.rozetka.com.ua/goods/images/preview/407582274.jpg', title: 'Охлаждающая подставка для', price: '15 000 грн'},
//   { image: 'https://content.rozetka.com.ua/goods/images/preview/108129380.jpg', title: 'Аккумулятор для Samsung B100AE,', price: '600 грн'},
//   { image: 'https://content2.rozetka.com.ua/goods/images/preview/312917412.jpg', title: 'Туалетная бумага Ruta Selecta 3 слоя 32', price: '700 грн'},
//   { image: 'https://content2.rozetka.com.ua/goods/images/preview/413351519.jpg', title: 'Оперативная память Corsair DIMM DDR5-', price: '8 888 грн'},
//   { image: 'https://content2.rozetka.com.ua/goods/images/preview/400326370.jpg', title: 'Монитор BenQ ZOWIE XL2566K', price: '29 000 грн'},
// ];

var productsInfo2 = [
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Shahy/Chehly/chehol_50-65/chehol_for_shess-1-196x196.webp', title: 'Чехол-сумка для шахмат и нард под заказ (1001rich)', price: '10 000 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy550g/620guv001s/nardi_vip_fotopechat_bmw-3-196x196.webp', title: 'Нарды VIP класса подарочные БМВ (BMW)', price: '25 000 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f26060/fishki-26mm-N6-196x196.webp', title: 'Фишки для нард N6, 26мм', price: '500 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy550g/620guv001s/nardi_vip_fotopechat_bmw-3-196x196.webp', title: 'Нарды VIP класса подарочные БМВ (BMW)', price: '25 000 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/td31053-01/fishki-korona-1-196x196.webp', title: 'Фишки для нард в шкатулке (Корона)', price: '100 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f30001/fishki-30mm-N1-196x196.webp', title: 'Фишки для нард N1, 30мм', price: '600 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50021/nardi-50-elegiya-196x196.webp', title: 'Нарды деревянные резные Элегия (50х46см)', price: '900 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Madon/c-181/Nardi-bolshie-BACKGAMMON-large-196x196.webp', title: 'Нарды большие Madon (48х57см)', price: '888 грн'},
  { image: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50017-gladiator/nardi-rizbleni-gladiator-196x196.webp', title: 'Нарды деревянные резные Гладиатор (50х46см)', price: '4 700 грн'},
];

function App() {
  return (
    // <div className="App">
    //   <div className="cards">
    //     {productsInfo.map((prod) => (
    //       <div className="cards-info">
    //         <Card 
    //           image={prod.image}
    //           title={prod.title}
    //           price={prod.price}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="App">
    <div className='cataloge'>
    <button>КАТАЛОГ ТОВАРОВ <img src={arrow}/></button>
    <button><a href="https://1001rich.com.ua/index.php?route=product/special">АКЦИИ</a></button>
    <button><a href="https://1001rich.com.ua/dostavka">ДОСТАВКА И ОПЛАТА</a></button>
    <button><a href="https://1001rich.com.ua/index.php?route=information/contact">КОНТАКТЫ</a></button>
    <button><a href="https://1001rich.com.ua/kontakt">О КОМПАНИИ</a></button>
    <button><a href="https://1001rich.com.ua/blog/">БЛОГ</a></button>
  </div>
      <div className="cards">
        {productsInfo2.map((prod2) => (
          <div className="cards-info">
            <Card 
              image={prod2.image}
              title={prod2.title}
              price={prod2.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
