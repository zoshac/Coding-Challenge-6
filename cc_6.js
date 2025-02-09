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

// Task 4 Subscription 
const subscriptionCost = (plan, months, discount = 0) => {
    const planRates = {
        "Basic": 10,
        "Premium": 20, 
        "Enterprise": 30,
    };
    const monthlyRate = planRates[plan] || 0;
    const totalCost = (monthlyRate * months) * (1-discount / 100);

    console.log(`Total Subscription Cost: $${totalCost.toFixed(2)}`);
    return totalCost;
};

// Test Cases 
subscriptionCost("Basic", 7);
subscriptionCost("Premium", 18, 6);
subscriptionCost("Enterprise", 9, 11);
