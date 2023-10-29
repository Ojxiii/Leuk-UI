fx_version 'cerulean'
game 'gta5'

author ""
description ''
version '1.0.0'

ui_page "html/index.html"

client_script "client/main.lua"

files {
    'html/index.html',
    'html/css/style.css',
    'html/js/script.js',
    'html/trashsounds/ojxchoch.mp3',

    'html/css/bootstrap.min.css',
    'html/js/jquery.min.js',
}

exports {
    'Progress',
    'ProgressWithStartEvent',
    'ProgressWithTickEvent',
    'ProgressWithStartAndTick',
    'isDoingSomething'
}
