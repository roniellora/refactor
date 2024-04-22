async function main() {
    const student = await getStudent();
    console.log("Student: ", student);
    if (student.isEnrolled) {
      const courses = await getCourseList();
      console.log("Course List: ", courses);
      await sendNotification(student.email, courses);
      console.log("Notification sent...");
    }
  }
  
  function getCourseList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["BSIT", "Software Engineering"]);
      }, 4000);
    });
  }

  function getStudent(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: "Michael Sajul",
          isEnrolled: true,
          email: "Sajul@example.com",
        });
      }, 4000);
    });
  }
  
  function sendNotification(email, courses) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
  }
  
  main().catch(error => console.error(error));