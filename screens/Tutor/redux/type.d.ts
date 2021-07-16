import { tutorData, TutorProps } from "../../../data/tutors";

export interface TutorType extends TutorProps {
  liked: boolean;
  id: string;
}

export interface BookingProps {
  name: string;
  email: string;
  bookDate: string;
  tutorId: string,
}

interface TutorState {
  tutors: TutorType[];
  bookingInfo?: BookingProps;
}

interface TutorAction {
  type: string;
  tutorId: string;
  bookingData: BookingProps;
}

type DispatchType = (args: TutorAction) => TutorAction;
