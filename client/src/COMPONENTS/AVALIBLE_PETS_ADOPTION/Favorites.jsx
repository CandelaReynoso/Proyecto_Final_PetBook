// import { React, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getFavorites } from '../../Redux/actions';

// const Favorites = ({ userId }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getFavorites(userId));
//   }, [dispatch, userId]);

//   const favorites = useSelector((state) => state.favorites.favorites);

//   return (
//     <div>
//       {favorites.map((favorite) => (
//         <div key={favorite.id}>{favorite.name}</div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;
