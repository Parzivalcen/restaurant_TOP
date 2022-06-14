# Pizzeria Tata Rendygui 

Tata Rendygui is in the Guaraní language, it means "From the fire"

This is my first webpage made with JS modules with the help of webpack, it is quite fun to work modules so far. 

![Website]('./Screenshot from 2022-06-14 18-48-26.png')

Check out the live [demo](https://parzivalcen.github.io/restaurant_TOP/)

## Learned how deploy modular Websites as well
### Step 1
First we need to build our app. `npm run build`
Then we create a new branch e.g. gh-pages
### Step 2
  We need to make the dist or any other folder where our index.html is our root folder for the gh-pages branch.
 ```console
  git add dist && git commit -m "Initial dist subtree commit"
 ```
 ### Step 3
 Use the subtree push to deploy
```console
git subtree push --prefix dist origin gh-pages

```