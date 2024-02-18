
*Useful links*
- https://github.com/doingandlearning/react-native-training-feb-2024
- https://reactnative.dev/
- https://developer.android.com/studio
- https://www.mmu.ac.uk/brand/colour/
- https://www.appicon.co/
- https://flexboxfroggy.com/
- https://reactnavigation.org/docs/handling-safe-area/
- https://storybook.js.org/
- https://medium.com/bbc-product-technology/a-storybook-for-bbc-iplayer-web-fbdcd1c201e2
- https://www.bbc.co.uk/iplayer/storybook/index.html?path=/story/components-carrousel--carrousel
- https://jsonplaceholder.typicode.com/
- https://openweathermap.org/
- https://reactnative.dev/docs/flexbox
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
- https://medium.com/@yildizfatma/creating-and-validating-forms-in-react-native-expo-a-step-by-step-guide-c0046753eb44
- https://docs.expo.dev/build/introduction/
- https://learn.microsoft.com/en-us/appcenter/build/react-native/android/
- https://blog.logrocket.com/continuous-deployment-of-react-native-app-with-azure-devops/
- https://developer.apple.com/app-store/review/guidelines/

**Strengths of React Native**: 
  - Developer Availability. It's easier to hire developers with React Native skills (or cross-skill from React) than it is to hire native Swift/Kotlin developers.
  - Developer Productivity. Because one codebase can target both iOS and Android platforms, the effort to target both is effectively half when compared with pure native development. 
  - Performance
  - One-way Data Flow
  - Developer Experience
  - Transpilation
  - Productivity and Efficiency
  - Community Support
  - Open Source
  - Immediate Updates
- **Drawbacks of React Native**: A balanced look at some of the challenges associated with React Native, including:
  - Still not at v1, although in pracetice this doesn't seem to make much difference.
  - Requires familiarity with React
  - May still need to Learn Xcode/Android for Native Features, if the RN/Expo features aren't sufficient. However the trainer made the point that RN should be sufficient for the vast majority of use cases other than gaming, or very calculation-intensive apps.
  - Additional abstraction layer.
- The debugging experience is relatively poor when compared to back-end development.

**Component Testing**
The tool which the training course covered for Unit testing at a Component level was Jest.
Other testing frameworks are available.

**Build and Deployment**
The "easiest" option and the one recommended on the training course is to use EAS build, a service from the same organisation who provide the Expo tools.
Because we also mentioned that we were heavy users of Azure, the training touched on Azure App Center for deployment, 

**Update Server**
Normally mobile apps stay relatively static between versions. If there's a typo in a release, you usually need a new version of the app which would be deployed to the app store in order to be released. This can be a slow process, due to store submission policies.
Because RN apps are deployed as JavaScipt bundles, there is an option to set up an _update server_ which the client checks for updated versions of the app on startup. This effectively provides a backchannel for updates without having to release a full version of the app via the App/Play store

We should think about 'alpha' users. X number of people who get early access to a prerelease version.

