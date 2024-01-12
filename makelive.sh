#!/bin/sh

tailscale funnel 80 &
sudo tcpdump -i lo -s 0 -A 'tcp dst port 80 and (tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354)' -w post_requests --print &
