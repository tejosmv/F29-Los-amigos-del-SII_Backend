// controllers/userController.js
const User = require('../models/User');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.send(`Username: ${username} logged in successfully`);
        } else {
            res.status(401).send('Authentication failed');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};
