export const PostEntry = () => {
    return `
            <form class="form">
                <fieldset class="fieldsetFlex">
                    <label for="journalDate">Date of Entry:</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>

                <fieldset class="fieldsetFlex">
                    <label for="concepts">Concepts covered:</label>
                    <input type="text" name="concepts" id="concepts">
                </fieldset>

                <fieldset class="fieldsetFlex">
                    <label for="journalEntry">Journal Entry:</label>
                    <textarea name="journalEntry" rows="5" cols="20" id="journalEntry"></textarea>
                </fieldset>

                <fieldset class="fieldsetFlex">
                    <label for="mood">Mood for the day:</label>
                    <select name="mood" id="mood">
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="excited">Excited</option>
                    </select>
                </fieldset>
                    <button id="newPost__submit">Submit</button>
                    <button id="newPost__cancel">Cancel</button>
                </form>
                `
};