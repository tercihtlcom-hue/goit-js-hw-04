function isEnoughCapacity(products, containerSize) {
  // 1. Önce nesnedeki sayıları (değerleri) bir diziye toplayalım
  const values = Object.values(products);
  
  // 2. Bu sayıları toplamak için bir değişken oluşturalım
  let total = 0;
  
  // 3. Döngüyle sayıları toplayalım
  for (const value of values) {
    total += value;
  }
  
  // 4. Toplam kapasiteyi aşıyor mu kontrol edelim
  return total <= containerSize;
}

// Test etmek için bunları kullanabilirsin:
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
