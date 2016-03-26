# Canvas Logger
A utility to help collect ground truth data for the Digiwrite project.  Simply collects the coordinates of mouse or stylus movements and stores them in Firebase.  Used [UIKit](http://getuikit.com/) as a front-end framework.

## Live
Canvas Logger is live and hosted on GitHub pages at:

[Canvas Logger live](https://lichard49.github.io/canvas-logger)

## Data
Data is stored in a Firebase instance in JSON format here:

[Firebase](https://digiwrite.firebaseio.com/.json)

## Triggers
Triggering other devices to begin recording is done by flipping a switch on a Firebase instance.  An example is shown in `trigger-demo.py`: the first call-back starts a new thread (to do anything) and a second call-back stops it.