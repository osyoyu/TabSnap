'use strict';

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  // Collect tab titles
  chrome.tabs.query({}, (tabs) => {
    const suggestions = tabs.map((tab) => {
      // if query is a substring of tab title
      if (tab.title.indexOf(text) != -1) {
        // ... add tab as a omnibox suggestion
        return {
          content: tab.url,
          description: tab.title
        }
      }
    }).filter(elm => elm); // remove nulls

    console.log(suggestions);

    suggest(suggestions);
  });
});
