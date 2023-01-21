// console.log('person1:show ticket');
// console.log('person2:show ticket');

// const wifeBringingTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//     },3000)
// });

// const getPopcorn = wifeBringingTickets.then((t)=>{
//     console.log('wife:I have the tickets');
//     console.log('husband:we should go in');
//     console.log('wife:no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`person3 show${t}`));
// });

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband:I got some popcorn');
//     console.log('husband:we should go in');
//     console.log('wife:I need butter on my popcorn');
//     return new Promise((resolve,reject)=>resolve(`person3 show${t}`));
// });


// const coldDrinks = getButter.then((t)=>{
//     console.log('husband:I got colddrinks also');
//     return new Promise((resolve,reject)=>resolve(`coldDrinks`));
// });

// coldDrinks.then((t)=>console.log(t));


// console.log('person4:show ticket');
// console.log('person5:show ticket');











//Aync/Await




console.log('person1:show ticket');
console.log('person2:show ticket');

const preMovie = async ()=>{
    const wifeBringingTickets = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`ticket`);
            },3000);
        });

    const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));

    const getCandy = new Promise((resolve,reject)=>resolve(`candy`));
    const getCoke = new Promise((resolve,reject)=>resolve(`coke`));


    //const addButter = new Promise((resolve,reject)=>resolve(`butter`));

    //const getColdDrinks = new Promise((resolve,reject)=>resolve(`colddrinks`));

    let ticket
    try{
        ticket = await wifeBringingTickets;
    }catch(e){
        ticket = 'sad face';
    }
    

    // console.log(`wife:I have the ${ticket}`);
    // console.log('husband:we should go in');
    // console.log('wife:no i am hungry');


    //let popcorn = await getPopcorn;

    // let  [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke]);
    // console.log(`${popcorn},${candy} ,${coke}`);


    // console.log(`husband:I got some ${popcorn}`);
    // console.log('husband:we should go in');
    // console.log('wife:I need butter on my popcorn');
    

    // let butter = await addButter;


    // console.log(`husband:I got some ${butter}`);
    // console.log(`husband:anything else darling?`);
    // console.log(`wife:lets go we are getting late`);
    // console.log(`husband:thank you for the reminder *grins*`);


    // let coldDrinks = await getColdDrinks;
    // console.log(`husband:I got some ${coldDrinks} also`);

    return ticket;
};

preMovie().then((m)=>console.log(`person3:shows${m}`));

console.log('person4:show ticket');
console.log('person5:show ticket');