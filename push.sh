#!/bin/bash
cm="Pushed from `hostname`"
echo "Adding..."
git add --all
echo "Committing with message:" $cm"..."
git commit -m "$cm"
echo "Pushing to server..."
git push
