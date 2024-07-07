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
    const isFollowing = button.getAttribute('data-following');

    if (isFollowing === 'false') {
        // Simulate following (you would typically send a request to the server here)
        console.log('Following user');
        button.innerText = 'Unfollow';
        button.setAttribute('data-following', 'true');
        button.classList.add('following'); // Optionally add a class for styling
    } else {
        // Simulate unfollowing (you would typically send a request to the server here)
        console.log('Unfollowing user');
        button.innerText = 'Follow';
        button.setAttribute('data-following', 'false');
        button.classList.remove('following'); // Remove the 'following' class if present
    }
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

// Attach event listeners to all "Follow" buttons
document.querySelectorAll('.follow-btn').forEach(button => {
    button.addEventListener('click', () => followUser(button));
});
// Function to open the modal and display the clicked image
// Function to open the modal and display the clicked image
function openModal(imgSrc, imgAlt) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
