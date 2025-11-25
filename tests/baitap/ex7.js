
// for( let i=1000; i<=2000; i++){
//     if ( i%3===0);// thiếu dấu ngoặc
//     console.log(i);
// }
/**
 * In ra các giá trị chia hết cho 3 từ 1000 đến 2000
 */
console.log("--- Các số chia hết cho 3 trong khoảng 1000 đến 2000 ---");

// Bắt đầu vòng lặp từ 1000 đến 2000
for (let i = 1000; i <= 2000; i++) {
    
    // Kiểm tra điều kiện: Nếu số dư của i khi chia cho 3 bằng 0, thì i chia hết cho 3
    if (i % 3 === 0) {
        console.log(i);
    }
}