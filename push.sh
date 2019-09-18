#!/bin/bash
#cm="Pushed from `hostname`"
read cm "Commit Message"
echo "Adding..."
git add --all
echo "Committing with message:" $cm"..."
git commit -m "$cm"
echo "Pushing to server..."
git push
