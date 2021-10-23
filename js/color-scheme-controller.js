// Copyright ©️ Lucas Becker 2021. All right reserved.
let darkModeEnabled = false;
let themeRuleIndex = 0;
const styleSheet = document.styleSheets[0];
const bannerImg = document.getElementById('header-img');
const osTheme = window.matchMedia("(prefers-color-scheme: dark)");
const darkBannerImgPath = "../img/dark-theme/default.svg";
const lightBannerImgPath = "../img/light-theme/default.svg";
const darkThemeCssRule = ':root {--deep-color: #1e1e1e; --medium-color: #404040; --top-color: #707070; --text-color: #d4d4d4; --green-color: #6a9955; --dark-blue-color: #569cd6; --light-blue-color: #9cdcfe; --red-color: #ce9178; --teal-color: #b5cea8; --yellow-color: #d7ba7d; --purple-color: #c586c0;}';
const lightThemeCssRule = ':root {--deep-color: #ffffff; --medium-color: #d3d3d3; --top-color: #939393; --text-color: #000000; --green-color: #008000; --dark-blue-color: #0000ff; --light-blue-color: #0070c1; --red-color: #a31515; --teal-color: #098658; --yellow-color: #795e26; --purple-color: #af00db;}'

if (osTheme.matches) {
  darkModeEnabled = true;
  bannerImg.src = darkBannerImgPath;
  themeRuleIndex = styleSheet.insertRule(darkThemeCssRule);
} else {
  darkModeEnabled = false;
  bannerImg.src = lightBannerImgPath;
  themeRuleIndex = styleSheet.insertRule(lightThemeCssRule);
}

function switchTheme() {
  if (darkModeEnabled) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

function setDarkTheme() {
  darkModeEnabled = true;
  bannerImg.src = darkBannerImgPath;
  styleSheet.deleteRule(lightThemeCssRule, themeRuleIndex);
  themeRuleIndex = styleSheet.insertRule(darkThemeCssRule);
}

function setLightTheme() {
  darkModeEnabled = false;
  bannerImg.src = lightBannerImgPath;
  styleSheet.deleteRule(darkThemeCssRule, themeRuleIndex);
  themeRuleIndex = styleSheet.insertRule(lightThemeCssRule);
}

// // TODO: remove debug printing lines
// console.log(darkBannerImg);
// console.log(lightBannerImg);
// console.log(header);
// console.log(header.children);
// console.log(styleSheet);

// function initDarkBanner() {
//   const darkBanner = document.createElement('img');
//   darkBanner.title = bannerImgTitle;
//   darkBanner.alt = bannerImgAlt;
//   darkBanner.id = bannerImgId;
//   darkBanner.class = bannerImgClass;
//   darkBanner.src = "img/dark-theme/default.svg"
//   return darkBanner;
// }

// function initLightBanner() {
//   const lightBanner = document.createElement('img');
//   lightBanner.title = bannerImgTitle;
//   lightBanner.alt = bannerImgAlt;
//   lightBanner.id = bannerImgId;
//   lightBanner.class = bannerImgClass;
//   lightBanner.src = "img/light-theme/default.svg";
//   return lightBanner;
// }