// 게시물 데이터
const POSTS = [
  {
    username: "pan._.da",
    likes: 10,
    description: "안녕 나는 판다야!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
  },
  {
    username: "rrred_panda",
    likes: 30,
    description: "안녕 나는 레서판다야!",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
  },
  {
    username: "kitty__",
    likes: 20,
    description: "안녕 나는 고양이야!",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
  },
  {
    username: "doosan_bear",
    likes: 25,
    description: "안녕 나는 곰이야!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
  },
  {
    username: "puppy123",
    likes: 32,
    description: "안녕 나는 강아지야!",
    image:
      "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
  },
  {
    username: "im_bunny",
    likes: 17,
    description: "안녕 나는 토끼야!",
    image:
      "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
  },
];

function createPost(post) {
  const postElement = document.createElement("div");
  postElement.style.border = "2px solid #dbdbdb";
  postElement.style.padding = "15px";



  const postProfileBar = document.createElement("div");
  postProfileBar.style.display = "flex";
  postProfileBar.style.flexDirection = "row";
  postProfileBar.style.marginBottom = "10px";

  const postProfileImage = document.createElement("div");
  postProfileImage.style.width = "35px";
  postProfileImage.style.height = "35px";
  postProfileImage.style.backgroundColor = "#dbdbdb";
  postProfileImage.style.borderRadius = "50%";
  
  const postUserName = document.createElement("h4");
  postUserName.innerText = post.username;
  postUserName.style.marginBlockStart = "0px";
  postUserName.style.marginBlockEnd = "0px";
  postUserName.style.marginLeft = "10px";
  postUserName.style.lineHeight = "35px";

  postProfileBar.appendChild(postProfileImage);
  postProfileBar.appendChild(postUserName);



  const postImage = document.createElement("img");
  postImage.classList.add("post-image");
  postImage.src = post.image;
  postImage.alt = "post image"
  postImage.style.display = "block";
  postImage.style.width = "100%";
  postImage.style.height = "auto";
  postImage.style.marginBottom = "15px";



  const postLikesBar = document.createElement("div");
  postLikesBar.style.display = "flex";
  postLikesBar.style.flexDirection = "row";
  postLikesBar.style.marginBottom = "10px"

  const postLikesImage = document.createElement("img");
  postLikesImage.src = "img/heart.png";
  postLikesImage.alt = "heart image"

  const postLikesCount = document.createElement("h4");
  postLikesCount.innerText = post.likes;
  postLikesCount.style.marginBlockStart = "0px";
  postLikesCount.style.marginBlockEnd = "0px";
  postLikesCount.style.marginLeft = "5px";

  postLikesBar.appendChild(postLikesImage);
  postLikesBar.appendChild(postLikesCount);



  const postDescription = document.createElement("p");
  postDescription.innerText = post.description;
  postDescription.style.marginBlockStart = "0px";
  postDescription.style.marginBlockEnd = "0px";
  postDescription.style.marginBottom = "5px";



  postElement.appendChild(postProfileBar);
  postElement.appendChild(postImage);
  postElement.appendChild(postLikesBar);
  postElement.appendChild(postDescription);
  
  return postElement;
}

// main 실행 함수
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");  
  
  for(let post of POSTS){
    postsContainer.appendChild(createPost(post));
  }

  const sortButton = document.getElementById("sort-button");  

  sortButton.addEventListener("click", () => {
    postsContainer.replaceChildren();

    POSTS.sort((post1, post2) => post2.likes - post1.likes);

    for(let post of POSTS){
      postsContainer.appendChild(createPost(post));
    }
  })
}

main();
