import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useState , useMemo} from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {
  const data = props.data;
  const [currentColor, setCurrentColor] = useState(data.colors[0])
  const [currentSize, setCurrentSize] = useState(data.sizes[0].name)
  const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()] 
  };

  const getPrice = useMemo(() =>{
    const suma = data.sizes.find( ({ name }) => name === currentSize)
    return data.basePrice + suma.additionalPrice
  }, [data.sizes, data.basePrice, currentSize]);
 
  const hundleSubmit = (e) => {
    e.preventDefault()
    console.log('Summary');
    console.log('========');
    console.log('Name:', data.title);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
       <ProductImage title={data.title} name={data.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{data.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
       <ProductForm 
        data={data}
        hundleSubmit={hundleSubmit}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        prepareColorClassName={prepareColorClassName}
        getPrice={getPrice}
       />
      </div>
    </article>
  )
};

Product.propTypes = {
  data:PropTypes.object

};
export default Product;
