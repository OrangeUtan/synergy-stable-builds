(function () {
	var data_file = "https://api.github.com/repos/afzaalace/synergy-stable-builds/releases";
	var http_request = new XMLHttpRequest();
	try {
		// Opera 8.0+, Firefox, Chrome, Safari
		http_request = new XMLHttpRequest();
	} catch (e) {
		// Internet Explorer Browsers
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");

		} catch (e) {

			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}

		}
	}

	http_request.onreadystatechange = function () {

		if (http_request.readyState == 4) {
			// Javascript function JSON.parse to parse JSON data
			var jsonObj = JSON.parse(http_request.responseText);
			jsonObj.sort(function (a, b) {
				return a.tag_name < b.tag_name
			});
			var str = "";
			for (var x in jsonObj) {
				str = str + "<tr><td>" + jsonObj[x].tag_name + "</td><td>";
				for (var y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("Windows-x86.msi") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>Windows - x86</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("Windows-x64.msi") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>Windows - x64</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("MacOSX-x86_64.dmg") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>OSX</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("MacOSX109-x86_64.dmg") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>OS X Mavericks</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("MacOSX1010-x86_64.dmg") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>OS X Yosemite</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("MacOSX1011-x86_64.dmg") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>OS X El Capitan</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("MacOSX1012-x86_64.dmg") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>macOS Sierra</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("Linux-x86_64.deb") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>Ubuntu/Debian - x86_64</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("Linux-i686.deb") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>Ubuntu/Debian - i686</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("Linux-x86_64.rpm") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>RPM - x86_64</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("Linux-i686.rpm") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>RPM - i686</a>";
					}
				}
				for (y in jsonObj[x].assets) {
					if (jsonObj[x].assets[y].name.indexOf("Linux-armv6l.deb") >= 0) {
						str = str + "<a href='" + jsonObj[x].assets[y].browser_download_url + "'>Debian - armv6l</a>";
					}
				}
				str = str + "</td></tr>";
			}
			document.querySelector("#table>tbody").innerHTML = str;
		}
	}

	http_request.open("GET", data_file, true);
	http_request.send();
})();
