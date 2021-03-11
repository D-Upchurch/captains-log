import { EntryListComponent } from './journalList.js'
import { getJournalEntries } from './Data/DataManager.js'
import { PostEntry } from './PostEntry.js'
import { post } from './Data/DataManager.js'

const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".formFlex");
    entryElement.innerHTML = PostEntry();
    // console.log(PostEntry());
}

const applicationElement = document.querySelector("#main");

applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__submit") {
        event.preventDefault();
    //*collect the input values into an object to post to the DB
      const journalEntry = document.querySelector("#journalEntry").value
      const concepts = document.querySelector("#concepts").value
      const date = document.querySelector("#journalDate").value
      const mood = document.querySelector("#mood").value
      //*we have not created a user yet - for now, we will hard code `1`.
      //*we can add the current time as well
      const postObject = {
          date: date,
          concept: concepts,
          journalEntry: journalEntry,
          mood: mood,
          timestamp: Date.now()
      }
  
    // be sure to import from the DataManager
      //* createPost sends the newly created Post Object to the json server
        post(postObject).then(EntryListComponent())
    //   //* showPostList then immediately populates the dom with the new submission
        
      //* showPostEntry then resets the form by placing a fresh form for editing
        showPostEntry();
        
    
    } else if(event.target.id === "newPost__cancel"){
          showPostEntry();
    };
  });

showPostEntry();
getJournalEntries().then(EntryListComponent());

