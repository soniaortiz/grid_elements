import * as React from 'react';
import { connect } from 'react-redux';
import { addProductAction, addProductDescription } from '../store/addProduct';
import './styles.css';

export class AddToCart extends React.Component {
    constructor(props) {
        super(props)
    }
    add = () => {
        this.props.addItem();
        this.props.addItemToList(this.props.index);
    }
    render() {
        return (
            <button onClick={this.add} className="addToCar">
                Add to cart
            </button>
        )
    }
}

export default connect(
    (store) => ({

    }),
    {
        addItem: addProductAction,
        addItemToList: addProductDescription
    }
)(AddToCart);