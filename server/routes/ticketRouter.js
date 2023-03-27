const express = require('express')
const router = express.Router();
const { getTickets, getTicket, createTicket, deleteTicket, updateTicket } = require('../controllers/ticketControllers');
const { protectMe} = require('../middleware/authorization')
const noteRouter = require('../routes/noteRouter')

// Re-route into note router
router.use('/:ticketId/notes', noteRouter)

router
    .route('/')
    .get(protectMe, getTickets)
    .post(protectMe, createTicket)

router
    .route('/:id')
    .get(protectMe, getTicket)
    .delete(protectMe, deleteTicket)
    .put(protectMe, updateTicket)

module.exports = router