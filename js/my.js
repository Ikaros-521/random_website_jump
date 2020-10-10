// 生成从min到max的随机数
function random_num(min, max)
{
	var Range = max - min;
	var Rand = Math.random();
	return (parseInt(Math.round(Rand * Range),10) + parseInt(min, 10));
}

// 是否为正整数
function isPositiveInteger(s){
	var re = /^[0-9]+$/;
	return re.test(s);
}

// 随机字符串
function random_string(length) 
{
	var str = '0123456789abcdefghijklmnopqrstuvwxyz';
	var result = '';
	for (var i = length; i > 0; --i) 
		result += str[Math.floor(Math.random() * str.length)];
	return result;
}

// 点击生成按钮触发函数
function send_info()
{
	// 清空文本框
	$("#info").val("");
	// 获取各个输入框的值
	var num = $("#num").val();
	//console.log("num:" + num);
	var out = 0;

	// 正整数校验
	if(isPositiveInteger(num))
	{

	}
	else
	{
		$("#info").val("请输入 正整数");
		return;
	}

	// 生成随机字符串
	out = random_string(num);
	// 将结果写入文本框
	$("#info").val(out + ".com");
	$("#info").val($("#info").val() + "\n" + out + ".cn");
	$("#info").val($("#info").val() + "\n" + out + ".com.cn");
	$("#info").val($("#info").val() + "\n" + out + ".net.cn");
	$("#info").val($("#info").val() + "\n" + out + ".org.cn");
	$("#info").val($("#info").val() + "\n" + out + ".org");
	$("#info").val($("#info").val() + "\n" + out + ".top");
	$("#info").val($("#info").val() + "\n" + out + ".ltd");
	$("#info").val($("#info").val() + "\n" + out + ".net");
	$("#info").val($("#info").val() + "\n" + out + ".tech");
	$("#info").val($("#info").val() + "\n" + out + ".shop");
	$("#info").val($("#info").val() + "\n" + out + ".vip");
	$("#info").val($("#info").val() + "\n" + out + ".xyz");
	$("#info").val($("#info").val() + "\n" + out + ".wang");
	$("#info").val($("#info").val() + "\n" + out + ".cloud");
	$("#info").val($("#info").val() + "\n" + out + ".online");
	$("#info").val($("#info").val() + "\n" + out + ".网址");
	$("#info").val($("#info").val() + "\n" + out + ".我爱你");
	$("#info").val($("#info").val() + "\n" + out + ".在线");
	$("#info").val($("#info").val() + "\n" + out + ".餐厅");
	$("#info").val($("#info").val() + "\n" + out + ".site");
	$("#info").val($("#info").val() + "\n" + out + ".love");
	$("#info").val($("#info").val() + "\n" + out + ".art");
	$("#info").val($("#info").val() + "\n" + out + ".xin");
	$("#info").val($("#info").val() + "\n" + out + ".store");
	$("#info").val($("#info").val() + "\n" + out + ".fun");
	$("#info").val($("#info").val() + "\n" + out + ".club");
	$("#info").val($("#info").val() + "\n" + out + ".cc");
	$("#info").val($("#info").val() + "\n" + out + ".website");
	$("#info").val($("#info").val() + "\n" + out + ".press");
	$("#info").val($("#info").val() + "\n" + out + ".space");
	$("#info").val($("#info").val() + "\n" + out + ".beer");
	$("#info").val($("#info").val() + "\n" + out + ".luxe");
	$("#info").val($("#info").val() + "\n" + out + ".video");
	$("#info").val($("#info").val() + "\n" + out + ".ren");
	$("#info").val($("#info").val() + "\n" + out + ".group");
	$("#info").val($("#info").val() + "\n" + out + ".fit");
	$("#info").val($("#info").val() + "\n" + out + ".yoga");
	$("#info").val($("#info").val() + "\n" + out + ".pro");
	$("#info").val($("#info").val() + "\n" + out + ".ink");
	$("#info").val($("#info").val() + "\n" + out + ".biz");
	$("#info").val($("#info").val() + "\n" + out + ".info");
	$("#info").val($("#info").val() + "\n" + out + ".design");
	$("#info").val($("#info").val() + "\n" + out + ".link");
	$("#info").val($("#info").val() + "\n" + out + ".work");
	$("#info").val($("#info").val() + "\n" + out + ".mobi");
	$("#info").val($("#info").val() + "\n" + out + ".kim");
	$("#info").val($("#info").val() + "\n" + out + ".pub");
	$("#info").val($("#info").val() + "\n" + out + ".name");
	$("#info").val($("#info").val() + "\n" + out + ".tv");
	$("#info").val($("#info").val() + "\n" + out + ".co");
	$("#info").val($("#info").val() + "\n" + out + ".asia");
	$("#info").val($("#info").val() + "\n" + out + ".red");
	$("#info").val($("#info").val() + "\n" + out + ".live");
	$("#info").val($("#info").val() + "\n" + out + ".wiki");
	$("#info").val($("#info").val() + "\n" + out + ".gov.cn");
	$("#info").val($("#info").val() + "\n" + out + ".life");
	$("#info").val($("#info").val() + "\n" + out + ".world");
	$("#info").val($("#info").val() + "\n" + out + ".run");
	$("#info").val($("#info").val() + "\n" + out + ".show");
	$("#info").val($("#info").val() + "\n" + out + ".city");
	$("#info").val($("#info").val() + "\n" + out + ".gold");
	$("#info").val($("#info").val() + "\n" + out + ".today");
	$("#info").val($("#info").val() + "\n" + out + ".plus");
	$("#info").val($("#info").val() + "\n" + out + ".cool");
	$("#info").val($("#info").val() + "\n" + out + ".icu");
	$("#info").val($("#info").val() + "\n" + out + ".company");
	$("#info").val($("#info").val() + "\n" + out + ".chat");
	$("#info").val($("#info").val() + "\n" + out + ".fans");
	$("#info").val($("#info").val() + "\n" + out + ".law");
	$("#info").val($("#info").val() + "\n" + out + ".host");
	$("#info").val($("#info").val() + "\n" + out + ".中国");
	$("#info").val($("#info").val() + "\n" + out + ".商标");
	$("#info").val($("#info").val() + "\n" + out + ".网店");
	$("#info").val($("#info").val() + "\n" + out + ".中文网");
	$("#info").val($("#info").val() + "\n" + out + ".公司");
	$("#info").val($("#info").val() + "\n" + out + ".网络");
	$("#info").val($("#info").val() + "\n" + out + ".集团");
	$("#info").val($("#info").val() + "\n" + out + ".商城");
	$("#info").val($("#info").val() + "\n" + out + ".招聘");
	$("#info").val($("#info").val() + "\n" + out + ".佛山");
	$("#info").val($("#info").val() + "\n" + out + ".广东");
	$("#info").val($("#info").val() + "\n" + out + ".企业");
	$("#info").val($("#info").val() + "\n" + out + ".商店");
	$("#info").val($("#info").val() + "\n" + out + ".游戏");
	$("#info").val($("#info").val() + "\n" + out + ".购物");
	$("#info").val($("#info").val() + "\n" + out + ".zone");
}