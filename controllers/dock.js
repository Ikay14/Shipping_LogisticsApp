const express = require('express')
require('express-async-errors');
const shippingDockSchema = require('../models/dockModel')
const { StatusCodes } = require('http-status-codes');
const { NotFound } = require('../errors');

const getAllShippingDock = async (req, res) => {
    const docks = await shippingDockSchema.find({})
    res.status(StatusCodes.OK).json({ docks, nbHits: docks.length });
}

const getSingleShippingDock = async (req, res) => {
    const dockId = req.params.id;
    const dock = await shippingDockSchema.findOne({ _id: dockId });

    if (!dock) {
        throw new NotFound(`No Shipping Dock with id ${dockId}`);
    }

    res.status(StatusCodes.OK).json({ dock });
}

const createShippingDock = async (req, res) => {
    const dock = await shippingDockSchema.create(req.body);
    res.status(StatusCodes.CREATED).json({ dock });
}

const updateShippingDock = async (req, res) => {
    const dockId = req.params.id;

    const dock = await shippingDockSchema.findByIdAndUpdate(
        dockId,
        req.body,
        { new: true, runValidators: true }
    );

    if (!dock) {
        throw new NotFound(`Shipping Dock with id ${dockId} not found`);
    }

    res.status(StatusCodes.OK).json({ dock });
};

const deleteShippingDock = async (req, res) => {
    const dockId = req.params.id;

    const dock = await shippingDockSchema.findByIdAndDelete({ _id: dockId });

    if (!dock) {
        throw new NotFound(`Shipping Dock with id ${dockId} not found`);
    }

    res.status(StatusCodes.OK).json({ message: `Shipping Dock with id ${dockId} deleted successfully` });
};

module.exports = {
    getAllShippingDock,
    getSingleShippingDock,
    createShippingDock,
    updateShippingDock,
    deleteShippingDock
};
