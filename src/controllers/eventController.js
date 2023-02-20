const eventModel=require("../models/eventModel")
const userModel=require("../models/userModel")
const moment=require("moment")
const outerFunc = {
  createEvent: async (req, res) => {
    try {
      let eventData = req.body;
      let userFound = await userModel.findById(req.userId);
      if (userFound) {
          let eventDbData = await eventModel.create({...eventData,user_id:req.userId});
          return res.status(200).send({
            status: true,
            message: "New event created successfully!",
            eventDetails: eventDbData,
          });
      } else {
        return res.status(400).send({
          status: false,
          message: "Not found!",
        });
      }
    } catch (error) {
      return res.status(500).send({ message: false, error: error.message });
    }
  },
  getEvent: async (req, res) => {
    try {
      userId = req.query.user_id;
      if (userId != req.userId) {
        return res.status(400).send({
          status: false,
          message:
            "You are not authorize to fetch this event details with this user Id",
        });
      }
      let eventdbDetails = await eventModel.find({user_id:req.userId});
      if (eventdbDetails.length==0) {
        return res.status(400).send({
          status: false,
          message: "No event found with this userId!",
        });
      } else {
        return res.status(200).send({
          status: true,
          message: "event fetched successfully!",
          eventDetails: eventdbDetails,
        });
      }
    } catch (error) {
      return res.status(500).send({ message: false, error: error.message });
    }
  },
};

module.exports = outerFunc;