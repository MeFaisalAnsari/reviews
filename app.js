const reviews = [{
        id: 1,
        name: "Faisal Ansari",
        job: "Web Developer",
        img: "https://picsum.photos/id/1/150",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit mollitia similique nihil qui. Nobis, pariatur.Reprehenderit ratione eius tempora autem repudiandae accusamus numquam rerum minus!",
    },
    {
        id: 2,
        name: "Nabeel Mirza",
        job: "Android Developer",
        img: "https://picsum.photos/id/2/150",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
        id: 3,
        name: "Shahid Khan",
        job: "Content Creator",
        img: "https://picsum.photos/id/3/150",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
        id: 4,
        name: "Hassan Dandhala",
        job: "Graphic Designer",
        img: "https://picsum.photos/id/4/150",
        text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const randomBtn = document.querySelector(".btn-random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})