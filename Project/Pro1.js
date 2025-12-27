// Users ka array leta hai
// Unka card UI dynamically banata hai
// Input box se name ke basis pe filter karta hai

const users = [
  {
    name: "Ali",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Alina",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Saad",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Ayesha",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Rizwan",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Fatima",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Bilal",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Omar",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
  {
    name: "Sana",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
  },
];

// saare users show karana
// Function to show users on UI
function showUsers(arr) {
  // Container jahan cards add honge
  let usersContainer = document.querySelector(".users");

  // Har user ke liye card banana
  arr.forEach(function (user) {
    // Card div
    const card = document.createElement("div");
    card.classList.add("card");

    // User image
    const img = document.createElement("img");
    img.src = user.image;
    img.alt = "User Image";

    // Content wrapper
    const content = document.createElement("div");
    content.classList.add("content");

    // User name
    const h3 = document.createElement("h3");
    h3.innerText = user.name;

    // User description
    const p = document.createElement("p");
    p.innerText = user.text;

    // Elements combine karna
    content.append(h3, p);
    card.append(img, content);

    // Card ko DOM mein add karna
    usersContainer.appendChild(card);
  });
}

// Page load pe saare users show
showUsers(users);

// Search input
let inp = document.querySelector("#search");

// Har input change pe filter
inp.addEventListener("input", function () {
  // Name ke basis pe users filter
  let filteredUsers = users.filter(function (user) {
    return user.name.startsWith(inp.value);
  });

  // Purane users clear
  document.querySelector(".users").innerHTML = "";

  // Filtered users show
  showUsers(filteredUsers);
});
