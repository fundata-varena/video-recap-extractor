/*
 * ============================================================
 *    Filename: extractor.js
 *    Created By: Geoffrey Xia
 *    Created On: 2020-03-10 10:58:01
 * ============================================================
 */


$(document.body).append('<div id="toggle-extractor"> <button type="button" class="btn btn-info">提取视频链接</button> <br> <input class="link" readonly/></div>')

$("#toggle-extractor button").on("click", function(e) {
    showLink()
})

function showLink() {
    let videoEle = document.querySelector("#video_embed video")
    let videoLink =  ""
    if (videoEle) {
        videoLink = videoEle.src
    } else {
        console.log("vidoe ele is null ?", videoEle)
    }

    $("#toggle-extractor .link").val(videoLink)
    if (!videoLink) {
        $("#toggle-extractor button").popover({title : "未能提取出链接", trigger: "hover"})
        return
    }

    document.querySelector("#toggle-extractor .link").select()
    document.execCommand("copy")

    $("#toggle-extractor button").popover({title : "链接已存入剪贴板", content: videoLink, trigger: "mannual", delay: { "show": 100, "hide": 10000 }}).popover('show')
}