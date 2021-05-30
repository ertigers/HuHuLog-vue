rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ertigers/HuHuLog-vue-website.git &&
git push -f -u origin main &&
cd -
echo https://ertigers.github.io/HuHuLog-vue-website/index.html