Page({
  data: {
    src: '',
    detail: {}
  },
  onLoad(options) {
    wx.request({
      url: 'http://musicapi.leanapp.cn/music/url?id=' + options.id,
      success: res => {
        console.log(res);
        this.setData({
          src: res.data.data[0].url
        })

        wx.request({
          url: 'http://musicapi.leanapp.cn/song/detail?ids=' + options.id,
          success: res => {
            console.log(res);
            this.setData({
              detail: res.data.songs[0]
            })


          }
        })
      }
    })


  },
  onReady (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc(this.data.src)
    this.audioCtx.play()
  },
  audioPlay () {
    this.audioCtx.play()
  },
  audioPause () {
    this.audioCtx.pause()
  },
  audio14 () {
    this.audioCtx.seek(14)
  },
  audioStart () {
    this.audioCtx.seek(0)
  }
})