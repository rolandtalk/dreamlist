/**
 *
 * freecharts.js -
 *
 *   Functions used throughout the freecharts project.
 *   Require that common2.js is loaded first, because it defines the first afterLoginCheckFailed().
 *   Place in the header section so that redirect and google analytics can load in the header.
 *
 */

function initPredefinedSymbolGroupDropdowns(predefGroups, whichDropDowns) {
    var sorted_groups_cg_sortnames=[];
    var sorted_groups_perf_sortnames=[];

    for (const groupKey in predefGroups) {
        if (predefGroups[groupKey]["types"].indexOf('candleglance') > -1) {
            sorted_groups_cg_sortnames.push([predefGroups[groupKey]["title"], groupKey]);
        }
        if (predefGroups[groupKey]["types"].indexOf('perf') > -1) {
            sorted_groups_perf_sortnames.push([predefGroups[groupKey]["title"], groupKey]);
        }
    }

    $("#perfcharts-predefined-ul, #candleglance-predefined-ul").append('<li class="menu-section-title no-border">Common Groups</li>');

    if (whichDropDowns.indexOf('candleglance') > -1) {
        var sorted_groups_cg_list=[];

        for (const j in sorted_groups_cg_sortnames) {
            const groupKey = sorted_groups_cg_sortnames[j][1];
            const title = sorted_groups_cg_sortnames[j][0];
            sorted_groups_cg_list.push("<li><a href='/freecharts/candleglance.html?["+encodeURIComponent(groupKey)+"]' data-symbolgroup=\"" + groupKey + "\">"+title+"</a></li>");
        }
        $("#candleglance-predefined-ul").append(sorted_groups_cg_list.join("\n"));
    }

    if (whichDropDowns.indexOf('perf') > -1) {
        var sorted_groups_perf_list=[];

        for (const j in sorted_groups_perf_sortnames) {
            const groupKey = sorted_groups_perf_sortnames[j][1];
            const title = sorted_groups_perf_sortnames[j][0];
            sorted_groups_perf_list.push("<li><a href='/freecharts/perf.php?["+encodeURIComponent(groupKey)+"]' data-symbolgroup='" + groupKey + "'>"+title+"</a></li>");
        }
        $("#perfcharts-predefined-ul").append(sorted_groups_perf_list.join("\n"));
    }
}

function initIndustryDropdowns(industries) {
    var sorted_industries = Object.keys(industries).sort();

    $("#perfcharts-predefined-ul, #candleglance-predefined-ul").append('<li role="separator" class="divider"></li><li class="menu-section-title no-border">US Industry Groups</li>');
    var sorted_groups_cg_list=[];
    var sorted_groups_perf_list=[];

    for (const j in sorted_industries) {
        const groupKey = sorted_industries[j];
        const urlKey = encodeURIComponent(groupKey.toUpperCase());
        sorted_groups_cg_list.push("<li><a href='/freecharts/candleglance.html?["+urlKey+"]' data-symbolgroup=\"" + j + "\">"+industries[groupKey]["title"]+"</a></li>");
        sorted_groups_perf_list.push("<li><a href='/freecharts/perf.php?["+urlKey+"]' data-symbolgroup=\"" + j + "\">"+industries[groupKey]["title"]+"</a></li>");
    }

    $("#candleglance-predefined-ul").append(sorted_groups_cg_list.join("\n"));
    $("#perfcharts-predefined-ul").append(sorted_groups_perf_list.join("\n"));
}

function switchTopTenTableTabs(json_data, div_prefix, name, dataoption) {
    if (!document.getElementById)
        return;

    var m = document.getElementById(div_prefix + "-" + name + "-tabs");
    var link = document.getElementById(div_prefix + "-" + name + "-" + dataoption);

    if (!m || !link)
        return;

    var as = m.getElementsByTagName("a");

    for (var i = 0; i < as.length; i++) {
        if (!/\btab\b/.test(as.item(i).className))
            continue;

        as.item(i).className="tab"; // reset to basic
    }

    link.className += " current";

    fillTopTenTable(json_data, div_prefix, name, dataoption);
}

function fillTopTenTable(json_data,div_prefix,name,dataoption) {
    var m=document.getElementById(div_prefix+"-"+name);
    var tb = m.getElementsByTagName("tbody");
    if (!tb || tb.length === 0) {
        return;
    }
    var hold=0;
    while (tb.item(0).hasChildNodes) {
        if (/\btemplate\-row\b/.test(tb.item(0).lastChild.className)) { //grab template row
            hold=tb.item(0).lastChild.cloneNode(true);
            break;
        }
        tb.item(0).removeChild(tb.item(0).lastChild); //prune old rows
    }
    if (!hold) return;
    var perflist ="";
    for (var i in json_data[name][dataoption]) {
        if (json_data[name][dataoption][i]["symbol"])
            perflist +=","+json_data[name][dataoption][i]["symbol"];
        const newtr=hold.cloneNode(true);
        for (const childNode of newtr.childNodes) {
            var html=childNode.innerHTML;
            var break_loop=0;
            while (break_loop++ < 100) {
                var match=/\{\{(\w+)\}\}/.exec(html);
                if (!match || match.length<2) break;
                var field=match[1].toLowerCase();
                if (json_data[name][dataoption][i][field])
                    html = html.replace(match[0], json_data[name][dataoption][i][field]);
                else
                    html = html.replace(match[0],"");
            }
            childNode.innerHTML="<td>"+html;
        }

        if (json_data[name][dataoption][i]["pts"]) {
            newtr.className=(/^\-/.test(json_data[name][dataoption][i]["pts"]))?"negative":"positive";
        }

        if (json_data[name][dataoption][i]["chg"]) {
            newtr.className=(/^\-/.test(json_data[name][dataoption][i]["chg"]))?"negative":"positive";
        }

        newtr.className += (i % 2 == 0) ? " odd" : " even";
        tb.item(0).appendChild(newtr);
    }

    var timediv=document.getElementById(div_prefix + "-" + name + "-time");

    if (timediv && json_data.time) {
        var ftime = json_data.time.substr(0,4) +
        "-" + json_data.time.substr(4,2) + "-" + json_data.time.substr(6,2) +
        " " + json_data.time.substr(8,2) + ":" + json_data.time.substr(10,2) + "ET";
        timediv.innerHTML = ftime;
    }

    var perflink=document.getElementById(div_prefix+"-"+name+"-perflink");
    if (perflink) {
        perflink.href="/freecharts/perf.php?"+ encodeURIComponent(perflist.substr(1));
    }
    var cglink=document.getElementById(div_prefix+"-"+name+"-cglink");
    if (cglink) {
        cglink.href="/freecharts/candleglance.html?"+ encodeURIComponent(perflist.substr(1));
    }
    var rrglink=document.getElementById(div_prefix+"-"+name+"-rrglink");
    if (rrglink) {
        rrglink.href="/freecharts/rrg/index.php?s="+ perflist.substr(1);
    }
}

function openChartAs(listId,symbol) {
    var s = 0;

    try {
        s = document.getElementById(listId).getElementsByTagName("select").item(0);
    } catch (e) {

    }

    var url = "/sc3/ui?s="+encodeURIComponent(symbol); // default

    if (s && s.selectedIndex === 1)
        url = "/freecharts/pnf.php?c=" + encodeURIComponent(symbol).toLowerCase() + ",P";

    if (s && s.selectedIndex === 2)
        url = "/freecharts/gallery.html?" + encodeURIComponent(symbol);

    location.href = url;
}

function openSearchChart(type) {
    let s;

    switch (type) {
        case "sc":
            s = $("#scsearchtext").val();
            window.location = "/sc3/ui?s=" + encodeURIComponent(s);
            break;
        case "sc3":
            s = $("#sc3searchtext").val();
            window.location = "/sc3/ui/?s=" + encodeURIComponent(s);
            break;
        case "acp":
            s = $("#acpsearchtext").val();
            window.location = "/acp/?s=" + encodeURIComponent(s);
            break;
        case "pnf":
            s = $("#pnfsearchtext").val();
            window.location = "/freecharts/pnf.php?c=" + encodeURIComponent(s).toLowerCase()+",P";
            break;
        case "perf":
            s = $("#perfsearchtext").val();
            window.location = "/freecharts/perf.php?" + encodeURIComponent(s);
            break;
        case "season":
            s = $("#seasonsearchtext").val();
            window.location = "/freecharts/seasonality.php?symbol=" + encodeURIComponent(s);
            break;
        case "cg":
            s = $("#cgsearchtext").val();
            window.location = "/freecharts/candleglance.html?" + encodeURIComponent(s);
            break;
        case "gallery":
            s = $("#gallerysearchtext").val();
            window.location = "/freecharts/gallery.html?" + encodeURIComponent(s);
            break;
        case "symsum":
            s = $("#symsumsearchtext").val();
            window.location = "/freecharts/symbolsummary.html?sym=" + encodeURIComponent(s);
            break;
        case "options":
            s = $("#optionssearchtext").val();
            window.location = "/freecharts/options/?sym=" + encodeURIComponent(s);
            break;
    }

    return false;
}

function adjustSymbol(symbol) {

    if (!symbol) return "$INDU";

    // replace weird characters
    symbol = symbol.replace(/\\\\/g, "/");
    symbol = symbol.replace(/\.(a|b)/ig, "/$1");

    return symbol;
}


/* openPopupManager - Displays a pop-up div when clicking on a link. It closes the pop-up div when clicking elsewhere outside of the div.
 * Be sure to overload openPopupManager.onOpen() to perform actions when the pop-up div is displayed.
 * <a data-target="#" id="linkChart3" class="popup-link" data-popup-form="linkableVersionForm3">Permalink</a>
 * <div style="position:relative;"><div id='linkableVersionForm3' class='popup-form scc-hidden' style="border-radius:5px; position:absolute;">
 *      <span class="containerClose"><i class="fas fa-times popup-form-close"></i></span>
 * </div></div>
 */
var openPopupManager = {
    onOpen: function() {},
    init: function() {
        $('.popup-link').each(function(idx) {
            var link = this;
            var id = $(link).attr('id');

            if (!id) {
                console.error('Could not find id for popup-link for idx ' + idx);
                return;
            }

            var formId = $(link).attr('data-popup-form');

            if (!formId) {
                console.error('Could not find data-popup-form with id: ' + id);
                return;
            }

            var formElem = $('#' + formId);

            if (!formElem.length) {
                console.error('data-popup-form not found with id: ' + formId);
                return;
            }

            $(link).on('click touchend', function() {
                $('.popup-form-open').removeClass('popup-form-open'); // dismiss other forms first
                $(formElem).addClass('popup-form-open');
                openPopupManager.onOpen(formElem);
            });
        });

        // When clicking on one link, it would be nice to close all of the other links but not this form.


        $(document).on('click touchend', function(e) {
            if (! ($(e.target).is(".popup-form-open") || $(e.target).is(".popup-link") || $(e.target.parentElement).is(".popup-link") || $(".popup-form-open").has(e.target).length )) {
                $('.popup-form-open').removeClass('popup-form-open');
            }
        });

        $('.popup-form-close').on('click touchend', function(e) {
            $(e.target).closest('.popup-form-open').removeClass('popup-form-open');
        });

    }
};

$(function() {
    if ($('.popup-form').length > 0) {
        openPopupManager.init();
    }
});


function setLoyaltyBadge(date) {
    var years = 0;

    if (date != "" && date != undefined) {
        var d = date.split("-");
        var now = new Date();
        var since = new Date(parseInt(d[0]),parseInt(d[1]) - 1, parseInt(d[2]));

        var startMillis = since.getTime();
        var nowMillis = now.getTime();
        var nDays = (nowMillis - startMillis) / (24 * 60 * 60 * 1000);
        years = parseInt(nDays / 365);
    }

    if (years === 0) {
        $('#profpic').hide();
    } else {
        $('#profpic').prop('src', "/img/loyaltybadge" + years + ".gif");
    }
}

// needed for older freecharts page, but this will soon be deprecated
var originalAfterLoginWelcomeUser = typeof afterLoginWelcomeUser === 'undefined' ? function() {} : afterLoginWelcomeUser;

var afterLoginWelcomeUser = function(name, json) {
    originalAfterLoginWelcomeUser(name, json);

    setLoyaltyBadge(json.startDate);
    $('#userName').text(json.firstName + " " + json.lastName);
    var userService = "Basic";
    if (json.memberType === "XT") {
        userService = "Extra";
    } else if (json.memberType === "PRO") {
        userService = "PRO";
    }

    $('#userServiceSpan').text(userService);
};

// if user is not logged in, display ads
var afterLoginCheckFailed = function() {
    $('.scc-upgrade-tip').show();

    if (typeof minimumWindowWidthForSidebarAd === 'undefined') { minimumWindowWidthForSidebarAd = 992; }

    if (window.innerWidth < 1200) {
        $('#pagebody').css('width', 'auto');
    }
};
var afterLoginCheckFailedMenu = function() {
};
