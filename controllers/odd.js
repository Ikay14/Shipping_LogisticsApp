const express = require('express')
require('express-async-errors')
const { StatusCodes } = require('http-status-codes')
const orderModel = require('../models/orderModel')

const getOddOrders = async (req, res) => {
    try {
        const allOrders = await orderModel.find({})
        const oddOrders = allOrders.filter(order => {
            const lastDigit = order._id.toString().toUpperCase().charAt(order._id.toString().length - 1)
            return ['1', '3', '5', '7', '9', 'B', 'D', 'F'].includes(lastDigit)
        });

        if (oddOrders.length > 0) {
            res.status(StatusCodes.OK).json({ oddOrders, nbHits: oddOrders.length })
        } else {
            res.status(StatusCodes.NOT_FOUND).json({ error: 'No odd order ID found' })
        }
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to retrieve orders' })
    }
}

module.exports = {
    getOddOrders
}


