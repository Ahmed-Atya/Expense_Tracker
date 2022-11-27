import {GlobalContext} from '../context/GlobalState'
import { useContext } from 'react';
const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts =transactions.map((transaction)=>transaction.amount);
    const totalSum = amounts.reduce((acc,current)=>{return acc+=current},0).toFixed();
    return (
        <>
            <h4 className='balance'>Your Balance</h4>
            <h1>${totalSum}</h1>
        </>
    )
};

export default Balance;