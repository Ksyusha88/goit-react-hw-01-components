import propTypes from 'prop-types';
import style from '../Statistics/Statistics.module.css';

const Statistics = ({title, stats }) => {
    return(
        <section className={style.statistics}>
        <h2 className="title">{title}</h2>

        <ul className={style.statList}> 
        {stats.map(({ id, label, percentage }) => (
            <li key={id} className={style.item}>
            <span className="label">{label}</span>
            <span className={style.percentage}>{percentage}%</span>
            </li>
            ))}
        </ul>
        </section>
    )};

    Statistics.propTypes = {
        title: propTypes.string,
        stats: propTypes.arrayOf(
          propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
          }),
        ),
      };
      
      Statistics.defaultProps = {
        title: '',
      };
      

export default Statistics;
