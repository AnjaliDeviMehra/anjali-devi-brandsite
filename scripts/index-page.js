import apiData from "./band-site-api.js";

const comments = document.querySelector(".comments");

async function retrieveComments() {
  const commentsArray = await apiData.getComment();

  for (const comment of commentsArray) {
    const commentElement = document.createElement("li");
    commentElement.classList.add("comments__list-item");
    comments.appendChild(commentElement);

    const commentAvatarContainer = document.createElement("div");
    commentAvatarContainer.classList.add("comments__avatar-container");
    commentElement.appendChild(commentAvatarContainer);

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

    const date = new Date(comment.timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const userCommentsDate = document.createElement("span");
    userCommentsDate.classList.add("user-comments__date");
    userCommentsDate.textContent = `${day}/${month}/${year}`;
    userCommentsHeader.appendChild(userCommentsDate);

    const userCommentsComment = document.createElement("p");
    userCommentsComment.classList.add("user-comments__comment");
    userCommentsComment.textContent = comment.comment;
    userComment.appendChild(userCommentsComment);
  }
}

retrieveComments();

function addNewComment(newComment) {
  apiData.postComment(newComment);
  comments.textContent = "";
}

const commentForm = document.querySelector(".comments-form");
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = e.target.name.value;
  console.log(newName);
  const newComment = e.target.comment.value;
  const today = new Date().toLocaleDateString();
  console.log(today);

  console.log(newComment);
  const newCommentObject = {
    name: newName,
    comment: newComment,
  };
  addNewComment(newCommentObject);
  retrieveComments();
  commentForm.reset();
});
