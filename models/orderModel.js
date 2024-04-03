const mongoose = require('mongoose');


// Define custom enum mapping
const StatusEnum = {
    Paid: 0,
    Not_Paid: 1
};

const OrderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
       
    amount: {
        type: Number,
        trim: true,
        required: [true, 'Transaction Amount must be provided']
    },
    tax: {
        amount: {
            type: Number,
            required: [true, 'Tax amount must be provided']
        }
    },
    notes: {
        type: String,
        required: [true, 'Notes must be provided']
    },
    status: {
        type: Number,
        enum: Object.values(StatusEnum),
        default: StatusEnum.Not_Paid
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define a virtual getter to convert enum values to string representations
OrderSchema.virtual('statusString').get(function() {
    return this.status === StatusEnum.Paid ? 'Paid' : 'Not Paid';
});

module.exports = mongoose.model('Order', OrderSchema);


