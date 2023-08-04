// const age = +prompt("enter your age");
// console.log(age);
// // chuyển dl từ số thành chữ

// // console.log(age.toString());
// // chuyển dl từ chữ thành số thì chỉ cần thêm + trước 
// if (age === 100){
//     document.write("100 tuoi");
// }
// else if (age >= 60){
//     document.write("old");
// }
// else if(age >=18){
//     document.write("adult");
// }
// else if (age > 16){
//     document.write("teen");
// }
// else{
//     document.write("kids");
// }

for(let i = 0; i< 10 ;i++ ){
    if(i>6){
        console.log("câu a " +i);
    }
}

for(let i = 0; i< 10 ;i++ ){
    if(i>6 && i%2==0){
        console.log("câu b "+i);
    }
}
for(let i = 0; i< 10 ;i++ ){
    if(i%3 && i>6){
        console.log("câu c "+i%3+" " +i);
    }
}
for(let i = 0; i< 10 ;i++ ){
    if(i>6){
        console.log("câu c " +i*2);
    }
}
