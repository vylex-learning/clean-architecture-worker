[![Known Vulnerabilities](https://snyk.io/test/github/Shadowz3n/clean-worker-api/badge.svg)](https://snyk.io/test/github/Shadowz3n/clean-worker-api)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

# First steps

- Create your Cloudflare account: https://dash.cloudflare.com/sign-up
  - Run this commands: 
    - `npm install`
    - `npm start`
  - After starting the project, please accept Cloudflare's terms to use Cloudflare workers

- On your GitHub settings repository, create these actions secrets:
  - `CF_ACCOUNT_ID` [How to get](https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/find-account-and-zone-ids/)
  - `CF_API_TOKEN` [How to get](https://developers.cloudflare.com/workers/wrangler/cli-wrangler/authentication/#generate-tokens)

- Run this command to deploy your Cloudflare worker:
  - `npm run deploy`

- Create your FaunaDB account: https://dashboard.fauna.com/accounts/register

- On your Cloudflare worker service, create these environment vars:
  - `FAUNADB_API`
  - `FAUNADB_SECRET`
  - `JWT_SECRET_KEY`
  - `MONGODB_CONNECTION`

![image](https://user-images.githubusercontent.com/3290905/185771227-81577d86-bb2e-4713-a6da-74d826b7c275.png)

# Debbuging:

```bash
npm start
```

# Deploy:

```bash
npm run deploy
```
