import { Chart } from 'react-google-charts';
const PieChart = ({ userLevel }) => {
  const pieData = userLevel.map((item) => [item._id.toUpperCase(), item.count]);
  console.log(pieData);
  const data = [['User Level', 'Count'], ...pieData];

  const options = {
    title: 'User Purchase packages ',
    is3D: true,
  };

  return (
    <Chart
      chartType='PieChart'
      data={data}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  );
};

export default PieChart;
