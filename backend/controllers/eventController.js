const Event = require('../models/eventModel')
const mongoose = require('mongoose')

// get all workouts
const getEventDetails = async (req, res) => {
    const eventDetails = await Event.find({}).sort({createdAt: -1})
    res.status(200).json(eventDetails)
}

// get a single workout
const getEventDetail = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'no such event'})
    }

    const event = await Event.findById(id)

    if (!event) {
        return res.status(404).json({error: 'no such event'})
    }

    res.status(200).json(event)
}


// create a new workout
const createEvent = async (req, res) => {
    const {band_name, event_name, date, venue, description, image_url} = req.body

    // add doc to db
    try {
        const event = await Event.create({band_name, event_name, date, venue, description, image_url})
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'no such event'})
    }

    const event = await Event.findIdAndDelete({_id: id})

    if (!event) {
        return res.status(404).json({error: 'no such event'})
    }

    res.status(200).json(event)
}

// update a Workout
const updateEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'no such event'})
    }

    const event = await Event.findIdAndUpdate({_id: id}, {...req.body})

    if (!event) {
        return res.status(404).json({error: 'no such event'})
    }

    res.status(200).json(event)
}

module.exports = {
    getEventDetails,
    getEventDetail,
    createEvent,
    deleteEvent,
    updateEvent
}