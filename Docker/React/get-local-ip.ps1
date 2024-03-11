# Get IP address
$IP = (ipconfig | Select-String -Pattern "IPv4 Address").Matches.Groups[1].Value

# Remove old REACT_NATIVE_PACKAGER_HOSTNAME from .env file
(Get-Content .env) | Where-Object { $_ -notmatch "REACT_NATIVE_PACKAGER_HOSTNAME=" } | Set-Content .env

# Append new REACT_NATIVE_PACKAGER_HOSTNAME to .env file
"`nREACT_NATIVE_PACKAGER_HOSTNAME=$IP" | Add-Content .env
