import styles from '../Product.module.scss';
import PropTypes from 'prop-types'
import { useState , useMemo} from 'react';
import ProductImage from '../Products/Product/ProductImage/ProductImage';
import ProductForm from '../Products/Product/ProductForm/ProductForm'

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0])
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
  const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()] 
  };

  const getPrice = useMemo(() =>{
    const suma = props.sizes.find( ({ name }) => name === currentSize)
    return props.basePrice + suma.additionalPrice
  }, [props.sizes, props.basePrice, currentSize]);

  const hundleSubmit = (e) => {
    e.preventDefault()
    console.log('Summary');
    console.log('========');
    console.log('Name:', props.title);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
       <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
       <ProductForm 
        sizes={props.sizes}
        colors={props.colors}
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
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  basePrice:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
};

export default Product;