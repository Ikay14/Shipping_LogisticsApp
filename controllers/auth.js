const express = require('express')


const getAllUser = async (req, res) => {
    res.send('route is ready1')
}
const getAUser = async (req, res) => {
    res.send('route is ready2')
}
const createUser = async (req, res) => {
    res.send('route is ready3')
}
const updateUser = async (req, res) => {
    res.send('route is ready4')
}
const deleteUser = async (req, res) => {
    res.send('route is ready5')
}

module.exports = {
    getAUser,
    getAllUser,
    createUser,
    updateUser,
    deleteUser
}