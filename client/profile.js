document.addEventListener('DOMContentLoaded', () => {

    const totalPointsElement = document.getElementById('total-points');
    let totalPoints = 0;
    document.querySelectorAll('.post').forEach(post => {
        totalPoints += parseInt(post.getAttribute('data-points'));
    });
    totalPointsElement.textContent = totalPoints;

    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const post = e.target.closest('.post');
            const likesNumber = post.querySelector('.likes-number');
            if (button.classList.contains('liked')) {
                likesNumber.textContent = parseInt(likesNumber.textContent) - 1;
                button.classList.remove('liked');
            } else {
                likesNumber.textContent = parseInt(likesNumber.textContent) + 1;
                button.classList.add('liked');
            }
        });
    });

    document.querySelectorAll('.comment-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const post = e.target.closest('.post');
            const commentSection = post.querySelector('.comment-section');
            commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
        });
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const post = e.target.closest('.post');
            const description = post.querySelector('.description');
            const newDescription = prompt('Edit your description:', description.textContent);
            if (newDescription !== null) {
                description.textContent = newDescription;
                post.querySelector('.last-edited').textContent = 'Last edited just now';
            }
        });
    });
});