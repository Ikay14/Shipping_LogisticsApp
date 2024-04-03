const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    shippingDock_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShippingDock',
        required: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    notes: {
        type: String,
        required: true,
        trim: true
    },
    
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
