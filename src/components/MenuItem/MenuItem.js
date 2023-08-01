import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { id, name, price, image, toppings, shortDescription } = item;
  return (
    <div className="MenuItem" key={id}>
      <ul className="MenuItem__name">
        <li>
          <h1>{name}</h1>
        </li>
        <li>
          <h4>{shortDescription}</h4>
        </li>
        <li className="MenuItem__avatar">
          <img src={image} alt={`${name}`} />
        </li>

        <li>Price: $ {price}</li>
        <li className="MenuItem__toppings">Toppings: {toppings.join(`, `)}</li>
      </ul>
    </div>
  );
};

export default MenuItem;
