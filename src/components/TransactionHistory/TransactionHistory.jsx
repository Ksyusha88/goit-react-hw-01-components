import propTypes from 'prop-types';
import style from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
    <table className={style.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>{items.map(({id, type, amount, currency}) => {
            return (
            <tr key ={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>
            );
        })}
            </tbody>
     </table>
    );
};

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
      }),
    ),
  };

export default TransactionHistory;



