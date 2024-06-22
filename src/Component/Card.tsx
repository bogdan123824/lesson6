const Card = ({ image, title, price}: { image: string; title: string; price: string }) => (
  <>
    <div>
      <img src={image} />
    </div>
    <div className='cont'>
    <div className='price'>{price}</div>
    <span>★★★★☆</span>
    <a href=""><div className='title-hov'>{title}</div></a>
    </div>
    {/* <div>{title}</div> */}
    <button className="buy">КУПИТЬ</button>
  </>
);

export default Card;
