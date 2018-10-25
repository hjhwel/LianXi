Page({
  data:{
    singerList:[]
  },
  onLoad(){
    wx.showLoading({
      title:'loading...',
      mask: true,
      success: (result)=>{

      },
      fail: ()=>{},
      complete: ()=>{}
    });
    wx.request({
      url:"http://musicapi.leanapp.cn/artist/list?cat=1001",
      success:res=>{
        this.setData({
          singerList:res.data.artists
        }),
        wx.hideLoading();
      }
    })
  },
  onPullDownRefresh(){
    wx.request({
      url:"http://musicapi.leanapp.cn/artist/list?cat=1001",
      success:res=>{
        this.setData({
          singerList:res.data.artists
        })
        wx.stopPullDownRefresh()
      }
    })
  }
})