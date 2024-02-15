// console.log("javascript is connected");
// console.log("person1:show ticket")
// console.log("person2:show ticket")
// const preMovie= async()=>{
//     const promiseWifeBringTicket=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("ticket")}
//         ,3000)})
//     const getpopcorn= new Promise((resolve,reject)=>
//         resolve("popcorn")
//     )
//     const getAddButter= new Promise((resolve,reject)=>
//         resolve("Butter")
//     )
//     const getCoke= new Promise((resolve,reject)=>
//         resolve("Coke")
//     )
//     const getCandy= new Promise((resolve,reject)=>
//         resolve("Candy")
//     )
    
    
//     let ticket= await promiseWifeBringTicket
//     let[popcorn,butter,coke,candy]= await Promise.all([getpopcorn, getAddButter,getCoke,getCandy])
//     console.log(`${popcorn} ${butter} ${coke} ${candy}`)
// return ticket
// }
// preMovie().then((m)=>{console.log(` person3 show ${m}`)})
// console.log("person4:show ticket")
// console.log("person5:show ticket")

const dadsPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var salarycredited= false;
        var salary=100000
        var costofps5=40000
        var costofps4=30000
        if(salarycredited===true && salary>costofps5){
        resolve("buy him a ps5")}
        else if (salarycredited===true && salary>costofps4){
            reject("buy him a ps4")
        }
    else{
        reject("soory son i will buy you next month")

    }},10000)
})
dadsPromise.then((xyz)=>{
    console.log(xyz)
}).catch((err)=>{
    console.log(err)
})