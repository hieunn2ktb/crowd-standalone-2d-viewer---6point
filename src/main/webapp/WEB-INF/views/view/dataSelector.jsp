<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <title>viewer</title>

    <!-- css -->
    <link rel="stylesheet" href="../css/style.css">

    <script src="/js/jquery-3.5.1.min.js"></script>
    <script src="/js/standalone.js"></script>

</head>
<body>
<div class="wrapper">
    <header class="header">
        <div class="inner">
            <div class="header-left">
                <h2 class="h2-title">Data Select</h2>
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
                            <button type="button" class="tab-btn on">Folder</button>
                        </li>
                    </ul>
                    <div>
                        <button type="button" class="btn-guide" tooltip="Guide" onclick="goToGuide()">
                            <i class="icon-guide"></i>
                        </button>
                    </div>
                </div>
                <div class="tab-content on">
                    <div class="tab-content-header">
                        <div class="file-box">
                            <i class="icon-folder"><span class="blind">folder icon</span></i>
                            <div class="file-info">
                                <label for="folderPath">Data Path</label>
                                <input id="folderPath" class="input-text" value="${dataPath.replace("\\\\","/")}" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content-body">
                        <div class="data-info">
                            <span class="total">Total<strong class="num" id="totalCount"></strong></span>
                            <button type="button" class="btn-refresh" tooltip="Click to refresh the data in the data folder." flow="left" onclick="searchData()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0441 2.37012C10.9309 2.01975 10.5552 1.82748 10.2048 1.94066C9.85444 2.05384 9.66216 2.42962 9.77535 2.77998L9.86314 3.05175C7.28847 1.89202 4.22933 2.94534 2.9288 5.48709C2.24531 6.8229 2.17972 8.31338 2.62595 9.62943C2.74418 9.97812 3.12269 10.1649 3.47138 10.0467C3.82007 9.92849 4.0069 9.54997 3.88867 9.20128C3.55336 8.21236 3.60306 7.09647 4.11577 6.09443C5.07821 4.21346 7.32476 3.41933 9.23933 4.23411L8.99012 4.31462C8.63976 4.4278 8.44749 4.80358 8.56067 5.15394C8.67385 5.5043 9.04963 5.69657 9.39999 5.58339L11.1943 5.00375C11.5447 4.89057 11.7369 4.51479 11.6238 4.16443L11.0441 2.37012ZM4.31747 13.3582C4.39343 13.7185 4.74707 13.949 5.10734 13.873C5.46761 13.797 5.69808 13.4434 5.62211 13.0831L5.56318 12.8037C8.00264 14.226 11.1551 13.4979 12.714 11.1059C13.5332 9.84881 13.7541 8.37333 13.4478 7.01788C13.3666 6.65875 13.0097 6.43341 12.6506 6.51457C12.2914 6.59573 12.0661 6.95266 12.1473 7.3118C12.3774 8.33033 12.2115 9.43492 11.5969 10.3779C10.4433 12.1481 8.12607 12.7032 6.30708 11.6929L6.56333 11.6389C6.92359 11.5629 7.15406 11.2093 7.07809 10.849C7.00213 10.4888 6.64849 10.2583 6.28822 10.3343L4.44317 10.7233C4.08291 10.7993 3.85244 11.1529 3.92841 11.5132L4.31747 13.3582Z" fill="#DEDEDE"/>
                                </svg>
                            </button>
                        </div>
                        <div class="scroll-wrap">
                            <div class="table-list table-scroll">
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
                                    <tbody id="dataList">
                                    </tbody>
                                </table>
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
                <div class="errer-msg" id="errorDiv" style="display: none"></div>
            </div>
            <div class="footer-right">
                <a href="#" class="btn-l-point" onclick="validationCheck()">data loading</a>
            </div>
        </div>
    </footer>
</div>

<div class="loading-wrap">
    <div class="dim">
        <span class="blind">dim area</span>
    </div>
    <div class="loading"></div>
</div>

</body>
</html>
<script type="text/javascript">
    const rootPath = '${dataPath}';
    let folderPath = '';

    $(document).ready(function() {
        loadingDiv(false);
        searchData()
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


    function searchData() {
        let option = new Object();
        option.url = '/view/procListOfDataset';
        option.successCallback = function(res) {
            renderData(res);
        }
        _ai.ajax.send(option);
    }

    function renderData(res){
        $('#dataList').html('');
        let html = '';
        $('#dataList').html(html);
        if(res.data && res.data.length > 0) {
            res.data.forEach(function (e, idx){
                html += `<tr>`;
                html += `    <td>`;
                html += `        <span class="radio-box">`;
                html += `            <input id="\${(idx+1)}" name="dataSeq" type="radio" class="input-radio" onclick="setData('\${e.datasetUrl}','\${e.datasetName}')">`;
                html += `            <label for="\${(idx+1)}" class="label"></label>`;
                html += `        </span>`;
                html += `    </td>`;
                html += `    <td class="text-left list" onclick="getSubfolderList('\${e.datasetUrl}','\${e.datasetName}')">\${e.datasetName}</td>`;
                html += `    <td class="text-left">\${e.issuedDatetime}</td>`;
                html += `</tr>`;
            });
            $('#totalCount').text(res.data.length);
        } else {
            html += `<tr>`;
            html += `    <td colspan="3" class="none-data">There is no data.</td>`;
            html += `</tr>`;
        }
        $('#dataList').html(html);
    }

    function getSubfolderList(datasetUrl, datasetName) {
        let param = new Object();
        if (datasetUrl == 'null') {
            param.datasetName = datasetName;
        } else {
            param.datasetName = datasetUrl + '/' + datasetName;
        }

        let option = new Object();
        option.url = '/view/procListOfSubDataset';
        option.data = param;
        option.successCallback = function(res) {
            renderData(res);
        }
        _ai.ajax.send(option);

    }

    function validationCheck() {
        if (!folderPath) {
            $('#errorDiv').show();
            $('#errorDiv').text('Select a folder to load the data into.');
            return;
        }
        let param = new Object();
        param.fileName = folderPath;

        let option = new Object();
        option.url = '/validation/checkFile';
        option.data = param;
        option.successCallback = function (res) {
            if (res.result) {
                goToDetail(folderPath);
            } else {
                $('#errorDiv').show();
                $('#errorDiv').text(res.message);
            }
        }
        _ai.ajax.send(option);
    }

    function setData(datasetUrl, folderName) {
        if (datasetUrl != 'null') {
            folderPath = datasetUrl + '/' + folderName;
        }  else {
            folderPath = folderName;
        }
    }

    function goToDetail(folderName) {
        let param = new Object();
        param.fileName = folderName;

        let option = new Object();
        option.url = '/view/procListOfClassset';
        option.data = param;
        option.successCallback = function(res) {
            if (res.result) {
                //if procListOfClassset is success, go to dataDetail
                location.href = '/view/dataDetail';
            } else {
                alert(res.message);
            }
        }
        _ai.ajax.send(option)
    }

    function goToGuide() {
        $("#frm").attr("action", "/view/guide");
        $("#frm").attr("target", "_blank");
        $("#frm").submit();
    }

</script>