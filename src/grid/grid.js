import * as React from 'react';
import { data } from '../data/dataJSON';
import { ProductContainer } from '../Product/ProductContainer';

export class Grid extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let items = data.search_response.items.Item
        return (
            <div>
                {
                    items.map((item, i) => {
                        return (
                            <React.Fragment>
                                <ProductContainer index={i} key={i}/>
                            </React.Fragment>

                        )
                    })
                }
            </div>
        )
    }
}