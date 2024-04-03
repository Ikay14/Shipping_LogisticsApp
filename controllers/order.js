const express = require('express');
require('express-async-errors');
const orderSchema = require('../models/orderModel');
const { StatusCodes } = require('http-status-codes');
const { NotFound } = require('../errors');


const getCursor = async (req, res) => {
    const order = await orderSchema.find({})
    res.status(StatusCodes.OK).json({ order, nbHits: order.length });
}

const getAllOrder = async (req, res) => {
    const { sort } = req.query
    const queryObject = {}

    let sortList;
    if (sort) {
        sortList = sort.split(',').join(' ')
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const orders = await orderSchema.find( queryObject ).skip(skip).limit(limit).sort(sortList);

    const total = await orderSchema.countDocuments(queryObject);

    res.status(StatusCodes.OK).json({ total, page, list: orders });
};


const getSingleOrder = async (req, res) => {
    const orderId = req.params.id;
    const order = await orderSchema.findOne({_id: orderId});

    if (!order) {
        throw new NotFound(`No Order with id ${orderId}`);
    }

    res.status(StatusCodes.OK).json(order);
};

const createOrder = async (req, res) => {
    
    // const user_id = uuidv4();
    const { user_id, amount, tax, notes, status } = req.body

    const order = await orderSchema.create({
        user_id, 
        amount, 
        tax, 
        notes, 
        status
    });
    res.status(StatusCodes.CREATED).json({order});
    console.log(req.body);
};

const updateOrder = async (req, res) => {
    const orderId = req.params.id;

    const order = await orderSchema.findByIdAndUpdate(
        orderId,
        req.body,
        { new: true, runValidators: true }
    );

    if (!order) {
        throw new NotFound(`Order with id ${orderId} not found`);
    }

    res.status(StatusCodes.OK).json({order});
};

const deleteOrder = async (req, res) => {
    const orderId = req.params.id;

    const order = await orderSchema.findByIdAndDelete({ _id: orderId });

    if (!order) {
        throw new NotFound(`Order with id ${orderId} not found`);
    }

    res.status(StatusCodes.OK).json({ message: `Order with id ${orderId} deleted successfully` });
};

module.exports = {
    getAllOrder,
    getSingleOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    getCursor
};



//     const { limit } = req.query;
//     const filterQuery = {};
//     if (req.query._id) {
//         filterQuery._id = { $lt: ObjectId(req.query._id) };
//     }
// try {
    
//     const orders = await orderSchema.find(filterQuery)
//                                      .sort({ _id: -1 })
//                                      .limit(limit)
//                                      .toArray(); // Convert cursor to array

//     const cursor = orders.length > 0 ? orders[orders.length - 1]._id : null;

//     res.status(StatusCodes.OK).json({ orders, cursor });

// } catch (error) {
//     console.log(error);
// }
