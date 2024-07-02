
import StatisticItem from '../atoms/StatisticItem';

const Statistic = () => {
  return (
    <section id="statistics" className="relative z-20 -mt-20">
      <div className="statistics container mx-auto flex justify-around items-center text-center rounded-xl shadow-lg p-6 bg-white ring ring-indigo-50">
        <StatisticItem value="10K" label="Active users" />
        <StatisticItem value="$2M" label="Transaction" />
        <StatisticItem value="70" label="Countries" />
      </div>
    </section>
  );
};

export default Statistic;
