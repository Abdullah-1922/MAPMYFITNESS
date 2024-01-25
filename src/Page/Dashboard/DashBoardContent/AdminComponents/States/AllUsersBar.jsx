import { Chart } from "react-google-charts";

const AllUsersBar = ({userData}) => {



    const transformedData = userData.map(item => [
        "AllUsers",
        parseInt(item.totalUsers),
        parseInt(item.NewsLetterSubscribers),
        parseInt(item.PremiumUsers)
      ]);
      
      const data = [
        ["Category", "Total Users", "Newsletter Subscribers", "Premium Users"],
        ...transformedData
      ];


      const options = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, NewsletterSubs,AllUsers",
        },
      };
      
  return (
    <div>
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
};

export default AllUsersBar;