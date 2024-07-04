let selectedItems = [];

function selectItem(image, description) {
    selectedItems.push({ image, description });
    alert(`${description} added to your outfit`);
}

function createOutfit() {
    if (selectedItems.length === 0) {
        alert("Please select items to create an outfit");
        return;
    }
    
    const modal = document.getElementById("outfitModal");
    const outfitItems = document.getElementById("outfitItems");
    
    outfitItems.innerHTML = "";
    selectedItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.description}">
            <p>${item.description}</p>
        `;
        outfitItems.appendChild(itemElement);
    });
    
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("outfitModal");
    modal.style.display = "none";
}

function saveOutfit(event) {
    event.preventDefault();
    
    // You can add code here to save the outfit data to your backend

    // Show the success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Hide the modal after saving
    closeModal();
    
    // Reset the selected items
    selectedItems = [];

    // Hide the success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}

window.onclick = function(event) {
    const modal = document.getElementById("outfitModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
