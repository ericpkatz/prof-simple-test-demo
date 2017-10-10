const ordersToProductsMapper = ({ user, products })=> {
  const productMap = products.reduce((memo, product)=> {
    memo[product.id] = product;
    return memo;
  }, {});
  const orders = user.orders.reduce((memo, order)=> {
    const lineItems = order.lineItems.reduce((memo, lineItem)=> {
      const product = productMap[lineItem.productId];
      if(!product){
        memo.push(lineItem);
      }
      else {
        memo.push(Object.assign({}, lineItem, { product }));
      }
      return memo;
    }, []);
    memo.push(Object.assign({}, order, { lineItems }));
    return memo;
  }, []);

  return Object.assign({}, user, { orders });
};

const mappers = {
  ordersToProductsMapper
};

export { mappers };

