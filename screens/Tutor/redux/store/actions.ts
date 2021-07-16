import { BookingProps } from "../type";
import * as actionTypes from "./actionTypes";

export const toggleLiked = (tutorId: string) => ({
  type: actionTypes.TOGGLE_LIKED,
  tutorId: tutorId,
});

export const updateBooking = ( bookingData: BookingProps) => ({
  type: actionTypes.UPDATE_BOOKING,
  bookingData,
});
