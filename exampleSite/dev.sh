#!/bin/sh
HOSTNAME=`hostname`
hugo server -t hugo-fluent --bind $HOSTNAME --baseURL=http://$HOSTNAME:1313/
