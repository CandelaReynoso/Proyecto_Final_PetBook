import React from 'react'
import CardFavorite from './CardFavorite'

//componente contenedor de todas las cards

const CardsFavorites = ({favorites,handlerDelete}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
    {favorites && favorites.map((favs,index)=>{
    return(
    <CardFavorite
    key={index}
    image={favs.image}
    name={favs.name}
    size={favs.size}
    weight={favs.weight}
    age={favs.age}
    gender={favs.gender}
    specie={favs.specie}
    petId={favs.id}
    handlerDelete={handlerDelete}
    />
    )
    })}
    </div>
  )
}

export default CardsFavorites