## Meta Hexo starter 

### Installation

Each branch of this repository is a Hexo Theme. You can also use it by clone this repository and switch to the branch.

```bash
$ git clone https://github.com/Meta-Network/meta-hexo-starter.git
$ git checkout theme/<theme-name>
```

Then install the dependencies and start Hexo server. With `yarn` or `npm`:

```bash
$ yarn
$ yarn server
```

You will see below message if it's successfully started. Then open this link `http://localhost:4000` with web-browser to preview the theme.

```bash
yarn run v1.22.10
$ hexo server
INFO  Validating config
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

### Build docker image

```shell
docker build -t meta-cms-worker-theme-<theme-name>:latest .
```

### Contributing

We accept themes that meet the following criteria.

- Under the MIT license.
- You created or just like.
- Have been published to [NPM.js](https://npmjs.com/).

If you want to contribute a template for a theme that is not published to NPM.js, you can first publish it (if you created it) to NPM.js or contribute it to [our meta-hexo-starter-custom repo](https://github.com/Meta-Network/meta-hexo-starter-custom).

We welcome any PR or issue, please see our [contributing document](https://github.com/Meta-Network/meta-hexo-starter/blob/main/CONTRIBUTING.md).

You could leave a comment if you want to resolve an issue.
