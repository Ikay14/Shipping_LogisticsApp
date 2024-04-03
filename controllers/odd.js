const express = require('express')
require('express-async-errors')
const { StatusCodes } = require('http-status-codes')
const Order = require('../models/orderModel')

const getOddOrders = async (req, res) => {
    const order = await Order.find({})
    res.status(StatusCodes.OK).json({ order })
}

module.exports = { 
    getOddOrders
}