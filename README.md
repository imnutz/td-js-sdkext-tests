# testcafe + td-js-sdk-extension

Edit `scripts/scroll_config.js` and `scripts/movie_config.js` to add your configurations.

In the source code folder:

```
1. yarn install
2. Start server: yarn server
3. Run test
  "yarn test-scroll" or "yarn test-movie"
```
## Docker
Use testcafe/testcafe docker image: https://devexpress.github.io/testcafe/documentation/using-testcafe/using-testcafe-docker-image.html

The image for this app should be built first, using
```
docker build . -t tag_name_of_the_image
```

Check docker-compose.yml to adjust your tests, you can add more test containers as you want, and then run the following command to start the tests
```
docker-compose up
```