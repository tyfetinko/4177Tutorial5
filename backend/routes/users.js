// users.js
const express = require('express');
const router = express.Router();
let userData = require('../data/users').users;

//All user list
router.get('/users', (req, res) => {
    try {
        if (!userData || !userData.length) {
            return res.status(404).json({
                message: "users not found!",
                success: false,
            })
        }
        return res.status(200).json({
            message: "Users retrieved",
            success: true,
            data: userData
        })
    } catch (e) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
});

//Update user by id
router.put('/update/:id', (req, res) => {
    let findData = userData.find(item => item.id === req.params['id']);
    try {
        if (!userData || !findData) {
            return res.status(404).json({
                success: false,
                message: "users not found!",
            })
        }
        Object.keys(req.body).forEach(item => {
            findData[item] = req.body[item];
        })
        return res.status(200).json({
            success: true,
            message: "User updated!",
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
});
//Add user
router.post('/add', (req, res) => {
    try {
        let id = 0;
        do {
            let number = Math.random() // 0.9394456857981651
            number.toString(36); // '0.xtis06h6'
            id = number.toString(36).substr(2, 9); // 'xtis06h6'
        } while (userData.findIndex(item => item.id === id) > -1)
        let newUser = {'id': id}
        Object.keys(req.body).forEach(item => {
            newUser[item] = req.body[item];
        })
        userData.push(newUser);
        return res.status(201).json({
            success: true,
            message: "User added!",
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
});
//find user by Id
router.get('/user/:id', (req, res) => {
    let findData = userData.find(item => item.id === req.params['id']);
    try {
        if (!userData || !findData) {
            return res.status(404).json({
                success: false,
                message: "users not found!",
            })
        }
        return res.status(200).json({
            success: true,
            message: "users found!",
            data: findData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
});


module.exports = router;