const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    customerEmail: { type: String, required: true },
    stripePaymentId: { type: String, required: true },
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Order', OrderSchema);
