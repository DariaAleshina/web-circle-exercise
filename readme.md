# Code Challenge - My problem solving approach

Hi, my name is Daria and I am applying for Full Stack Circle, spring 2026. As you are interested in the thinking process, I thought to document it here with REACTO methodology.

Before I started, I ran 'npm run dev' to see what state the project is at. Then looked through the codebase: the App structure, routes, how data flows, any helper functions. From here I got to the task #1:

## Task 1 - Search Functionality

### R - Repeat

Finish implementation of filtering dishes based on user input and update UI accordingly.

### E - Examples

- No input (string is empty) -> fetch all dishes
- if input === "pizza" --> show results with pizzas only
- if input === "trhfnsf" (some random input that makes no sense to food) --> expect to get "No dishes found" as per existing UI logic

### A - Approach

I checked once again what code / UI already exists. RestaurantView fetches dishes data, stores the state for it, but search query is empty. SearchField comp contains the input field, but logic is missing. Components are not connected and state for search query is missing.

As RestaurantView is a parent comp to SearchField and it uses search query for fetching, it should also own search query state, and pass it & state setter function to SearchField as props. As the app is pretty simple, it would be the most pragmatic approach. Does not make sense to complicate it using Context API or any external state management tools.

### C - Code

1. Added searchQuery state in RestaurantView
2. Added searchQuery to useEffect deps in RestaurantView
3. Passed value and onChange props to SearchField
4. Added controlled input to SearchField

## T - Test

I did manual testing with examples defined above

## O - Optimize

Existing code already handles a lot fetching-wise (like debouncing). Potential improvements could be to add loading state to show that search is in progress or to add messages in UI for failed API calls.

## Task 2 - Wishlist

### R - Repeat

Users should be able to add dishes to their wishlist (and remove from it). We need UI to view the list.

### E - Examples

- Add dish to empty wishlist → appears in /wishlist
- Add multiple dishes → all display correctly
- Remove dish → disappears from list
- Button text toggles correctly ("add to" ↔ "remove from")
- Refresh page → wishlist persists (localStorage works)
- Empty wishlist shows placeholder message
- Navigation: Home → Wishlist → Home works

### A - Approach

- Create new route "/wishlist" & view component "WishlistView"
- Use localStorage to store wishlist as list of dishes with id, name, and image - all necessary info for MenuItem view without the need to fetch again
- As wishlist state and the state setter function will need to be used in 2 routes/views, state should be owned by the App (we could consider Context API for later, but seems also like overcomplication at this point)
- Make a list of dishes from RestaurantView a reusable component, reuse in WishlistView
- Reuse existing components like Button, MenuItem, etc. in new UI

### C - Code

1. App: Added wishlist state (array of dishes data), initialized from localStorage on mount, synced state changes with localStorage with useEffect
2. Created handler function (add / remove dishes from wishlist)
3. Passed wishlist props (state, state setter) to MenuItemDetails route

4. MenuItemDetails: accepted wishlist props
5. Added Button conditionally rendering message: "Add to Wishlist" / "Remove from Wishlist" based on check

6. RestaurantView: created new "MenuList" component from existing code displaying dishes list and reused it.

7. WishlistView: Created new view component
8. Added as new route on App.jsx, passed & accepted wishlist prop
9. Displayed dishes data using "MenuList"

10. RestaurantView: added "My Wishlist" link/button in NavBar

### T - Test

Manually tested all scenarios from Examples section - fixed bugs where discovered, all passes now.

### O - Optimize

Potential improvements:

- Show wishlist count badges on "My Wishlist" button / header (IMPLEMENTED)
- user Contax API to manage state globally for cleaner code especially as more components use same state props
- Add confirmation dialog before removing from wishlist
- Add "Add to Wishlist" button directly on MenuItem cards

---

## Code Challenge - Brief

Our resturaunt is launching tomorrow, but we haven't been able to finish our website! Can you help us?

We really need to get our search functionality finished, we've got an input field ready, but we need to complete the search functionality. Given an input string, it should return matching dishes.

As a bonus, we'd really like to have a wishlist feature, where users can add (and remove) dishes. They should be able to view this list somewhere.

## What we want to see

- We're more interested in your thought process, rather than finished production code.
- If you need a reminder on a certain syntax, it's fine to ask the screener, or use your preferreed search engine for a reminder.
- It's good to ask questions! If there's anything at all you're not sure about, your screener will be happy to help.

## Cloning the Repository

```
git clone https://github.com/ReDI-School/web-circle-excercise.git
```

## Running the project

To run this project, you need to first download and install all the dependencies.

```
 npm install
```

Then, you can run your development server and access your application via browser (default [http://localhost:5173/](http://localhost:5173/)).

```
  npm run dev
```
