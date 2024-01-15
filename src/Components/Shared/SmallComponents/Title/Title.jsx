/* eslint-disable react/prop-types */
import '../Title/Title.css'
const TitleText = ({heading,subtitle}) => {
  return (
    <div className="text-center my-10">
       <h3 className="text-5xl glow font-medium border-b w-fit pb-2 mx-auto border-yellow-400 mt-10">{heading}</h3>
      <p className="text-yellow-400  text-lg w-fit mx-auto ">{subtitle}</p>
    </div>
  );
};

export default TitleText;