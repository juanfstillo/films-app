import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.actions";
import { getMovieCastAction } from '@/core/actions/movie/get-movie-cast.actions';
import { useQuery } from "@tanstack/react-query";


export const useMovie = (id:number) => {
    const movieQuery = useQuery({
        queryKey:['movies',id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24, // 24horas      
    },
  );

  const castQuery = useQuery({
    queryKey: ['movies', id, 'cast'],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  } 
);

  return {
    movieQuery,
    castQuery
  };
}
