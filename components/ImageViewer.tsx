import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface Props {
  placeholderImageSource: ImageSourcePropType;
  selectedImage: string;
}

export const ImageViewer: React.FC<Props> = ({
  placeholderImageSource,
  selectedImage,
}) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
