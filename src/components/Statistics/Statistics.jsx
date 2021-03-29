import propTypes from 'prop-types';


const Statistics = ({title, stats }) => {
    return(
        <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list"> 
        {stats.map(({ id, label, percentage }) => (
            <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
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
