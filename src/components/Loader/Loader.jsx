import { CirclesWithBar } from 'react-loader-spinner';
// import { Loading } from './Loader.styled';

const Loader = () => {
  return (
    // <Loading>
    <CirclesWithBar
      height="75"
      width="75"
      color="#3a6af5"
      wrapperStyle={{
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'absolute',
      }}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor="#8daaff"
      barColor="#e28743"
      ariaLabel="circles-with-bar-loading"
    />
    // </Loading>
  );
};

export default Loader;
