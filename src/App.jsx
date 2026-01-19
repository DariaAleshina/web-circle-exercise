import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { useState, useEffect } from 'react';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import MenuItemDetails from './components/MenuItem/MenuItemDetails.jsx';
import RestaurantView from './views/RestaurantView.jsx';
import WishlistView from './views/WishlistView.jsx';

import './App.css';

function App() {
  // store wishlist (initialise with existing localStogage data or if none - empty array)
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  // sync localStorage with wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // handle add / remove dish from wishlist
  const handleWishlistToggle = meal => {
    const isInList = wishlist.some(item => item.idMeal === meal.idMeal);
    const newWishlist = isInList
      ? wishlist.filter(item => item.idMeal !== meal.idMeal)
      : [
          ...wishlist,
          {
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
          },
        ];

    setWishlist(newWishlist);
  };

  return (
    <Router>
      <Routes>
        <Route
          index
          element={<RestaurantView wishlistCount={wishlist.length} />}
        />
        <Route
          path="/wishlist"
          element={<WishlistView wishlist={wishlist} />}
        />
        <Route
          path="/meals/:id"
          element={
            <MenuItemDetails
              wishlist={wishlist}
              onToggleWishlist={handleWishlistToggle}
            />
          }
        />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </Router>
  );
}

// Wrap App in an ErrorBoundary to help us with development bugs
export default function WrappedApp() {
  return import.meta.env.MODE === 'development' ? (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ) : (
    <App />
  );
}
