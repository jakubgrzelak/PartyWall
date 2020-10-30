# Party Wall

This is shipped with:
 - react navigation;
 - redux;
 - redux saga;
 - axios
 - formik
 - yup

In order to run the project with basic server run following commands:

1. Clone project
2. In the root `yarn install`
3. Then `cd ios && pod install && cd ..`
4. Run `yarn run start-server`

## ios

5. Run `yarn run ios` or open the project via Xcode

## android

5. Modify `src/api/requests/index.js`. Please provide in a given place your IP address for localhost. Unfortunatley axios needs it to work with android.
6. Run `yarn run androoid` or open the project via Android Studio
