const posts = [
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'},
];

const user = {
    username:"kazi",
    lastactivitytime:""
}


function getPosts(){
    let output = '';
    setTimeout(()=>{
         posts.forEach((post,index)=>{
            output +=   `<li>${post.title}</li>`;
         });
         document.body.innerHTML = output;
    },1000);
    
}


function createPost(post){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if (!error){
                resolve();
            }else{
                reject('Error:Something went wrong');
            }
        },1000);
    });    
}

function deletePost(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            
            const error = posts.pop();
            if(error){
                //console.log(error);
                resolve();
            }else{
                //console.log(error);
                reject('Array is empty now');
            }
        },2000);

    });
}

createPost({title:'Post Three',body:'This is post three'})
            .then(getPosts)
            .catch(err => console.log(err));


// deletePost(10000).then(getPosts).catch(err => console.log(err));
// deletePost(20000).then(getPosts).catch(err => console.log(err));
// deletePost(30000).then(getPosts).catch(err => console.log(err));
//deletePost(40000).then(getPosts).catch(err => console.log(err));


createPost({title:'Post Four',body:'This is post four'})
            .then(()=>{
                getPosts();
                deletePost().then(()=>{
                    getPosts();
                }).catch(err =>console.log(err));

            })
            .catch(err => console.log(err));

//promise all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Goodbye');
// });
// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));


function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime = new Date().getTime();
            console.log(user.lastactivitytime);
            resolve(user.lastactivitytime);
        },1000);
    });
};


//both function resolved then it return 
function userupdatepost(){
    Promise.all([createPost,updateLastUserActivityTime]).then(([createPostresolves,updateLastUserActivityTimeresolves])=>{
        console.log(createPostresolves);
        console.log(updateLastUserActivityTimeresolves);
    }).catch(err=>console.log(err));//if one of function fail catch execuated.
}

userupdatepost();