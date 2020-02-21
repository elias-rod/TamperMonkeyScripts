// ==UserScript==
// @name       Devops Item - Slack ICR
// @namespace  http://tampermonkey.net/
// @version    0.3
// @description  Create ICR message for Slack
// @match      https://dev.azure.com/azurecom/*/_workitems/edit/*
// @copyright  Pablo Biasotti
// @author     pbiasotti
// @require http://code.jquery.com/jquery-latest.js
// @grant        GM_setClipboard
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var highPriorityLevels = ["high", "4 - high", "urgent", "3 - urgent", "hotfix", "0 - hotfix", "next", "1 - next"];

    setTimeout(function() {
        $('.work-item-form-header-controls-container')
            .append('<button id="slackICRButton">Slack ICR</button>');

        $('#slackICRButton').click(function () {
            GM_setClipboard(":icrnormal: *[ICR]* `" + document.title.replace(" - Boards", "") + "`\n:developmentpbi: " + window.location + "\n:pr: ", 'text');
        });
    }, 2000);
})();

GM_addStyle ( `
    #slackICRButton {
        background: rgb(0, 120, 212);
        color: rgb(255,255,255);
        cursor: pointer;
        border: none;
        font: 12px "Segoe UI";
        line-height: 26px;
`);