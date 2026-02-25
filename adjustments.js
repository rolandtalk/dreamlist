(function() {
    const PARTIAL_URL_PATHS_TO_OMIT_FATHOM_ANALYTICS = [
      '/h-sc/ui/'
    ];

    const newNavbarCss = `
      #scc-navbar { -webkit-font-smoothing:auto; }
      #nav-lower .dropdown .dropdown-toggle i { margin-left:2px; }
      #nav-lower .dropdown-menu { background-color:white; max-height:none; box-shadow:2px 2px 4px #c0ced8; width:fit-content; }
      #nav-lower ul.sitelinks.pull-right .dropdown-menu { right:0px; left:auto; }
      #nav-lower .dropdown-menu div.dropdown-menu-row { display:flex; flex-direction:column; gap:0px; max-height:none; margin:10px 0px 0px 0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row:first-child { margin-top:0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row * { display: block; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-columns { display:flex; gap:10px 0px; margin:10px 0px 0px 0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-columns:first-child { margin-top:0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row > h3 + .dropdown-menu-columns { margin-top:0px; gap:0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-column { display:flex; flex-direction:column; gap:10px; padding:0px 10px; flex-grow:1; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-column-group { white-space:nowrap; }
      #nav-lower .dropdown-menu div.dropdown-menu-row h3 { margin:0px; padding:3px 5px 2px 5px; border-bottom:3px solid #c0ced8; text-transform:uppercase; font-family:'Roboto Condensed','Lato','Helvetica Neue',Helvetica,Arial,sans-serif; font-size:16px; font-weight:bold; color:#707f8f; line-height:1.5; text-align:left; }
      #nav-lower .dropdown-menu div.dropdown-menu-row > h3 { margin:0px 10px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row h3 i { display:inline-block; margin:0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row ul { list-style:none; margin:0px; padding:0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row ul li { display:flex; padding:2px 0px; border-bottom:1px solid #e2e4e9; }
      #nav-lower .dropdown-menu div.dropdown-menu-row ul li:hover { background-color:white; }
      #nav-lower .dropdown-menu div.dropdown-menu-row ul li a { display:flex; align-items:center; flex:1; margin:0px; font-size:14px; font-weight:700; padding:0px 6px; height:26px; color:#2d3339; background-color: transparent; border:none; border-radius:0px; width:100%; text-align: left; white-space:nowrap; text-decoration:none; transition:all .35s ease; line-height:inherit; }
      #nav-lower .dropdown-menu div.dropdown-menu-row ul li a:hover { color:#3281d0; }
      #nav-lower .dropdown-menu div.dropdown-menu-row ul li a i { display:inline-flex; justify-content:center; margin:0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-divider { margin:0px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-footer-buttons { display:flex; justify-content:end; margin:10px 10px 0px 10px; padding:10px 0px 7px 0px; border-top:1px solid #e2e4e9; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-footer-button { display:inline-flex; align-items:center; width:fit-content; text-decoration:none; text-transform:uppercase; padding:8px 12px; margin:0px; color:#0f4d8a; border:2px solid #0f4d8a; background-color:transparent; border-radius:5px; font-size:14px; font-weight:bold; transition:all 0.35s ease; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-footer-button:hover,
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-footer-button:active,
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-footer-button:focus { background:#3281d0; border-color:#3281d0; color:white; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-item-new-tag { display:block; background-color:#219155; padding:3px 6px; font-size:10.5px; line-height:normal; font-weight:900; color:#fff; margin:0px 0px 0px 4px; }
      #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-members-only-content { color:#3c763d; }
      #nav-lower .dropdown-menu div.dropdown-menu-row img.featured-author-img { width:22px; height:22px; margin:0px 10px 0px 0px; border-radius:50%; }
      @media (min-width: 500px) {
        #nav-lower .dropdown-menu div.dropdown-menu-row ul li:last-child { border-bottom:none; }
      }
      @media (max-width: 499px) {
        #nav-lower .dropdown-menu { width:min-content; }
        #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-columns { flex-wrap:wrap; }
        #nav-lower .dropdown-menu div.dropdown-menu-row .dropdown-menu-column:last-child ul li:last-child { border-bottom:none; }
      }
      @media (max-width: 1100px) {
        #scc-navbar #nav-lower ul.sitelinks > li > a { font-size:16px !important; }
        #nav-siteSearch-icon { font-size:16px !important; }
      }
      @media (min-width: 768px) and (max-width: 1000px) {
        #scc-navbar #nav-lower ul.sitelinks > li > a { font-size:15px !important; }
        #nav-siteSearch-icon { font-size:15px !important; }
        .narrow-screen-width-hidden { display:none; }
      }
      @media (min-width: 768px) and (max-width: 900px) {
        #scc-navbar #nav-lower ul.sitelinks > li > a { font-size:14px !important; margin-right:16px; }
        #nav-siteSearch-icon { font-size:14px !important; }
      }
      @media (min-width: 768px) and (max-width: 840px) {
        #scc-navbar #nav-lower ul.sitelinks > li > a { font-size:13px !important; margin-right:15px; }
        #nav-siteSearch-icon { font-size:13px !important; }
      }
      @media (max-width: 767px) {
        #navbar-menuCollapse.navbar-collapse.collapse.in { overflow:visible; }
        #nav-lower .dropdown-menu { position:absolute; left:15px !important; right:15px !important; border-radius:4px; border:1px solid #c0ced8; }
      }
    `;

    const newNavbarHtml = `
      <!-- SCC NAVBAR -->
      <nav id="scc-navbar" class="navbar navbar-inverse navbar-blue navbar-static-top">
        <div class="container-fluid">
          <!-- NAV UPPER -->
          <div id="nav-upper" class="row">
            <!-- NAVBAR BRAND -->
            <a href="https://stockcharts.com/" class="navbar-brand">
              <img src="https://d.stockcharts.com/img/scc-logo-light.png" alt="StockCharts Logo" class="navbar-logo" />
              <img src="https://d.stockcharts.com/img/scc-logo-icon.png" alt="StockCharts Icon" class="navbar-logo logo-icon" />
            </a>
            <!-- MENU TOGGLE -->
            <div id="nav-menuToggle" class="nav navbar-nav">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menuCollapse" aria-expanded="false" aria-controls="navbar-menuCollapse" aria-label="Toggle Website Navigation Menu"><i class="fas fa-bars"></i></button>
            </div>
            <!-- ACCOUNT LINKS -->
            <ul id="nav-accountLinks" class="nav navbar-nav">
              <li id="nav-loginBtn">
                <a href="https://stockcharts.com/login" class="btn navbar-btn btn-transparent">Log In</a>
              </li>
              <li id="nav-signUpBtn">
                <a href="https://stockcharts.com/checkout/freetrial/" class="btn navbar-btn btn-green">Free Trial</a>
              </li>
              <li id="nav-userProfile" class="dropdown">
                <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-fw fa-user-circle"></i><span id="nav-userID">Welcome</span><i class="far fa-fw fa-angle-down"></i>
                </a>
                <ul id="nav-userMenu" class="dropdown-menu">
                  <li><a href="https://stockcharts.com/youracct"><i class="fas fa-fw fa-cogs"></i>&nbsp;&nbsp;Your Account</a></li>
                  <li><a href="https://stockcharts.com/marketplace/"><i class="fas fa-fw fa-user-lock"></i>&nbsp;&nbsp;Add-Ons and Upgrades</a></li>
                  <li class="divider"></li>
                  <li><a href="https://stockcharts.com/h-mem/notifications.html"><i class="fas fa-fw fa-engine-warning"></i>&nbsp;&nbsp;Your Notifications</a></li>
                  <li class="divider"></li>
                  <li><a href="https://stockcharts.com/panels"><i class="far fa-fw fa-tachometer-alt-fast"></i>&nbsp;&nbsp;Your Dashboard</a></li>
                  <li><a href="https://stockcharts.com/panels#chartlists"><i class="fas fa-fw fa-user-chart"></i>&nbsp;&nbsp;Your ChartLists</a></li>
                  <li><a href="https://stockcharts.com/h-mem/your-scans.html"><i class="far fa-fw fa-list-alt"></i>&nbsp;&nbsp;Your Scans</a></li>
                  <li><a href="https://stockcharts.com/h-mem/useralertsummary.html"><i class="far fa-fw fa-bell"></i>&nbsp;&nbsp;Your Alerts</a></li>
                  <li class="divider"></li>
                  <li><a href="https://help.stockcharts.com" target="_blank" rel="noopener noreferrer"><i class="far fa-fw fa-life-ring"></i>&nbsp;&nbsp;Support Center</a></li>
                  <li><a href="https://stockcharts.com/support/chat.html"><i class="fas fa-fw fa-question-circle"></i>&nbsp;&nbsp;Ask a Question</a></li>
                  <li><a href="https://stockcharts.com/support/techsupport.html"><i class="far fa-fw fa-envelope"></i>&nbsp;&nbsp;Contact Us</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="https://stockcharts.com/logout"><i class="fas fa-fw fa-sign-out-alt"></i>&nbsp;&nbsp;Log Out</a></li>
                </ul>
              </li>
            </ul>
            <!-- CHART SEARCH -->
            <form id="nav-chartSearch" class="input-group" role="search" onsubmit="return chartSearch('nav-chartSearch');">
              <div class="input-group-btn dropdown">
                <button type="button" id="nav-chartSearch-btn" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SharpChart <i class="far fa-angle-down"></i></button>
                <input type="hidden" id="nav-chartSearch-type" name="searchoptions" value="sharpChart" />
                <ul class="dropdown-menu" id="nav-chartSearch-menu">
                  <li>
                    <a href="#" data-val="symSum">
                      <span class="item-label"><i class="far fa-file-invoice-dollar"></i>Symbol Summary</span>
                      <span class="item-star"><i class="far fa-star"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-val="sharpChart">
                      <span class="item-label"><i class="icon icon-scc-pos-sq-sharp"></i>SharpChart</span>
                      <span class="item-star"><i class="far fa-star"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-val="acp">
                      <span class="item-label"><i class="icon icon-scc-pos-sq-acp"></i>ACP</span>
                      <span class="item-star"><i class="far fa-star"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-val="pnf">
                      <span class="item-label"><i class="icon icon-scc-pos-sq-pnf"></i>Point &amp; Figure</span>
                      <span class="item-star"><i class="far fa-star"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-val="gallery">
                      <span class="item-label"><i class="icon icon-scc-pos-sq-gallery"></i>GalleryView</span>
                      <span class="item-star"><i class="far fa-star"></i></span>
                    </a>
                  </li>
                  <li class="divider"></li>
                  <li><a href="#" data-val="seasonality"><i class="icon icon-scc-pos-sq-season"></i>Seasonality</a></li>
                  <li><a href="#" data-val="options"><i class="fas fa-game-board-alt"></i>Options</a></li>
                  <li class="divider"></li>
                  <li><a href="#" data-val="perf"><i class="icon icon-scc-pos-sq-perfchart"></i>Interactive PerfChart</a></li>
                  <li><a href="#" data-val="candleGlance"><i class="icon icon-scc-pos-sq-candle"></i>CandleGlance</a></li>
                  <li><a href="#" data-val="rrg"><i class="icon icon-scc-pos-sq-rrg"></i>RRG</a></li>
                  <li class="divider"></li>
                  <li><a href="#" data-val="symSearch"><i class="fas fa-search-plus"></i>Symbol Lookup</a></li>
                </ul>
              </div>
              <input type="text" id="nav-chartSearch-input" class="form-control" placeholder="Enter Symbol or Name" aria-label="Search for a Security" />
              <span class="input-group-btn">
                <button id="nav-chartSearch-submit" class="btn btn-default btn-submit" type="submit">Go</button>
              </span>
            </form>
          </div><!-- end of NAV UPPER -->
          <!-- NAV LOWER -->
          <div id="nav-lower">
            <!-- MENU COLLAPSE -->
            <div id="navbar-menuCollapse" class="navbar-collapse collapse">
              <ul class="nav navbar-nav sitelinks">

                <!-- Charts & Tools Dropdown -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Charts &amp; Tools <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="dropdown-menu">
                    <div class="dropdown-menu-row">
                      <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-gem"></i>&nbsp;Core Tools</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/sc3/ui/"><i class="icon icon-scc-pos-sq-sharp fa-fw"></i>&nbsp;&nbsp;SharpCharts</a></li>
                              <li><a href="https://stockcharts.com/acp/"><i class="icon icon-scc-pos-sq-acp fa-fw"></i>&nbsp;&nbsp;ACP</a></li>
                              <li><a href="https://stockcharts.com/freecharts/pnf.php?c=AAPL,P"><i class="icon icon-scc-pos-sq-pnf fa-fw"></i>&nbsp;&nbsp;Point &amp; Figure</a></li>
                              <li><a href="https://stockcharts.com/freecharts/symbolsummary.html?sym=AAPL"><i class="far fa-fw fa-file-invoice-dollar"></i>&nbsp;&nbsp;Symbol Summary</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="fas fa-fw fa-chart-area"></i>&nbsp;More Charting Tools</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/freecharts/gallery.html"><i class="icon icon-scc-pos-sq-gallery fa-fw"></i>&nbsp;&nbsp;GalleryView</a></li>
                              <li><a href="https://stockcharts.com/freecharts/seasonality.php"><i class="icon icon-scc-pos-sq-season fa-fw"></i>&nbsp;&nbsp;Seasonality</a></li>
                              <li><a href="https://stockcharts.com/freecharts/candleglance.html?[MARKO]"><i class="icon icon-scc-pos-sq-candle fa-fw"></i>&nbsp;&nbsp;CandleGlance</a></li>
                              <li><a href="https://stockcharts.com/marketcarpet/"><i class="icon icon-scc-pos-sq-marketcarpet fa-fw"></i>&nbsp;&nbsp;MarketCarpets</a></li>
                              <li><a href="https://stockcharts.com/freecharts/perf.php?[MARK]"><i class="icon icon-scc-pos-sq-perfchart fa-fw"></i>&nbsp;&nbsp;Interactive PerfCharts</a></li>
                              <li><a href="https://stockcharts.com/freecharts/rrg/"><i class="icon icon-scc-pos-sq-rrg fa-fw"></i>&nbsp;&nbsp;RRG Charts</a></li>
                              <li><a href="https://stockcharts.com/freecharts/yieldcurve.php"><i class="fas fa-fw fa-percent"></i>&nbsp;&nbsp;Dynamic Yield Curve</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="fas fa-fw fa-exchange fa-rotate-90"></i>&nbsp;Options Tools</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/freecharts/options/"><i class="fas fa-fw fa-game-board-alt"></i>&nbsp;&nbsp;Options</a></li>
                              <li><a href="https://stockcharts.com/freecharts/options/strategy/"><i class="fas fa-fw fa-bullseye-arrow"></i>&nbsp;&nbsp;OptionsPlay Strategy Center</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span class="dropdown-menu-members-only-content"><i class="fas fa-fw fa-user-lock"></i>&nbsp;Members Only</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/marketplace/#all-addon"><i class="fas fa-fw fa-plus-square"></i>&nbsp;&nbsp;Add-Ons</a></li>
                              <li><a href="https://stockcharts.com/marketplace/#all-plugins"><i class="fas fa-fw fa-plug"></i>&nbsp;&nbsp;Plug-Ins</a></li>
                              <li><a href="https://stockcharts.com/marketplace/#all-chartpacks"><i class="far fa-fw fa-box-full"></i>&nbsp;&nbsp;ChartPacks</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-glasses"></i>&nbsp;Charts to Watch</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/freecharts/sample/chart-gallery.html"><i class="fas fa-fw fa-images"></i>&nbsp;&nbsp;Sample Chart Gallery&nbsp;<span class="dropdown-menu-item-new-tag">NEW</span></a></li>
                              <li><a href="https://stockcharts.com/freecharts/historical/"><i class="far fa-fw fa-scroll-old"></i>&nbsp;&nbsp;Historical Chart Gallery</a></li>
                              <li><a href="https://stockcharts.com/freecharts/dpgallery.html"><i class="far fa-fw fa-map"></i>&nbsp;&nbsp;DecisionPoint Chart Gallery</a></li>
                              <li><a href="https://stockcharts.com/public/"><i class="fas fa-fw fa-users"></i>&nbsp;&nbsp;Public ChartLists</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="dropdown-menu-footer-buttons">
                        <a class="dropdown-menu-footer-button" href="https://stockcharts.com/freecharts/">All Tools&nbsp;<i class="fas fa-fw fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- Scans & Alerts Dropdown -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    Scans & Alerts <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="dropdown-menu">
                    <div class="dropdown-menu-row">
                      <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="fal fa-fw fa-sliders-h"></i>&nbsp;Scanning Tools</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/h-mem/your-scans.html"><i class="far fa-fw fa-list-alt"></i>&nbsp;&nbsp;Your Scans</a></li>
                              <li><a href="https://stockcharts.com/def/servlet/ScanUI"><i class="fal fa-fw fa-sliders-h"></i>&nbsp;&nbsp;Advanced Scan Workbench</a></li>
                              <li><a href="https://stockcharts.com/scheduled-scans/sscans"><i class="far fa-fw fa-calendar-check"></i>&nbsp;&nbsp;Scheduled Scans</a></li>
                              <li><a href="https://stockcharts.com/freecharts/sample/scan-library.html"><i class="far fa-fw fa-sliders-h-square"></i>&nbsp;&nbsp;Sample Scan Library&nbsp;<span class="dropdown-menu-item-new-tag">NEW</span></a></li>
                              <li><a href="https://stockcharts.com/def/servlet/SC.scan"><i class="far fa-fw fa-funnel-dollar"></i>&nbsp;&nbsp;Predefined Scans</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-bells"></i>&nbsp;Alert Tools</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/h-mem/useralertsummary.html"><i class="fas fa-fw fa-engine-warning"></i>&nbsp;&nbsp;Your Alerts</a></li>
                              <li><a href="https://stockcharts.com/h-mem/price-alert-workbench.html"><i class="fas fa-fw fa-usd-circle"></i>&nbsp;&nbsp;Price Alert Workbench</a></li>
                              <li><a href="https://stockcharts.com/h-al/al?preloadUI=a"><i class="far fa-fw fa-bell"></i>&nbsp;&nbsp;Advanced Alert Workbench</a></li>
                              <li><a href="https://stockcharts.com/freecharts/alertsummary.html"><i class="far fa-fw fa-bells"></i>&nbsp;&nbsp;Predefined Technical Alerts</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- Market Analysis Dropdown -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    Market Analysis <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="dropdown-menu">
                    <div class="dropdown-menu-row">
                      <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-table"></i>&nbsp;Research Tools</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/freecharts/marketsummary.html"><i class="fas fa-fw fa-globe-americas"></i>&nbsp;&nbsp;Market Summary&nbsp;<span class="dropdown-menu-item-new-tag">NEW</span></a></li>
                              <li><a href="https://stockcharts.com/freecharts/sectorsummary.html"><i class="fas fa-fw fa-chart-pie"></i>&nbsp;&nbsp;Sector Drill-Down</a></li>
                              <li><a href="https://stockcharts.com/freecharts/industrysummary.html"><i class="fas fa-fw fa-university"></i>&nbsp;&nbsp;US Industries</a></li>
                              <li><a href="https://stockcharts.com/freecharts/groupsummary.html"><i class="far fa-fw fa-layer-group"></i>&nbsp;&nbsp;Index Members</a></li>
                              <li><a href="https://stockcharts.com/freecharts/sctr.html"><i class="fas fa-fw fa-trophy"></i>&nbsp;&nbsp;SCTR Reports</a></li>
                              <li><a href="https://stockcharts.com/freecharts/reported-earnings.html"><i class="fas fa-fw fa-badge-dollar"></i>&nbsp;&nbsp;Earnings Calendar</a></li>
                              <li><a href="https://stockcharts.com/freecharts/adjusthist.html#d=ipo|t="><i class="far fa-fw fa-piggy-bank"></i>&nbsp;&nbsp;IPO Listings</a></li>
                              <li><a href="https://stockcharts.com/freecharts/crypto/index.html"><i class="fab fa-fw fa-bitcoin"></i>&nbsp;&nbsp;Cryptocurrencies</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-file-alt"></i>&nbsp;Data, Reports &amp; More</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/h-hd/?AAPL"><i class="far fa-fw fa-hourglass-end"></i>&nbsp;&nbsp;Historical Price Data</a></li>
                              <li><a href="https://stockcharts.com/h-ud/ud"><i class="far fa-fw fa-wrench"></i>&nbsp;&nbsp;User-Defined Indexes</a></li>
                              <li><a href="https://stockcharts.com/freecharts/adjusthist.html#d=|t=-7"><i class="fas fa-fw fa-database"></i>&nbsp;&nbsp;Data Adjustments</a></li>
                              <li><a href="https://stockcharts.com/freecharts/perf.php?[SECT]"><i class="far fa-fw fa-chart-pie"></i>&nbsp;&nbsp;Sector PerfChart</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- Articles & Videos Dropdown -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                      Articles & Videos <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="dropdown-menu">
                    <div class="dropdown-menu-row">
                      <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-newspaper"></i>&nbsp;Articles</span></h3>
                            <ul>
                              <li><a href="https://articles.stockcharts.com"><i class="far fa-fw fa-newspaper"></i>&nbsp;&nbsp;Our Latest Articles</a></li>
                              <li><a href="https://stockcharts.com/newsletter/archives.html"><i class="far fa-fw fa-mail-bulk"></i>&nbsp;&nbsp;ChartWatchers Newsletter</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="fas fa-fw fa-tv-retro"></i>&nbsp;Videos</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/tv/"><i class="far fa-fw fa-tv-retro"></i>&nbsp;&nbsp;StockCharts TV</a></li>
                              <li><a href="https://www.youtube.com/@StockChartsTV" target="_blank" rel="noopener noreferrer"><i class="fab fa-fw fa-youtube"></i>&nbsp;&nbsp;YouTube</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown-menu-row">
                      <h3><span><i class="fas fa-fw fa-user-tie"></i>&nbsp;Authors</span></h3>
                      <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <ul>
                              <li><a href="https://articles.stockcharts.com/author/arthur-hill/"><img src="https://d.stockcharts.com/img/bio/arthur-hill-sm.jpg" alt="Arthur Hill" class="featured-author-img" />Arthur Hill</a></li>
                              <li><a href="https://articles.stockcharts.com/author/bruce-fraser/"><img src="https://d.stockcharts.com/img/bio/bruce-fraser-sm.jpg" alt="Bruce Fraser" class="featured-author-img" />Bruce Fraser</a></li>
                              <li><a href="https://articles.stockcharts.com/author/carl-swenlin/"><img src="https://d.stockcharts.com/img/bio/carl-swenlin.jpg" alt="Carl Swenlin" class="featured-author-img" />Carl Swenlin</a></li>
                              <li><a href="https://articles.stockcharts.com/author/chip-anderson/"><img src="https://d.stockcharts.com/img/bio/chip-anderson-sm.jpg" alt="Chip Anderson" class="featured-author-img" />Chip Anderson</a></li>
                              <li><a href="https://articles.stockcharts.com/author/david-keller/"><img src="https://d.stockcharts.com/img/bio/david-keller-sm.jpg" alt="David Keller" class="featured-author-img" />David Keller</a></li>
                              <li><a href="https://articles.stockcharts.com/author/frank-cappelleri/"><img src="https://d.stockcharts.com/img/bio/frank-cappelleri.jpg" alt="Frank Cappelleri" class="featured-author-img" />Frank Cappelleri</a></li>
                              <li><a href="https://articles.stockcharts.com/author/grayson-roze/"><img src="https://d.stockcharts.com/img/bio/grayson-roze-sm.jpg" alt="Grayson Roze" class="featured-author-img" />Grayson Roze</a></li>
                              <li><a href="https://articles.stockcharts.com/author/jayanthi-gopalakrishnan/"><img src="https://d.stockcharts.com/img/bio/jayanthi-gopalakrishnan.jpg" alt="Jayanthi Gopalakrishnan" class="featured-author-img" />Jayanthi Gopalakrishnan</a></li>
                              <li><a href="https://articles.stockcharts.com/author/joe-rabil/"><img src="https://d.stockcharts.com/img/bio/joe-rabil.jpg" alt="Joe Rabil" class="featured-author-img" />Joe Rabil</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <ul>
                              <li><a href="https://articles.stockcharts.com/author/julius-de-kempenaer/"><img src="https://d.stockcharts.com/img/bio/julius-de-kempenaer-sm.jpg" alt="Julius de Kempenaer" class="featured-author-img" />Julius de Kempenaer</a></li>
                              <li><a href="https://articles.stockcharts.com/author/karl-montevirgen/"><img src="https://d.stockcharts.com/img/bio/karl-montevirgen.jpg" alt="Karl Montevirgen" class="featured-author-img" />Karl Montevirgen</a></li>
                              <li><a href="https://articles.stockcharts.com/author/larry-williams/"><img src="https://d.stockcharts.com/img/bio/larry-williams-sm.jpg" alt="Larry Williams" class="featured-author-img" />Larry Williams</a></li>
                              <li><a href="https://articles.stockcharts.com/author/martin-pring/"><img src="https://d.stockcharts.com/img/bio/martin-pring.jpg" alt="Martin Pring" class="featured-author-img" />Martin Pring</a></li>
                              <li><a href="https://articles.stockcharts.com/author/mary-ellen-mcgonagle/"><img src="https://d.stockcharts.com/img/bio/mary-ellen-mcgonagle-sm.jpg" alt="Mary Ellen McGonagle" class="featured-author-img" />Mary Ellen McGonagle</a></li>
                              <li><a href="https://articles.stockcharts.com/author/mike-zaccardi/"><img src="https://d.stockcharts.com/img/bio/mike-zaccardi-sm.jpg" alt="Mike Zaccardi" class="featured-author-img" />Mike Zaccardi</a></li>
                              <li><a href="https://articles.stockcharts.com/author/milan-vaishnav/"><img src="https://d.stockcharts.com/img/bio/milan-vaishnav-sm.jpg" alt="Milan Vaishnav" class="featured-author-img" />Milan Vaishnav</a></li>
                              <li><a href="https://articles.stockcharts.com/author/tom-bowley/"><img src="https://d.stockcharts.com/img/bio/tom-bowley-sm.jpg" alt="Tom Bowley" class="featured-author-img" />Tom Bowley</a></li>
                              <li><a href="https://articles.stockcharts.com/author/tony-zhang/"><img src="https://d.stockcharts.com/img/bio/tony-zhang.jpg" alt="Tony Zhang" class="featured-author-img" />Tony Zhang</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="dashboard">
                  <a href="https://stockcharts.com/panels/">Dashboard</a>
                </li>

              </ul>
              <!-- Right-aligned Menus -->
              <ul class="nav navbar-nav sitelinks pull-right">
                <!-- ChartSchool Dropdown -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    ChartSchool <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="dropdown-menu">
                    <div class="dropdown-menu-row">
                      <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-books"></i>&nbsp;Table of Contents</span></h3>
                            <ul>
                              <li><a href="https://chartschool.stockcharts.com">All ChartSchool Articles</a></li>
                              <li><a href="https://chartschool.stockcharts.com/table-of-contents/overview">What Is Technical Analysis?</a></li>
                              <li><a href="https://chartschool.stockcharts.com/table-of-contents/chart-analysis">About Chart Analysis</a></li>
                              <li><a href="https://chartschool.stockcharts.com/table-of-contents/technical-indicators-and-overlays">Technical Indicators</a></li>
                              <li><a href="https://chartschool.stockcharts.com/table-of-contents/market-indicators">Market Indicators</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="fas fa-fw fa-info-circle"></i>&nbsp;Helpful Resources</span></h3>
                            <ul>
                              <li><a href="https://chartschool.stockcharts.com/table-of-contents/glossary">Glossary</a></li>
                              <li><a href="https://chartschool.stockcharts.com/table-of-contents/index-and-market-indicator-catalog">Index Catalog</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="fas fa-fw fa-pen-nib"></i>&nbsp;Timeless Wisdom</span></h3>
                            <ul>
                              <li><a href="https://articles.stockcharts.com/author/gatis-roze/">Gatis Roze: The Traders Journal</a></li>
                              <li><a href="https://articles.stockcharts.com/author/greg-morris/">Greg Morris: Dancing With The Trend</a></li>
                              <li><a href="https://articles.stockcharts.com/author/john-murphy/">John Murphy: The Market's Message</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- Help Dropdown -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    Help <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-menu-row">
                      <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="fas fa-fw fa-info-circle"></i>&nbsp;Helpful Resources</span></h3>
                            <ul>
                              <li><a href="https://help.stockcharts.com"><i class="far fa-fw fa-life-ring"></i>&nbsp;&nbsp;Support Center</a></li>
                              <li><a href="https://stockcharts.com/support/chat.html"><i class="fas fa-fw fa-question-circle"></i>&nbsp;&nbsp;Ask a Question</a></li>
                              <li><a href="https://stockcharts.com/support/techsupport.html"><i class="fas fa-fw fa-bug"></i>&nbsp;&nbsp;Report a Problem</a></li>
                              <li><a href="https://stockcharts.com/sitemap.html"><i class="far fa-fw fa-map"></i>&nbsp;&nbsp;Site Map</a></li>
                              <li><a href="https://status.stockcharts.com"><i class="fas fa-fw fa-signal-alt"></i>&nbsp;&nbsp;System Status</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-lightbulb"></i>&nbsp;Useful Info</span></h3>
                            <ul>
                              <li><a href="https://help.stockcharts.com/learning-more/frequently-asked-questions"><i class="far fa-fw fa-question-circle"></i>&nbsp;&nbsp;FAQs</a></li>
                              <li><a href="https://stockcharts.com/new/"><i class="fal fa-fw fa-gift"></i>&nbsp;&nbsp;"What's New"</a></li>
                              <li><a href="https://stockcharts.com/welcome/"><i class="far fa-fw fa-book-spells"></i>&nbsp;&nbsp;"Getting Started" Series</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-menu-column-group">
                            <h3><span><i class="far fa-fw fa-spell-check"></i>&nbsp;Symbols on StockCharts</span></h3>
                            <ul>
                              <li><a href="https://stockcharts.com/freecharts/catalog/"><i class="far fa-fw fa-book-open"></i>&nbsp;&nbsp;Symbol Catalog</a></li>
                              <li><a href="https://stockcharts.com/support/symbolrequest.html"><i class="far fa-fw fa-comment-plus"></i>&nbsp;&nbsp;Request a Symbol</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div id="nav-siteSearch-wrap">
                <form id="nav-siteSearch" role="search" action="https://stockcharts.com/search/">
                  <input type="search" id="nav-siteSearch-input" placeholder="Search StockCharts" name="q" required="" aria-label="Search StockCharts">
                  <input type="submit" id="nav-siteSearch-submit" value="Go">
                  <span id="nav-siteSearch-icon"></span>
                </form>
              </div>

            </div><!-- end of MENU COLLAPSE -->
          </div><!-- end of NAV LOWER -->
        </div>
      </nav><!-- end of SCC NAVBAR -->
    `;

    function replaceOldNavbarWithNewNavbar() {
      const oldNavbarElement = document.querySelector('nav#scc-navbar');

      if (!oldNavbarElement) {
        console.log('Unable to replace old navbar with new navbar - no <nav id="scc-navbar"> element was found.');
        return;
      }

      const newNavbarCssStyleElement = document.createElement('style');
      newNavbarCssStyleElement.textContent = newNavbarCss;

      document.head.appendChild(newNavbarCssStyleElement);

      oldNavbarElement.outerHTML = newNavbarHtml;

      console.log('Successfully replaced old navbar with new navbar.');
    }

    function addNewSCUMenu() {
      if (typeof window.registerLoginCheckCallback !== 'function') {
        return;
      }

      window.registerLoginCheckCallback(function(isLoggedIn, name, json) {
        if (!isLoggedIn) {
          return;
        }

        // Get userId - handle both API response and mil cookie formats
        let userId = null;
        if (json) {
          if (json.member && json.member.userID) {
            userId = json.member.userID;
          } else if (json.userId) {
            userId = json.userId;
          }
        }

        if (!userId || typeof userId !== 'string') {
          return;
        }

        if (!userId.toLowerCase().endsWith('@stockcharts'+'.com')) {
          return;
        }

        // Find the ChartSchool dropdown
        const dropdowns = document.querySelectorAll('#nav-lower ul.sitelinks.pull-right > li.dropdown');
        let chartSchoolDropdown = null;
        let chartSchoolToggle = null;

        for (const dropdown of dropdowns) {
          const toggle = dropdown.querySelector('.dropdown-toggle');
          if (toggle && toggle.textContent.includes('ChartSchool')) {
            chartSchoolDropdown = dropdown;
            chartSchoolToggle = toggle;
            break;
          }
        }

        if (!chartSchoolDropdown || !chartSchoolToggle) {
          console.log('Could not find ChartSchool dropdown.');
          return;
        }

        // Change the toggle text to "Education"
        chartSchoolToggle.innerHTML = 'Education <i class="fas fa-angle-down"></i>';

        // Find the dropdown menu and replace its content with 2-column layout
        const dropdownMenu = chartSchoolDropdown.querySelector('.dropdown-menu');
        if (!dropdownMenu) {
          console.log('Could not find ChartSchool dropdown menu.');
          return;
        }

        // Create the new 2-column content
        const scuBaseUrl = 'https://scu.stockcharts' + '.com';
        const scuUrl = scuBaseUrl + '/spaces/20801241/page';
        dropdownMenu.innerHTML = `
          <div class="dropdown-menu-row">
            <div class="dropdown-menu-columns">
              <div class="dropdown-menu-column">
                <div class="dropdown-menu-column-group">
                  <h3><span><i class="far fa-fw fa-books"></i>&nbsp;ChartSchool</span></h3>
                  <ul>
                    <li><a href="https://chartschool.stockcharts.com">All ChartSchool Articles</a></li>
                    <li><a href="https://chartschool.stockcharts.com/table-of-contents/chart-analysis">About Chart Analysis</a></li>
                    <li><a href="https://chartschool.stockcharts.com/table-of-contents/technical-indicators-and-overlays">Technical Indicators</a></li>
                    <li><a href="https://chartschool.stockcharts.com/table-of-contents/market-indicators">Market Indicators</a></li>
                    <li><a href="https://chartschool.stockcharts.com/table-of-contents/glossary">Glossary</a></li>
                    <li><a href="https://chartschool.stockcharts.com/table-of-contents/index-and-market-indicator-catalog">Index Catalog</a></li>
                  </ul>
                </div>
                <div class="dropdown-menu-column-group">
                  <h3><span><i class="fas fa-fw fa-pen-nib"></i>&nbsp;Timeless Wisdom</span></h3>
                  <ul>
                    <li><a href="https://articles.stockcharts.com/author/gatis-roze/">Gatis Roze: The Traders Journal</a></li>
                    <li><a href="https://articles.stockcharts.com/author/greg-morris/">Greg Morris: Dancing With The Trend</a></li>
                    <li><a href="https://articles.stockcharts.com/author/john-murphy/">John Murphy: The Market's Message</a></li>
                  </ul>
                </div>
              </div>
              <div class="dropdown-menu-column">
                <div class="dropdown-menu-column-group">
                  <h3><span><i class="fas fa-fw fa-graduation-cap"></i>&nbsp;SCU</span></h3>
                  <ul>
                    <li><a href="${scuUrl}">StockCharts University</a></li>
                    <li><a href="${scuBaseUrl}/collections/2909175">Getting Started Courses</a></li>
                    <li><a href="${scuBaseUrl}/collections/2910426">Advanced Topics</a></li>
                    <li><a href="${scuBaseUrl}/collections/2920968">ChartCon Archives</a></li>
                    <li><a href="${scuUrl}">Expert Courseware</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `;

        console.log('Successfully transformed ChartSchool menu to Education menu with SCU column.');
      });
    }

    function insertRaptiveConsentManagementPlatformCode() {
      const cmpScript = document.createElement('script');
      cmpScript.setAttribute('type', 'text/javascript');
      cmpScript.textContent = `
        function timeZoneIsGDPR() {
          const gdprTimezones = new Set([
            "Europe/Brussels", "Europe/Sofia", "Europe/Prague", "Europe/Copenhagen", "Europe/Berlin", "Europe/Tallinn", "Europe/Dublin", "Europe/Athens", "Europe/Madrid", "Atlantic/Canary", "Europe/Paris", "Europe/Zagreb", "Europe/Rome", "Asia/Nicosia", "Europe/Riga", "Europe/Vilnius", "Europe/Luxembourg",
            "Europe/Budapest", "Europe/Malta", "Europe/Amsterdam", "Europe/Vienna", "Europe/Warsaw", "Europe/Lisbon", "Europe/Bucharest", "Europe/Ljubljana", "Europe/Bratislava", "Europe/Helsinki", "Europe/Stockholm", "Europe/London", "Europe/Zurich", "Europe/Istanbul", "Atlantic/Reykjavik", "Europe/Oslo"
          ]);

          const tz = Intl && Intl.DateTimeFormat && Intl.DateTimeFormat().resolvedOptions().timeZone;
          return tz ? gdprTimezones.has(tz) : true;
        }

        if (timeZoneIsGDPR()) {
          const s = document.createElement("script");
          s.type = "text/javascript";
          s.src = "https://cdn.consentmanager.net/delivery/js/semiautomatic.min.js";
          s.setAttribute("data-cmp-ab", "1");
          s.setAttribute("data-cmp-cdid", "f4b2eda79245a");
          s.setAttribute("data-cmp-host", "d.delivery.consentmanager.net");
          s.setAttribute("data-cmp-cdn", "cdn.consentmanager.net");
          s.setAttribute("data-cmp-codesrc", "0");
          document.head.appendChild(s);
        }
      `;

      document.head.appendChild(cmpScript);
    }

    function insertRaptiveAdCodeAndConsentManagementPlatformCode() {
      const adThriveScript = document.createElement('script');
      adThriveScript.setAttribute('data-no-optimize', '1');
      adThriveScript.setAttribute('data-cfasync', 'false');
      adThriveScript.textContent = `
        (function(w, d) {
          w.adthrive = w.adthrive || {};
          w.adthrive.cmd = w.adthrive.cmd || [];
          w.adthrive.plugin = 'adthrive-ads-manual';
          w.adthrive.host = 'ads.adthrive.com';
          var s = d.createElement('script');
          s.async = true;
          s.referrerpolicy = 'no-referrer-when-downgrade';
          s.src = 'https://' + w.adthrive.host + '/sites/689f831b5ee4397ef8739897/ads.min.js?referrer=' + w.encodeURIComponent(w.location.href) + '&cb=' + (Math.floor(Math.random() * 100) + 1);
          var n = d.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(s, n);
        })(window, document);
      `;

      document.head.appendChild(adThriveScript);
    }

    function insertRaptiveAdBlockRecoveryCode() {
      const btloaderScript = document.createElement('script');
      btloaderScript.type = 'text/javascript';
      btloaderScript.async = true;
      btloaderScript.src = 'https://btloader.com/tag?o=5698917485248512&upapi=true&domain=stockcharts.com';

      const galleryScript = document.createElement('script');
      galleryScript.textContent = '!function(){"use strict";var e;e=document,function(){var t,n;function r(){var t=e.createElement("script");t.src="https://cafemedia-com.videoplayerhub.com/galleryplayer.js",e.head.appendChild(t)}function a(){var t=e.cookie.match("(^|[^;]+)\s*__adblocker\s*=\s*([^;]+)");return t&&t.pop()}function c(){clearInterval(n)}return{init:function(){var e;"true"===(t=a())?r():(e=0,n=setInterval((function(){100!==e&&"false" !== t || c(), "true" === t && (r(), c()), t = a(), e++}), 50))}}}().init()}();';

      document.body.appendChild(btloaderScript);
      document.body.appendChild(galleryScript);
    }

    function insertRaptiveNewsletterEmailDetectionCode() {
      const newsletterEmailDetectionScript = document.createElement('script');
      newsletterEmailDetectionScript.textContent = '!function(){"use strict";function e(e){const t=e.match(/((?=([a-z0-9._!#$%+^&*()[\]<>-]+))\\2@[a-z0-9._-]+\\.[a-z0-9._-]+)/gi);return t?t[0]:""}function t(t){return e(a(t.toLowerCase()))}function a(e){return e.replace(/\\s/g,"")}async function n(e){const t={sha256Hash:"",sha1Hash:""};if(!("msCrypto"in window)&&"https:"===location.protocol&&"crypto"in window&&"TextEncoder"in window){const a=(new TextEncoder).encode(e),[n,c]=await Promise.all([s("SHA-256",a),s("SHA-1",a)]);t.sha256Hash=n,t.sha1Hash=c}return t}async function s(e,t){const a=await crypto.subtle.digest(e,t);return Array.from(new Uint8Array(a)).map(e=>("00"+e.toString(16)).slice(-2)).join("")}function c(e){let t=!0;return Object.keys(e).forEach(a=>{0===e[a].length&&(t=!1)}),t}function i(e,t,a){e.splice(t,1);const n="?"+e.join("&")+a.hash;history.replaceState(null,"",n)}var o={checkEmail:e,validateEmail:t,trimInput:a,hashEmail:n,hasHashes:c,removeEmailAndReplaceHistory:i,detectEmails:async function(){const e=new URL(window.location.href),a=Array.from(e.searchParams.entries()).map(e=>`${e[0]}=${e[1]}`);let s,o;const r=["adt_eih","sh_kit"];if(a.forEach((e,t)=>{const a=decodeURIComponent(e),[n,c]=a.split("=");if("adt_ei"===n&&(s={value:c,index:t,emsrc:"url"}),r.includes(n)){o={value:c,index:t,emsrc:"sh_kit"===n?"urlhck":"urlh"}}}),s)t(s.value)&&n(s.value).then(e=>{if(c(e)){const t={value:e,created:Date.now()};localStorage.setItem("adt_ei",JSON.stringify(t)),localStorage.setItem("adt_emsrc",s.emsrc)}});else if(o){const e={value:{sha256Hash:o.value,sha1Hash:""},created:Date.now()};localStorage.setItem("adt_ei",JSON.stringify(e)),localStorage.setItem("adt_emsrc",o.emsrc)}s&&i(a,s.index,e),o&&i(a,o.index,e)},cb:"adthrive"};const{detectEmails:r,cb:l}=o;r()}();';

      document.head.appendChild(newsletterEmailDetectionScript);
    }

    function insertAllRaptiveCode(shouldDisplayRaptiveAds) {
      if (!shouldDisplayRaptiveAds) {
        document.body.classList.add('raptive-scc-ads-disabled');
      }

      //insertRaptiveNewsletterEmailDetectionCode();

      if (shouldDisplayRaptiveAds) {
        insertRaptiveAdCodeAndConsentManagementPlatformCode();
      } else {
        insertRaptiveConsentManagementPlatformCode();
      }

      insertRaptiveAdBlockRecoveryCode();

      console.log('Successfully inserted all Raptive code into DOM.');
    }

    function initializeRaptive() {
      console.log('Initializing Raptive...');

      if (typeof window.registerLoginCheckCallback !== 'function') {
        console.log('Initializing Raptive without ads...');
        insertAllRaptiveCode(false);
        return;
      }

      console.log('Waiting to initialize Raptive until login status check is complete.');

      window.registerLoginCheckCallback(function (isLoggedIn) {
        const shouldDisplayRaptiveAds = !isLoggedIn && !!window.areRaptiveAdsEnabled;

        console.log(`Login status check complete. User is ${isLoggedIn ? 'logged-in' : 'logged-out'}.`);
        console.log(`Ads are ${!!window.areRaptiveAdsEnabled ? 'allowed' : 'not allowed'} on this specific page.`);
        console.log(`Now initializing Raptive ${shouldDisplayRaptiveAds ? 'with' : 'without'} ads...`);

        insertAllRaptiveCode(shouldDisplayRaptiveAds);
      });
    }

    function generateAndInsertFathomAnalyticsScript() {
      const fathomAnalyticsScript = document.createElement('script');
      fathomAnalyticsScript.src = 'https://cdn.usefathom.com/script.js';
      fathomAnalyticsScript.dataset.site = 'OYUKAEFW';
      fathomAnalyticsScript.defer = true;

      document.head.appendChild(fathomAnalyticsScript);

      console.log('Successfully added fathom analytics script to DOM.');
    }

    function getCurrentUrlPath() {
      let currentUrlPath = window.location.pathname;

      if (!currentUrlPath.startsWith('/')) {
        currentUrlPath = '/' + currentUrlPath;
      }

      if (!currentUrlPath.endsWith('/')) {
        currentUrlPath += '/';
      }

      return currentUrlPath;
    }

    function getShouldLoadFathomAnalytics() {
      const currentUrlPath = getCurrentUrlPath();

      for (const partialUrlPath of PARTIAL_URL_PATHS_TO_OMIT_FATHOM_ANALYTICS) {
        if (currentUrlPath.includes(partialUrlPath)) {
          return false;
        }
      }

      return true;
    }

    function executeDOMManipulations() {
      replaceOldNavbarWithNewNavbar();
      addNewSCUMenu();
      initializeRaptive();

      const shouldLoadFathomAnalytics = getShouldLoadFathomAnalytics();

      if (shouldLoadFathomAnalytics) {
        generateAndInsertFathomAnalyticsScript();
      } else {
        console.log('Fathom Analytics omitted.');
      }
    }

    function callJQueryHoldReadyMethod(shouldHoldReady) {
      if (
        typeof $ !== 'object' ||
        $ === null ||
        !('holdReady' in $) ||
        typeof $.holdReady !== 'function'
      ) {
        return;
      }

      $.holdReady(shouldHoldReady);
    }

    function doStandardPageAdjustments() {
      callJQueryHoldReadyMethod(true);
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        executeDOMManipulations();
        callJQueryHoldReadyMethod(false);
        return;
      }

      document.addEventListener('DOMContentLoaded', () => {
        executeDOMManipulations();
        callJQueryHoldReadyMethod(false);
      });
    }

    doStandardPageAdjustments();
  })();
