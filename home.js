// Select tweet button
const tweetBtn = document.querySelector('.tweet-btn');
const tweetInput = document.querySelector('textarea');
const tweetFeed = document.querySelector('.tweet-feed');

// Function to add a new tweet
tweetBtn.addEventListener('click', function() {
    const tweetText = tweetInput.value;

    if (tweetText.trim() !== "") {
        // Create new tweet element
        const newTweet = document.createElement('div');
        newTweet.classList.add('tweet');
        newTweet.innerHTML = `
            <img src="craig.png" alt="Profile Pic" class="profile-pic">
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="username">okiashu</span>
                    <span class="handle">@okiashu</span>
                </div>
                <p>${tweetText}</p>
                <div class="tweet-actions">
                    <button class="like-btn">❤️ Like</button>
                    <button class="retweet-btn">🔁 Retweet</button>
                    <button class="reply-btn">💬 Reply</button>
                </div>
            </div>
        `;

        // Add new tweet to feed
        tweetFeed.prepend(newTweet);

        // Clear tweet input
        tweetInput.value = '';
    } else {
        alert("Tweet cannot be empty!");
    }
});
