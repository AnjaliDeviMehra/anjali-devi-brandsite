const showsContainer = document.querySelector(".shows__container");

const showsarray = [
  {
    date: "Mon Sept 09 2024",
    vanue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    vanue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024 ",
    vanue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    vanue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    vanue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    vanue: "Press Club",
    location: "San Francisco, CA",
  },
];

const tabletList = document.createElement("dl");
tabletList.classList.add("shows-list--tablet");
showsContainer.appendChild(tabletList);

const tabletDateLabel = document.createElement("dt");
tabletDateLabel.classList.add("shows-list__title--tablet");
tabletDateLabel.textContent = "DATE";
tabletList.appendChild(tabletDateLabel);

const tabletVanueLabel = document.createElement("dt");
tabletVanueLabel.classList.add("shows-list__title--tablet");
tabletVanueLabel.textContent = "VANUE";
tabletList.appendChild(tabletVanueLabel);

const tabletLocationLabel = document.createElement("dt");
tabletLocationLabel.classList.add("shows-list__title--tablet");
tabletLocationLabel.textContent = "LOCATION";
tabletList.appendChild(tabletLocationLabel);

for (const show of showsarray) {
  const showsList = document.createElement("dl");

  showsList.classList.add("shows-list");
  showsContainer.appendChild(showsList);

  const dateLabel = document.createElement("dt");
  dateLabel.classList.add("shows-list__title");
  dateLabel.textContent = "DATE";
  showsList.appendChild(dateLabel);

  const date = document.createElement("dd");
  date.classList.add("shows-list__description--bold");
  date.textContent = show.date;
  showsList.appendChild(date);

  const vanueLabel = document.createElement("dt");
  vanueLabel.classList.add("shows-list__title");
  vanueLabel.textContent = "VANUE";
  showsList.appendChild(vanueLabel);

  const vanue = document.createElement("dd");
  vanue.classList.add("shows-list__description");
  vanue.textContent = show.vanue;
  showsList.appendChild(vanue);

  const locationLabel = document.createElement("dt");
  locationLabel.classList.add("shows-list__title");
  locationLabel.textContent = "LOCATION";
  showsList.appendChild(locationLabel);

  const location = document.createElement("dd");
  location.classList.add("shows-list__description");
  location.textContent = show.location;
  showsList.appendChild(location);

  const button = document.createElement("button");
  button.classList.add("shows-list__button");
  button.textContent = "BUY TICKETS";
  showsList.appendChild(button);
}

const showsLists = document.querySelectorAll(".shows-list");
console.log(showsLists);

showsLists.forEach((row) => {
  row.addEventListener("click", function () {
    showsLists.forEach((r) => r.classList.remove("shows-list--active"));
    this.classList.add("shows-list--active");
  });
});
