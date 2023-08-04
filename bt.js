// bai 1

// const age = +prompt("nhap so tuoi");
// console.log(age);
// if (age >= 18){
//     document.write(" ban du tuoi lai xe");
// }
// else{
//     document.write(" ban ko du tuoi");
// }

//bai 2
//   const int = +prompt("nhap vao so tn");
//   console.log(int);
//   if (int > 0){
//     document.write(int +" la so duong");
//   }
//   else if (int <0 ){
//     document.write(int +" la so am");
//   }
//   else{
//     document.write(int);
//   }

//bai 3
// const int = +prompt("nhap vao so tn");
//   console.log(int);
//   if ( int%3==0 ){
//     document.write(int +" chia het cho 3");
//   }
//   else if (int%5==0){
//     document.write(int +" chia het cho 5");
//   }
//   else{
//     document.write("ko chia het cho ca 3 va 5");}

//bai 4
// let date = +prompt("nhap vao ngay");
// let day;
//   console.log(day);
// switch(date){
//     case 2:
//         day=("thu2");
//         break;
//     case 3:
//         day=("thu3");
//         break;
//     case 4:
//         day=("thu4");
//         break;
//     case 5:
//         day=("thu5");
//         break;
//     case 6:
//         day=("thu6");
//         break;
//     case 7:
//         day=("thu7");
//         break;
//     case 8:
//         day=("thu8");
//         break;
// }
// document.write(day);

//bai5

//   const n = +prompt("nhap vao so tn");
//   console.log(n);
//   let sum=0;
//   for(let i=0;i<=n;i++){
//     sum=sum+i;
//   }
//   document.write(sum);

//bai6

// for(let i=1;i<=10;i++){
//     if(i!=5){
//         document.write(i);
//          continue;
//     }
// }

// bai 7

for(let i=1;i<=20;i++){
    if(i%3==0){
        document.write(i);
        break;
    }
}