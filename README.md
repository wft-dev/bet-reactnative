# React Native Betting Realtime App

We are using Server-Sent Events as a convenient way of establishing and handling connections. It helps us keep data always up-to-date, synchronize data between devices, and improve real-time workflow. 

## Features

- app use for users to view odds as they change
- make bets in realtime

## Requirements

- node
- watchman
- xcode
- android


## Setup instructions

### 1. Install dependencies

```sh
# Clone the example app repo
git clone https://github.com/wft-dev/bet-reactnative.git
cd bet-reactnative

# Install yarna dependencies
yarn install
```

### 2. Start your app on android 

```
npx react-native run-android
```

### 3. Start your app on ios 

```
cd ios && pod install && cd ..
npx react-native run-ios
```

