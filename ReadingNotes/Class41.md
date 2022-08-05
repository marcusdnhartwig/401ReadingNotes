# CLASS 41 Reading: React Native

*All notes taken from reading material*

## getting started with react native Introduction:

1. Name three Core Components of React Native and describe what they do.

  * < View > A container that supports layout with flexbox, style, some touch handling, and accessibility controls

  * < Text > Displays, styles, and nests strings of text and even handles touch events

  * < Image > Displays different types of images

  * < ScrollView > A generic scrolling container that can contain multiple components and views

  * < TextInput >	Allows the user to enter text

2. What problem does React Native solve (why call it native)?

Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components Native Components.

React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's Core Components.

3. What are the building blocks of a React Native app? How does that compare to a React app?

React and React Native use JSX, a syntax that lets you write elements inside JavaScript like so: < Text>Hello, I am your cat!</ Text>. The React docs have a comprehensive guide to JSX you can refer to learn even more. 

You’ve already met React Native’s Core Components. React lets you nest these components inside each other to create new components. These nestable, reusable components are at the heart of the React paradigm.

Props is short for “properties”. Props let you customize React components. For example, here you pass each < Cat> a different name for Cat to render.

While you can think of props as arguments you use to configure how components render, state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!

## Expo: Make any app. Run it everywhere.

1. What solution does expo provide?

Expo is a framework to build React Native apps. It is a set with tools and services built for React Native. It will help you begin with building React Native apps with ease. It provides you with a list of tools that simplify the creation and testing of React Native app.

2. Expo tries to manage as much of the complexity of building apps as possible, which is why we call it the ____ workflow.

With the managed workflow you only write JavaScript / TypeScript and Expo tools and services take care of everything else for you.

In the bare workflow you can use any Expo library and service, and you are responsible for the native iOS and Android projects.


3. What is the difference between React Native and Expo?

Expo and React Native are similar to React. You'll have to learn a new set of components (View instead of div, for example) and writing mobile apps is very different from websites; you think more in terms of screens and different navigators instead of separate web pages, but much more of your knowledge carries over than if you were writing a traditional Android or iOS app.



## [expo snack](https://snack.expo.dev/)

1. Checkout this tool. What does snack allow you to do?

Expo Snack is an open-source platform for running React Native apps in the browser. It dynamically bundles and compiles code and runs it in the Expo Client or in a web-player. Code can be saved as "Snacks" and easily shared with others.

## Ejecting to ExpoKit

1. What does “eject” mean within the context of Expo?

However, there are some cases where advanced developers need native capabilities outside of what Expo offers out-of-the-box. The most common situation is when a project requires a specific Native Module which is not supported by React Native Core or the Expo SDK.

In this case, Expo allows you to eject your pure-JS project from the Expo iOS/Android clients, providing you with native projects that can be opened and built with Xcode and Android Studio. Those projects will have dependencies on ExpoKit, so everything you already built will keep working as it did before.

2. When should you not eject?

* All you need is to distribute your app in the iTunes Store or Google Play. Expo can build binaries for you in that case. If you eject, we can't automatically build for you any more.

* You are uncomfortable writing native code. Ejected apps will require you to manage Xcode and Android Studio projects.

* You enjoy the painless React Native upgrades that come with Expo. After your app is ejected, breaking changes in React Native will affect your project differently, and you may need to figure them out for your particular situation.

* You require Expo's push notification services. After ejecting, since Expo no longer manages your push credentials, you'll need to manage your own push notification pipeline.

* You rely on asking for help in the Expo community. In your native Xcode and Android Studio projects, you may encounter questions which are no longer within the realm of Expo.

3. Why might you choose to eject?

  * Your Expo project needs a native module that Expo doesn't currently support. We're always expanding the Expo SDK, so we hope this is never the case. But it happens, especially if your app has very specific and uncommon native demands.
