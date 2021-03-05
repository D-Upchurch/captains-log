/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "03/01/2021",
        concept: "javascript",
        journalEntry: "We worked on group projects with Javascript",
        mood: "excited"
    },
    {
        id: 2,
        date: "03/02/2021",
        concept: "group project",
        journalEntry: "We presented our group projects today. ",
        mood: "excited"
    },
    {
        id: 3,
        date: "03/03/2021",
        concept: "lab day",
        journalEntry: "lab day to work on finishing chapter 1",
        mood: "happy"
    },
    {
        id: 4,
        date: "03/04/2021",
        concept: "json server",
        journalEntry: "started working with json server and api hosting with postman",
        mood: "happy"
    }
];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}