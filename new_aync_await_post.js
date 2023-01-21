const posts = [
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'},
];



function getPosts(){
    
    return new Promise((resolve,reject)=>{

        let output = '';
        setTimeout(()=>{
            posts.forEach((post,index)=>{
                output +=   `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        },1000);

    });
    
}


function createPost(post){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            
            const data = posts.push(post);
            if (data){
                resolve(data);
            }else{
                reject('Error:Post is not created');
            }
        },5000);
    });    
}

function deletePost(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            
            const data = posts.pop();
            if(data){
                resolve(data);
            }else{
                reject('Array is empty now');
            }
        },2000);

    });
}




async function doThings() {
    
    const display1 =  getPosts();
    console.log(display1);

    const addPost3 = await createPost({title:'Post Three',body:'This is post three'});
    console.log(addPost3);

    const addPost4 = await createPost({title:'Post Four',body:'This is post four'});
    console.log(addPost4);

    const display2 =  getPosts();
    console.log(display2);

    const del1 =await deletePost();//delete 4 th post
    console.log(del1);

    const display3 =  getPosts();//display 3rd post
    console.log(display3);

    const del2 =await deletePost();//delete 3rd th post
    console.log(del2);

    const display4 =  getPosts();//display 2nd post
    console.log(display4);

    const del3 =await deletePost();//delete 2nd post
    console.log(del3);

    const display5 =  getPosts();//display 1 post
    console.log(display5);

    const del4 =await deletePost();//delete 1 post
    console.log(del4);

    try{
        const del5 =  await deletePost();//throw error
    }catch(e){
        console.log(e);
    }

    const display6 =  getPosts();//display 0 post
    console.log(display6);
    


    //const [del, del6] = await Promise.all([del4, del5]);
    //console.log(del6);


    

    
  
   
  }
  
  doThings();