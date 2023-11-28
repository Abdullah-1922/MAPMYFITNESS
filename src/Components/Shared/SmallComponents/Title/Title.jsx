/* eslint-disable react/prop-types */
import '../Title/Title.css'
const TitleText = ({heading,subtitle}) => {
  return (
    <div className="text-center my-10">
      <p className="text-yellow-400 border-b w-fit mx-auto border-yellow-400">{subtitle}</p>
       <h3 className="text-4xl glow font-medium border-b w-fit pb-2 mx-auto border-yellow-400 mt-10">{heading}</h3>
    </div>
  );
};

export default TitleText;