// import * as React from 'react';
import { ProductImage } from './ProductImage';
import * as React from 'react';
import { ProductInformation } from './ProductInformation';
import './styles.css';
export function ProductContainer(props) {
    return (
        <div className="productContainer jMGvmv">
            <ProductImage index={props.index} />
            <ProductInformation index={props.index} />
        </div>
    )
}