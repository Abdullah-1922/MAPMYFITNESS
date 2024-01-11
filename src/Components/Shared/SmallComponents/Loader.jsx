import { BallTriangle } from 'react-loader-spinner'
const Loader = () => {
  return (
    <BallTriangle
        height={40}
        width={40}
        radius={3}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
  );
};

export default Loader;