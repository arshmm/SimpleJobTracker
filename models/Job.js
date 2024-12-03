const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  possibleRefOrHiringManager: String,
  status: { type: String, default: "Pending" },
  dateApplied: { type: Date, default: Date.now },
});

jobSchema.virtual("formattedDate").get(function () {
  return this.dateApplied.toISOString().split("T")[0];
});

module.exports = mongoose.model("Job", jobSchema);
