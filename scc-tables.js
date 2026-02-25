function numberWithCommas(x) {
    if (!x) {
        return("-");
    }

    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function formatPercentChg(number) {
    let precision = 2;
    if (typeof number !== "number") {
        return "";
    }

    let temp = number.toFixed(precision);
    if (temp > 0) {
        temp = "+" + temp;
    }
    return numberWithCommas(temp) + "%";
}

function formatNumber(number) {
    let precision = 2;
    if (!number) {
        return "";
    }

    const temp = number.toFixed(precision);
    return numberWithCommas(temp);
}

function formatWholeNumber(number) {
    if (!number) {
        return "";
    }
    const temp = number.toFixed(0);
    return numberWithCommas(temp);
}

function formatChange(number) {
    let precision = 2;
    if (typeof number !== "number") {
        return "";
    }

    let temp = number.toFixed(precision);
    if (temp > 0) {
        temp = "+" + temp;
    }
    return numberWithCommas(temp);
}

function formatPercent(number) {
    if (!number) {
        return "";
    }
    return formatNumber(number) + "%";
}

function formatSCTRChg(number) {
    if (number == null || number === "") {
        return "";
    }
    let temp = number.toFixed(1);
    if (temp > 0) {
        temp = "+" + temp;
    }
    return temp;
}

function formatSCTR(number) {
    if (number == null || number === "") {
        return "";
    }

    return number.toFixed(1);
}

function getNumericDisplayInfo(number) {
    if (typeof number !== "number") {
        return "";
    }

    if (number === 0) {
        return "";
    }

    if (Math.abs(number) > 1000000000000) {
        return (number / 1000000000000).toFixed(3) + ' T';
    }

    if (Math.abs(number) > 1000000000) {
        return (number / 1000000000).toFixed(3) + ' B';
    }

    if (Math.abs(number) > 1000000) {
        return (number / 1000000).toFixed(3) + ' M';
    }

    return (number / 1000).toFixed(3) + ' K';
}

function getShownColumns(dataTable) {
    if (!dataTable) {
        return [];
    }

    let count = dataTable.columns().count();
    let shownColumns = [];
    for (let i = 0; i < count; i++) {
        if (dataTable.column(i).visible()) {
            shownColumns.push(i);
        }
    }

    return shownColumns;
}

function setShownColumns(dataTableId, shownColumns) {
    if (!dataTableId || !shownColumns) {
        return;
    }

    let count = dataTableId.columns().count();
    for (let i = 0; i < count; i++) {
        dataTableId.column(i).visible(shownColumns.includes(i));
    }
}

function getLinksMenu(symbol) {
    let links = '<div id="open-dynamic-dropdown" class="dropdown open"><ul id="dropdown-menu">';
    links += '<li><a href="/freecharts/symbolsummary.html?sym=' +  encodeURIComponent(symbol) + '" title="Symbol Summary"><i class="far fa-file-invoice-dollar"></i>&nbsp;&nbsp;Symbol Summary</a></li>';
    links += '<li><a href="/sc3/ui?s=' + encodeURIComponent(symbol)+ '" title="SharpChart"><i class="icon icon-square icon-scc-pos-sq-sharp"></i>&nbsp;&nbsp;SharpChart</a></li>';
    links += '<li><a href="/acp/?s=' + encodeURIComponent(symbol) + '" title="ACP"><i class="icon icon-square icon-scc-pos-sq-acp"></i>&nbsp;&nbsp;ACP Chart</a></li>';
    links += '<li><a href="/freecharts/gallery.html?' + encodeURIComponent(symbol) + '" title="GalleryView"><i class="icon icon-square icon-scc-pos-sq-gallery"></i>&nbsp;&nbsp;GalleryView</a></li>';
    links += '<li><a href="/freecharts/pnf.php?c=' + encodeURIComponent(symbol) + ',P" title="P&amp;F"><i class="icon icon-square icon-scc-pos-sq-pnf"></i>&nbsp;&nbsp;Point &amp; Figure</a></li>';
    links += '<li><a href="/freecharts/seasonality.php?symbol=' + encodeURIComponent(symbol) + '" title="Seasonality"><i class="icon icon-square icon-scc-pos-sq-season"></i>&nbsp;&nbsp;Seasonality</a></li>';
    links += '<li><a href="/freecharts/options/?sym=' + encodeURIComponent(symbol) + '" title="Options"><i class="fas fa-game-board-alt"></i>&nbsp;&nbsp;Options</a></li>';
    links += '</ul></div>';

    return $(links);
}

function registerLinkMenuHandler() {
    $(document).on('click', '.menu' , function(element) {
        $('#open-dynamic-dropdown').remove();

        let linksMenu = element.target.getBoundingClientRect();
        let pixelsFromScreenBottom = (linksMenu.y + linksMenu.height - document.documentElement.clientHeight) * -1;

        let symbol = $(this).data('symbol');
        let menu = getLinksMenu(symbol);

        menu.css('position', 'absolute');
        menu.css('z-index', '1000');

        document.body.appendChild(menu[0]);
        $(this).style = 'position: relative';
        let parentElement = $(this);
        let parentBoundingRect = element.target.getBoundingClientRect();

        let dynamicDropdown = document.getElementById('open-dynamic-dropdown');
        let dropDownBoundingRect = dynamicDropdown.getBoundingClientRect();
        let menuHeight = dropDownBoundingRect.height + 15;

        if (menuHeight > pixelsFromScreenBottom) {
            dynamicDropdown.style.top = (parentBoundingRect.top - menuHeight - (2 * parentBoundingRect.height) + window.scrollY) + 'px';
        } else {
            dynamicDropdown.style.top = (parentBoundingRect.y + window.scrollY) + 'px';
        }
        dynamicDropdown.style.left = (parentBoundingRect.x + parentBoundingRect.width) + 'px';

        let dropdownMenu = document.getElementById('dropdown-menu');
        dropdownMenu.classList.add('dropdown-menu');

        let dropdownOffClickHandler = function(event) {
            menu.remove();
            parentElement.style = 'position: ""';
            document.removeEventListener("click", dropdownOffClickHandler);
        };
        document.addEventListener("click", dropdownOffClickHandler);

        if (typeof window.updateChildWorkbenchLinks === 'function') {
            window.updateChildWorkbenchLinks(dropdownMenu);
        }
    });
}


