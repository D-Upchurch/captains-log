let finalResponse = []

export const getJournalEntries = () => {
    return fetch("http://localhost:8090/journalEntries")
    .then(response => response.json())
    .then(parsedResponse => finalResponse = parsedResponse)
    
};

export const useJournalEntries = () => {
    return finalResponse;
}

// export const post = (postObj) => {
// 	return fetch("http://localhost:8090/journalEntries", {
//         method: "POST",
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 		body: JSON.stringify(postObj)
//     })
//     .then(response => response.json())
//     .then(parsedResponse => {
//         // do something with response here
//         return parsedResponse;
//     })
// }
