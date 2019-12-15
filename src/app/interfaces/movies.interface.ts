export interface MovieListUnformatted {
    'results': {
        'popularity': number;
        'vote_count': number;
        'video': boolean;
        'poster_path': string;
        'id': number;
        'adult': boolean;
        'backdrop_path': string;
        'original_language': string;
        'original_title': string;
        'genre_ids': number[];
        'title': string;
        'vote_average': number;
        'overview': string;
        'release_date': string;
    }[];
    'page': number;
    'total_results': number;
    'dates': {
        'maximum': string;
        'minimum': string;
    };
    'total_pages': number;
}

export interface Movie {
    'poster': string;
    'id': number;
    'title': string;
}
