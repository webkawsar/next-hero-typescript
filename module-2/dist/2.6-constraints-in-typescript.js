"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
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
