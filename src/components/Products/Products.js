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

 /* {products.map(product => <Product key={product.id} id={product.id} basePrice={product.basePrice}  title={product.title} colors={product.colors} sizes={product.sizes} name={product.name}/>)} */

// return (
//   <section>
//     <Product
//       id={products[0].id}
//       name={products[0].name}
//       title={products[0].title}
//       colors={products[0].colors}
//       sizes={products[0].sizes}
//       basePrice={products[0].basePrice} />
//     <Product
//       id={products[1].id}
//       name={products[1].name}
//       title={products[1].title}
//       colors={products[1].colors}
//       sizes={products[1].sizes}
//       basePrice={products[1].basePrice} />
//   </section>
// )