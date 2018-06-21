import * as React from 'react';
import AddToCart from './AddToCart';
import { data } from '../data/dataJSON';
export function ProductInformation(props) {
    return (
        <React.Fragment>
            <AddToCart index={props.index}/>

            <button 
                aria-label="love ShedRain Auto Open/Close Compact Umbrella  - Black to keep tabs on it" 
                class="CrushButton-s1m3a7bs-0 eoqnrw" 
                data-test="crushButton" id="crushbutton-332">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    preserveAspectRatio="xMaxYMax" 
                    viewBox="0 0 32 32" 
                    height="14" 
                    width="14" 
                    focusable="false" 
                    class="styles__CrushIcon-c5rwr7-0 cwVNAJ Icon-s1t7epqp-0 iCOdIk">
                        <path fill="#888" stroke="none" d="M22.7 5.2c1.8 0 3.4 1 4.5 2.7 1.1 1.8 1.1 3.7 0 6.2-.8 1.8-2.3 3.4-3.7 4.8-2.1 2-4.2 4-6.2 6l-1.2 1.2-.3-.3c-1.2-1.1-2.4-2.2-3.5-3.3-1.7-1.6-3.6-3.5-5.4-5.4-1.4-1.5-2.3-3.2-2.7-5-.5-2.1.2-3.6.8-4.5.9-1.2 2.2-2.1 3.4-2.3.3 0 .6-.1.9-.1 1.7 0 3.1.7 4.4 2.4.1.1.1.2.2.2l.1.1c.1.1.1.2.2.3l.1.2 1.6 2.3 1.7-2.2.2-.3c.1-.2.2-.3.4-.5 1-1.3 2.1-2 3.5-2.3.3-.1.6-.2 1-.2m0-2c-.5 0-1 0-1.5.2-1.9.4-3.5 1.5-4.6 3.1-.2.2-.4.5-.6.7-.1-.2-.2-.3-.3-.5-.1-.2-.2-.3-.3-.5-1.6-2-3.6-3.1-6-3.1-.4 0-.8 0-1.2.1-3.1.5-7 4.1-6 9.2.5 2.3 1.6 4.3 3.2 6 1.8 1.9 3.6 3.7 5.5 5.5 1.7 1.6 3.4 3.2 5.2 4.8 3-2.8 6-5.6 8.9-8.4 1.6-1.6 3.2-3.3 4.1-5.4 1.2-2.7 1.5-5.4-.1-8.1-1.6-2.3-3.8-3.6-6.3-3.6z">
                        </path>
                    </svg>
            </button>

            <div className={"info"}>
                {data.search_response.items.Item[props.index].offer_price.price}
            </div>
            <div className={"info"}>
                {data.search_response.items.Item[props.index].title}
            </div>
            <div>
                rate
            </div>
        </React.Fragment>
    )
}