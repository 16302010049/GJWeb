export interface Student {
  id;
  signature: string;
  mailbox: string;
  sex: string;
  name: string;
  studentNumber: string;
  take_course: string[];
  collect: collect[];
}

export interface collect {
  question: string;
  answer: string;
  note: string;
}
