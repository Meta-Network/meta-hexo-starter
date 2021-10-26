const fs = require('hexo-fs');
const { deepMerge } = require('hexo-util');
const path = require('path');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { base_dir, render } = this;

  const metaConfigPath = path.join(base_dir, 'meta-space-config.yml');
  const isExists = await fs.exists(metaConfigPath);
  if (!isExists) return;

  const metaConfig = await render.render({ path: metaConfigPath });
  const { user, site } = metaConfig;
  const hexoConfig = {};

  if (site && user) {
    hexoConfig.theme_config = {
      base_info: {
        title: site.title,
        author: user.nickname || user.username || site.author,
        url: site.url
      },
      style: {
        avatar: site.avatar,
        favicon: site.favicon,
        first_screen: {
          description: site.description
        }
      }
    }
  }

  this.config = deepMerge(this.config, hexoConfig);
});