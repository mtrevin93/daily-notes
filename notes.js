const notes = [
    {
        id: 1,
        subject: "HTML & CSS Group Project",
        date: "May 26, 2021",
        feeling: "Team Spirit",
        timeSpent: 360,
    },
    {
        id: 2,
        subject: "Using JS to automate a collection",
        date: "May 27,2021",
        feeling: ["frustrated","confused"],
        timeSpent: 240,
    }
]

const noteAboutToday = {
id: 3,
subject: "JS 101",
date: "May 28,2021",
feeling: ["Confident","Excited"],
timeSpent: 200,
}

notes.push(noteAboutToday)
// 
// for (const note of notes) {
    // console.log(`
    // Note ${note.id}
    // ${note.date}
    // I learned ${note.subject}
    // I spent ${note.timeSpent} working on it
    // I felt ${note.feeling}
    // -------------------------`)
// }
// 
// Search Term Function
// const searchTerm = "Team Spirit"

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//         const searchDate = note.date
//         console.log(`I felt ${searchTerm} on ${searchDate}`)
//     }
// }
const newID = () => {
    numberOfItems = notes.length -1
    lastNote = notes[numberOfItems]
    lastNoteID = lastNote.id
    newNoteID = lastNoteID + 1
    return newNoteID
}

const createNewNote = (noteSubject, noteFeeling, noteTimeSpent) => {
    let newNote = {
    id: newID(),
    subject: noteSubject,
    date: Date.now(),
    feeling: noteFeeling,
    timeSpent: noteTimeSpent
    }
notes.push(newNote)
}

const todaysNote = createNewNote("JS Functions","Happy",300)
console.log(notes)
