export interface Student {
  id;
  weixinhao: string;
  mailbox: string;
  sex: string;
  name: string;
  studentNumber: string;
  take_course: study_course[];

}

export interface study_course {
  course_name: string;
  has_study_section: string[];
  progress: number;
}

export interface collect {
  question: string;
  answer: string;
  note: string;
}
