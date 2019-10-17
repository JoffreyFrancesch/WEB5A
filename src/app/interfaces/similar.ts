export interface Similar {
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

export interface OSimilar {
  page: number;
  results: Similar[] | SimilarTv[];
  total_pages: number;
  total_results: number;
}

export interface SimilarTv {
  type?: string;
  poster_path?: string;
popularity?: number;
id?: number;
backdrop_path?: string;
vote_average?: number;
overview?: string;
first_air_date?: string;
origin_country?: string[];
genre_ids: number[];
original_language?: string;
vote_count?: number;
name?: string;
original_name?: string;
}
