import * as React from "react";

import { FilmListingItem } from "./FilmListingItem";

export interface FilmListProps { films: Object[]; }

export const FilmList = (props: FilmListProps) => 
    <div>
        {props.films.map((film) => (
            <FilmListingItem
                key={film['imdbID']}
                film={film}
            />
        ))}
    </div>;