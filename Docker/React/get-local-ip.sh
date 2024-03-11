#!/bin/bash

IP=`ifconfig | grep inet | cut -d " " -f2 | grep "[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*" | awk 'NR==2'`
sed -i".bak" -e "/REACT_NATIVE_PACKAGER_HOSTNAME=/d" .env
echo "REACT_NATIVE_PACKAGER_HOSTNAME=$IP" >> .env