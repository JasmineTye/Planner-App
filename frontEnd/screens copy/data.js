/*
  Group Members: Jasmine Tye (p2036137), Yuhanaa Binte Izam (p2002145)
*/

/* 
colour codes:
     pink - #F69B9B
     green - #9BF6A4
     blue - #9BF6E6
     purple - #9BAFF6
     yellow - #E8DD7D
     red - #F69B9B
*/

const DATA = [
     [
          { key: 1,  title: "Jogging", start: "6:30 AM", end: "7:00 AM", color: "#9BF6A4", note: null },
          { key: 2, title: "School", start: "7:30 AM", end: "1:30 PM", color: "#F69B9B", note: null },
          { key: 3, title: "Project Work with Jane", start: "2:00 PM", end: "3:00 PM", color: "#F69B9B", note: "History - Due 14/12" },
          { key: 4, title: "Movie with Tyler", start: "3:30 PM", end: "5:00 PM", color: "#9BF6A4", note: "Buy popcorn and Sprite" },
          { key: 5, title: "Grocery Shopping with Mom", start: "5:30 PM", end: "7:00 PM", color: "#9BF6A4", note: null },
          { key: 6, title: "Dinner with Family", start: "7:00 PM", end: "8:00 PM", color: "#9BF6A4", note: null },
          { key: 7, title: "Revision for Test", start: "8:30 PM", end: "10:00 PM", color: "#F69B9B", note: "Math - 15/12" }
     ],
     // day 2
     [
          { key: 0, title: "Jogging", start: "6:30 AM", end: "7:00 AM", color: "#9BF6A4", note: null },
          { key: 1, title: "School", start: "7:30 AM", end: "1:30 PM", color: "#F69B9B", note: null },
          { key: 2, title: "Visit National Art Gallery", start: "2:00 PM", end: "4:30 PM", color: "#9BF6A4", note: "Buy a souveneir to send to Joe" },
          { key: 3, title: "Work on Physics Assignment", start: "5:00 PM", end: "6:30 PM", color: "#F69B9B", note: "Due on 20/12" },
          { key: 4, title: "Dinner with Family", start: "7:00 PM", end: "8:00 PM", color: "#9BF6A4", note: null },
          { key: 5, title: "Revision", start: "9:00 PM", end: "10:30 PM", color: "#F69B9B", note: null },
     ],
     // day 3
     [
          { key: 0, title: "Jogging", start: "6:30 AM", end: "7:00 AM", color: "#9BF6A4", note: null },
          { key: 1, title: "School", start: "7:30 AM", end: "1:30 PM", color: "#F69B9B", note: null },
          { key: 2, title: "Interview with Mr Tan", start: "2:00 PM", end: "3:00 PM", color: "#F69B9B", note: "For English Assignment" },
          { key: 3, title: "Tea time with Lee", start: "4:00 PM", end: "5:30 PM", color: "#9BF6A4", note: null },
          { key: 4, title: "Dinner with Family", start: "7:00 PM", end: "8:00 PM", color: "#9BF6A4", note: null },
          { key: 5, title: "Revision", start: "9:00 PM", end: "10:30 PM", color: "#F69B9B", note: null },
     ],
     // day 4
     [
          { key: 0, title: "Jogging", start: "6:30 AM", end: "7:00 AM", color: "#9BF6A4", note: null },
          { key: 1, title: "School", start: "7:30 AM", end: "1:30 PM", color: "#F69B9B", note: null },
          { key: 3, title: "Biology Lab Report", start: "5:00 PM", end: "6:30 PM", color: "#F69B9B", note: "Due tommorrow" },
          { key: 4, title: "Dinner with Family", start: "7:00 PM", end: "8:00 PM", color: "#9BF6A4", note: null },
          { key: 5, title: "Revision", start: "9:00 PM", end: "10:30 PM", color: "#F69B9B", note: null },
     ],
     // day 5
     [
          { key: 0, title: "Jogging", start: "6:30 AM", end: "7:00 AM", color: "#9BF6A4", note: null },
          { key: 1, title: "School", start: "7:30 AM", end: "1:30 PM", color: "#F69B9B", note: null },
          { key: 2, title: "Tennis Practice", start: "2:00 PM", end: "4:30 PM", color: "#E8DD7D", note: null },
          { key: 3, title: "Dinner with Family", start: "7:00 PM", end: "8:00 PM", color: "#9BF6A4", note: null },
          { key: 4, title: "Movie Night with Family", start: "9:00 PM", end: "11:00 PM", color: "#9BF6A4", note: null },
     ],
     // day 6
     [
          { key: 0, title: "Swimming Lessons", start: "9:00 AM", end: "10:30 AM", color: "#E8DD7D", note: null },
          { key: 1, title: "Brunch with Jane & Emma", start: "11:30 AM", end: "1:00 PM", color: "#9BF6A4", note: null },
          { key: 2, title: "Piano lessons", start: "2:30 PM", end: "4:00 PM", color: "#E8DD7D", note: "Choose a song to perform"},
          { key: 3, title: "Weekend Television Rush", start: "4:30 PM", end: "6:30 PM", color: "#9BF6A4", note: null },
          { key: 4, title: "Dinner with Family", start: "7:00 PM", end: "8:00 PM", color:"#9BF6A4", note: null },
          { key: 5, title: "Revision", start: "9:00 PM", end: "10:30 PM", color: "#F69B9B", note: null },
     ],
     // day 7
     [
          { key: 0, title: "Swimming Lessons", start: "9:30 AM", end: "10:30 AM", color: "#E8DD7D", note: null },
          { key: 1, title: "Lunch with 2nd Aunt", start: "12:30 PM", end: "2:00 PM", color: "#9BF6A4", note: null },
          { key: 2, title: "Shopping", start: "2:00 PM", end: "4:30 PM", color: "#9BF6A4", note: "Buy an adapter"},
          { key: 3, title: "Dinner with Family", start: "7:00 PM", end: "8:00 PM", color: "#9BF6A4", note: null },
     ],
]

export default DATA;