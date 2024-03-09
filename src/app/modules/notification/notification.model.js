import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    comment: String,
    provider: String,
    consumer: String,
  },
  { timestamps: true }
);

export const Notification = mongoose.model("notification", notificationSchema);
