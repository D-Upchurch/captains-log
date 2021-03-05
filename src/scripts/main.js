import { EntryListComponent } from './journalList.js'
import { getJournalEntries } from './Data/DataManager.js'
getJournalEntries().then(EntryListComponent());

