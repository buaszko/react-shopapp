import { useState } from 'react';
import productsData from '../../data/products';
import Product from './Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  // console.log('products:', products);
  return (
    <section>
      {products.map(product => <Product key={product.id} data={product} />)}
    </section>
  )
 
};

export default Products;