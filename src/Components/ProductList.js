const ProductList = ({ image, name, brand, price, websiteLink, description }) => {
  return (
    <article className="MUList">
      <h4>{name}</h4>
      <div className="MUDetails">
        <div>{brand}</div>
        <div>{price}</div>
        <div>{websiteLink}</div>
      </div>
    </article>
  );
};

export default ProductList;
