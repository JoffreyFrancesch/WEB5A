import { Genre } from './genres';
import { ProductCompany } from './movie';

export interface TvShows {
    backdrop_path?: string;
    created_by?: object[];
    episode_run_time?: number[];
    first_air_date?: string;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: object;
    name?: string;
    next_episode_to_air?: null;
    network?: object[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductCompany[];
    seasons?: object[];
    status?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
}
