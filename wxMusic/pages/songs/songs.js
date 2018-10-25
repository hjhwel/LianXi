// pages/songs/songs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    wx.showLoading({
      title: 'loading...',
      mask: true,
      success: (result)=>{

      },
      fail: ()=>{},
      complete: ()=>{}
    });
    wx.request({
      url:'http://musicapi.leanapp.cn/artists?id='+ options.id,
      success:res=>{
        this.setData({
          songsList:res.data.hotSongs
        })
        wx.hideLoading();
      }
    })
  },
  onPullDownRefresh(){
    wx.request({
      url:'http://musicapi.leanapp.cn/artists?id='+ options.id,
      success:res=>{
        this.setData({
          singerList:res.data.artists
        })
        wx.stopPullDownRefresh()
      }
    })
  }
})