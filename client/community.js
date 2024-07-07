document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle comment section visibility
    function toggleCommentSection(event) {
        const postElement = event.target.closest('.post');
        const commentSection = postElement.querySelector('.comment-section');
        commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    }

    // Function to submit a comment
    function submitComment(event) {
        const postElement = event.target.closest('.post');
        const commentSection = postElement.querySelector('.comment-section');
        const commentText = postElement.querySelector('.comment-text').value;

        if (commentText.trim() !== '') {
            console.log(`Submitting comment for post ${postElement.getAttribute('data-post-id')}: ${commentText}`);
            // Here you can send the comment to the server

            // Clear the textarea
            postElement.querySelector('.comment-text').value = '';

            // Hide the comment section
            commentSection.style.display = 'none';
        }
    }

    // Function to like a post with animation
    function likePost(event) {
        const postElement = event.target.closest('.post');
        const likesNumber = postElement.querySelector('.likes-number');
        const currentLikes = parseInt(likesNumber.textContent);

        // Increment the likes count
        likesNumber.textContent = currentLikes + 1;

        // Add animation class
        const likeButton = event.target;
        likeButton.classList.add('liked');

        // Simulate server update (for demonstration purposes)
        console.log(`Liked post ${postElement.getAttribute('data-post-id')}`);

        // Remove animation class after animation ends
        setTimeout(() => {
            likeButton.classList.remove('liked');
        }, 1000);
    }

    // Attach event listeners to all "Comment" buttons
    document.querySelectorAll('.comment-btn').forEach(button => {
        button.addEventListener('click', toggleCommentSection);
    });

    // Attach event listeners to all "Submit" buttons
    document.querySelectorAll('.submit-comment-btn').forEach(button => {
        button.addEventListener('click', submitComment);
    });

    // Attach event listeners to all "Like" buttons
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', likePost);
    });
});
function performSearch() {
    const query = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('searchResults');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Perform search logic (this is just a placeholder)
    // You can replace this with your actual search logic
    if (query) {
        resultsContainer.innerHTML = `Results for "${query}":`;
        // Here you can append actual search results
    } else {
        resultsContainer.innerHTML = 'Please enter a search query.';
    }
}
function followUser(button) {
    button.style.display = 'none';
    const followMessage = document.createElement('span');
    followMessage.textContent = 'Following';
    followMessage.style.color = '#ff69b4';
    button.parentElement.insertBefore(followMessage, button.nextSibling);
}