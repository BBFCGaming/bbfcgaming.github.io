import sys
import os
if os.path.exists(sys.argv[1] + ".lock"):
    lockfile=open(sys.argv[1] + ".lock", "r")
    name=lockfile.read()
    print("Cannot lock file, already locked by " + name)
else:
    name=input("Name to lock to: ")
    lockfile=open(sys.argv[1] + ".lock", "w+")
    lockfile.write(name)
    os.system("git add --all")
    os.system("git commit -m 'Lock " + os.sys.argv[1] + "'")
    os.system("git push")
