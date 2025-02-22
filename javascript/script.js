document.getElementById('rewardsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the value from user
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerNumber = document.getElementById('customerNumber').value;
    const clothingCost = parseFloat(document.getElementById('clothingCost').value);
    const accessoriesCost = parseFloat(document.getElementById('accessoriesCost').value);
    const rewardsReceived = parseFloat(document.getElementById('rewardsReceived').value);
    
    // Calculate total purchase 
    const totalPurchase = clothingCost + accessoriesCost;
    
    // Calculate total rewards based on the total purchase 
    let totalRewards;
    if (totalPurchase < 2500) {
        totalRewards = totalPurchase * 0.10;
    } else if (totalPurchase >= 2500 && totalPurchase <= 4000) {
        totalRewards = totalPurchase * 0.15;
    } else {
        totalRewards = totalPurchase * 0.20;
    }
    
    // Calculate rewards pending
    const rewardsPending = totalRewards - rewardsReceived;
    
    // Display the results 
    document.getElementById('customerNameOutput').textContent = `Customer Name: ${customerName}`;
    document.getElementById('customerEmailOutput').textContent = `Customer Email: ${customerEmail}`;
    document.getElementById('customerNumberOutput').textContent = `Customer Number: ${customerNumber}`;
    document.getElementById('totalPurchase').textContent = `Total Purchase: $${totalPurchase.toFixed(2)}`;
    document.getElementById('totalRewards').textContent = `Total Rewards: $${totalRewards.toFixed(2)}`;
    document.getElementById('rewardsReceived').textContent = ` Reward Recived: $${rewardsReceived.toFixed(2)}`;
    document.getElementById('rewardsPending').textContent = `Rewards Pending: $${rewardsPending.toFixed(2)}`;
    
    
    document.getElementById('results').style.display = 'block';
});
