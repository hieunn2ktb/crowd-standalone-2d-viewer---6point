<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <title>viewer</title>

    <script src="/js/jquery-3.5.1.min.js"></script>
    <script src="/js/standalone.js"></script>
    <script src="../js/aistudio.chart.js"></script>
    <script src="../js/index.js"></script>
    <script src="../js/Animated.js"></script>
    <script src="../js/percent.js"></script>
    <script src="../js/xy.js"></script>

    <!-- css -->
    <link rel="stylesheet" href="../css/style.css">

</head>
<body>
<div class="loading-wrap">
    <div class="dim">
        <span class="blind">dim area</span>
    </div>
    <div class="loading"></div>
</div>

<div class="wrapper">
    <header class="header">
        <div class="inner">
            <div class="header-left">
                <h2 class="h2-title">Data Detail</h2>
            </div>
        </div>
    </header>
    <form:form id="frm" name="frm" method="post">
        <input type="hidden" name="loadingYn" value="false">
        <input type="hidden" name="option" value="blank">
    </form:form>

    <main class="main">
        <div class="inner">
            <div class="tab">
                <div class="tab-header">
                    <ul class="tab-list">
                        <li class="tab-item">
                            <button type="button" class="tab-btn on" data-index="1">Folder</button>
                        </li>
                        <li class="tab-item">
                            <button type="button" class="tab-btn" data-index="2" onclick="renderChart()">Distribution</button>
                        </li>
                    </ul>
                    <div>
                        <button type="button" class="btn-guide" tooltip="Guide" onclick="goToGuide()" flow="down">
                            <i class="icon-guide">Guide</i>
                        </button>
                    </div>
                </div>

                <!-- Folder -->
                <div class="tab-content on" data-index="1">
                    <div class="tab-content-header">
                        <div class="file-box">
                            <i class="icon-folder"><span class="blind">folder icon</span></i>
                            <div class="file-info">
                                <label for="folderPathTab">Folder Path</label>
                                <input id="folderPathTab" class="input-text" value="${rootPath.concat(fileName).replace("\\\\","/").replace("\\","/")}" readonly>
                            </div>
                        </div>
                        <div class="select-box">
                            <label for="coordinateType">Coordinate Type</label>
                            <select name="angle" id="coordinateType">
                                <option value="0">Default</option>
                                <option value="90">Convert(90˚)</option>
                            </select>
                        </div>
                    </div>
                    <div class="tab-content-body">
                        <div class="data-info line">
                            <span class="total">Total files<strong class="num" id="fileCount">${totalFiles}</strong></span>
                            <span class="total">Total Objects<strong class="num" id="objectCount">${totalObjects}</strong></span>
                        </div>
                        <div class="scroll-wrap">
                            <div class="table-wrap">
                                <div class="table-header">
                                    <div class="table-header-left">
                                        <span class="table-title">Class</span>
                                    </div>
                                </div>
                                <div class="table-list table-select">
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
                                        <tbody id="classJoinDataList">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="table-wrap">
                                <div class="table-header">
                                    <div class="table-header-left">
                                        <!-- 231123 Object/Point Tag => Object Tag 변경 -->
                                        <span class="table-title">Object Tag</span>
                                    </div>
                                </div>
                                <div class="table-list">
                                    <table>
                                        <!-- 231123 colgroup 변경 -->
                                        <colgroup>
                                            <col width="60px">
                                            <col width="32%">
                                            <col width="*%">
                                        </colgroup>
                                        <thead>
                                        <tr>
                                            <!-- 231123 type 삭제 -->
                                            <th>NO</th>
                                            <th>TAG</th>
                                            <th>VALUE</th>
                                        </tr>
                                        </thead>
                                        <tbody id="objectTagList">
                                        <tr>
                                            <td colspan="6" class="none-data">Please choose a class</td>
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
                                        </colgroup>
                                        <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>TAG</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tagList">
                                        <!-- 데이터가 없는 경우 -->
                                        <tr>
                                            <td colspan="4" class="none-data">There is no data.</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Distribution -->
                <div class="tab-content" data-index="2">
                    <div class="tab-content-body">
                        <div class="scroll-wrap">
                            <div class="flex">
                                <div class="chart-container">
                                    <div id="donutChart" class="chart"></div>
                                </div>
                                <div class="table-wrap" style="height: 100%;">
                                    <div class="table-header">
                                        <div class="table-header-right">
                                            <div class="tooltip wide" flow="down-right">
                                                <i class="icon-info">정보</i>
                                                <div class="tooltip-con">
                                                    <p>View statistics for selected classes and tags.</p>
                                                    <ul class="bullets">
                                                        <li class="bul">Object: Shows the name of the selected object</li>
                                                        <li class="bul">Object Subtotal: Shows the total of the selected objects</li>
                                                        <li class="bul">Tag: Shows the tags contained in the selected object</li>
                                                        <li class="bul">Tag Detail: Shows tag detail values</li>
                                                        <li class="bul">Data QTY. : Shows how many tags have been worked on</li>
                                                        <li class="bul">Tag rate by object: Shows the percentage of tags that have been worked on</li>
                                                        <li class="bul">Tag Subtotal: Displays the total of tagged objects.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-list table-fixed">
                                        <div class="table-fixed-header"></div>
                                        <div class="table-fixed-footer"></div>
                                        <div class="table-fixed-body">
                                            <table id="selectivityTable">
                                                <!-- 231127 colgroup 추가 -->
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
                                                        <div class="thead-text td">${totalFiles}</div>
                                                    </td>
                                                    <th width="25%">
                                                        <div class="thead-text">Total Object</div>
                                                    </th>
                                                    <td width="25%">
                                                        <div class="thead-text td">${totalObjects}</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="25%">
                                                        <div class="thead-text tr2">Object</div>
                                                    </th>
                                                    <td width="25%">
                                                        <div class="thead-text td tr2" id="selectObject">0</div>
                                                    </td>
                                                    <th width="25%">
                                                        <div class="thead-text tr2">Object<br>Subtotal</div>
                                                    </th>
                                                    <td width="25%">
                                                        <div class="thead-text td tr2" id="objectSubTotal">0</div>
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
                                                <tbody id="selectivityData">
                                                </tbody>
                                                <tfoot>
                                                <!-- 231127 class="thead-text" => class="tfoot-text" 변경 -->
                                                <tr>
                                                    <th width="25%">
                                                        <div class="tfoot-text">Tag Subtotal</div>
                                                    </th>
                                                    <td width="75%" colspan="3">
                                                        <div class="tfoot-text td" id="tagSubTotal"></div>
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
    </main>

    <footer class="footer">
        <div class="inner">
            <div class="footer-left">
                <a href="#" class="btn-l-base" onclick="goToList()">data reset</a>
            </div>
            <div class="footer-right">
                <button type="button" class="btn-l-point" onclick="openTool();">Data View</button>
                <input type="hidden" id="projectId" name="projectId">
                <input type="hidden" id="taskId" name="taskId">
            </div>
        </div>
    </footer>
</div>

<script type="text/javascript">

    $(document).ready(function (){
        tabButtons.forEach(tabButton => {
            tabButton.addEventListener('click', handleTabClick);
        });
        window.addEventListener('resize', function() {
            fixTable();
        })

    })

    // tab menu
    let tabButtons = document.querySelectorAll('.tab-btn');
    let tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', handleTabClick);
    });

    function handleTabClick(e) {
        let index = e.currentTarget.dataset.index;
        tabButtons.forEach(tabButton => {
            tabButton.classList.remove('on');
        });

        e.currentTarget.classList.add('on');

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('on');
        });

        document.querySelector(`.tab-content[data-index="\${index}"]`).classList.add('on');

        // scrollbar가 생겼을 때 table-fixed-body 너비 조정
        // if(document.querySelector(`.tab-content[data-index="2"]`).classList.contains('on')) {
        //     fixTable();
        // }
    }

    function fixTable() {
        // 모든 tbody tr 요소를 선택하고 높이를 더함
        const totalHeight = Array.from(document.querySelectorAll('.table-fixed tbody tr')).reduce((acc, el) => acc + el.offsetHeight, 0);
        // .table-fixed-body 요소의 높이
        const bodyHeight = document.querySelector('.table-fixed-body').offsetHeight;

        // 전체 높이가 .table-fixed-body의 높이보다 크거나 같으면
        if (totalHeight >= bodyHeight) {
            document.querySelector('.table-fixed').classList.add('on');
        } else document.querySelector('.table-fixed').classList.remove('on');
    }

    // CHART

    function goToList() {
        _ai.message.confirm('Click to go to the Data Select screen. ' + '\n' +
            '- The data you selected will be initialized.',function() {
            location.href = '/view/dataSelector';
        })
    }
</script>
<script type="text/javascript">

    $(document).ready(function() {
        loadingDiv(false);

        searchData();
        renderChart();
    })

    let dimmCount = 0;
    function loadingDiv(status) {
        if(status) {
            dimmCount++;
            $('.loading-wrap').addClass("on");
        } else {
            if(dimmCount > 1) {
                dimmCount--;
            } else {
                if(dimmCount == 1) {
                    dimmCount--;
                }
                $('.loading-wrap').removeClass("on");
            }
        }
    }

    function searchData(click) {
        let param = new Object();
        param.fileName = '${fileName}';

        let option = new Object();
        option.data = param;
        option.url = '/view/procListOfClassset';
        option.successCallback = function(res) {
            if (res.result) {
                let data = res.data;

                $("#projectId").val(res.data.projectId);
                $("#taskId").val(res.data.taskId);

                renderData(data,click);
                renderImgData(data);
            } else {

            }
        }
        _ai.ajax.send(option);
    }

    function reSearchData (classId) {
        let param = new Object();
        param.classId = classId;
        param.folderPath = $("#folderPathTab").val();

        let option = new Object();
        option.data = param;
        option.url = '/view/procListOfTag';
        option.successCallback = function(res) {
            if (res.result) {
                let data = res.data;
                reRenderData(data);
            } else {

            }
        }
        _ai.ajax.send(option);
    }

    function reRenderData(data) {
        let html = '';
        let tagArr = data;
        if (tagArr.length > 0) {
            tagArr.forEach((d,idx) => {
                let tagValue = new Set();
                tagValue.add(d.tagValueList)
                html += `<tr>`;
                html += `    <td>\${idx+1}</td>`;
                html += `    <td class="text-left">`;
                html += `        <div class="flex gap8">`;
                html += `        <span class="color-box">`;
                html += `            <input type="color" name="" id="" value="\${d.color}" class="input-color">`;
                html += `        </span>`;
                html += `            <span>\${d.tagName}</span>`;
                html += `        </div>`;
                html += `    </td>`;
                html += `    <td>\${Array.from(tagValue).join(',')}</td>`;
                html += `</tr>`;
            })
        } else {
            html += `<tr>`;
            html += `    <td colspan="6" class="none-data">There is no data.</td>`;
            html += `</tr>`;
        }
        $('#objectTagList').html(html);
    }

    function renderData(data,option = undefined) {
        let html = '';
        let classJoinArr = data.classVoList;
        if (classJoinArr.length > 0) {
            classJoinArr.forEach((d,idx) => {
                html += `<tr class="selectable">`;
                html += `    <td>\${idx+1}</td>`;
                html += `    <td class="text-left" onclick="reSearchData('\${d.classId}')">`;
                html += `        <div class="flex gap8">`;
                html += `        <span class="color-box">`;
                html += `            <input type="color" name="" id="" value="\${d.color}" class="input-color" disabled>`;
                html += `        </span>`;
                html += `            <span>\${d.className}</span>`;
                html += `        </div>`;
                html += `    </td>`;
                html += `</tr>`;
            })
        } else {
            html += `<tr>`;
            html += `    <td colspan="2" class="none-data">There is no data.</td>`;
            html += `</tr>`;
        }

        $('#classJoinDataList').html(html);

        $('.selectable').on('click', function() {
            $('.selectable').removeClass('selected');
            $(this).addClass('selected');
        });
    }

    function renderImgData(data) {
        let html = '';
        let tagList = data.tagList;
        if (tagList.length > 0) {
            let index = 1;
            for (const d of tagList) {
                if (d.tagTypeCd == 'IMG') {
                    html += `<tr class="selectable">`;
                    html += `    <td>\${index}</td>`;
                    html += `    <td class="text-left" onclick="reSearchData('\${d.tagId}')">`;
                    html += `        <div class="flex gap8">`;
                    html += `        <span class="color-box">`;
                    html += `            <input type="color" name="" id="" value="\${d.color}" class="input-color" disabled>`;
                    html += `        </span>`;
                    html += `            <span>\${d.tagName}</span>`;
                    html += `        </div>`;
                    html += `    </td>`;
                    html += `</tr>`;
                    index += 1;
                }
            }
        } else {
            html += `<tr>`;
            html += `    <td colspan="2" class="none-data">There is no data.</td>`;
            html += `</tr>`;
        }

        $('#tagList').html(html);
    }

    let chartData = [];
    function renderChart() {
        let param = new Object();

        let option = new Object();
        option.data = param;
        option.url = '/view/procListOfClass';
        option.successCallback = function(res) {
            if (res.result) {
                let dataObj = res.data;
                chartData = [];

                for (let key in dataObj) {
                    if (dataObj.hasOwnProperty(key)) {
                        let obj = {
                            'category' : key,
                            'value' : dataObj[key]
                        }
                        chartData.push(obj)
                    }
                }
                $('#selectObject').html('-');
                $('#objectSubTotal').html('-');

                const chartOptions = {
                    option : {
                        pieChart : {
                            innerRadius : 75
                        },
                        label : {
                            fontSize : 12,
                        },

                        tooltip : {
                            text : `[bold]{category}[/] {value} ({valuePercentTotal.formatNumber('0.00')}%)`
                        },
                        appear : {
                            duration : 1500,
                            delay : 100,
                        },
                        methods : {
                            hello(category,value) {
                                $('#selectObject').html(category);
                                $('#objectSubTotal').html(value);
                                fixTable();
                                renderSelectivity('ok' , category)
                            }
                        }
                    }
                }

                const donutChart = new AistudioChart('donutChart');
                donutChart.draw(chartData, chartOptions);
                renderSelectivity()
            }
        }
        _ai.ajax.send(option);
    }

    function renderSelectivity(render = undefined, category) {
        let className = category;
        let param = new Object();
        param.className = className;

        let option = new Object();
        option.data = param;
        option.url = '/view/procListOfClassTag'
        option.successCallback = function(res) {
            let html = '';
            if (res.result && render != undefined) {
                let dataList = res.data.classTagList;
                let totalObject = 0;
                let subTotal = 0;
                dataList.forEach((d) => {
                    if (d.tagList) {
                        d.tagList.forEach((t) => {
                            totalObject += t.dataQty || 0;
                            subTotal += t.dataQty;
                        })
                    }
                })
                $('#tagSubTotal').html(subTotal);

                dataList.forEach((d) => {
                    let tagLength = 0;
                    if (d.tagList) {
                        tagLength = d.tagList.length;
                    }

                    d.tagList.forEach((t,idx) => {
                        if (idx == 0) {
                            html += `<tr>`;
                            html += `    <td rowspan="\${tagLength}">\${d.tagName}</td>`;
                            html += `    <td>\${t.tagName}</td>`;
                            html += `    <td>\${t.dataQty}</td>`;
                            html += `    <td>\${((t.dataQty/totalObject)*100).toFixed(3)}%</td>`;
                            html += `</tr>`;

                        } else {
                            html += `<tr>`;
                            html += `    <td>\${t.tagName}</td>`;
                            html += `    <td>\${t.dataQty}</td>`;
                            html += `    <td>\${((t.dataQty/totalObject)*100).toFixed(3)}%</td>`;
                            html += `</tr>`;
                        }
                    })
                })
                $('#selectivityTable').height('')
            } else if (!res.result && render != undefined) {
                html += `<tr>`;
                html += `    <td class="none-data" colspan="4">There is no data.</td>`;
                html += `</tr>`;
                $('#selectivityTable').height('100%')
            } else {
                html += `<tr>`;
                html += `    <td class="none-data" colspan="4">Please select a class.</td>`;
                html += `</tr>`;
                $('#selectivityTable').height('100%')
            }
            $('#selectivityData').html(html);
        }
        _ai.ajax.send(option);
    }

    function goToGuide() {
        $("#frm").attr("action", "/view/guide");
        $("#frm").attr("target", "_blank");
        $("#frm").submit();
    }

    // mở tool với url được chỉ định ( /annotation/tool/...)
    function openTool() {
        let projectId = $("#projectId").val();
        let taskId    = $("#taskId").val();
        let angle = $('#coordinateType').val();
        let coordinatesYn = 'N';
        if (parseInt(angle) > 0) {
            coordinatesYn = 'Y';
        }
        let url = '/annotation/tool?' + "projectId=" + projectId + "&taskId=" + taskId + "&angle=" + angle + "&coordinatesYn=" + coordinatesYn;
        window.open(url, '_blank');
    }
</script>
</body>
</html>