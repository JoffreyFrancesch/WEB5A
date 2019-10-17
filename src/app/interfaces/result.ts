export interface Result {
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

export interface OMovieSearch {
    page: number;
    results: Result[] | ResultTv[];
    total_results: number;
    total_pages: number;
}

export interface ResultTv {
    type?: string;
    poster_path?: string;
    popularity?: number;
    id?: number;
    overview?: string;
    backdrop_path?: string;
    vote_average?: number;
    media_type?: string;
    first_air_date?: string;
    origin_country?: string[];
    genre_ids?: number[];
    original_language?: string;
    vote_count?: number;
    name?: string;
    original_name?: string;
}
