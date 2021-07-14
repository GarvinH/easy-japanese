import { tutorData, TutorProps } from "../../../data/tutors";

export interface TutorType extends TutorProps {
    liked: boolean,
    id: string
}

interface TutorState {
  tutors: TutorType[];
}

interface TutorAction {
  type: string;
  tutorId: string;
}

type DispatchType = (args: TutorAction) => TutorAction;
