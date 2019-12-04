// alert("Page is now loaded");

// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.onCreated.addListener(function () { })

    chrome.tabs.onUpdated.addListener(function () { })

});

