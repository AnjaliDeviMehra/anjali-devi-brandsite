const comments = document.querySelector(".comments");

const commentsarray = [
  {
    name: "Victor Pinto",
    date: new Date("11 / 02 / 2023"),
    avatar: "",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Christina Cabrera",
    date: new Date("10/28/2023"),
    avatar: "",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: new Date("10/20/2023"),
    avatar: "",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
function retrieveComments() {
  for (const comment of commentsarray) {
    const commentElement = document.createElement("li");
    commentElement.classList.add("comments__list-item");
    comments.appendChild(commentElement);

    const commentAvatarContainer = document.createElement("div");
    commentAvatarContainer.classList.add("comments__avatar-container");
    commentElement.appendChild(commentAvatarContainer);

    const commentAvatar = document.createElement("img");
    commentAvatar.classList.add("comments__avatar");
    commentAvatar.setAttribute("src", comment.avatar);
    commentAvatar.setAttribute("alt", "avatar");
    commentAvatarContainer.appendChild(commentAvatar);

    const userComment = document.createElement("div");
    userComment.classList.add("user-comments");
    commentElement.appendChild(userComment);

    const userCommentsHeader = document.createElement("div");
    userCommentsHeader.classList.add("user-comments__header");
    userComment.appendChild(userCommentsHeader);

    const userCommentsName = document.createElement("span");
    userCommentsName.classList.add("user-comments__name");
    userCommentsName.textContent = comment.name;
    userCommentsHeader.appendChild(userCommentsName);

    const userCommentsDate = document.createElement("span");
    userCommentsDate.classList.add("user-comments__date");
    userCommentsDate.textContent = comment.date.toLocaleDateString();
    userCommentsHeader.appendChild(userCommentsDate);

    const userCommentsComment = document.createElement("p");
    userCommentsComment.classList.add("user-comments__comment");
    userCommentsComment.textContent = comment.comment;
    userComment.appendChild(userCommentsComment);
  }
}

retrieveComments();
const commentForm = document.querySelector(".comments-form");
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = e.target.name.value;
  console.log(newName);
  const newComment = e.target.comment.value;
  const today = new Date();
  console.log(today);

  console.log(newComment);
  const newCommentObject = {
    name: newName,
    date: today,
    avatar: "",
    comment: newComment,
  };
  commentsarray.push(newCommentObject);
  console.log(commentsarray);

  commentsarray.sort((a, b) => {
    return b.date - a.date;
  });
  console.log(commentsarray);
  comments.textContent = "";

  retrieveComments();

  commentForm.reset();
});
