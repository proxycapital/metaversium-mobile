
## Metaversium Mobile

### About the game

Metaversium is a city-building economic simulation game.
We use: 
- NFTs for land plots and buildings
- Fungible tokens for game resources and armies
- SMS for interaction with wallets and TX signing
- Serum & swap-program for trading & in-game marketplace

![cover](https://user-images.githubusercontent.com/65243529/186859468-e12b6be1-2f36-4bd3-a9c1-69bc18cba05a.jpeg)

### Run the app

Setup React Native environment following [official guide](https://reactnative.dev/docs/environment-setup).

You should have installed [fakewallet](https://github.com/solana-mobile/mobile-wallet-adapter/tree/main/android/fakewallet) and have [js](https://github.com/solana-mobile/mobile-wallet-adapter/tree/main/js) folder (from solana-mobile) 1 level higher than main app, and then run:

```
yarn install
npx react-native run-android
npx react-native start
```

### Roadmap
- [x] Game design: major gaming mechanics, game economy
- [x] UI/UX design
- [x] MVP: android app with all UI screens & usage of SMS SDK
- [ ] Integrate with popular mobile wallets
- [ ] Start closed beta test of the mobile app
- [ ] Fundraising round
- [ ] PvE and PvP battles, clans, leaderboard, and other major gaming mechanics to onboard traditional mobile gamers to Metaversium
