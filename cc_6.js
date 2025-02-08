// Task 1 Business Profit calculation 
const calculateProfit = (costPrice, sellingPrice, unitsSold) => {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
    return profit;
};

// Test Cases 
calculateProfit(50, 60,70);
calculateProfit(35, 100, 230);
