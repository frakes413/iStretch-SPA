const express = require('express');
const router = express.Router();

// Stretches Model Requirement
const Stretch = require('../../models/Stretch');

// @route   GET api/stretches
// @desc    Get All Stretches
// @access  Public
router.get('/', (req, res, next) => {
    Stretch.find()
      .then(stretches => res.json(stretches));
});

// @route   POST api/stretches
// @desc    Create Stretch
// @access  Public
router.post('/', (req, res, next) => {
  const newStretch = new Stretch({
      name: req.body.name,
      area: req.body.area,
      description: req.body.description,
      image: req.body.image
  });

  newStretch.save().then(() => res.json({success: true}));

});

// FOR DEV PURPOSES
// @route   DELETE api/stretches
// @desc    Remove Stretch
// @access  Public
router.delete('/:id', (req, res, next) => {
    Stretch.findById(req.params.id)
      .then(stretch => stretch.remove().then(() => res.json({success: true})))
      .catch((err) => res.status(404).json({sucess: false}));
});

module.exports = router;