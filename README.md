# vocalado
A website that allows user to record and share their voice with others.

The following documentation will escribe more about this project. This web application uses React(Typescript) and Springboot(Java) with PostgreSQL as its database. Other web technologies are used where necessary.

# Folder Structure (Frontend)
In the `frontend` folder, there is a `src` folder where all component / hooks are stored. 
`src` folder consists of six main folder:
1. `assest` - where all images / audio are stored. 
2. `__test__ `- where all tests are stored
3. `components` - where all components and their corresponding hooks are stored
4. `pages` - where all web pages are stored (e.g home page, personal prifile...)
5. `utils` - where all necessary functions are stored (currently unused)

## Component folder Structure
The `component` folder structure are formed based on the components. Every folder represents a component(s) and its hook.
 `All` - The All section of the profile page
 `Header` - Header of the website
 `Navbar` - Navbar under profile page 
 `PersonalDetails` - The part where it shows the user's name / location / image
 `Popular` - The popular section of the profile page
 `Repost` - The repot section of the profile page
 `Sidebar` - Sidebar of the website
 `Track` - Plays music when button is clicked
 `UserProfileState` - Show followers / following / user quote

 ## Pages Folder Structure
 Pages store allweb pages that are to be rendered.
 `HomePage` - The home page of the website
 `PersonalProfilePage` - User's personal profile

