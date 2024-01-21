export const curriculum = [
  {
    Lesson: "Qur'an/Qaaidah",
    Content: [
      { Term: "Term 1", Content: "Makhraj Refinement\n(theory & application)" },
      { Term: "Term 2", Content: "Rules of Madd\n(theory & application)" },
      { Term: "Term 3", Content: "Rules of Ghunnah\n(theory & application)" },
    ],
    Summary: "Lorem Ipsum for Qur'an/Qaaidah Summary",
  },
  {
    Lesson: "Islamic Studies",
    Content: [
      {
        Term: "Term 1",
        Content: (
          <ul>
            <li>Tarbiyah: Character Building</li>
            <li>Fiqh of Taharah and Salah</li>
          </ul>
        ),
      },
      {
        Term: "Term 2",
        Content: (
          <ul>
            <li> Fiqh of Salah + Related Duas </li>
            <li> Fiqh of Fasting</li>
            <li> Who is Allah? (99 names)</li>
          </ul>
        ),
      },
      {
        Term: "Term 3",
        Content: (
          <ul>
            <li> Aqidah: Articles of Faith</li>
            <li> Who is Allah? (99 names) continued</li>
            <li>Tarikh: Stories of the Prophets</li>
            <li>End of Year activities</li>
          </ul>
        ),
      },
    ],
    Summary: "Lorem Ipsum for Islamic Studies Summary",
  },
  {
    Lesson: "Arabic Lesson",
    Content: [{}],
    // Content: [
    //   { Term: "Term 1", Content: "Safar Academy Arabic Handwriting" },
    //   { Term: "Term 2", Content: "Safar Academy Arabic Handwriting" },
    //   { Term: "Term 3", Content: "Safar Academy Arabic Handwriting" },
    // ],
    Summary: "Students use the Safar Academy Arabic Handwriting books to develop their writing skills. ",
  },
];

export const TimeTable = [
  {
    Time: "9:00 AM - 10:35 AM",
    Type: "Period 1",
    Lesson: "Qaaidah/Qur'an Class",
  },
  {
    Time: "10:35 AM - 10:45 AM",
    Type: "Break",
    Lesson: "Indoors",
  },
  {
    Time: "10:45 AM - 11:45 AM",
    Type: "Period 2",
    Lesson: "Islamic Studies Class",
  },
  {
    Time: "11:45 AM - 12:10 AM",
    Type: "Break",
    Lesson: "Outdoors",
  },
  {
    Time: "12:15 AM - 01:00 PM",
    Type: "Period 3",
    Lesson: "Arabic Lesson",
  },
];
