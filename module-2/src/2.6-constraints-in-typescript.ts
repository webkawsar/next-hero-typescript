{
  // constraints

  const addCourseToStudent = <T extends {
      id: number;
      name: string;
      email: string;
    }>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
  }>({
    id: 101,
    name: "Kawsar Ahmed",
    email: "kawsarahmed.dev@gmail.com",
  });

  const student2 = addCourseToStudent({
    id: 102,
    name: "Samim Ahmed",
    email: "samim.dev@gmail.com",
  });

  //
}
