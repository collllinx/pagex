document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = 'Paste-Your-Unsplash-APIKey-Here';
    const query = 'nature'; // Adjust the query to get relevant images

    // Fetch a random image from Unsplash
    async function fetchRandomImage() {
        const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return {
            imageUrl: data.urls.full,
            photographerName: data.user.name,
            photographerUsername: data.user.username,
            unsplashLink: data.links.html
        };
    }

    // Set background with a random image
    async function setRandomBackground() {
        const { imageUrl, photographerName, photographerUsername, unsplashLink } = await fetchRandomImage();

        // Preload the Unsplash image
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = imageUrl;
        preloadLink.as = 'image';
        preloadLink.type = 'image/jpeg'; // Adjust the image type
        preloadLink.crossOrigin = 'anonymous'; // Ensure proper caching
        document.head.appendChild(preloadLink);

        // Create an image element
        const unsplashImage = new Image();
        unsplashImage.src = imageUrl;
        unsplashImage.alt = `Photo by ${photographerName} (@${photographerUsername}) on Unsplash`;
        unsplashImage.loading = 'lazy';
        unsplashImage.crossOrigin = 'anonymous'; // Ensure proper caching

        // Set the background image
        document.body.style.backgroundImage = `url('${imageUrl}')`;

        // Display photo credit
        const photoCreditElement = document.getElementById('photo-credit');
        photoCreditElement.innerHTML = `Photo by <a href="${unsplashLink}" target="_blank">${photographerName} (@${photographerUsername})</a> on Unsplash`;
    }

    setRandomBackground();

    // Update background when the page is being unloaded (e.g., before a refresh)
    window.addEventListener('beforeunload', () => {
        setRandomBackground();
    });
});
