# zenSpotify
Search artists by name. Show albums information or try sample music of the artist by using spotify api.

## How to run
Just open the index.html at your browser. No setup needed. It's a single page webapp.

It works on Safari. However, opening local file will not work in Chrome, not sure about other browsers. 

## User Guide
1. The search feature is at the top of the bar. Type in the aritsts you want to search and click "search" (ENTER not support, yet)
2. The page will show the first serach result at the top of the page, as the artist detail. 
  * The artist name/photo will appear in artist detail, 
  * You should be able to see the user's follower numbers, and the album information.
  * Button - Play: will pay a sample music of this artist
  * By clicking on "Learn more", it will bring you to the official Spotify artist page (with more information)
3. The page will also show the top 20 serach results along with the artist's name and photo.
  * Button - Detail: will show this artist detail on the top. 

## Tech Stacks & references
React.js as the main front-end framework. React-bootstrap for UI components.

Spotify javascript SDK by https://jmperezperez.com/spotify-web-api-js/


