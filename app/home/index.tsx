import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontal';
import { useMovies } from '@/presentation/hooks/useMovies';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const {nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery} = useMovies();
    
    
    if(nowPlayingQuery.isLoading){
      return (
        <View className='justify-center items-center flex-1'>
          <ActivityIndicator color="purple" size={40}/>
        </View>
      )
    }
    
  return (
  <View className ="mt-2" style={{paddingTop: safeArea.top }}>
    <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
    {/* Carrousel */}
    <MainSlideshow movies={nowPlayingQuery.data?? []}/>
    {/* Popular */}
      <MovieHorizontalList
        title="Popular"
        movies={popularQuery.data ?? []}
        className="mb-5"
      />
      <MovieHorizontalList
        title="Mejor Calificadas"
        movies={topRatedQuery.data?.pages.flat() ?? []}
        className="mb-5"
        loadNextPage={ () => topRatedQuery.fetchNextPage() }
      />
      <MovieHorizontalList
        title="Próximamente"
        movies={upcomingQuery.data ?? []}
        className="mb-5"
      />
  </View>      
)
}

export default HomeScreen;
