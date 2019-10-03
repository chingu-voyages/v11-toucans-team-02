// Load company reviews
const NUM_LESS_CHAR = 200;

const reviews = [
  {
    idCode: "r1",
    name: "John Doe",
    date: "November 2, 2018",
    message: `   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus magna ut lacus condimentum fringilla. Ut sit amet sem urna. Donec pharetra ultricies luctus. In in viverra purus, id rutrum justo. Integer pulvinar aliquet tincidunt. Proin tortor nibh, pharetra sed placerat non, pellentesque ac ipsum. Integer lacinia orci vitae felis feugiat luctus. Suspendisse ac magna a turpis pretium auctor eget id dui.

    Fusce luctus massa tellus, sit amet pellentesque massa congue eget. Nam pretium, velit sed consequat ullamcorper, turpis urna iaculis felis, non venenatis velit enim at justo. Proin semper orci nisl. Praesent sollicitudin justo vitae vehicula commodo. Aenean dignissim vulputate urna sed venenatis. In cursus magna ac feugiat luctus. Nam et lobortis ipsum. Integer vitae purus tincidunt, varius risus sit amet, rhoncus nunc. Sed scelerisque nunc in ligula tincidunt, posuere convallis tellus dapibus. Fusce aliquet convallis pretium. Curabitur tincidunt nisi nec felis gravida malesuada. Aenean in nisi vestibulum, pharetra nulla sed, hendrerit augue.
    
    Donec rutrum nisi diam, et gravida ante sollicitudin ut. Curabitur ullamcorper justo vitae dolor lobortis, eget pharetra magna rutrum. Morbi fringilla egestas est. Quisque dictum pulvinar ex non auctor. Morbi nec facilisis metus. Curabitur magna turpis, placerat non auctor at, condimentum at massa. Ut vel est cursus, interdum lorem vel, consequat odio. Curabitur egestas nunc dolor, et rutrum leo vestibulum maximus.
    
    Sed luctus laoreet tortor. Suspendisse at ornare lacus. Suspendisse mattis maximus lectus, non porttitor ligula porttitor non. Sed neque magna, mattis in sem nec, accumsan elementum nisl. Morbi dapibus, felis nec ornare porta, quam magna venenatis mi, sit amet tempor quam ex eu velit. Nam sed mattis lorem, sed convallis quam. Sed convallis massa vel sem ultrices, sed cursus leo volutpat. Nulla ut tortor ut odio aliquet pharetra fermentum a nisl. Donec vestibulum nibh sit amet vestibulum tincidunt.
    
    Proin id purus malesuada, tempor dolor non, elementum odio. Etiam ut efficitur augue, quis pretium lectus. Vivamus ultrices justo et varius cursus. Morbi et placerat elit, non gravida ligula. Vivamus consectetur, felis id lobortis consectetur, diam metus scelerisque velit, a ultricies neque orci porta mi. Donec aliquam, est eu pharetra vestibulum, augue orci finibus ex, vel mollis ante ex et ex. Aenean bibendum, dui nec ornare posuere, dui leo laoreet augue, vitae dignissim lacus nunc vel nisi. Nulla tincidunt nisl quis nisi iaculis malesuada. Sed semper pulvinar nisl. Proin ac erat fermentum, placerat nulla ut, fermentum felis. Sed consectetur, magna et ullamcorper eleifend, tortor augue ultricies velit, ac pellentesque urna est nec dui.`
  },

  {
    idCode: "r2",
    name: "Jane Doe",
    date: "December 18, 2018",
    message: `   Quisque pretium ultricies mauris vitae tempor. Suspendisse quis fringilla diam, porttitor accumsan ligula. Pellentesque iaculis lorem nisi, eget tincidunt ligula pellentesque ac. Integer et rhoncus dui. Phasellus eu convallis lorem. Phasellus eu dui sem. Praesent at auctor magna, sed feugiat ligula. Nulla pulvinar sed leo in consectetur. In id lectus non tortor mollis tempor.

    Donec malesuada, massa vel aliquam lacinia, metus dui venenatis eros, vel varius massa nisi vel mi. Morbi at sodales lectus. Aliquam quis dolor vel velit rhoncus iaculis id a est. Duis at sem id tortor pellentesque mattis. Cras sit amet enim est. Phasellus a mi id nisl blandit sollicitudin sit amet eget nunc. Morbi nec justo non arcu dapibus cursus ac ut libero. Sed ac fermentum odio. Donec dui ante, dignissim ut lacinia auctor, molestie quis elit. Proin semper erat ac egestas tempor. Duis in nisl lobortis sem mattis pharetra a vel urna. Sed fringilla lectus tellus, sed egestas augue finibus eget. Cras lacinia ligula vitae blandit efficitur.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis libero magna. Nunc id rhoncus erat. Suspendisse efficitur hendrerit erat, nec consectetur ligula pharetra id. Quisque vehicula in augue eget interdum. Pellentesque commodo libero non turpis condimentum, ac vulputate dui ornare. Sed in lectus tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sodales arcu eu pharetra efficitur. Nulla eu ullamcorper eros. Pellentesque vel eleifend lacus.`
  },

  {
    idCode: "r3",
    name: "Maria Smith",
    date: "January 2, 2019",
    message: `   Nulla at finibus purus. Ut accumsan eu sapien ut hendrerit. Vestibulum imperdiet at lorem vel venenatis. In quis diam non elit pharetra mattis sit amet mattis turpis. Suspendisse potenti. Ut ut neque vulputate, dapibus lectus id, semper odio. Donec semper tempor ante, eget iaculis tortor tempus at. Aenean ac imperdiet ante. Vestibulum porttitor vitae odio sit amet blandit.

    Phasellus sed nulla in lorem elementum egestas sit amet nec risus. Curabitur luctus non sapien nec accumsan. Donec viverra convallis ornare. Duis sodales nec nibh non feugiat. Sed sed nunc sed lorem tristique mattis. Vestibulum ut auctor eros. Duis laoreet justo ac vestibulum scelerisque. Maecenas vel purus maximus, tristique risus laoreet, ultrices mi. Sed tempor varius justo sed tempor. Praesent in cursus dolor. Nulla tincidunt lobortis lacus, non elementum purus fermentum ut.
    
    Ut lacinia rhoncus feugiat. Proin lobortis rutrum metus, eget hendrerit turpis tincidunt eu. Mauris dapibus feugiat libero, vitae suscipit nulla varius sit amet. Nullam dapibus erat in laoreet scelerisque. Vestibulum felis sem, varius quis elit id, blandit auctor dolor. Aenean ante est, elementum non ex vitae, imperdiet tristique ipsum. Nunc sed nisi sed neque maximus rutrum. In sit amet magna imperdiet, auctor diam at, sodales odio. Integer sit amet hendrerit dolor. Fusce faucibus lacus sed massa sollicitudin, quis consectetur turpis accumsan. Cras diam arcu, consectetur sollicitudin vehicula ac, egestas eu lectus. Mauris a posuere sem. Vestibulum viverra ullamcorper ante id dignissim. Mauris a metus ornare, consequat elit in, aliquam sapien. Quisque vitae mi sit amet nulla eleifend auctor.`
  },

  {
    idCode: "r4",
    name: "Felipe Santos",
    date: "February 18, 2019",
    message: `   Vestibulum libero lorem, scelerisque at auctor eget, elementum ut nisl. Cras iaculis lobortis sodales. Suspendisse potenti. Mauris et gravida augue, ut congue diam. Morbi lacinia, ante vel lobortis aliquam, ex lectus semper purus, id congue magna leo vitae enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo elementum ligula.

    Fusce id augue posuere, molestie purus a, tempus tellus. Curabitur a porta tortor. Mauris ultrices molestie condimentum. Aliquam pellentesque commodo quam, elementum pulvinar neque finibus id. Quisque eget elementum nunc. Nam gravida urna quis ex ornare interdum. Proin et semper massa. Donec urna velit, tempor ornare mi a, finibus lobortis erat. Curabitur id libero cursus, auctor felis ut, interdum eros. Nunc at felis tempus, pulvinar augue vel, ornare nulla. Nunc nunc augue, hendrerit ac eleifend eget, sodales id ipsum. Fusce non imperdiet arcu, quis faucibus quam. Praesent augue ante, tristique non erat nec, dictum hendrerit orci.`
  },

  {
    idCode: "r5",
    name: "John Smith",
    date: "March 12, 2019",
    message: `   Proin vehicula sagittis pellentesque. Duis sit amet diam eu sem cursus condimentum luctus sed sapien. Quisque mattis bibendum turpis, in eleifend purus rhoncus id. Pellentesque convallis imperdiet nunc, vitae dignissim felis consectetur quis. Vestibulum et mauris non dui posuere rhoncus non a magna. Pellentesque tempus neque vel egestas bibendum. Suspendisse potenti. Quisque eu turpis luctus, elementum mauris et, iaculis mauris. Sed suscipit tempor est, eget pellentesque sapien eleifend blandit. Vivamus ac nisi semper, aliquam lacus et, feugiat ipsum. Sed sodales ex dolor, id gravida augue congue sit amet. Phasellus vitae enim feugiat purus finibus rutrum. Integer a bibendum lacus.

    Quisque molestie nulla nunc, nec lobortis lectus facilisis sit amet. Etiam finibus nisl ex, non faucibus risus placerat non. Aenean sed sagittis diam. Cras sem erat, dapibus non orci eget, dictum vulputate lectus. Curabitur eu nisl nunc. Phasellus facilisis libero id tellus dictum, scelerisque gravida nibh convallis. Etiam at suscipit dolor, nec consectetur justo. Maecenas nec leo elit. Cras tempor nisl vitae nunc pharetra malesuada sed at tellus. Curabitur dictum hendrerit arcu, a rhoncus purus dictum vitae.`
  },

  {
    idCode: "r6",
    name: "Jack Doe",
    date: "March 16, 2018",
    message: `   Mauris pulvinar tellus mattis vehicula interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent sed faucibus nisi, id sagittis diam. Curabitur laoreet ante felis, vel pretium dui cursus quis. Vivamus euismod et dolor et hendrerit. Ut molestie ligula lectus, vitae ornare odio vestibulum in. Suspendisse sit amet risus vel justo eleifend suscipit eu sit amet felis. Nunc vulputate tortor eu est elementum, placerat lacinia velit vulputate. Praesent pretium ante nisl, et consequat ipsum pulvinar id. Donec sed semper dui, eget cursus magna. Vivamus nibh diam, molestie id lacus ut, varius blandit velit.

    Proin rutrum, ex vel dapibus fermentum, tellus enim ultricies turpis, nec accumsan ipsum libero at sem. Nam malesuada nulla a efficitur lacinia. Mauris tincidunt vel risus vulputate maximus. In dignissim, nisi a rutrum tincidunt, tellus mauris mattis ex, ac feugiat arcu sem sit amet urna. In nunc dui, molestie non risus non, efficitur maximus orci. Ut ante arcu, congue vitae libero quis, auctor gravida eros. Sed et purus eget sem efficitur mollis.`
  },

  {
    idCode: "r7",
    name: "Maria Smith",
    date: "April 2, 2019",
    message: `   Suspendisse mi orci, venenatis in mi quis, blandit fringilla magna. Nam ut quam eu dolor ullamcorper vestibulum. Phasellus euismod urna ut tempor egestas. Donec laoreet, nulla id bibendum venenatis, nunc nisl suscipit tellus, eu dignissim eros tellus in ex. Aenean in aliquet sem. Integer et augue sapien. Quisque commodo eu neque non mollis. Nulla facilisi. Ut dui metus, tempus at lacus sit amet, facilisis laoreet lorem.

    Vivamus mollis, felis at lobortis tristique, ipsum sapien bibendum ipsum, quis viverra dolor ligula at urna. Phasellus fermentum sagittis vestibulum. Maecenas volutpat mauris at nulla rutrum laoreet. Fusce convallis erat ut volutpat dictum. In iaculis nunc et augue rutrum, in varius nunc euismod. Quisque nulla felis, porta sit amet tristique a, condimentum a nibh. Cras eu metus a purus scelerisque sodales ac eget massa. Aliquam id hendrerit nibh. Aliquam lacinia nibh quis augue faucibus faucibus. Mauris ante neque, ullamcorper eget ligula at, efficitur vestibulum odio. Praesent nec felis vitae elit commodo suscipit finibus eget lectus. Nulla facilisis mi vitae leo vehicula facilisis. In eleifend enim quam, sed ultricies ex egestas vitae. Etiam eu suscipit tellus. Etiam et pretium neque, maximus dignissim nibh.`
  },

  {
    idCode: "r8",
    name: "Angel Santos",
    date: "April 18, 2019",
    message: `   Nam volutpat efficitur posuere. Vivamus blandit, enim vel vestibulum scelerisque, nunc augue scelerisque arcu, ac dignissim sem felis tincidunt neque. Sed vulputate dapibus nibh, in vulputate massa finibus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id urna vel sapien feugiat bibendum id sed magna. Aliquam in pharetra felis. Nullam sagittis elit id feugiat ornare. Donec quis suscipit elit, vel posuere augue.

    Nunc vel consectetur nulla. Ut fermentum, nisi vitae sagittis consequat, nibh elit congue magna, ut dapibus sem mi vitae eros. Vestibulum varius finibus pretium. Maecenas leo nibh, porttitor et volutpat non, consequat ut nibh. Sed vitae tortor dignissim, ullamcorper nisl a, auctor nisi. Nam vel orci sed felis facilisis vehicula. Morbi aliquam fermentum mi, sed sollicitudin tellus tempus egestas. Curabitur vel augue efficitur, accumsan urna sed, rutrum ante. Phasellus scelerisque ipsum gravida lorem dictum efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi varius sem orci, quis suscipit tellus placerat eget. In hac habitasse platea dictumst. Morbi diam tortor, vulputate id felis nec, ornare tincidunt orci. Quisque fermentum ac nibh in scelerisque.`
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
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

// simulates fetching reviews
function getReviews() {
  return reviews;
}

loadReviews();
