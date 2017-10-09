// IMPORT DEPENDENCIES
// ---------------------------------------------------
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// API ROUTES
// ---------------------------------------------------
router.use('apiRoutes', apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
