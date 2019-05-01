// tslint:disable-next-line:class-name
export interface user {
  id;
  head: string;
  name: string;
  open_course: course[];
  password: string;
}

// tslint:disable-next-line:class-name
interface course {
  name: string;
}
