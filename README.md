# Maintenance Page
## Overview
This is code for a simple and aesthetically pleasing maintenance page that notifies users that the site is currently undergoing maintenance. To make the maintenance page more visually appealing, the Unsplash API is also used to generate random images that correspond to a keyword specified in the JavaScript code. 

## Features
- Under Maintenance Message: Clearly communicates that the site is undergoing maintenance.
- Dynamic Background Image: Fetches a random image from Unsplash and sets it as the background, providing a visually appealing experience for users.
- Photo Credit: Displays a photo credit with a link to the photographer's Unsplash profile.

## Quick Start
1. Visit [Unsplash](https://unsplash.com/developers) and register as a developer with an email and password.
2. Make a new application, and make sure to read the Terms and Conditions before proceeding.
3. Give your application a descriptive name and description ("Maintenance Page" is a good idea)
4. Scroll down the webpage and copy your Access Key (not the Secret Key)
5. Open the ```script.js``` file in the folder ```js``` and paste it into the apiKey constant

```js
const apiKey = 'Paste-Your-Unsplash-APIKey-Here'; // Replace the value inside the quotes with your Access Key
```
6. Change the keyword used to find random images by modifying the query constant in the ```script.js``` file located in the ```js``` folder
```js
const query = 'nature'; // Replace the value inside the quotes with a keyword of your choice
```
7. Launch the ```index.html``` file in your browser or deploy it to your website to make sure it's working correctly.
8. Change around the CSS styling in the folder ```css``` to fit your website's needs.
9. Enjoy your new aesthetically pleasing Maintenance Page!

Feel free to modify this so that it works well with your website! 

## Credit Disclaimer
Please note that if you use this code, you must credit the repository in your credits or somewhere on your website! Credit "Aiden Pinto", and the link to this repository on GitHub (https://github.com/aidenpinto14/maintenance-page)
