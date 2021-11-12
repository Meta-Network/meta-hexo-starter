hexo.extend.filter.register('before_post_render', function (data) {

  // Cover
  data.cover && (data.index_img = data.cover);
  // Metadata
  if (this.config.metaSpaceConfig?.gateway?.dataViewer?.baseUrl && data?.serverVerificationMetadataStorageType && data?.serverVerificationMetadataRefer) {
    data.content +=
      `<hr>
 ${data.serverVerificationMetadataStorageType.toUpperCase()}: <a href='${this.config.metaSpaceConfig.gateway.dataViewer.baseUrl}${data.serverVerificationMetadataStorageType}/${data.serverVerificationMetadataRefer}' rel='external meta-network-dataviewer' target='_blank'>${data.serverVerificationMetadataRefer}</a>
`;
  }
  return data;
});