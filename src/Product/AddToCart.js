import * as React from 'react';
import { connect } from 'react-redux';
import { addProductAction } from '../store/addProduct';

export class AddToCart extends React.Component {
    constructor(props){
        super(props)
    }
    add = () => {
        this.props.addItem();
    }
    render() {
        return (
            <button onClick={this.add}>
                add to cart
            </button>
        )
    }

}

export default connect(
    (store) => ({

    }),
    {
        addItem: addProductAction
    }
)(AddToCart);