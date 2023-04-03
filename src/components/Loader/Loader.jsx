import { Watch } from 'react-loader-spinner';
import { Container } from 'components/Container/Container';

const Loader = () => {
  return (
    <Container>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#3a6af5"
        ariaLabel="watch-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alighItems: 'center',
        }}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
};

export default Loader;
