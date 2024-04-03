const express = require('express');
require('express-async-errors');
const mongoose = require('mongoose');
const Transaction = require('../models/transModel'); // Import the Transaction model
const { StatusCodes } = require('http-status-codes');
const { NotFound, BadRequestError } = require('../errors');



const getAllTransaction = async (req, res) => {
    const transactions = await Transaction.find({});
    res.status(StatusCodes.OK).json({ transactions, nbHits: transactions.length });
};

const getSingleTransaction = async (req, res) => {
    const transactionId = req.params.id;
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
        throw new NotFound(`No transaction with id ${transactionId}`);
    }

    res.status(StatusCodes.OK).json(transaction);
};

const createTransaction = async (req, res) => {
    const { user_id, order_id, shippingDock_id, amount, notes} = req.body

    if (!user_id || !order_id || !shippingDock_id || !amount || !notes) {
        throw new BadRequestError('Missing required fields');
    }

    const transaction =  await Transaction.create({ 
        user_id,
        order_id, 
        shippingDock_id, 
        amount, 
        notes
    });

    res.status(StatusCodes.CREATED).json({ transaction });
}


const updateTransaction = async (req, res) => {
    const transactionId = req.params.id;

    const transaction = await Transaction.findByIdAndUpdate(
        transactionId,
        req.body,
        { new: true, runValidators: true }
    );

    if (!transaction) {
        throw new NotFound(`Transaction with id ${transactionId} not found`);
    }

    res.status(StatusCodes.OK).json({ transaction });
};

const deleteTransaction = async (req, res) => {
    const transactionId = req.params.id;

    const transaction = await Transaction.findByIdAndDelete(transactionId);

    if (!transaction) {
        throw new NotFound(`Transaction with id ${transactionId} not found`);
    }

    res.status(StatusCodes.OK).json({ message: `Transaction with id ${transactionId} deleted successfully` });
};

module.exports = {
    getAllTransaction,
    getSingleTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
};
