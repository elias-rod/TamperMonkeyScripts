// ==UserScript==
// @name       Devops Item - Slack Estimation request
// @namespace  http://tampermonkey.net/
// @version    0.3
// @description  Create Estimation message for Slack
// @match      https://dev.azure.com/azurecom/*/_workitems/edit/*
// @copyright  Elias Rodriguez
// @author     elias-rod
// @require http://code.jquery.com/jquery-latest.js
// @grant        GM_setClipboard
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        $('.work-item-form-header-controls-container')
            .append('<button id="slackEstimationButton">Slack Estimation</button>');

        $('#slackEstimationButton').click(function () {
            GM_setClipboard(":thinkingpepe: *[Estimation request]* `" + document.title.replace(" - Boards", "") + "`\n" + window.location, 'text');
        });
    }, 2000);
})();

GM_addStyle ( `
    #slackEstimationButton {
        background: rgb(0, 120, 212);
        color: rgb(255,255,255);
        cursor: pointer;
        border: none;
        font: 12px "Segoe UI";
        line-height: 26px;
`);