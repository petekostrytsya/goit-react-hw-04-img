import { Watch } from 'react-loader-spinner';
import { LoaderPicture } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderPicture>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="blue"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderPicture>
  );
};