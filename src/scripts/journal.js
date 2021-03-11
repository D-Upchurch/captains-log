/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
           <p>Date: ${entry.date}</p>
           <p>Concepts covered: ${entry.concept}</p>
           <p>Journal entry: ${entry.journalEntry}</p>
           <p>Mood for the day: ${entry.mood}</p>
        </section>
        <hr>
    `
}

