import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas} from '../utils/format';

function Transaction(props) {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = props.transaction.amount < 0 ? '-' : '+';
    const className = props.transaction.amount < 0 ? 'minus' : 'plus';

    return (
        
           <li className={className}> {props.transaction.text} 
            <span>{sign}${numberWithCommas(Math.abs(props.transaction.amount))}</span>
               <button className="delete-btn" onClick={()=> deleteTransaction(props.transaction._id)}>x</button>
             </li>   
        
    )
}

export default Transaction
