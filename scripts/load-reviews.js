// Load company reviews
const NUM_LESS_CHAR = 200;

const reviews = [
  {
    idCode: "r1",
    name: "John Doe",
    date: "November 2, 2018",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit repellendus perspiciatis dolore quos dolorem vitae eligendi recusandae quo quam iure voluptate, dolores ipsum eveniet obcaecati qui aliquam quia architecto!\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio non sit a distinctio accusantium eius minima commodi nemo consequuntur omnis necessitatibus voluptatem itaque dolorum vero iure, porro corporis reprehenderit?"
  },

  {
    idCode: "r2",
    name: "Jane Doe",
    date: "December 18, 2018",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!"
  },

  {
    idCode: "r3",
    name: "Maria Smith",
    date: "January 2, 2019",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!"
  },

  {
    idCode: "r4",
    name: "Felipe Santos",
    date: "February 18, 2019",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!"
  },

  {
    idCode: "r5",
    name: "John Smith",
    date: "March 12, 2019",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!"
  },

  {
    idCode: "r6",
    name: "Jack Doe",
    date: "March 16, 2018",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!"
  },

  {
    idCode: "r7",
    name: "Maria Smith",
    date: "April 2, 2019",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!"
  },

  {
    idCode: "r8",
    name: "Angel Santos",
    date: "April 18, 2019",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum sit reprehenderit quae dolore ut repudiandae, dolor, aspernatur alias provident cupiditate blanditiis. Tempora odit ad maiores natus, reiciendis doloribus a.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea dolor sit laudantium architecto doloribus possimus maxime itaque nesciunt saepe corrupti adipisci voluptatum numquam, est rerum error reprehenderit quidem dolorum!"
  }
];

function loadReviews() {
  fragment = document.createDocumentFragment();
  const reviews = getReviews();
  for (let i = 0; i < reviews.length; i++) {
    fragment.appendChild(createReview(reviews[i]));
  }
  document.querySelector(".reviews-container").appendChild(fragment);
}

function createReview(review) {
  const reviewDiv = document.createElement("div");
  reviewDiv.className = "review";
  reviewDiv.id = review.idCode;

  const headerDiv = document.createElement("div");
  headerDiv.className = "review-header";

  const nameH3 = document.createElement("h3");
  nameH3.className = "review-name";
  nameH3.textContent = review.name;

  const dateSpan = document.createElement("span");
  dateSpan.className = "review-date";
  dateSpan.textContent = review.date;

  headerDiv.append(nameH3, dateSpan);

  const messageP = document.createElement("p");
  messageP.id = `msg${review.idCode}`;
  messageP.className = "review-message";
  messageP.innerHTML = formatMessage(review.message, review.idCode);

  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = "more";
  button.addEventListener("click", toggleMoreLess);

  reviewDiv.append(headerDiv, messageP, button);
  return reviewDiv;
}

function formatMessage(message = "", idCode) {
  const lessText = `${message.substring(
    0,
    NUM_LESS_CHAR
  )} <span id="less${idCode}">...</span>`;
  const moreText = `<span id="more${idCode}" hidden>${message.substring(
    NUM_LESS_CHAR
  )}</span>`;
  return lessText + moreText;
}

function toggleMoreLess(event) {
  const el = event.target;
  const parentEl = el.parentElement;
  const idCode = parentEl.id;
  const messageP = document.querySelector(`#msg${idCode}`);
  const lessSpan = document.querySelector(`#less${idCode}`);
  const moreSpan = document.querySelector(`#more${idCode}`);

  el.textContent = el.textContent === "more" ? "less" : "more";
  parentEl.classList.toggle("display-more");
  messageP.classList.toggle("message-overflow");
  lessSpan.toggleAttribute("hidden");
  moreSpan.toggleAttribute("hidden");
  el.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

// simulates fetching reviews
function getReviews(){
  return reviews;
}

loadReviews();
