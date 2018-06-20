import * as React from 'react';
import { data } from '../data/dataJSON';
import { ProductContainer } from '../Product/ProductContainer';

export class Grid extends React.Component {

    render() {
        let items = data.search_response.items.Item
        return (
            <div>
                {
                    items.map((item, i) => {
                        return (
                            <ProductContainer index={i}/>
                        )
                    })
                }
            </div>
        )
    }
}