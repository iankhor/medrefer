const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./_init')

const userProfileSchema = new Schema({
    created_at:                     {   type: Date,
                                        default: Date.now 
                                    }
})

const UserProfile = mongoose.model('UserProfile', userProfileSchema)

module.exports = UserProfile
