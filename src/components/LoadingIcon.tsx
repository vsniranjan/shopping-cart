import { FadeLoader } from "react-spinners";

const LoadingIcon = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <FadeLoader />
    </div>
  );
};

export default LoadingIcon;
