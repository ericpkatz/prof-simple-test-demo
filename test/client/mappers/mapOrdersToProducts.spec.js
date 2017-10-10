import { expect } from 'chai';
import { mappers } from '../../../src/redux';
const { ordersToProductsMapper } = mappers;


describe('mappers', ()=> {
  const user = {
    id: 1,
    name: 'moe',
    orders: [
      {
        id: 1,
        lineItems: [
          {
            id: 1,
            productId: 1,
            quantity: 2
          },
          {
            id: 2,
            productId: 2,
            quantity: 2
          }
        ]
      }
    ]
  };
  const products = [
    {
      id: 1,
      name: 'foo'
    },
    {
      id: 2,
      name: 'bar'

    }
  ];

  it('exists', ()=> {
    const result = ordersToProductsMapper({ user, products});
    expect(result.orders[0].lineItems[0].product.name).to.equal('foo');
    expect(result.orders[0].lineItems[1].product.name).to.equal('bar');
  });
});
