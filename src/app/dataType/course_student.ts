export interface Course_student {
  id;
  course_id: number;
  student_list: stu_info[];
}

export interface stu_info {
  student_id: number;
  progress: number;
}
