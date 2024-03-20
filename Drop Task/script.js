document.addEventListener("DOMContentLoaded", function() {
  const folderDropdown = document.getElementById("folder-dropdown");
  const fileDropdownContainer = document.getElementById("file-dropdown-container");
  const filePreview = document.getElementById("file-preview");

  const folderData = {
    Animals: ["cat", "dog", "elephant"],
    Vegetables: ["carrot", "broccoli", "cucumber"],
    Nature: ["sunset", "waterfall", "forest"],
  };

  folderDropdown.addEventListener("change", function() {
    const selectedFolder = folderDropdown.value;
    if (selectedFolder !== "") {
      // Clear previous file dropdown
      fileDropdownContainer.innerHTML = "";

      const fileDropdown = document.createElement("select");
      fileDropdown.classList.add("dropdown");
      fileDropdown.innerHTML = "<option value=''>Select File</option>";

      folderData[selectedFolder].forEach(function(file) {
        const option = document.createElement("option");
        option.textContent = file;
        option.value = file;
        fileDropdown.appendChild(option);
      });

      fileDropdown.addEventListener("change", function() {
        const selectedFile = fileDropdown.value;
        if (selectedFile !== "") {
          // Show image preview
          filePreview.style.display = "block";
          // Assuming images are stored in a folder named 'images'
          filePreview.innerHTML = `<img src="images/${selectedFile}.jpg" alt="${selectedFile}">`;
        } else {
          // Hide image preview if no file selected
          filePreview.style.display = "none";
        }
      });

      fileDropdownContainer.appendChild(fileDropdown);
      fileDropdown.classList.remove("hidden");
    } else {
      // Hide file dropdown if no folder selected
      fileDropdownContainer.innerHTML = "";
      // Hide image preview if no folder selected
      filePreview.style.display = "none";
    }
  });
});
