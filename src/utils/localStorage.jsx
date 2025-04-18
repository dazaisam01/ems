



const employee = [
  {
    id: "emp1",
    email: "admin@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "This is a description for task 1.",
        date: "2025-03-24",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "This is a description for task 2.",
        date: "2025-04-03",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 3",
        description: "This is a description for task 3.",
        date: "2025-03-25",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 4",
        description: "This is a description for task 4.",
        date: "2025-03-24",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 5",
        description: "This is a description for task 5.",
        date: "2025-03-27",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Task 6",
        description: "This is a description for task 6.",
        date: "2025-03-19",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Task 7",
        description: "This is a description for task 7.",
        date: "2025-03-20",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 8",
        description: "This is a description for task 8.",
        date: "2025-03-18",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 9",
        description: "This is a description for task 9.",
        date: "2025-03-15",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "emp2",
    email: "user1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "This is a description for task 1.",
        date: "2025-04-12",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "This is a description for task 2.",
        date: "2025-03-16",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 3",
        description: "This is a description for task 3.",
        date: "2025-03-29",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 4",
        description: "This is a description for task 4.",
        date: "2025-04-08",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 5",
        description: "This is a description for task 5.",
        date: "2025-03-30",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Task 6",
        description: "This is a description for task 6.",
        date: "2025-03-30",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: "emp3",
    email: "user2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "This is a description for task 1.",
        date: "2025-03-30",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "This is a description for task 2.",
        date: "2025-04-04",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Task 3",
        description: "This is a description for task 3.",
        date: "2025-03-21",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 4",
        description: "This is a description for task 4.",
        date: "2025-03-21",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 5",
        description: "This is a description for task 5.",
        date: "2025-03-15",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 6",
        description: "This is a description for task 6.",
        date: "2025-04-05",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 7",
        description: "This is a description for task 7.",
        date: "2025-03-30",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 8",
        description: "This is a description for task 8.",
        date: "2025-04-14",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 9",
        description: "This is a description for task 9.",
        date: "2025-04-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 10",
        description: "This is a description for task 10.",
        date: "2025-04-02",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "emp4",
    email: "user3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "This is a description for task 1.",
        date: "2025-03-30",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Task 2",
        description: "This is a description for task 2.",
        date: "2025-04-08",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Task 3",
        description: "This is a description for task 3.",
        date: "2025-03-21",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "emp5",
    email: "user4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "This is a description for task 1.",
        date: "2025-04-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "This is a description for task 2.",
        date: "2025-03-29",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 3",
        description: "This is a description for task 3.",
        date: "2025-03-28",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];
const admin = [{
  id: "admin1",
  email: "admin123@gmail.com",
  password: "1234"
}

]


export const setLocalStorage = () => {
  localStorage.setItem('employee',JSON.stringify(employee))
  localStorage.setItem('admin',JSON.stringify(admin))
};

export const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('employee'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  console.log(data);
  console.log(admin);
  //const admin = localStorage.getItem('admin')
 
};