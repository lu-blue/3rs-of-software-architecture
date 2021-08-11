import PropTypes from "prop-types";

export default function Inventory(props) {
  const { currencyConverter, inventory, localCurrency } = props;

  // Mutating an external state, BAD!
  function onAddToCart(itemId) {
    window.cart.push(itemId);
  }

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Cart</th>
          </tr>

          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.description}</td>
              <td>
                {currencyConverter.convert(
                  item.price,
                  item.currency,
                  localCurrency
                )}
              </td>
              <td>
                <button onClick={() => onAddToCart(item.id)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.object.isRequired,
  localCurrency: PropTypes.string.isRequired,
  currencyConverter: PropTypes.object.isRequired,
};
