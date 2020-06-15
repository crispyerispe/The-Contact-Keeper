const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
    res.send("Get All Contacts");
});

// @route   POST api/contacts
// @desc    Add new contacts
// @access  Private
router.post('/', (req, res) => {
    res.send("Add Contacts");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send("Update Contacts");
});

// @route   DELETE api/contacts
// @desc    Delete contacts
// @access  Private
router.delete('/', (req, res) => {
    res.send("Deletes Contacts");
});

module.exports = router;