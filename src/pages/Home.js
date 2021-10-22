import React from "react"
import { ListOfCategories } from "../componets/ListOfCategories"
import { ListOfPhotoCards } from "../componets/ListOfPhotoCards"

export const Home = (props) => {
    const {
      match: {
        params: { id }
      }
    } = props
    return (
      <>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </>
    )
  }