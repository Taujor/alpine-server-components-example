#!/bin/bash
# https://unix.stackexchange.com/questions/37258/refresh-reload-active-browser-tab-from-command-line
set -o errexit
set -o nounset

keystroke="CTRL+F5"

# set to whatever's given as argument, defaults to firefox
BROWSER="${1:-firefox}"

# find all visible browser windows
browser_windows="$(xdotool search --sync --all --onlyvisible --name ${BROWSER})"

# Send keystroke
for bw in $browser_windows; do
    sleep 0.2 # wait for nodemon to restart, checking for a pid is probably a better solution
    xdotool key --window "$bw" "$keystroke"
done