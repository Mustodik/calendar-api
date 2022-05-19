const { Router } = require("express")
const {getEvents, createEvents,updateEvent} = require("../controllers/calendarController");

const router = Router();

router.route("/events").get(getEvents).post(createEvents)
router.put("/events", updateEvent)

module.exports = router;