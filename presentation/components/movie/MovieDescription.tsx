import { Formatter } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { Text, View } from 'react-native';
interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <View
          style={{
            backgroundColor: 'grey',
            borderRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 2,
            alignSelf: 'flex-start',
            marginRight: 8,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{movie.rating}</Text>
        </View>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>

      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>

      <Text className="font-bold mt-2 text-2xl">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};
export default MovieDescription;