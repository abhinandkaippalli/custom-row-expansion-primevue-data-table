const marks = [
  {
    id: 1000,
    name: 'Rahul',
    schoolId: 10,
    expand: [
      {
        subject: 'Physics',
        mark: 50
      },
      {
        subject: 'Maths',
        mark: 80
      },
      {
        subject: 'English',
        mark: 70
      },
      {
        subject: 'Computer',
        mark: 75
      }
    ]
  },
  {
    id: 1001,
    name: 'Alex',
    schoolId: 12,
    expand: [
      {
        subject: 'Physics',
        mark: 30
      },
      {
        subject: 'Maths',
        mark: 90
      },
      {
        subject: 'English',
        mark: 50
      },
      {
        subject: 'Computer',
        mark: 80
      }
    ]
  },
  {
    id: 1002,
    name: 'John',
    schoolId: 13,
    expand: [
      {
        subject: 'Physics',
        mark: 80
      },
      {
        subject: 'Maths',
        mark: 60
      },
      {
        subject: 'English',
        mark: 90
      },
      {
        subject: 'Computer',
        mark: 80
      }
    ]
  }
]
export const StudentMark = {
  marks
}