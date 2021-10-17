import React from "react";

import { PhotoCard } from "../PhotoCard";
import { List } from "./styles";

export const ListOfPhotoCards = () => (
    <List>
        {[1,2,3,4,5,6,7,8,9].map(id => (
            <PhotoCard key={id}/>
        ))}
    </List>
)