


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let picEl= document.getElementById("profilePic")
let userEl=document.getElementById("userName")
let locEl = document.getElementById("location")

let likesEl = document.getElementById("like")
let userIdEl = document.getElementById("userID")
let commentEl = document.getElementById("theComment")



const feed = document.getElementById("feed")

posts.forEach( post => {
    const container =document.createElement("div")
    container.className="container"
    container.innerHTML=`
    
    
                <div class="upperInfo">
                    <img src="${post.avatar}" class="goodPic userPic" id="profilePic">
                    <div class="userNameLoc">
                        <p class="userName" >${post.name}</p>
                        <p class="location" >${post.location}</p>
                    </div>
                </div>
                <div >
                    <img class="post"  src="${post.post}">
                </div>
                <footer class="loweInfo">
                    <div class="icons">
                        <img class="icon" src="images/icon-heart.png">
                        <img class="icon"  src="images/icon-comment.png">
                        <img class="icon"  src="images/icon-dm.png">
                    </div>
                    <div class="likes">
                        ${post.likes} likes
                    </div>
                    <div class="caption">
                        <p class="captionUser">${post.username}</p>
                        <p class="captionComment" >${post.comment}</p>
                    </div>
                </footer>`;
                feed.appendChild(container);
})

