document.writeln("<div class=\'header_topcon clearfix\'>");
document.writeln("  <div class=\'header_topcon01 left\'> <a href=\'/\'><img src=\'http://www.hanweb.com/picture/0/1808201005018264554.png' /></a> </div>");
document.writeln("  <div class=\'header_topcon02 left\'>");
document.writeln("    <ul class=\'clearfix one_title\'>");
document.writeln("      <li><a href=\'/col/col3103/index.html\'>资讯中心</a></li>");
document.writeln("      <li><a style=\'cursor:default\' >产品</a></li>");
document.writeln("      <li><a style=\'cursor:default\' >方案</a></li>");
document.writeln("      <li><a href=\'/col/col3104/index.html\'>服务支持</a></li>");
document.writeln("      <li><a href=\'/col/col3106/index.html\'>智政院</a></li>");
document.writeln("      <li><a href=\'/col/col3237/index.html\'>加入我们</a></li>");
document.writeln("    </ul>");
document.writeln("  </div>");
document.writeln("  <div class=\'search left clearfix\'>");
document.writeln("    <div class=\'seachform left\'>");
document.writeln("      <form id=\'search-new\' class=\'clearfix\' method=\'get\' action=\'http://www.hanweb.com/jrobot/search.do\' target=\'_blank\'>");
document.writeln("        <input style=\'padding-right:32px;\' type=\'text\' name=\'q\' class=\'seach_txt left\' placeholder=\'请输入关键词\'  />");
document.writeln("        <input id=\'pg\' name=\'pg\' type=\'hidden\' value=\'5\'/>");
document.writeln("        <input type=\'submit\' class=\'seach_bnt left\' value=\'\'/>");
document.writeln("      </form>");
document.writeln("    </div>");
document.writeln("    <div class=\'search_img left\'><img src=\'http://www.hanweb.com/picture/0/1809291633170854748.png' style=\'width:20px\' /> </div>");
document.writeln("  </div>");
document.writeln("  <div class=\'header_topcon03 right\'>");
document.writeln("    <ul class=\'clearfix\'>");
document.writeln("      <li><img src=\'http://www.hanweb.com/picture/0/1808201005021299910.png\' />400-969-0828");
//document.writeln("        <div class=\'phonenumber\'> 400-969-0828 </div>");
document.writeln("      </li>");
document.writeln("      <li><img src=\'http://www.hanweb.com/picture/0/1808201005023216675.png\' />微信");
document.writeln("        <div class=\'phonenumber weixin\'> <img src=\'http://www.hanweb.com/picture/0/1808201403575255792.png\' /> </div>");
document.writeln("      </li>");
document.writeln("    </ul>");
document.writeln("  </div>");
document.writeln("  <div class=\'menu right\' data-show=\'hide\'> ");
document.writeln("    <!--	                	<img src=\'images/mob_pic_18.png\' />--> ");
document.writeln("  </div>");
document.writeln("  <div class=\'little-tip\'>");
document.writeln("    <ul class=\'clearfix\'>");
document.writeln("      <li><img style=\'width:27px\'  src=\'http://www.hanweb.com/picture/0/1810091704174645150.png\' />");
document.writeln("        <div class=\'phonenumber weixin\'> <img src=\'http://www.hanweb.com/picture/0/1808201403575255792.png\' /> </div>");
document.writeln("      </li>");
document.writeln("      <li><a href=\'tel:400-969-0828\'><img style=\'width:27px\'  src=\'http://www.hanweb.com/picture/0/1810091704174645150.png\' /></a>");
//document.writeln("        <div class=\'phonenumber\'> 400-969-0828 </div>");
document.writeln("      </li>");
document.writeln("    </ul>");
document.writeln("  </div>");
document.writeln("</div>");
document.writeln("");
document.writeln("<style>");
document.writeln("input::-ms-clear,input::-ms-reveal{display:none;}");
document.writeln("@media only screen and (min-width:1000px){");
document.writeln(".header_topcon02 ul li{float: left;font-size: 18px;padding: 0px 12px;line-height: 77px;margin-left:0;}");
document.writeln(".header_topcon02 ul li:first-child{margin-left: 45px;}");
document.writeln("}");
document.writeln("</style>");
document.writeln("<style>");
document.writeln("@media only screen and (max-width: 1144px) and (min-width: 768px){");
document.writeln(".header_topcon{width:1200px;}");
document.writeln("body{min-width:1200px;}");
document.writeln("}");
document.writeln("</style>");
$('.search_img').click(function(event) {
			if($(document).width()>768){
				$(this).css({ display: 'none' });
$('.seachform form input[type=submit]').css("display","block");
				$('.seachform form').stop(true, false).animate({ width: '240px' });
				$('.seach_txt').focus();
				event.stopPropagation();
			}else{
				$(this).css({ display: 'none' });
				$('.seachform form').stop(true, false).animate({ width: '188px' });
			}

			if($(document).width()>768){
				$("body").click(function(){
					$('.seachform form').stop(true, false).animate({ width: '0px' });
$('.seachform form input[type=submit]').css("display","none");
					$('.search_img').css({ display: 'block' });
				})
			}

		});
document.writeln("<style>");
document.writeln("	.back-top{");
document.writeln("		width:64px;");
document.writeln("		height:64px;		");
document.writeln("		position:fixed;");
document.writeln("		right:30px;");
document.writeln("		bottom:50px;");
document.writeln("		cursor:pointer;		");
document.writeln("		z-index: 99999;		");
document.writeln("	.back-top1{");
document.writeln("		display:none;");
document.writeln("	}");
document.writeln("	}");
document.writeln("");
document.writeln("</style>");
document.writeln("<div class=\'back-top\' id=\'backTop\' style=\'display:none;\'><img src=\'http://www.hanweb.com/picture/1/1812231725499837414.png'></div>");
$(function(){
		if($(document).width()>=1000){
showScroll();
		function showScroll(){
			$(window).scroll( function() {
				var scrollValue=$(window).scrollTop();
				scrollValue > 400 ? $('div[class=back-top]').fadeIn():$('div[class=back-top]').fadeOut();
			} );
			$('#backTop').click(function(){
console.log(1)
				$('html,body').animate({scrollTop:0},800);
			});
		}
}
	})
