import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { getPhotos } from './GalleryState';
import Header from './Header';
import PhotoCard from './PhotoCard';

const Home = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <FlatList
      ListHeaderComponent={<Header title="Photo Gallery" />}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      numColumns={2}
      data={photos}
      renderItem={({ item }) => <PhotoCard photos={item} />}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default Home;
