fx_version "cerulean"
game "gta5"

name "Leuk - Shops"
description "Leuk Team"


dependencies { 'qb-input', 'qb-menu', 'qb-target' }

ui_page 'client/nui/index.html'

files {
    'client/nui/index.html',
    'client/nui/script.js',
    'client/nui/style.css',
    'client/nui/trashsounds/TOT.mp3',
}

client_scripts { 'client/cl_main.lua' }

server_scripts { '@oxmysql/lib/MySQL.lua', 'server/sv_main.lua', }

shared_scripts { 'shared/config.lua' }

lua54 'yes'