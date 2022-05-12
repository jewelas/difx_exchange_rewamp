echo "Cleaning dist folders"
rm -rf dist dist.tar.gz
echo "Building production version"
npm run build
echo "Zipping folder"
tar -zcvf dist.tar.gz dist
echo "Uploading to the servers"
scp dist.tar.gz difx_test:/home/ubuntu/dist.tar.gz
echo "Deleting temporary folders"
rm -rf dist dist.tar.gz
echo "Executing script on the server"
ssh difx_test /home/ubuntu/update_and_bak_dev.sh
