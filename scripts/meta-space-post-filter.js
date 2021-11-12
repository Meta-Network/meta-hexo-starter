hexo.extend.filter.register('before_post_render', function (data) {
  console.log(data);
  // Metadata
  if (this.config.metaSpaceConfig?.gateway?.dataViewer?.baseUrl && data?.serverVerificationMetadataStorageType && data?.serverVerificationMetadataRefer) {
    data.content +=
      `<hr>
 ${data.serverVerificationMetadataStorageType.toUpperCase()}: <a href='${this.config.metaSpaceConfig.gateway.dataViewer.baseUrl}${data.serverVerificationMetadataStorageType}/${data.serverVerificationMetadataRefer}' rel='external meta-network-dataviewer' target='_blank'>${data.serverVerificationMetadataRefer}</a>
`;
  }
  return data;
});