const start = Date.now();

const posts = [
    {title:'Post one',body:'This is post one',createdAt:Date.now()},
    {title:'Post two',body:'This is post two',createdAt:Date.now()},
];
let intervalId = 0;
function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title} created ${(Date.now() - post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post,callback){
    
    setTimeout(()=>{
        posts.push({...post,createdAt:Date.now()});
        callback();
    },2000);
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:Date.now()});
        callback();
    },6000);
}


getPosts();
createPost({title:'Post three',body:'This is post three',createdAt:Date.now()-start},getPosts);
create4thPost({title:'Post four',body:'This is post four',createdAt:Date.now()-start},getPosts);




// var timer;
// var count;
// function lastEditedSecondsAgo(){
//     count = 0;
//     clearInterval(timer);
//     timer = setInterval(()=>{
//         count++;
//         console.log(count);

//     },5000);
// }
