#!/bin/sh
IP=`hostname -I | awk '{print $1}'`
hugo server -t hugo-fluent --bind $IP --baseURL=http://$IP:1313/
