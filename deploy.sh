#!/bin/sh

#rsync -avz --delete --checksum public/ jgosmann@hyper-world.de:~/blog
netlify deploy --prod
