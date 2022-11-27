import {GlobalContext} from '../context/GlobalState'
import { useContext } from 'react';
const Transaction = ({transaction}) => {
    let sign = transaction.amount < 0 ? '-' : '+';
    const {deletTransaction} = useContext(GlobalContext);
    return (
        <li className={transaction.amount < 0 ?"minus":"plus"}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=>deletTransaction(transaction.id)}>x</button>
       </li>
    )
};

export default Transaction;