

//grt all events
const getEvents = (req, res) => {
    res.status(200).json({success:true, data:events})
}
//post a events
const createEvents = (req, res) => {
    const events = req.body;
    events.push(events)

    res.status(200).json({success:true, data:events})
}
//update a events
const updateEvent = (req, res) => {
    const isbn = req.query.isbn;
    const data = req.body;

    let event = events.filter((b) => b.isbn == isbn);
    let _event = { ...event[0], ...data };
    events.map((b) => (b.isbn == isbn ? _event: b));
    res.status(200).json({ event });
}

module.exports={getEvents, createEvents, updateEvent}