export interface Course {
  id;
  title: string;
  subtitle: string;
  teacher: string;
  background: string;
  introduce: string;
  chapters: Chatpter[];
}

export interface Chatpter {
  chapter_name: string;
  section: section[];
}

// tslint:disable-next-line:class-name
export interface section {
  setionname: string;
  QA: QA[];
  singleChoice: singleChoice[];
}

export interface QA {
  question: string;
  answer: string;
}

export interface singleChoice {
  question: string;
  answer: choice[];
  right_choice: string;
}

export interface choice {
  choice: string;
}
