const movies = [

{
title:"Imagine Me & You",
genre:"romance",
rating:8.5,
poster:"https://upload.wikimedia.org/wikipedia/en/5/5e/Imagine_Me_%26_You_poster.jpg",
trailer:"https://www.youtube.com/watch?v=RzJz3lKX8bA"
},

{
title:"The Avengers",
genre:"action",
rating:9,
poster:"https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
trailer:"https://www.youtube.com/watch?v=eOrNdBpGMv8"
},

{
title:"Avengers: Age of Ultron",
genre:"action",
rating:8.4,
poster:"https://upload.wikimedia.org/wikipedia/en/1/1b/Avengers_Age_of_Ultron.jpg",
trailer:"https://www.youtube.com/watch?v=tmeOjFno6Do"
},

{
title:"Avengers: Infinity War",
genre:"action",
rating:9,
poster:"https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
trailer:"https://www.youtube.com/watch?v=6ZfuNTqbHE8"
},

{
title:"Avengers: Endgame",
genre:"action",
rating:9,
poster:"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c"
},

{
title:"Soul",
genre:"fantasy",
rating:8.6,
poster:"https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg",
trailer:"https://www.youtube.com/watch?v=xOsLIiBStEs"
},

{
title:"Encanto",
genre:"fantasy",
rating:8.5,
poster:"https://upload.wikimedia.org/wikipedia/en/2/26/Encanto_poster.jpg",
trailer:"https://www.youtube.com/watch?v=CaimKeDcudo"
},

{
title:"Inside Out",
genre:"fantasy",
rating:8.8,
poster:"https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_%282015_film%29_poster.jpg",
trailer:"https://www.youtube.com/watch?v=yRUAzGQ3nSY"
},

{
title:"Toy Story",
genre:"fantasy",
rating:8.7,
poster:"https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
trailer:"https://www.youtube.com/watch?v=KYz2wyBy3kc"
},

{
title:"The Conjuring",
genre:"horror",
rating:8.3,
poster:"https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg",
trailer:"https://www.youtube.com/watch?v=k10ETZ41q5o"
},

{
title:"Insidious",
genre:"horror",
rating:8.1,
poster:"https://upload.wikimedia.org/wikipedia/en/7/7f/Insidious_poster.jpg",
trailer:"https://www.youtube.com/watch?v=zuZnRUcoWos"
},

{
title:"The Visit",
genre:"horror",
rating:8,
poster:"https://upload.wikimedia.org/wikipedia/en/3/35/The_Visit_2015_poster.jpg",
trailer:"https://www.youtube.com/watch?v=YfQnR_6MogE"
},

{
title:"Stranger Things",
genre:"fantasy",
rating:8.8,
poster:"https://upload.wikimedia.org/wikipedia/en/f/f7/Stranger_Things_season_4.jpg",
trailer:"https://www.youtube.com/watch?v=b9EkMc79ZSU"
},

{
title:"Wednesday",
genre:"fantasy",
rating:8.2,
poster:"https://upload.wikimedia.org/wikipedia/en/3/38/Wednesday_Netflix_series_poster.jpg",
trailer:"https://www.youtube.com/watch?v=Di310WS8zLk"
},

{
title:"Game of Thrones",
genre:"drama",
rating:9,
poster:"https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
trailer:"https://www.youtube.com/watch?v=gcTkNV5Vg1E"
},

{
title:"House of the Dragon",
genre:"drama",
rating:8.7,
poster:"https://upload.wikimedia.org/wikipedia/en/9/90/House_of_the_Dragon_title_card.jpg",
trailer:"https://www.youtube.com/watch?v=DotnJ7tTA34"
},

{
title:"A Knight of the Seven Kingdoms",
genre:"drama",
rating:8.4,
poster:"https://upload.wikimedia.org/wikipedia/en/0/09/A_Knight_of_the_Seven_Kingdoms_title_card.jpg",
trailer:"https://www.youtube.com/watch?v=Z8nJkD1YH9c"
},

{
title:"Outer Banks",
genre:"drama",
rating:8.1,
poster:"https://upload.wikimedia.org/wikipedia/en/3/35/Outer_Banks_season_1.jpg",
trailer:"https://www.youtube.com/watch?v=uk_hFfUFXh4"
},

{
title:"The Resident",
genre:"drama",
rating:8.3,
poster:"https://upload.wikimedia.org/wikipedia/en/6/65/The_Resident_title_card.jpg",
trailer:"https://www.youtube.com/watch?v=VfTgCz7uUeE"
}

];

const container = document.getElementById("movieContainer");
const recommendList = document.getElementById("recommendList");

function displayMovies(list){
    container.innerHTML="";
    list.forEach(movie=>{
        const card=document.createElement("div");
        card.className="card";

        card.innerHTML=`
        <img src="${movie.poster}">
        <h3>${movie.title}</h3>
        <p>⭐ Rating: ${movie.rating}/10</p>
        <button onclick="window.open('${movie.trailer}','_blank')">Watch Trailer</button>
        <button onclick="addRecommend('${movie.title}')">Recommend</button>
        `;

        container.appendChild(card);
    });
}

function filterSelection(genre){
    if(genre==="all"){
        displayMovies(movies);
    }else{
        const filtered=movies.filter(m=>m.genre===genre);
        displayMovies(filtered);
    }
}

function addRecommend(title){
    const li=document.createElement("li");
    li.textContent=title;
    recommendList.appendChild(li);
}

displayMovies(movies);
