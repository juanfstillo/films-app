import { movieApi } from '@/core/api/movie-api';
import { CastMapper } from '@/infrastructure/mappers/cast.mapper';
import { MovieDBCreditsResponse } from '../../../infrastructure/interfaces/moviedb-credits.response';

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw 'Cant load cast by id';
  }
};