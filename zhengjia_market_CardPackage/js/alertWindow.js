/**
 * Created by liuwei on 16/12/8.
 */

var myAlertWindow = {
    initial:initModalAlertWindow,
}

function initModalAlertWindow(title,content) {

    if($("#backdropDiv").length > 0) {
        showAlertWindow()
        return
    }

    // if (document.getElementById("backdropDiv")){
    //     showAlertWindow()
    //     return
    // }

    var backdrop = '<div id="backdropDiv" onclick="hidenAlertWindow()" style="text-align: center;height: 100%;width: 100%;background: rgba(52, 52, 52, 0.3);position: absolute;top: 0;left: 0;z-index: 100000">' +
        '<div class="alertContainer" style="background-color:white;width: 60%; border-radius: 5px;border: 1px solid lightgray;position: absolute;top: 40%;left: 20%">' +
        '<div class="alertHeader" style="text-align: center;font-size: 16px;font-weight: bold;margin-top: 10px">'+title+'</div>'+
        '<div class="alertBody" style="text-align: center;margin-top: 8px;padding: 0px 8px;color: gray">'+content+'</div>'+
        '<div class="separateLine" style="width: 100%;height: 1px;background-color: lightgray;margin-top: 8px;margin-bottom: 8px"></div>'+
        '<div class="alertFooter" style="text-align: center;margin-top: 8px;margin-bottom: 8px">' +
        '<div class="conformBtn" style="display: inline-block;background-color: lightgray;font-size: 13px;color: blue;padding: 5px 10px;border-radius: 2px;margin-right: 50px;width: 20%" onclick="conformBtnClick()">确认</div>'+
        '<div class="cancleBtn" style="display: inline-block;background-color: red;font-size: 13px;color: white;padding: 5px 10px;border-radius: 2px;width: 20%"  onclick="cancleBtnClick()">取消</div>'+
        '</div>'+
        '</div>' +
        '</div>'

    $("body").append(backdrop)

}


//弹出alert
function showAlertWindow() {
    $("#backdropDiv").show()
}
//隐藏alert
function hidenAlertWindow() {
    $("#backdropDiv").hide()
}
//点击确认按钮
function conformBtnClick() {
    $("#backdropDiv").hide()
}
//点击取消按钮
function cancleBtnClick() {
    $("#backdropDiv").hide()
}









// //修改背景的样式
// function changeBackdropStyle(style) {
//     var obj = document.getElementById("backdropDiv")
//     obj.style.cssText = style
// }
// //修改弹框的样式
// function changeAlertContainer(style) {
//     var obj = document.getElementsByClassName("alertContainer")[0]
//     obj.style.cssText = style
// }
// //修改头部的样式
// function changeAlertHeader(style) {
//     var obj = document.getElementsByClassName("alertHeader")[0]
//     obj.style.cssText = style
// }
// //修改中间内容样式
// function changeAlertBody(style) {
//     var obj = document.getElementsByClassName("alertBody")[0]
//     obj.style.cssText = style
// }
// //修改中间内容样式
// function changeSeparateLine(style) {
//     var obj = document.getElementsByClassName("separateLine")[0]
//     obj.style.cssText = style
// }
// //修改按钮容器样式
// function changeAlertFooter(style) {
//     var obj = document.getElementsByClassName("alertFooter")[0]
//     obj.style.cssText = style
// }
// //修改确认按钮样式
// function changeConformBtn(style) {
//     var obj = document.getElementsByClassName("conformBtn")[0]
//     obj.style.cssText = style
// }
//
// //修改取消按钮样式
// function changeCancleBtn(style) {
//     var obj = document.getElementsByClassName("cancleBtn")[0]
//     obj.style.cssText = style
// }