const express = require('express')
const {
    getEventDetails,
    getEventDetail,
    createEvent,
    deleteEvent,
    updateEvent
} = require('../controllers/eventController')

const router = express.Router()

// GET all workouts
router.get('/', getEventDetails)

// GET a single workouts
router.get('/:id', getEventDetail)

// POST allworkouts
router.post('/', createEvent)

// DELETE all workouts
router.delete('/:id', deleteEvent)

// DELETE all workouts
router.patch('/:id', updateEvent)

module.exports = router