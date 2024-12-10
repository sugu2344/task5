



 ## **Shopping-Cart**

## Features
#### 1. Product Display
Fetch and display a list of products from the Fake Store API.
Each product card shows key information:
- Product Image
- Title
- Price
- Add to Cart button
####  2. Add to Cart Functionality
- Users can add products to their cart by clicking the "Add to Cart" button.
- If a product is already in the cart, an alert is displayed with the message: **"Item already added to the cart."**
#### 3. Cart Management
The current cart item count is displayed in a Navbar component.
Clicking the Cart button in the Navbar opens a modal that contains:
- A list of all products in the cart.
- A "Remove from Cart" button for each product, allowing users to remove items individually.
4. Dynamic Cart Updates
- The cart value and item count are updated dynamically when products are added or removed.
 - State management ensures seamless updates and efficient data flow across components.
####  5. Responsive Design
Optimized for both desktop and mobile devices.
A clean and user-friendly layout ensures a consistent user experience on various screen sizes.




## Tech Stack
##### React
##### Tailwindcss
##### Javascript


## Screenshots

#### landing page

![addto cart1](https://github.com/user-attachments/assets/6d6591a0-26b4-4584-b4f6-80a547b66171)

#### pic 2
![adto cart2](https://github.com/user-attachments/assets/26578019-375d-473d-bbbc-956a61f80523)

#### Cart Values on Nav Bar

![addto cart4](https://github.com/user-attachments/assets/e33e3b3e-8ac8-465e-914e-ed2307f9c132)

#### cart products on model
![add to cart 3](https://github.com/user-attachments/assets/7175247f-0708-4c73-aef0-6e3fe9f2a220)

## Demo-Clip

https://github.com/user-attachments/assets/f6f9bbb5-a17e-4482-a05f-27e3b0471502


## Deployment -Url

https://addto-cart-shopping-cart-dmo.netlify.app


## project-configurations

#### React project creation

```bash
 npm create vite@latest

```
#### Tailwind initilation
```bash
npm install -D tailwindcss postcss autoprefixer
```
#### Tailwind config
```bash
npx tailwindcss init -p
```
#### To run the project
```bash
  npm run dev
```

