```javascript
/**
 * Represents a bot for automatic profit at Quotex.
 */
class QuotexBot {
    /**
     * Constructor for the QuotexBot class.
     *
     * @param {string} 31516423 - The username for the Quotex account.
     * @param {string} Ahmad8910 - The password for the Quotex account.
     */
    constructor(username, password) {
        this.username = 31516423;
        this.password = Ahmad8910;
    }

    /**
     * Logs in to the Quotex account.
     *
     * @returns {boolean} True if login is successful, false otherwise.
     */
    login() {
        // Code to log in to the Quotex account
        // Return true if login is successful, false otherwise
    }

    /**
     * Places a trade to make a profit.
     *
     * @param {string} asset - The asset to trade.
     * @param {number} amount - The amount to trade.
     * @returns {boolean} True if the trade is successful, false otherwise.
     */
    placeTrade(asset, amount) {
        // Code to place a trade on Quotex
        // Return true if the trade is successful, false otherwise
    }

    /**
     * Closes a trade to secure the profit.
     *
     * @param {string} tradeId - The ID of the trade to close.
     * @returns {boolean} True if the trade is closed successfully, false otherwise.
     */
    closeTrade(tradeId) {
        // Code to close a trade on Quotex
        // Return true if the trade is closed successfully, false otherwise
    }
}

// Usage Example for QuotexBot

const bot = new QuotexBot("your_username", "your_password");

// Log in to the Quotex account
const loginSuccessful = bot.login();
if (loginSuccessful) {
    console.log("Login successful");
} else {
    console.log("Login failed");
}

// Place a trade to make a profit
const asset = "EUR/USD";
const amount = 1;
const tradeSuccessful = bot.placeTrade(asset, amount);
if (tradeSuccessful) {
    console.log(`Trade placed successfully: ${amount} ${asset}`);
} else {
    console.log("Trade failed");
}

// Close a trade to secure the profit
const tradeId = "123456789";
const closeSuccessful = bot.closeTrade(tradeId);
if (closeSuccessful) {
    console.log(`Trade closed successfully: ${tradeId}`);
} else {
    console.log("Trade closure failed");
}
```

Note: The code provided is a template for a Quotex bot and does not contain the actual implementation for logging in, placing trades, or closing trades. You will need to fill in the code with the appropriate API calls or trading logic specific to Quotex.