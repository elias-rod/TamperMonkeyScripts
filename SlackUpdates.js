// ==UserScript==
// @name       Open preview For EOD
// @namespace  devops
// @version    0.3
// @description  Open preview For EOD
// @match      https://dev.azure.com/southworks/hartwell/_workitems/edit/*
// @copyright  Elias Rodriguez
// @author     elias-rod
// @require http://code.jquery.com/jquery-latest.js
// @require https://gist.githubusercontent.com/elias-rod/445b11f92161823ca8de5ef0fc514e6b/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant        GM_setClipboard
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements (".work-item-form-header-controls-container", addButton);

function addButton (jNode) {
    var segments = window.location.pathname.split("/");
    var id = segments[segments.length-1];
    if(id == ""){
        id = segments[segments.length-2];
    }
    $('.work-item-form-header-controls-container')
        .append('<button id="eodButton">For EOD</button>');
    $('#eodButton').click(function () { window.open("https://sw-eod-generator.azurewebsites.net/preview/" + id + "?preset=hartwell"); });
}

GM_addStyle ( `
    #eodButton {
        background: rgb(0, 120, 212);
        color: rgb(255,255,255);
        cursor: pointer;
        border: none;
        font: 12px "Segoe UI";
        line-height: 26px;
`);
