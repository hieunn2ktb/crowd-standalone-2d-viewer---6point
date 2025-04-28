<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Swiper JS -->
    <script src="../js/swiper.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

    <!-- chart JS-->
    <script src="../js/aistudio.chart.js"></script>
    <script src="../js/index.js"></script>
    <script src="../js/Animated.js"></script>
    <script src="../js/percent.js"></script>
    <script src="../js/xy.js"></script>
    <script src="/js/jquery-3.5.1.min.js"></script>

    <!-- lottie JS -->
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

    <!-- css -->
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="container">

    <!-- lottie -->
    <div class="lottie-container">
        <lottie-player src="../images/logo.json" class="lottie" speed="1" autoplay></lottie-player>
        <p class="copyright">COPYRIGHT ⓒ 2019 AI-STUDIO. ALL RIGHT RESERVED</p>
    </div>

    <!-- slide -->
    <div class="swiper">
        <div class="swiper-wrapper" id="guideContents" style="display: none">
            <!-- slide01 -->
            <div class="swiper-slide">
                <div class="guide-wrapper">
                    <header class="header">
                        <div class="inner">
                            <div class="header-left">
                                <h2 class="h2-title">Data Select</h2>
                            </div>
                        </div>
                    </header>
                    <main class="main">
                        <div class="inner">
                            <div class="tab">
                                <div class="tab-header">
                                    <ul class="tab-list">
                                        <li class="tab-item">
                                            <button type="button" class="tab-btn on">Folder</button>
                                        </li>
                                    </ul>
                                    <div>
                                        <div class="guide-box left">
                                            <p class="guide-text">Click to see the guide you are currently viewing again.</p>
                                            <button type="button" class="btn-guide" tooltip="Guide">
                                                <i class="icon-guide"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content on">
                                    <div class="tab-content-header">
                                        <div class="file-box">
                                            <i class="icon-folder"><span class="blind">folder icon</span></i>
                                            <div class="file-info">
                                                <label for="">Data Path</label>
                                                <div class="guide-box top-right">
                                                    <p class="guide-text">Please put the folder you want to import<br> in the fixed path.</p>
                                                    <input id="" class="input-text" value="C:\infiniq\data.viewer\data" readonly style="opacity: 1;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-content-body">
                                        <div class="data-info">
                                            <div class="guide-box right">
                                                <p class="guide-text">The total number of imported folders is displayed.</p>
                                                <span class="total">Total<strong class="num">5</strong></span>
                                            </div>
                                            <div class="guide-box left">
                                                <p class="guide-text">Click to refresh the data in the data folder.</p>
                                                <button type="button" class="btn-refresh" tooltip="Click to refresh the data in the data folder." flow="left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0441 2.37012C10.9309 2.01975 10.5552 1.82748 10.2048 1.94066C9.85444 2.05384 9.66216 2.42962 9.77535 2.77998L9.86314 3.05175C7.28847 1.89202 4.22933 2.94534 2.9288 5.48709C2.24531 6.8229 2.17972 8.31338 2.62595 9.62943C2.74418 9.97812 3.12269 10.1649 3.47138 10.0467C3.82007 9.92849 4.0069 9.54997 3.88867 9.20128C3.55336 8.21236 3.60306 7.09647 4.11577 6.09443C5.07821 4.21346 7.32476 3.41933 9.23933 4.23411L8.99012 4.31462C8.63976 4.4278 8.44749 4.80358 8.56067 5.15394C8.67385 5.5043 9.04963 5.69657 9.39999 5.58339L11.1943 5.00375C11.5447 4.89057 11.7369 4.51479 11.6238 4.16443L11.0441 2.37012ZM4.31747 13.3582C4.39343 13.7185 4.74707 13.949 5.10734 13.873C5.46761 13.797 5.69808 13.4434 5.62211 13.0831L5.56318 12.8037C8.00264 14.226 11.1551 13.4979 12.714 11.1059C13.5332 9.84881 13.7541 8.37333 13.4478 7.01788C13.3666 6.65875 13.0097 6.43341 12.6506 6.51457C12.2914 6.59573 12.0661 6.95266 12.1473 7.3118C12.3774 8.33033 12.2115 9.43492 11.5969 10.3779C10.4433 12.1481 8.12607 12.7032 6.30708 11.6929L6.56333 11.6389C6.92359 11.5629 7.15406 11.2093 7.07809 10.849C7.00213 10.4888 6.64849 10.2583 6.28822 10.3343L4.44317 10.7233C4.08291 10.7993 3.85244 11.1529 3.92841 11.5132L4.31747 13.3582Z" fill="#259D90"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="scroll-wrap" style="padding-top: 10px;">
                                            <div class="guide-box bottom">
                                                <p class="guide-text">Select a folder to load the data into.</p>
                                                <div class="table-list">
                                                    <table>
                                                        <colgroup>
                                                            <col width="6%">
                                                            <col width="47%">
                                                            <col width="47%">
                                                        </colgroup>
                                                        <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th class="text-left">Folder Name</th>
                                                            <th class="text-left">Modified Date</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                        <span class="radio-box">
                                                                            <input id="radio01" name="" type="radio" class="input-radio" checked>
                                                                            <label for="radio01" class="label"></label>
                                                                        </span>
                                                            </td>
                                                            <td class="text-left">
                                                                <div>
                                                                    <span class="ellipsis">N2207413-230220120824-ADAS_PACK154-WD_CMR_RH</span>
                                                                </div>
                                                            </td>
                                                            <td class="text-left">2023-11-02 Thu AM11:28</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                        <span class="radio-box">
                                                                            <input id="" name="" type="radio" class="input-radio">
                                                                            <label for="" class="label"></label>
                                                                        </span>
                                                            </td>
                                                            <td class="text-left">
                                                                <div>
                                                                    <span class="ellipsis">N2207413-230220120824-ADAS_PACK154-WD_CMR_FH</span>
                                                                </div>
                                                            </td>
                                                            <td class="text-left">2023-11-03 Fri PM3:02</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                        <span class="radio-box">
                                                                            <input id="" name="" type="radio" class="input-radio">
                                                                            <label for="" class="label"></label>
                                                                        </span>
                                                            </td>
                                                            <td class="text-left">
                                                                <div>
                                                                    <span class="ellipsis">N2207413-230220120824-ADAS_PACK154-WD_CMR_RR</span>
                                                                </div>
                                                            </td>
                                                            <td class="text-left">2023-11-06 Mon PM4:05</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                        <span class="radio-box">
                                                                            <input id="" name="" type="radio" class="input-radio">
                                                                            <label for="" class="label"></label>
                                                                        </span>
                                                            </td>
                                                            <td class="text-left">
                                                                <div>
                                                                    <span class="ellipsis">N2207413-230220120824-ADAS_CMR-WD_CMR_RH</span>
                                                                </div>
                                                            </td>
                                                            <td class="text-left">2023-11-08 Wed PM8:34</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer class="footer">
                        <div class="inner">
                            <div class="footer-right">
                                <div class="guide-box left">
                                    <p class="guide-text">
                                        Selecting a folder activates the button.
                                        <em>Clicking the button exposes the class information, number of files, distribution, etc.</em>
                                    </p>
                                    <a href="dataDetail.html" class="btn-l-point">data loading</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <!-- slide02 -->
            <div class="swiper-slide">
                <div class="guide-wrapper">
                    <header class="header">
                        <div class="inner">
                            <div class="header-left">
                                <h2 class="h2-title">Data Detail</h2>
                            </div>
                        </div>
                    </header>
                    <main class="main">
                        <div class="inner">
                            <div class="tab">
                                <div class="tab-header">
                                    <ul class="tab-list">
                                        <li class="tab-item">
                                            <button type="button" class="tab-btn on" data-index="1">Folder</button>
                                        </li>
                                        <li class="tab-item">
                                            <button type="button" class="tab-btn" data-index="2">Distribution</button>
                                        </li>
                                    </ul>
                                    <div>
                                        <button type="button" class="btn-guide" tooltip="Guide">
                                            <i class="icon-guide"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="tab-content on" data-index="1">
                                    <div class="tab-content-header">
                                        <div class="file-box">
                                            <i class="icon-folder"><span class="blind">folder icon</span></i>
                                            <div class="file-info">
                                                <label for="">Data Path</label>
                                                <input id="" class="input-text" value="C:\infiniq\data.viewer\data\N2207413-230220120824-ADAS_DRV3-WD_CMR_RH" readonly>
                                            </div>
                                        </div>
                                        <div class="guide-box top" style="flex-shrink: 0;">
                                            <div class="guide-text" style="width: 400px; left: -20px;">
                                                <p>Please select the coordinate value type of the export.</p>
                                                <ul>
                                                    <li class="bul">Default: If coordinate value conversion is not made</li>
                                                    <li class="bul">Convert (90˚): When the coordinate value is converted by 90 ˚</li>
                                                </ul>
                                            </div>
                                            <div class="select-box">
                                                <label for="">Coordinate Type</label>
                                                <select name="angle" id="coordinateType">
                                                    <option value="0">Default</option>
                                                    <option value="90">Convert(90˚)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-content-body" style="overflow: inherit; height: calc(100% - 82px);">
                                        <div class="data-info line">
                                            <div class="guide-box top">
                                                <p class="guide-text">The total number of files in the<br>selected folder is displayed.</p>
                                                <span class="total">Total files<strong class="num">10,000</strong></span>
                                            </div>
                                            <div class="guide-box top-right">
                                                <p class="guide-text">The total number of objects in the<br>selected folder is displayed.</p>
                                                <span class="total">Total Objects<strong class="num">10,000</strong></span>
                                            </div>
                                        </div>
                                        <div class="guide-box bottom-right" style="height: 100%;">
                                        <p class="guide-text">The Class and Tag information for the selected folder is displayed.</p>
                                            <div class="scroll-wrap">
                                                <div class="table-wrap">
                                                    <div class="table-header">
                                                        <div class="table-header-left">
                                                            <span class="table-title">Class</span>
                                                        </div>
                                                    </div>
                                                    <div class="table-list">
                                                        <table>
                                                            <colgroup>
                                                                <col width="60px">
                                                                <col width="*">
                                                            </colgroup>
                                                            <thead>
                                                            <tr>
                                                                <th>NO</th>
                                                                <th class="text-left">CLASS</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td class="text-left">
                                                                    <div class="flex gap8">
                                                                                <span class="color-box">
                                                                                    <input type="color" name="" id="" value="#ff0000" class="input-color">
                                                                                </span>
                                                                        <span>pedestrian</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td class="text-left">
                                                                    <div class="flex gap8">
                                                                                <span class="color-box">
                                                                                    <input type="color" name="" id="" value="#FCA800" class="input-color">
                                                                                </span>
                                                                        <span>rider</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td class="text-left">
                                                                    <div class="flex gap8">
                                                                                <span class="color-box">
                                                                                    <input type="color" name="" id="" value="#FFF200" class="input-color">
                                                                                </span>
                                                                        <span>emergency_strobe_light</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="table-wrap">
                                                    <div class="table-header">
                                                        <div class="table-header-left">
                                                            <span class="table-title">Object Tag</span>
                                                        </div>
                                                    </div>
                                                    <div class="table-list">
                                                        <table>
                                                            <colgroup>
                                                                <col width="60px">
                                                                <col width="*">
                                                                <col width="32%">
                                                                <col width="32%">
                                                            </colgroup>
                                                            <thead>
                                                            <tr>
                                                                <th>NO</th>
                                                                <th>TAG</th>
                                                                <th>CLASS</th>
                                                                <th>VALUE</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td class="text-left">
                                                                    <div class="flex gap8">
                                                                                <span class="color-box">
                                                                                    <input type="color" name="" id="" value="#008000" class="input-color">
                                                                                </span>
                                                                        <span>police_motir</span>
                                                                    </div>
                                                                </td>
                                                                <td>motorcycle</td>
                                                                <td>1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td class="text-left">
                                                                    <div class="flex gap8">
                                                                                <span class="color-box">
                                                                                    <input type="color" name="" id="" value="#0000FF" class="input-color">
                                                                                </span>
                                                                        <span>seq_on</span>
                                                                    </div>
                                                                </td>
                                                                <td>emergency_strobe_light</td>
                                                                <td>1~25</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="table-wrap">
                                                    <div class="table-header">
                                                        <div class="table-header-left">
                                                            <span class="table-title">Tag</span>
                                                        </div>
                                                    </div>
                                                    <div class="table-list">
                                                        <table>
                                                            <colgroup>
                                                                <col width="60px">
                                                                <col width="*">
                                                                <col width="32%">
                                                                <col width="32%">
                                                            </colgroup>
                                                            <thead>
                                                            <tr>
                                                                <th>NO</th>
                                                                <th>TAG</th>
                                                                <th>TYPE</th>
                                                                <th>VALUE</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td class="text-left">
                                                                    <div class="flex gap8">
                                                                                <span class="color-box">
                                                                                    <input type="color" name="" id="" value="#0000FF" class="input-color">
                                                                                </span>
                                                                        <span>number</span>
                                                                    </div>
                                                                </td>
                                                                <td>select</td>
                                                                <td>Sunny, rainny</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer class="footer">
                        <div class="inner">
                            <div class="footer-left">
                                <div class="guide-box right">
                                    <p class="guide-text">
                                        Click to go to the Data Select screen.
                                        <em>The data you selected will be initialized.</em>
                                    </p>
                                    <a href="dataSelect.html" class="btn-l-base">data reset</a>
                                </div>
                            </div>
                            <div class="footer-right">
                                <div class="guide-box left">
                                    <p class="guide-text">Click to invoke a tool based on<br>each selected json file and folder.</p>
                                    <button type="button" class="btn-l-point">Data View</button>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <!-- slide03 -->
            <div class="swiper-slide">
                <div class="guide-wrapper">
                    <header class="header">
                        <div class="inner">
                            <div class="header-left">
                                <h2 class="h2-title">Data Detail</h2>
                            </div>
                        </div>
                    </header>
                    <main class="main">
                        <div class="inner">
                            <div class="tab">
                                <div class="tab-header">
                                    <ul class="tab-list">
                                        <li class="tab-item">
                                            <button type="button" class="tab-btn" data-index="1">Folder</button>
                                        </li>
                                        <li class="tab-item">
                                            <button type="button" class="tab-btn on" data-index="2">Distribution</button>
                                        </li>
                                    </ul>
                                    <div>
                                        <button type="button" class="btn-guide" tooltip="가이드">
                                            <i class="icon-guide"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="tab-content on" data-index="2">
                                    <div class="tab-content-body" style="overflow-y: initial;">
                                        <div class="scroll-wrap" style="overflow-y: initial;">
                                            <div class="flex">
                                                <div class="guide-box top-right" style="width: 40%; flex-shrink: 0;">
                                                    <p class="guide-text">Click to display the distribution chart included in that class.</p>
                                                    <div class="chart-container" style="width: 100%;">
                                                        <div id="donutChart" class="chart" style="height: 470px;"></div>
                                                    </div>
                                                </div>
                                                <div class="table-wrap" style="height: 100%;">
                                                    <div class="table-header">
                                                        <div class="table-header-right">
                                                            <div class="tooltip wide" flow="down-right">
                                                                <i class="icon-info">정보</i>
                                                                <div class="tooltip-con">
                                                                    <p>선택한 클래스와 태그의 통계를 확인할 수 있습니다.</p>
                                                                    <ul class="bullets">
                                                                        <li class="bul">Object : 선택한 오브젝트 명 표시</li>
                                                                        <li class="bul">Object Subtotal : 선택한 오브젝트의 합계 표시</li>
                                                                        <li class="bul">Tag : 선택한 오브젝트에 포함된 태그 표시</li>
                                                                        <li class="bul">Tag Detail : 태그 상세 값 표시</li>
                                                                        <li class="bul">Data QTY. : 태그가 얼마나 작업되었는지 표시</li>
                                                                        <li class="bul">Tag rate by object : 작업된 태그의 비율 표시</li>
                                                                        <li class="bul">Tag Subtotal : 작업된 오브젝트의 합계 표시</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="guide-box top-right max" style="height: calc(100% - 44px);">
                                                        <div class="guide-text" style="width: 450px;">
                                                            <p>View statistics for selected classes and tags.</p>
                                                            <ul>
                                                                <li class="bul">Object: Shows the name of the selected object</li>
                                                                <li class="bul">Object Subtotal: Shows the total of the selected objects</li>
                                                                <li class="bul">Tag: Shows the tags contained in the selected object</li>
                                                                <li class="bul">Tag Detail: Shows tag detail values</li>
                                                                <li class="bul">Data QTY. : Shows how many tags have been worked on</li>
                                                                <li class="bul">Tag rate by object: Shows the percentage of tags that have been worked on</li>
                                                                <li class="bul">Tag Subtotal: Displays the total of tagged objects.</li>
                                                            </ul>
                                                        </div>
                                                        <div class="table-list table-fixed on">
                                                            <div class="table-fixed-header"></div>
                                                            <div class="table-fixed-footer"></div>
                                                            <div class="table-fixed-body">
                                                                <table>
                                                                    <colgroup>
                                                                        <col width="25%">
                                                                        <col width="25%">
                                                                        <col width="25%">
                                                                        <col width="25%">
                                                                    </colgroup>
                                                                    <thead>
                                                                    <tr>
                                                                        <th width="25%">
                                                                            <div class="thead-text">Total Files</div>
                                                                        </th>
                                                                        <td width="25%">
                                                                            <div class="thead-text td">659,035</div>
                                                                        </td>
                                                                        <th width="25%">
                                                                            <div class="thead-text">Total Object</div>
                                                                        </th>
                                                                        <td width="25%">
                                                                            <div class="thead-text td">118,036</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="25%">
                                                                            <div class="thead-text tr2">Object</div>
                                                                        </th>
                                                                        <td width="25%">
                                                                            <div class="thead-text td tr2">vehicle</div>
                                                                        </td>
                                                                        <th width="25%">
                                                                            <div class="thead-text tr2">Object<br>Subtotal</div>
                                                                        </th>
                                                                        <td width="25%">
                                                                            <div class="thead-text td tr2">37136</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="25%">
                                                                            <div class="thead-text tr3">Tag</div>
                                                                        </th>
                                                                        <th width="25%">
                                                                            <div class="thead-text tr3">Tag Details</div>
                                                                        </th>
                                                                        <th width="25%">
                                                                            <div class="thead-text tr3">Data Qty.</div>
                                                                        </th>
                                                                        <th width="25%">
                                                                            <div class="thead-text tr3">Tag rate by object</div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td rowspan="5">Subclass</td>
                                                                        <td>normal</td>
                                                                        <td>35562</td>
                                                                        <td>0.96%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>police</td>
                                                                        <td>722</td>
                                                                        <td>0.01%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>schoolbus</td>
                                                                        <td>304</td>
                                                                        <td>0%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>firefighting</td>
                                                                        <td>172</td>
                                                                        <td>0%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>ambulance</td>
                                                                        <td>145</td>
                                                                        <td>0%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td rowspan="3">Occlustion</td>
                                                                        <td>1~25</td>
                                                                        <td>11341</td>
                                                                        <td>0.18%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>26~50</td>
                                                                        <td>7183</td>
                                                                        <td>0.011%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>51~75</td>
                                                                        <td>5209</td>
                                                                        <td>0.08%</td>
                                                                    </tr>
                                                                    </tbody>
                                                                    <tfoot>
                                                                    <tr>
                                                                        <th width="25%">
                                                                            <div class="tfoot-text">Tag Subtotal</div>
                                                                        </th>
                                                                        <td width="75%" colspan="3">
                                                                            <div class="tfoot-text td">73188</div>
                                                                        </td>
                                                                    </tr>
                                                                    </tfoot>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer class="footer">
                        <div class="inner">
                            <div class="footer-left">
                                <div class="guide-box right">
                                    <p class="guide-text">
                                        Click to go to the Data Select screen.
                                        <em>The data you selected will be initialized.</em>
                                    </p>
                                    <a href="dataSelect.html" class="btn-l-base">data reset</a>
                                </div>
                            </div>
                            <div class="footer-right">
                                <div class="guide-box left">
                                    <p class="guide-text">Click to invoke a tool based on<br>each selected json file and folder.</p>
                                    <button type="button" class="btn-l-point">Data View</button>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-btn-wrap">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="guide-btn-wrap" style="display: none" id="anymoreLookDiv">
                <span class="check-box">
                    <input id="anymoreLook" type="checkbox" name="" class="input-checkbox">
                    <label for="anymoreLook" class="label">
                        <span class="label-text">Don't look at it for 15 days</span>
                    </label>
                </span>
            <button type="button" class="btn-start btn-close" onclick="goToCollector()">START</button>
        </div>
    </div>
</div>

</body>
<script type="text/javascript">
    const COOKIE_KEY = 'GUIDE_COOKIE';

    $(document).ready(function() {
        checkAndDeleteExpiredCookie(COOKIE_KEY);
    })


    // slide
    const btnStart = document.querySelector('.btn-start');

    const options = {
        speed: 600,
        lazy: true,
        loop : false,
        autoplay: false,
        touchRatio: 0,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 슬라이드 변경 시 이벤트 처리
        on: {
            slideChange: function () {
                // 현재 슬라이드의 실제 인덱스가 2인 경우
                if (this.realIndex === 2) {
                    // btnStart 요소에서 'btn-close' 클래스 제거
                    btnStart.classList.remove('btn-close');
                } else {
                    // 현재 슬라이드의 실제 인덱스가 2가 아닌 경우
                    // btnStart 요소에 'btn-close' 클래스 추가
                    btnStart.classList.add('btn-close');
                }
            },
        }
    }
    const swiper = new Swiper(".swiper", options);

    // chart
    const chartData = [
        {category : 'vehicle', value : 31.46},
        {category : 'human', value : 18.24},
        {category : 'traffic_warning_devices', value : 12.05},
        {category : 'road_marking', value : 9.57},
        {category : 'lamp', value : 8.72},
        {category : 'two_wheeled', value : 7.35},
        {category : 'traffic_sign', value : 5.77},
        {category : 'traffic_light', value : 5.73},
        {category : 'emergency_strobe_light', value : 0.82},
        {category : 'cart', value : 0.29},
    ];

    const chartOptions = {
        option : {
            pieChart : {
                innerRadius : 75
            },
            label : {
                fontSize : 12,
            },
            tooltip : {
                text : '툴팁을넣으세요.',
            },
            appear : {
                duration : 1500,
                delay : 100,
            }
        }
    }

    const donutChart = new AistudioChart('donutChart');
    donutChart.draw(chartData, chartOptions);

    // logo splash


    function fadeOut() {
        let lottie = document.querySelector('.lottie-container');

        lottie.style.animation = 'opacity 0.7s ease-in';

        // 1초 후에 lottie를 화면에서 숨김
        setTimeout(() => {
            if (getCookie(COOKIE_KEY)) {
                lottie.style.display = 'none';
                location.href = '/view/dataSelector';
            } else {
                lottie.style.display = 'none';
            }
        }, 700);
    }

    function goToCollector() {

        let anymoreCheck = document.getElementById('anymoreLook')?.checked;

        if (anymoreCheck) {
            setCookie(COOKIE_KEY,null,15);
        }
        location.href = '/view/dataSelector';
    }

    function setCookie(name, value, days) {
        let expires = "";
        let dateStr = '';
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
            dateStr = date.toUTCString();
        }
        document.cookie = name + "=" + dateStr + expires + "; path=/";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) == 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }

        return null;
    }

    function deleteCookie(key) {
        document.cookie = key + '=; expires=0; path=/;';
    }

    function checkAndDeleteExpiredCookie(cookieName) {
        let storedCookie = getCookie(cookieName);

        if (storedCookie) {
            let cookieExpirationDate = new Date(storedCookie);
            let currentDate = new Date();
            if (currentDate.getTime() - cookieExpirationDate.getTime() >= 15 * 24 * 60 * 60 * 1000) {
                deleteCookie(cookieName);
            } else {
                window.setTimeout(fadeOut, 3500);
            }
        } else {
            window.setTimeout(fadeOut, 3500);
            $('#guideContents').show()
            $('#anymoreLookDiv').show()

        }
    }





</script>
</html>