'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page');
console.log(chrome.runtime.getManifest().name)
