#!/bin/bash
# hmm, only nn.h generates any actual code
# all the other .h files just contain #defines, which ffi-generate doesn't pick up
#
# it also misses the structs from nn.h!

for foo in $(ls /usr/local/include/nanomsg) 
do
    echo generating ${foo%.h}.js
    ffi-generate -f /usr/local/include/nanomsg/$foo -l libnanomsg >${foo%.h}.js
    

done
