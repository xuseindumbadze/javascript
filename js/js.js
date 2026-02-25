

const students = [
  { name: "Giorgi", grades: [85, 90, 78], active: true },
  { name: "Nino", grades: [95, 92, 88], active: true },
  { name: "Luka", grades: [70, 60, 75], active: false },
  { name: "Ana", grades: [100, 98, 95], active: true }
];

const studentResult = students
  .filter(s => s.active) 
  .filter(s => s.grades.every(g => g > 80)) 
  .map(s => {
    const sum = s.grades.reduce((a, b) => a + b, 0);
    return {
      name: s.name,
      average: sum / s.grades.length
    };
  });

console.log("Students result:");
console.log(studentResult);




const products = [
  { name: "Laptop", price: 1500, category: "tech" },
  { name: "Phone", price: 800, category: "tech" },
  { name: "Shoes", price: 120, category: "fashion" },
  { name: "Watch", price: 300, category: "fashion" }
];

const techProducts = products
  .filter(p => p.category === "tech") 
  .map(p => ({
    ...p,
    price: p.price * 0.9 
  }));

console.log("Tech products:");
techProducts.forEach(p => {
  console.log(`${p.name} costs ${p.price}$`);
});