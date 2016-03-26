import firebase
import json
import time
import thread

url = 'digiwrite.firebaseIO.com'
running = True

def doStuff():
    print 'start doing stuff'
    x = 1
    while running:
        print x
        x = x+1
        time.sleep(1)

def callback(e):
    print e
    if e[1]['data'] == 'on':
        thread.start_new_thread(doStuff, ())
    elif e[1]['data'] == 'off':
        running = False

        try:
            subscribe.stop()
        except Exception:
            print 'catching hacky exceptions'

subscribe = firebase.subscriber(url, callback)
subscribe.start()