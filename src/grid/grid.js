import * as React from 'react';
import { data } from '../data/dataJSON';
import { ProductContainer } from '../Product/ProductContainer';
import connect from 'react-redux/lib/connect/connect';

export class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = data.search_response.items.Item;
        return (
            <div>
                <div >
                    <p>total products {this.props.total_items}</p>
                </div>
                {
                    items.map((item, i) => {
                        return (
                            <React.Fragment>
                                <ProductContainer index={i} key={i} />
                            </React.Fragment>
                        );
                    })
                }
            </div>
        )
    }
}

export default connect(
    (store) => ({
        total_items: store.total_items,
        items: store.items
    })
)(Grid);