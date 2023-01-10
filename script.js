const students = [{
name: "Tanya",
course: 3,
subjects: {
math: [4, 4, 3, 4],
algorithms: [3, 3, 3, 4, 4, 4],
data_science: [5, 5, 3, 4]
}
}, {
name: "Victor",
course: 4,
subjects: {
physics: [5, 5, 5, 3],
economics: [2, 3, 3, 3, 3, 5],
geometry: [5, 5, 2, 3, 5]
}
}, {
name: "Anton",
course: 2,
subjects: {
statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
english: [5, 3],
cosmology: [5, 5, 5, 5]
}
}];

// #1

const getSubjects = (student) => {
  const subjectsArr = Object.keys(student.subjects).map(
    (el) =>
      (el = el[0].toUpperCase() + el.slice(1).toLowerCase().replace("_", " "))
      
  );

  return subjectsArr;
};
console.log("Предмети студента: ", getSubjects(students[0]));


// #2

const getAverageMark = (name) => {
  let allMarks = [];
  for (const i in name.subjects) {
    allMarks = [...allMarks, ...name.subjects[i]];
  }
  const avgMark = (
    allMarks.reduce((acc, el) => acc + el, 0) / allMarks.length
  ).toFixed(2);
  return avgMark;
};
console.log("Середня оцінка студента: ", getAverageMark(students[0]));


// #3

let getStudentInfo = (someStudent) => {
  const infoAboutStudent = {
    name: someStudent.name,
    course: someStudent.course,
    averageMark: getAverageMark(someStudent),
  };
  return infoAboutStudent;
};
console.log("Курс, ім'я, середня оцінка студента: ", getStudentInfo(students[1]));


// #4

const getStudentsNames = (students) => {
  let arrOfNames = [];
  for (const names of students) {
    arrOfNames = [...arrOfNames, names.name].sort();
  }
  return arrOfNames;
};
console.log("Студенти: ", getStudentsNames(students));


// #5

const getBestStudent = (students) => {
  let bestStudent = "";
  let bestMark = 0;
  for (const student of students) {
    const bestAverageMark = getAverageMark(student);
    if (bestAverageMark > bestMark) {
      bestStudent = student.name;
      bestMark = bestAverageMark;
    }
  }
  return bestStudent;
};
console.log("Кращий студент: ", getBestStudent(students));

// №6

const calculateWordLetters = (word) => {
  const countLetters = {};
  word.split("").forEach((el) => {
    countLetters[el] ? countLetters[el]++ : (countLetters[el] = 1);
  });
  return countLetters;
};
console.log("Кількість повторень літер в слові 'test' : ", calculateWordLetters("test"));

