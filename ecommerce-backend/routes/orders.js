const express = require('express');
const router = express.Router();

// Mock payment process
router.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;

    // Simulating a delay and successful payment response
    setTimeout(() => {
        // Mimic a successful payment process
        res.status(200).send({
            clientSecret: "dummy_client_secret", // This would typically be returned by Stripe or any payment gateway
            message: "Payment successful!",
            amount: amount,
            currency: currency
        });
    }, 1000); // Simulates a delay of 1 second
});

module.exports = router;

