# Customer Dashboard
Start the Project with the following command to start the development server

    $ npm start

The website will be viewable at the following URL -
> http://localhost:3000 

You can also build the project using the following command -

    npm run build

It will automatically deploy the project onto gh-pages


## Features
- Fetch Customers from API
- Sort Table using Columns
- Multi Search Bar to search from multiple columns
- Display no. of Customers fetched from Search Query
- Responsive on Normal and Ultra-Wide desktop browsers, viewable on mobile browsers
 - [ ] Implement Dark Mode Tokens

![As viewed on Normal Browsers](https://ibb.co/16ctKTj)
![As viewed on Ultra-Wide Browsers](https://ibb.co/PzFWcjQ)


## Working
The App consists of 4 major Components -
1. `<Dashboard />`
2. `<Navbar />`
3. `<Footer />`
4. `<Sidebar />`

The `<Dashboard />` component implements all the features, while the other components serve as aesthetic components to provide a more stylised look to the website.

The `<Dashboard />` component uses `useContext()` hooks instead of Props to pass down certain values to its children. This was a design decision taken to make the code more readable and understandable. It is used to pass the *searchQuery* and *userCount* states along with their setter functions to the children component, which then use the state and also set it using the setter accordingly. 

The `<TableHead />` component uses `useRef()` hooks to keep track of the column which is currently being sorted, because there were problems with correctly keeping track of, and rendering the row which was sorted.

Documentation regarding Functions can be found in the files themselves.

