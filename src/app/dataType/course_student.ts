export interface Course_student {
  id;
  course_id: string;
  student_list: stu_info[];
}

export interface stu_info {
  student_id: string;
  has_study_section: string[];
  progress: number;
}
