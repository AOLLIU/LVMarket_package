/**
 * Created by liuwei on 16/12/1.
 */

var Core = {};

Core.tableBar = {
    pageIndex : 0,
    init : function(idx) {
        Core.tableBar.pageIndex = idx;

        var homeURL = $("#homeUrl").val();
        var marketUrl = $("#marketUrl").val();
        var postURL = $("#postUrl").val();
        var meURL = $("#meUrl").val();

        $("#table_bar_home").on("click", function() {
            if (Core.tableBar.pageIndex != 0) {
                location.href = homeURL;
            }
        });

        $("#table_bar_market").on("click", function() {
            if (Core.tableBar.pageIndex != 1) {
                location.href = marketUrl;
            }
        });

        $("#table_bar_post").on("click", function() {
            if (Core.tableBar.pageIndex != 2) {
                location.href = postURL;
            }
        });

        $("#table_bar_me").on("click", function() {
            if (Core.tableBar.pageIndex != 3) {
                location.href = meURL;
            }
        });

    }
}

