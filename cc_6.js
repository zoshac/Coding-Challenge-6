// Task 1 Business Profit calculation 
const calculateProfit = (costPrice, sellingPrice, unitsSold) => {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
    return profit;
};

// Test Cases 
calculateProfit(50, 60,70);
calculateProfit(35, 100, 230);


// Task 2 Sales Tax 
const calculateSalesTax = function (amount, taxRate) {
    return amount * taxRate;
};

// Test Cases 
let price = 450;
let taxRate = 0.7;

let taxAmount = calculateSalesTax(price,taxRate);
console.log(`Tax Amount: $${taxAmount}`); 

// Task 3 Employee Bonus 
const calculateBonus = (salary, performanceLevel) => {
    const bonusRate = {
        "Excellent": 0.20,
        "Good": 0.10,
        "Average": 0.05
    };
    const bonus = salary * (bonusRate[performanceLevel] || 0);
    console.log(`Bonus: $${bonus.toFixed(2)}`);
};

// Test Cases 
calculateBonus(7500, "Excellent");
calculateBonus(5000, "Good");
calculateBonus(2500, "Average");
