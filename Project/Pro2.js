/**
 * Pro2.js
 * Handles application state, rendering, and interactions for the Card Stack UI.
 */

// =========================================
// 1. State Management
// =========================================

// Default data if localStorage is empty
const defaultData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    fullName: "Fatima Uma",
    homeTown: "Singapore",
    purpose: "Networking",
    category: "Important",
    color: "#fff" // Default white background
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    fullName: "Liam Davis",
    homeTown: "Toronto",
    purpose: "Project Sync",
    category: "Urgent",
    color: "#fff"
  }
];

let tasks = JSON.parse(localStorage.getItem("tasks")) || defaultData;
let activeIndex = 0; // Tracks which card is currently visible

// =========================================
// 2. DOM Elements
// =========================================

const stackContainer = document.querySelector("#stack-container");
const formOverlay = document.querySelector("#form-overlay");
const createCardForm = document.querySelector("#create-card-form");

// Buttons & Interactions
const addBtn = document.querySelector("#add-note");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const closeFormBtn = document.querySelector("#close-form");

// =========================================
// 3. Core Functions
// =========================================

/**
 * Save current state to LocalStorage
 */
function saveState() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Render the stack of cards based on 'tasks' array.
 * Currently shows the 'active' card prominently.
 */
function render() {
  // Clear container
  stackContainer.innerHTML = "";

  if (tasks.length === 0) {
    stackContainer.innerHTML = `
        <div class="empty-state">
            <p>No cards available.</p>
            <p style="font-size: 0.9rem; margin-top: 10px;">Click + to create one.</p>
        </div>
    `;
    return;
  }

  // Ensure activeIndex is valid
  if (activeIndex >= tasks.length) activeIndex = 0;
  if (activeIndex < 0) activeIndex = tasks.length - 1;

  tasks.forEach((task, index) => {
    // precise rendering logic
    const cardEl = document.createElement("div");
    cardEl.classList.add("card-section");

    // Check if this is the active card
    if (index === activeIndex) {
      cardEl.classList.add("active");
    }

    // Build Card HTML
    // We add a data-index to help with event delegation if needed
    cardEl.innerHTML = `
        <div class="user-card" style="background-color: ${task.color || '#fff'}">
            <div class="card-header">
                <img src="${task.imageUrl}" alt="Profile" class="profile-img" onError="this.src='https://via.placeholder.com/80'"/>
                <h2>${task.fullName}</h2>
            </div>

            <div class="details">
                <div class="row">
                    <span>Home Town</span>
                    <span class="value">${task.homeTown}</span>
                </div>
                <div class="row">
                    <span>Purpose</span>
                    <span class="value">${task.purpose}</span>
                </div>
                 <div class="row">
                    <span>Priority</span>
                    <span class="value" style="color: var(--accent-color)">${task.category}</span>
                </div>
            </div>

            <div class="card-buttons">
                <button class="btn-call"><i class="ri-phone-fill"></i> Call</button>
                <button class="btn-msg">Message</button>
                <button class="btn-delete" title="Delete Card"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>

        <!-- Color Options Sidebar for this specific card -->
        <div class="color-picker">
            <div class="color-dot" data-color="#ffffff" style="background-color: #ffffff; border: 1px solid #ddd;"></div>
            <div class="color-dot" data-color="#e2e8f0" style="background-color: #e2e8f0;"></div>
            <div class="color-dot" data-color="#fef3c7" style="background-color: #fef3c7;"></div>
            <div class="color-dot" data-color="#dcfce7" style="background-color: #dcfce7;"></div>
        </div>
    `;

    // Event Listeners
    // 1. Color Change
    const colorDots = cardEl.querySelectorAll(".color-dot");
    colorDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const newColor = dot.getAttribute("data-color");
        tasks[index].color = newColor; 
        saveState();
        render(); 
      });
    });

    // 2. Delete
    const deleteBtn = cardEl.querySelector(".btn-delete");
    if(deleteBtn) {
        deleteBtn.addEventListener("click", () => deleteTask(index));
    }

    stackContainer.appendChild(cardEl);
  });
}

/**
 * Delete a task
 */
function deleteTask(index) {
    if(confirm("Are you sure you want to delete this card?")) {
        tasks.splice(index, 1);
        // Adjust active index if needed
        if(activeIndex >= tasks.length) activeIndex = Math.max(0, tasks.length - 1);
        saveState();
        render();
    }
}

/**
 * Handle Form Submission
 */
function handleCreateCard(e) {
  e.preventDefault();

  const imageUrl = document.querySelector("#img-url").value.trim();
  const fullName = document.querySelector("#full-name").value.trim();
  const homeTown = document.querySelector("#hometown").value.trim();
  const purpose = document.querySelector("#purpose").value.trim();
  
  // Get selected radio
  const categoryEl = document.querySelector('input[name="category"]:checked');
  const category = categoryEl ? categoryEl.value : "Important";

  if (!imageUrl || !fullName || !homeTown || !purpose) {
    alert("Please fill in all fields.");
    return;
  }

  // Add to State
  tasks.push({
    imageUrl,
    fullName,
    homeTown,
    purpose,
    category,
    color: "#ffffff"
  });

  saveState();
  
  // Reset and Close
  createCardForm.reset();
  toggleForm(false);
  
  // Set active to new card
  activeIndex = tasks.length - 1;
  render();
}

/**
 * Toggle Modal Visibility
 */
function toggleForm(show) {
  if (show) {
    formOverlay.classList.add("open");
  } else {
    formOverlay.classList.remove("open");
  }
}

// =========================================
// 4. Event Listeners
// =========================================

// Form Modal
addBtn.addEventListener("click", () => toggleForm(true));
closeFormBtn.addEventListener("click", () => toggleForm(false));

// Close modal on outside click
formOverlay.addEventListener("click", (e) => {
  if (e.target === formOverlay) toggleForm(false);
});

// Form Submit
createCardForm.addEventListener("submit", handleCreateCard);

// Navigation (Stack Logic)
upBtn.addEventListener("click", () => {
  if (tasks.length > 0) {
    activeIndex--;
    if (activeIndex < 0) activeIndex = tasks.length - 1; // Loop back
    render();
  }
});

downBtn.addEventListener("click", () => {
  if (tasks.length > 0) {
    activeIndex++;
    if (activeIndex >= tasks.length) activeIndex = 0; // Loop forward
    render();
  }
});

// =========================================
// 5. Init
// =========================================
render();
