const content = [
{
title: "Imagine Me & You",
genre: "romance",
rating: "8.5/10",
poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYPXWwmXoFlNOh0Gk8crASR5hEhePsTl3N1XMGccfQCNIHypq",
trailer: "https://www.youtube.com/watch?v=RzJz3lKX8bA"
},
{
title: "Avengers: Endgame",
genre: "action",
rating: "9/10",
poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
},
{
title: "Encanto",
genre: "fantasy",
rating: "8.7/10",
poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcOexFxWzPsONGemEf7UXtXZkmJamv1mFTfin3tY3QggXSfhf",
trailer: "https://www.youtube.com/watch?v=CaimKeDcudo"
},
{
title: "The Conjuring",
genre: "horror",
rating: "8.3/10",
poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4QDQ02jnYAmtrlZqaWAj-NN618hkj7aIT7qI5bYzeNFkGhqW7",
trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o"
},
{
title: "Stranger Things",
genre: "fantasy",
rating: "8.8/10",
poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxAU5r7WU26MZ0nPj_DB_bXb8PSoMxKS8G3F2NFiUvHZr7Wya",
trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
},
{
title: "Wednesday",
genre: "fantasy",
rating: "8.2/10",
poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOOBsSXu5RmCS5Y_hvl_g6zaznOgE6VD2Teh3dqqfeiTa00Vk",
trailer: "https://www.youtube.com/watch?v=Di310WS8zLk"
},
{
title: "Outer Banks"
genre: "drama"
rating: "8/10"
poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxVJKULMOk8UvjqMTjL49r8ejFYW8K6znHezxsyF4bx8dJ2HWd"
trailer: "https://www.youtube.com/watch?v=pfY3j-3uQhk&t=30s"
}
];

const contentList = document.getElementById("contentList");
const recommendList = document.getElementById("recommendList");

function displayContent(items) {
contentList.innerHTML = "";

items.forEach(item => {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${item.poster}">
<h3>${item.title}</h3>
<p>⭐ Rating: ${item.rating}</p>
<button onclick="window.open('${item.trailer}')">Watch Trailer</button>
<button onclick="addRecommendation('${item.title}')">Recommend</button>
`;

contentList.appendChild(card);
});
}

function filterContent(genre) {
if (genre === "all") {
displayContent(content);
} else {
const filtered = content.filter(item => item.genre === genre);
displayContent(filtered);
}
}

function addRecommendation(title) {
const li = document.createElement("li");
li.textContent = title;
recommendList.appendChild(li);
}

displayContent(content);
