import * as React from 'react';
import { data } from '../data/dataJSON';


export function ProductImage(props) {
    let imgSrc='';
    if (props.index!=='') {
        imgSrc = "https://target.scene7.com/is/image/Target/" + data.search_response.items.Item[props.index].images[0].primary;
    }
    return (
        <div>
            <img src={imgSrc} alt="umbrella" />
        </div>

    );
}