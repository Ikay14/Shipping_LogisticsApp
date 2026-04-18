const mongoose = require('mongoose');

// Define custom enum mapping
const StatusEnum = {
    Active: 0,
    Inactive: 1
};

const Shipping_dockSchema = new mongoose.Schema({
    name: {
        type: String, // 'String' should be capitalized
        required: [true, 'must be provided'],
        trim: true
    },
    status: {
        type: Number,
        enum: Object.values(StatusEnum), // Correct reference to StatusEnum
        default: StatusEnum.Inactive // Correct reference to StatusEnum
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('ShippingDock', Shipping_dockSchema);

