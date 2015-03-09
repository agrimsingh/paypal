# PayPal
PayPal Fruit Stall demo
URL: https://paypal-fruit-stall.firebaseapp.com

# A written explanation of the work.

This was an exercise in building a shopping portal and integrating it with a PayPal Express Checkout (Sandbox) at the end. 
Having not done much web-app development in the past, especially from start to finish, I decided to do this portal using AngularJS since I had basic knowledge of JS and wanted to build upon it. The demo was beautified(?) using Twitter Bootstrap

#Views
There are three partial views - product, shoppingCart, store - which are integrated in the app view. 
  Product focuses on displaying one product at a time - in this case, a fruit and its nutritional takeaway + price
  shoppingCart is the final view before checkout that shows total purchases and price
  store is seen on the main page where the products and prices are listed in a table.

#Improvements 
I wasn't able to spend much time making this and that meant some features were not appropriately deployed/integrated at all. 
First, Accounts to preserve shopping carts instead of just on local storage.
Secondly, saving of products on store.js instead of in json over Firebase/Parse that could be called to populate the store. It would keep the store more dynamic in terms of available products.

#Takeaway
Doing this app was a good experience to make something from scratch in a short amount of time - kind of like a hackathon! It was good to learn a new framework, perhaps something I can use at future events and for my own projects.
