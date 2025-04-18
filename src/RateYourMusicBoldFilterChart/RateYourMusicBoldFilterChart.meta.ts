

import { Metadata } from "userscript-metadata-generator";

const metadata: Metadata = {
    author: 'rrowe404',
    name: 'Rate Your Music Chart bold filter',
    description: 'Adds a checkbox to RYM chart pages to show only bolded works',
    match: 'https://rateyourmusic.com/charts/*',
    grant: ['GM.getValue', 'GM.setValue'],
    version: '1.0.0'
}

module.exports = metadata;