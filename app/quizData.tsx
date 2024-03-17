export const quiz = {
  totalQuestions: 5,

  Questions1: [
    {
      id: 1,
      Question:
        "Who are considered pioneers in laying the groundwork for algorithmic thinking and computation theory?",
      answer: [
        "Alan Turing and Alonzo Church",
        "Isaac Newton and Albert Einstein",
        "Charles Babbage and Ada Lovelace",
        "Bill Gates and Steve Jobs",
      ],
      correctAnswer: "Alan Turing and Alonzo Church",
    },
    {
      id: 2,
      Question: "What are the primary components of a linked list?",
      answer: [
        "Nodes and Values",
        "Pointers and Keys",
        "Elements and Indexes",
        "Heads and Tails",
      ],
      correctAnswer: "Nodes and Values",
    },
    {
      id: 3,
      Question: "What is the main characteristic of stacks and queues?",
      answer: [
        "They follow the LIFO principle",
        "They offer constant-time access to elements",
        "They store data in contiguous memory locations",
        "They have a fixed size",
      ],
      correctAnswer: "They follow the LIFO principle",
    },
    {
      id: 4,
      Question:
        'What is the purpose of the interactive activity "Implementing Basic Data Structures in Python"?',
      answer: [
        "To learn about the history of data structures",
        "To explore advanced data structures",
        "To gain practical experience in coding basic data structures",
        "To understand theoretical concepts of data structures",
      ],
      correctAnswer:
        "To gain practical experience in coding basic data structures",
    },
    {
      id: 5,
      Question:
        "Which data structure allows dynamic memory allocation and efficient insertion/deletion operations?",
      answer: ["Array", "Stack", "Queue", "Linked List"],
      correctAnswer: "Linked List",
    },
  ],
  Questions2: [
    {
      id: 1,
      Question: "What are algorithms?",
      answer: [
        "Step-by-step procedures for solving problems",
        "Data structures used for storing information",
        "Input data for computational tasks",
        "Complex mathematical equations",
      ],
      correctAnswer: "Step-by-step procedures for solving problems",
    },
    {
      id: 2,
      Question:
        "Which algorithm design paradigms are crucial for efficient problem-solving?",
      answer: [
        "Linear search and binary search",
        "Greedy algorithms, dynamic programming, and divide and conquer",
        "Bubble sort, insertion sort, and merge sort",
        "Shortest path and detecting cycles",
      ],
      correctAnswer:
        "Greedy algorithms, dynamic programming, and divide and conquer",
    },
    {
      id: 3,
      Question: "What is the purpose of searching algorithms?",
      answer: [
        "To arrange elements in a specific order",
        "To operate on graphs to solve various problems",
        "To find specific elements within a dataset",
        "To measure algorithm efficiency",
      ],
      correctAnswer: "To find specific elements within a dataset",
    },
    {
      id: 4,
      Question:
        "Which complexity analysis measure assesses the amount of time an algorithm takes to run as a function of the size of its input?",
      answer: [
        "Space Complexity",
        "Time Complexity",
        "Big O Notation",
        "Big Theta Notation",
      ],
      correctAnswer: "Time Complexity",
    },
    {
      id: 5,
      Question:
        "Why is understanding complexity analysis important in algorithm design?",
      answer: [
        "To find specific elements within a dataset",
        "To optimize code performance",
        "To arrange elements in a specific order",
        "To operate on graphs to solve various problems",
      ],
      correctAnswer: "To optimize code performance",
    },
  ],
  Questions3: [
    {
      id: 1,
      Question: "What are arrays?",
      answer: [
        "Dynamic blocks of memory",
        "Contiguous blocks of memory that store elements of the same type",
        "Data structures used for dynamic memory allocation",
        "Collections of nodes connected by pointers",
      ],
      correctAnswer:
        "Contiguous blocks of memory that store elements of the same type",
    },
    {
      id: 2,
      Question: "What is a key characteristic of arrays?",
      answer: [
        "They allow flexible insertion/deletion operations",
        "They provide constant-time access to elements using indices",
        "They consist of nodes connected by pointers",
        "They are suitable for dynamic memory management",
      ],
      correctAnswer:
        "They provide constant-time access to elements using indices",
    },
    {
      id: 3,
      Question: "What type of memory allocation do linked lists allow?",
      answer: [
        "Static memory allocation",
        "Contiguous memory allocation",
        "Dynamic memory allocation",
        "Manual memory allocation",
      ],
      correctAnswer: "Dynamic memory allocation",
    },
    {
      id: 4,
      Question: "In which scenarios are arrays suitable data structures?",
      answer: [
        "When frequent insertion/deletion operations are required",
        "When dynamic memory management is crucial",
        "When random access to elements is needed",
        "When flexibility in memory allocation is necessary",
      ],
      correctAnswer: "When random access to elements is needed",
    },
    {
      id: 5,
      Question:
        "What helps in choosing the appropriate data structure for solving specific problems?",
      answer: [
        "Random access to elements",
        "Dynamic memory management",
        "Understanding the strengths and weaknesses of each structure",
        "Flexible insertion/deletion operations",
      ],
      correctAnswer:
        "Understanding the strengths and weaknesses of each structure",
    },
  ],
  Questions4: [
    {
      id: 1,
      Question: "What is the key characteristic of greedy algorithms?",
      answer: [
        "They solve problems by breaking them into smaller subproblems",
        "They make locally optimal choices at each step",
        "They store results of subproblems to avoid redundant calculations",
        "They solve problems with overlapping subproblems",
      ],
      correctAnswer: "They make locally optimal choices at each step",
    },
    {
      id: 2,
      Question:
        "Which algorithm design technique is particularly useful for optimization problems with overlapping subproblems?",
      answer: [
        "Dynamic Programming",
        "Greedy Algorithms",
        "Divide and Conquer",
        "Backtracking",
      ],
      correctAnswer: "Dynamic Programming",
    },
    {
      id: 3,
      Question:
        "What is the advantage of dynamic programming in solving problems?",
      answer: [
        "It makes locally optimal choices at each step",
        "It stores results of subproblems to avoid redundant calculations",
        "It is straightforward to design and implement",
        "It is suitable for problems where a globally optimal solution is guaranteed",
      ],
      correctAnswer:
        "It stores results of subproblems to avoid redundant calculations",
    },
    {
      id: 4,
      Question:
        "In which scenarios are greedy algorithms suitable for problem-solving?",
      answer: [
        "Problems with overlapping subproblems",
        "Problems with a globally optimal solution",
        "Problems with locally optimal choices leading to a globally optimal solution",
        "Problems with a large number of subproblems",
      ],
      correctAnswer:
        "Problems with locally optimal choices leading to a globally optimal solution",
    },
    {
      id: 5,
      Question:
        "What enables efficient problem-solving strategies using algorithm design techniques?",
      answer: [
        "Making locally optimal choices at each step",
        "Understanding the characteristics and applications of each technique",
        "Storing results of subproblems to avoid redundant calculations",
        "Breaking down problems into smaller subproblems",
      ],
      correctAnswer:
        "Understanding the characteristics and applications of each technique",
    },
  ],
  Questions5: [
    {
      id: 1,
      Question:
        "Which problem-solving technique involves systematically exploring all possible solutions to find the optimal one?",
      answer: [
        "Greedy Algorithms",
        "Dynamic Programming",
        "Backtracking",
        "Divide and Conquer",
      ],
      correctAnswer: "Backtracking",
    },
    {
      id: 2,
      Question:
        'What is the main focus of the topic "Career Paths in Computer Science"?',
      answer: [
        "Exploration of diverse career options",
        "Advanced problem-solving strategies",
        "Hands-on practice sessions",
        "Guidance on educational pathways",
      ],
      correctAnswer: "Exploration of diverse career options",
    },
    {
      id: 3,
      Question:
        'What is highlighted as an important aspect in the "Wrap-up and Next Steps" topic?',
      answer: [
        "Exploration of diverse career options",
        "Opportunities for internships and industry collaborations",
        "Reflecting on learning journey and progress",
        "Encouraging students to continue exploring computer science topics",
      ],
      correctAnswer: "Reflecting on learning journey and progress",
    },
    {
      id: 4,
      Question:
        "Which career option in computer science focuses on protecting computer systems from theft or damage to their hardware, software, or electronic data?",
      answer: [
        "Software Development",
        "Data Science",
        "Cybersecurity",
        "Artificial Intelligence",
      ],
      correctAnswer: "Cybersecurity",
    },
    {
      id: 5,
      Question:
        "What is emphasized as important for career development in computer science?",
      answer: [
        "Continuing education and skill development",
        "Exploring diverse career options",
        "Completing certifications and degrees",
        "Networking with professionals in the field",
      ],
      correctAnswer: "Continuing education and skill development",
    },
  ],
  Questions6: [
    {
      id: 1,
      Question: 'What is covered in the "Recap of Algorithmic Concepts"?',
      answer: [
        "Exploration of diverse career options",
        "Review of fundamental data structures and algorithm design techniques",
        "Hands-on practice sessions",
        "Guidance on educational pathways",
      ],
      correctAnswer:
        "Review of fundamental data structures such as arrays, linked lists, stacks, and queues.",
    },
    {
      id: 2,
      Question:
        "What is emphasized as a way to continue your learning path in computer science?",
      answer: [
        "Exploring diverse career options",
        "Engaging in coding challenges and collaborative projects",
        "Completing certifications and degrees",
        "Networking with professionals in the field",
      ],
      correctAnswer:
        "Engage in coding challenges, competitions, and collaborative projects to sharpen problem-solving skills.",
    },
    {
      id: 3,
      Question:
        'What is highlighted as important in the "Closing Thoughts" topic?',
      answer: [
        "Exploration of diverse career options",
        "Reflecting on learning journey and progress",
        "Completing certifications and degrees",
        "Networking with professionals in the field",
      ],
      correctAnswer:
        "Stay motivated and persistent in your pursuit of knowledge and mastery in computer science.",
    },
    {
      id: 4,
      Question:
        "What are examples of advanced topics in data structures and algorithms mentioned for further exploration?",
      answer: [
        "Arrays and linked lists",
        "Basic graph algorithms",
        "Trees, heaps, and advanced graph algorithms",
        "Sorting algorithms",
      ],
      correctAnswer: "Trees, heaps, and advanced graph algorithms",
    },
    {
      id: 5,
      Question: 'What is the closing message in the "Closing Thoughts" topic?',
      answer: [
        "Reflecting on learning journey and progress",
        "Stay motivated and persistent",
        "Completing certifications and degrees",
        "Exploring diverse career options",
      ],
      correctAnswer:
        "Thank you for your dedication and participation in this course!",
    },
  ],
}
