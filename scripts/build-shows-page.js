import apiData from "./band-site-api.js";

const showsContainer = document.querySelector(".shows__container");

function getDate(timestamp) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const newdate = new Date(timestamp);
  const dayName = days[newdate.getDay()];
  const date = String(newdate.getDate()).padStart(2, 0);
  const monthName = months[newdate.getMonth()];
  const year = newdate.getFullYear();

  return `${dayName} ${monthName} ${date} ${year}`;
}
async function retrieveShows() {
  const showsArray = await apiData.getShows();
  console.log(showsArray);
  const tabletList = document.createElement("dl");
  tabletList.classList.add("shows-list--tablet");
  showsContainer.appendChild(tabletList);

  const tabletDateLabel = document.createElement("dt");
  tabletDateLabel.classList.add("shows-list__title--tablet");
  tabletDateLabel.textContent = "DATE";
  tabletList.appendChild(tabletDateLabel);

  const tabletVanueLabel = document.createElement("dt");
  tabletVanueLabel.classList.add("shows-list__title--tablet");
  tabletVanueLabel.textContent = "VENUE";
  tabletList.appendChild(tabletVanueLabel);

  const tabletLocationLabel = document.createElement("dt");
  tabletLocationLabel.classList.add("shows-list__title--tablet");
  tabletLocationLabel.textContent = "LOCATION";
  tabletList.appendChild(tabletLocationLabel);

  for (const show of showsArray) {
    const showsList = document.createElement("dl");

    showsList.classList.add("shows-list");
    showsContainer.appendChild(showsList);

    const dateLabel = document.createElement("dt");
    dateLabel.classList.add("shows-list__title");
    dateLabel.textContent = "DATE";
    showsList.appendChild(dateLabel);

    const dateElement = document.createElement("dd");
    dateElement.classList.add("shows-list__description--bold");
    dateElement.textContent = getDate(show.date);
    showsList.appendChild(dateElement);

    const vanueLabel = document.createElement("dt");
    vanueLabel.classList.add("shows-list__title");
    vanueLabel.textContent = "VENUE";
    showsList.appendChild(vanueLabel);

    const vanue = document.createElement("dd");
    vanue.classList.add("shows-list__description");
    vanue.textContent = show.place;
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
    button.textContent = "BUY  TICKETS";
    showsList.appendChild(button);
  }
}

retrieveShows();
const showsLists = document.querySelectorAll(".shows-list");

showsLists.forEach((row) => {
  row.addEventListener("click", function () {
    showsLists.forEach((r) => r.classList.remove("shows-list--active"));
    this.classList.add("shows-list--active");
  });
});
