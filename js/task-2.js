function calcAverageCalories(days) {
  // 1. Eğer sporcu hiç veri girmemişse (dizi boşsa) direkt 0 döndür
  if (days.length === 0) {
    return 0;
  }

  // 2. Haftalık toplam kaloriyi biriktirmek için bir değişken
  let totalCalories = 0;

  // 3. Dizideki her bir günü (obje) tek tek gez
  for (const day of days) {
    // Her objenin içindeki 'calories' özelliğini toplama ekle
    totalCalories += day.calories;
  }

  // 4. Toplam kaloriyi gün sayısına böl ve ortalamayı döndür
  return totalCalories / days.length;
}

// --- Kontrol Testleri (Fonksiyondan hemen sonra yapıştır) ---

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // Beklenen sonuç: 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // Beklenen sonuç: 2270

console.log(
  calcAverageCalories([])
); // Beklenen sonuç: 0