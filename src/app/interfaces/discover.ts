export interface ODiscoverMovies {
  page?: number;
  results?: DMovie[];
  total_results?: number;
  total_pages?: number;
}

export interface ODiscoverShows {
  page?: number;
  results?: DShow[];
  total_results?: number;
  total_pages?: number;
}

export interface DMovie {
  type?: string;
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface DShow {
  type?: string;
  poster_path?: string;
  popularity?: number;
  id?: number;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
}
