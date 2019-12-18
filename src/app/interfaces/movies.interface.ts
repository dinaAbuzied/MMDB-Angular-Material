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

export interface MovieDetailsUnformatted {
    'adult': boolean;
    'backdrop_path': string;
    'belongs_to_collection': {
        'id': number;
        'name': string;
        'poster_path': string;
        'backdrop_path': string;
    };
    'budget': number;
    'genres': {
        'id': number;
        'name': string;
    }[];
    'homepage': string;
    'id': number;
    'imdb_id': string;
    'original_language': string;
    'original_title': string;
    'overview': string;
    'popularity': number;
    'poster_path': string;
    'production_companies': {
        'id': number;
        'logo_path': string;
        'name': string;
        'origin_country': string;
    }[];
    'production_countries': ProductionCountries[];
    'release_date': string;
    'revenue': number;
    'runtime': number;
    'spoken_languages': {
        'iso_639_1': string;
        'name': string;
    }[];
    'status': string;
    'tagline': string;
    'title': string;
    'video': boolean;
    'vote_average': number;
    'vote_count': number;
}

export interface MovieCreditsUnformatted {
    'id': number;
    'cast': {
        'cast_id': number;
        'character': string;
        'credit_id': string;
        'gender': number;
        'id': number;
        'name': string;
        'order': number;
        'profile_path': string;
    }[];
    'crew': {
        'credit_id': string;
        'department': string;
        'gender': number;
        'id': number;
        'job': string;
        'name': string;
        'profile_path': string;
    }[];
}

export interface MovieVideosUnformatted {
    'id': number;
    'results': {
        'id': string;
        'iso_639_1': string;
        'iso_3166_1': string;
        'key': string;
        'name': string;
        'site': string;
        'size': number;
        'type': string;
    }[];
}

export interface Movie {
    'poster': string;
    'id': number;
    'title': string;
    'lists': Array<string>;
}

export interface LocalMovie {
    'id': number;
    'lists': Array<string>;
}

export interface MovieDetails {
    id: number;
    title: string;
    release_date: {
        day: number;
        month: string;
        year: number;
    };
    runtime: string;
    production_countries: ProductionCountries[];
    imdb_id: string;
    poster: string;
    overview: string;
    genres: string[];
    trailer: string | boolean;
    lists: string[];
}

export interface ProductionCountries {
    'iso_3166_1': string;
    'name': string;
}

export interface MovieCredits {
    directors: {
        name: string;
        profile_path: string;
    }[];
    writers: {
        name: string;
        profile_path: string;
        job: string;
    }[];
    cast: {
        name: string;
        profile_path: string;
        role: string;
    }[];
}
