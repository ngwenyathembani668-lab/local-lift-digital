const expenses = {
  rent: 1200,
  electricity: 100,
  water: 50,
  gas: 80,
  internet: 60,
  groceries: 300,
  home: 50,
  health: 150,
  car: 100,
};

// Calculate the total expenses
const totalExpeenses = Object.values(expenses).reduce((total, expense) => total + expense, 0);

console.log(`Total Expenses: ${totalExpeenses}`);

