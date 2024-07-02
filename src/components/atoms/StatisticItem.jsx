
import PropTypes from 'prop-types';

const StatisticItem = ({ value, label }) => {
  return (
    <div className="statistics-item p-4">
      <h2 className="text-4xl font-bold">{value}<span className="text-purple-400">+</span></h2>
      <p className="mt-2 text-xl">{label}</p>
    </div>
  );
};

StatisticItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

export default StatisticItem;
