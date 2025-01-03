// This function must be called in a visible page, such as a browserAction popup
// or a content script. Calling it in a background page has no effect!
function copyToClipboard(data) {
    function oncopy(event) {
        document.removeEventListener("copy", oncopy, true);
        // Hide the event from the page to prevent tampering.
        event.stopImmediatePropagation();

        // Overwrite the clipboard content.
        event.preventDefault();
        event.clipboardData.setData("text/plain", text);
        event.clipboardData.setData("text/html", "fuckhtml");
    }
    document.addEventListener("copy", oncopy, true);

    // Requires the clipboardWrite permission, or a user gesture:
    document.execCommand("copy");
    
}

/*
 * Overall
    93
Reflexes
    96
Positioning
    96
PuckControl
    92
PuckHandling
    93
Athletic
    91
Endurance
    89
Spirit
    89

Show only top ratings
All traits

    CompassionateI will help you
    AgitatorI´ll get under your skin
    ModestDoesn´t speak much
    AnxiousWhat if we lose?
    EnthusiasticLove for the game
    HumbleWon't ask for much
    */
