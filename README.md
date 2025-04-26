# SUTD Organisation of Autonomous Robotics (SOAR) Website

<p align="center">
<img width="420px" src="src/static/logo_2020.svg" alt="SUTD SOAR"/>
</p>

<p align="center"><a href="LICENSE" ><img src="https://img.shields.io/github/license/sutd-robotics/sutdsoar?style=for-the-badge"/></a> <a href="https://app.netlify.com/sites/sutdsoar/deploys"><img src="https://api.netlify.com/api/v1/badges/6cb418d5-1817-41c1-8336-7a984c495843/deploy-status"></a></p>

## Website Documentation

[SUTD SOAR Website Documentation.pdf](https://github.com/user-attachments/files/19529713/SUTD.SOAR.Website.Documentation.pdf)

## Usage

- Development:

  1. Fix a cache issue: `npm config set cache "C:\Users\Firstname~1\AppData\Roaming\npm-cache" --global` or `npm config set cache C:\tmp\nodejs\npm-cache --global`
  2. Download or clone this repository
  3. Change directory: `cd sutdsoar`
  4. Install dependencies: `npm install`
  5. Run `npm run dev`

- Production:

  - Netlify (CSR SPA):

    - Build command: `npm run build:spa`
    - Publish directory: `dist`
    - Deploy log visibility: `Private logs`
    - Production branch: `master`
    - Deploy previews: `Automatically build deploy previews for all pull requests`
    - Branch deploys: `Deploy only the production branch`
    - Build image: `Ubuntu Xenial 16.04 (default)`
    - Asset optimization: `Pretty URLs`, `Bundle CSS`, `Minify CSS`, `Bundle JS`, `Minify JS` and `Compress Images`
    - Custom domain: `sutdsoar.netlify.com` and `soar.opensutd.org`

  - Heroku/AWS (SSR PWA):

    - Coming soon!

## License

[MIT](http://opensource.org/licenses/MIT)
