#!/bin/bash

# cd ./src/components
for dir in ./src/components/*/; do
    # echo "START : $dir";

    # mkdir "${dir}stories";

    #  mv "${dir}*.stories.js" "${dir}stories/.";

    echo "mv ${dir}*.stories.js ${dir}stories/."
    # echo "END : $dir";
    echo;
done

message='Bonjour tout le monde'
echo $message
