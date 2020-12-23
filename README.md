# CampSound README
     🌊🏕🌳🏔🌒
     
CampSound, a Bandcamp clone, is a music/camp sound distribution service connecting music creators with their fans. Campsound allows any user the ability to upload their music/sounds and have them played and downloaded by anyone.

A live link to the site hosted on Heroku is here: https://campsound.herokuapp.com/#/

## Technologies

## Feature Highlight No. 1
![screenshot of artist page](https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-22+at+10.55.11+PM.png)
The artist page encapilates most of the most important technical features included in this site including: 
* Linking to forms that enable users to upload their song with searchable genre, artist name which will default to their username, an about for each song as well as album art. On this form, the user is also able to preview any songs before uploading to be sure of the correct file being uploaded. This page also includes a live preview area of all of the information input by the user.
* Conditionally if the user has music uploaded and released or not, the entire page will render and index of all of their released audio files or a welcome to upload, respectively.
* My site also doesn't include a signup form to receive user information like for their profile picture, location and bio from and instead I have created formless inputs for each artist to change individual parts of their information as desired. Each of the typed inputs features a countdown for the remaining characters available for each unput. 
* Each musical release can be downloaded or added to a playlist that conditionally renders if there are music items currently in the playlist. Songs automatically play when added, can be removed and automatically remove when they have completed playing.
Challenges:
* Building the playlist proved to be the most difficult task as it needed the most conditional on this page. I was able to find new event handlers that allowed me to create a smoothe intuitive experience that users are used to.


## Feature Highlight No. 2
![screenshot of search featue](https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-22+at+10.46.05+PM.png)
Search feature:
* The search feature, a pixel and color perfect clone of the search feature on bandcamp.com allows the user to quickly search by predetermined genres.
* Users are also able to type a search for artist names and title names of released audio.
* Each result renders to a page, unless there are no search results with a conditionally rendered header with the genre or a suggestion for the user to add the first if their search result is empty.
* Users are able to listen to or download each search result.
Challenges:
* The search was challenging as it was my first time implimenting one. It was a great journey to learn more about SQL which was used to filter the backend results to the user.


