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
      profile: {
        avatar: site.avatar,
        bio: site.description
      }
    };
    // language: zh-*
    if ('zh-CN' === site.language) {
      hexoConfig.language = 'zh-Hans';
    }
    else if ('zh-TW' === site.language || 'zh-HK' === site.language) {
      hexoConfig.language = 'zh-Hant';
    }

  }

  this.config = deepMerge(this.config, hexoConfig);
});