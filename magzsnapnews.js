// m
function labelthumbs(t){for(var e=0;e<numposts;e++){var n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=0;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}
var u;try{u=r.media$thumbnail.url,u=u.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}
catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb}
var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10),g=new Array;g[1]="January",g[2]="February",g[3]="March",g[4]="April",g[5]="May",g[6]="June",g[7]="July",g[8]="August",g[9]="September",g[10]="October",g[11]="November",g[12]="December",document.write('<span class="Magazine-hrt_left">'),document.write('<ul class="Magazine-hrt_thumbs">'),document.write("<li>"),1==showpostthumbnails&&document.write('<a href="'+n+'"><div class="cat_thumb waves-effect"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+m+'" src="'+u+'"/></div></a>'),document.write('<span class="Magazine-hrt_title"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";if(document.write('<span class="Magazine-hrt_meta">'),1==showpostdate&&(v=v+'<span class="Magazine-hrt_meta_date">'+g[parseInt(_)]+" "+f+","+w+"</span>"),1==showcommentnum&&("1 Comments"==l&&(l="1 Comments"),"0 Comments"==l&&(l="0 Comments"),showcomment='<span class="Magazine-hrt_meta_comment"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore&&(v=v+'<span class="Magazine-hrt_meta_more"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write('<span class="Magazine-hrt_summary">'),"content"in r)var y=r.content.$t;else if("summary"in r)var y=r.summary.$t;else var y="";var k=/<\S[^>]*>/g;if(y=y.replace(k,""),1==showpostsummary)if(y.length<numchars)document.write(""),document.write(y),document.write("");else{document.write(""),y=y.substring(0,numchars);var $=y.lastIndexOf(" ");y=y.substring(0,$),document.write(y+"..."),document.write("")}
document.write("</span>"),document.write("</li>"),document.write("</ul>"),document.write("</span>")}
document.write('<span class="Magazine-hrt_right">'),document.write('<ul class="Magazine-hrt_thumbs2">');for(var e=1;e<numposts2;e++){var n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=1;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}
var x;try{x=r.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")}
catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),x=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb2}
var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);1==showpostthumbnails2&&document.write('<a href="'+n+'"><div class="cat_thumb2 waves-effect"><img width="'+thumb_width2+'" height="'+thumb_height2+'" alt="'+m+'" src="'+x+'"/></div></a>'),document.write("<li class='waves-effect'>"),document.write('<span class="Magazine-hrt_title Magazine-hrt_title2"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";document.write('<span class="Magazine-hrt_meta Magazine-hrt_meta2">'),1==showpostdate2&&(v=v+'<span class="Magazine-hr_meta_date">'+g[parseInt(_)]+" "+f+","+w+"</span>"),1==showcommentnum2&&("1 Comment"==l&&(l="1 Comments"),"0 Comment"==l&&(l="0 Comments"),showcomment='<span class="Magazine-hrt_meta_comment Magazine-hrt_meta_comment2"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore2&&(v=v+'<span class="Magazine-hr_meta_more Magazine-hrt_meta_more2"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write("</li>")}
document.write("</ul>"),document.write("</span>")};
// f
function recentposts1(e) {
	j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array, numposts1 <= e.feed.entry.length ? maxpost = numposts1 : maxpost = e.feed.entry.length, document.write('<div class="featured_Besar">');
	for (var t = 0; t < maxpost; t++) {
		var i, n = e.feed.entry[t],
			r = n.title.$t,
			l = n.category[0].term;
		newsize;
		if (t == e.feed.entry.length) break;
		for (var o = 0; o < n.link.length; o++)
			if ("alternate" == n.link[o].rel) {
				i = n.link[o].href;
				break
			}
		for (o = 0; o < n.link.length; o++)
			if ("replies" == n.link[o].rel && "text/html" == n.link[o].type) {
				n.link[o].title.split(" ")[0];
				break
			}
		if ("content" in n) var g = n.content.$t;
		else if ("summary" in n) g = n.summary.$t;
		else g = "";
		postdate = n.published.$t, j > imgr.length - 1 && (j = 0), img[t] = imgr[j], s = g, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
		for (var m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], f = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], p = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), u = (postdate.split("-")[0], 0); u < m.length; u++)
			if (parseInt(p) == m[u]) {
				p = f[u];
				break
			}
		if (0 == t) {
			var v = '<div class="featured_hartomy first"><a href="' + i + '"><div class="blog_contents"><span>' + l + "</span><h3>" + r + '</h3></div><img class="feat-img" style="background-image:url(' + img[t] + ');"></img></a></div>';
			document.write(v)
		}
		if (1 == t) {
			v = '<div class="featured_hartomy second"><a href="' + i + '"><div class="blog_contents"><span>' + l + "</span><h3>" + r + '</h3></div><img class="feat-img" style="background-image:url(' + img[t] + ');"></img></a></div>';
			document.write(v)
		}
		if (2 == t) {
			v = '<div class="featured_hartomy third"><a href="' + i + '"><div class="blog_contents"><span>' + l + "</span><h3>" + r + '</h3></div><img class="feat-img" style="background-image:url(' + img[t] + ');"></img></a></div>';
			document.write(v)
		}
		if (3 == t) {
			v = '<div class="featured_hartomy fourth"><a href="' + i + '"><div class="blog_contents"><span>' + l + "</span><h3>" + r + '</h3></div><img class="feat-img" style="background-image:url(' + img[t] + ');"></img></a></div>';
			document.write(v)
		}
		j++
	}
	document.write("</div>")
}
imgr = new Array, imgr[0] = "data:image/gif;base64,R0lGODlhAQABAIAAAPHx8AAAACH5BAEAAAAALAAAAAABAAEAQAICRAEAOw==", showRandomImg = !0, aBold = !0, numposts1 = 4, numposts11 = 1, newsize = 400;
