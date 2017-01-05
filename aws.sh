#!bash

aws s3 sync --acl public-read --sse --delete ./deploy s3://www.roderik.io
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E2LFMAPVAVL6NE --paths '/*'
