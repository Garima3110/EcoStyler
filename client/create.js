let selectedItems = [];

function selectItem(imageSrc, itemName) {
    const itemIndex = selectedItems.findIndex(item => item.itemName === itemName);

    if (itemIndex > -1) {
        // Item already selected, so deselect it
        selectedItems.splice(itemIndex, 1);
    } else {
        // Select new item
        selectedItems.push({ imageSrc, itemName });
    }

    console.log('Selected Items:', selectedItems);

    // Update item selection highlighting
    updateItemSelection(imageSrc, itemName);
}

function updateItemSelection(imageSrc, itemName) {
    const item = document.querySelector(`.item[data-name="${itemName}"]`);

    if (selectedItems.find(item => item.itemName === itemName)) {
        item.classList.add('selected');
    } else {
        item.classList.remove('selected');
    }
}

function createOutfit() {
    if (selectedItems.length === 0) {
        alert('Please select at least one item for your outfit.');
        return;
    }

    const outfitItemsDiv = document.getElementById('outfitItems');
    outfitItemsDiv.innerHTML = '';

    selectedItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('outfit-item');
        itemDiv.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.itemName}">
            <p>${item.itemName}</p>
        `;
        outfitItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('outfitModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('outfitModal').style.display = 'none';
    selectedItems = [];
}

function showSuccessMessage() {
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 2000);
}

// Dummy function to mimic saving outfit and show success message
function saveOutfit(event) {
    event.preventDefault();

    const outfitName = document.getElementById('outfit-name').value;
    const outfitDescription = document.getElementById('outfit-description').value;

    // Mock saving outfit
    console.log('Outfit saved:', {
        name: outfitName,
        description: outfitDescription,
        items: selectedItems,
    });

    closeModal();
    showSuccessMessage();
}
