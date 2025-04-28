let customTag = {};
customTag.const = {};
customTag.const.filter = {};
customTag.const.filter.projectId = {};
customTag.const.filter.projectId.local = "1661008466733c7ca6620209a11edb44d3c7c3fd8aedb/1628819359281aca3471cfbd811eb95983c7c3fd8aedb";
customTag.const.filter.projectId.dev = "1661008466733c7ca6620209a11edb44d3c7c3fd8aedb/1628819359281aca3471cfbd811eb95983c7c3fd8aedb";
customTag.const.filter.projectId.prd = "16612290532195f951857229c11edb5ad6c92bffe23fc";
customTag.init = function() {
    let isValid = false;
    let projectId = "";
    if(typeof(page.data.task.projectId) == "string") {
        projectId = page.data.task.projectId;
    } else if(typeof(page.data.param.projectId) == "string") {
        projectId = page.data.param.projectId;
    }
    let cpProjectId = "";

    if ("local".includes(page.constants.env)) {
        cpProjectId = customTag.const.filter.projectId.local;
    } else if ("dev".includes(page.constants.env)) {
        cpProjectId = customTag.const.filter.projectId.dev;
    } else if ("prd".includes(page.constants.env)) {
        cpProjectId = customTag.const.filter.projectId.prd;
    }

    if(cpProjectId.includes(projectId)) {
        isValid = true;
    }

    if(isValid) {
        page.data.task.tags.push({
            color: "#BEEB9F",
            hotkey: "alt_49",
            hotkeyName: "Alt+1",
            imgObjectNumber: "",
            matchClasses: "ALL",
            name: "roadedge",
            tagId: "T0000000000000009990",
            tagSelectValueVoList: [
                {name: 'Curb', value: 'curb', color: '', title: '0~30cm의 연석, 지하주차장 주차램프 혹은 연석 일체형 가드레일, 연석 일체형 펜스로 끝나는 도로 경계'}
                , {name: 'Occluded', value: 'occluded', color: '', title: '영상 내에서 이어져 있는 것으로 판단되지만 가려져있는 도로 경계'}
                , {name: 'Fence', value: 'fence', color: '', title: '도로 위에 설치된 펜스 및 가드레일 기둥의 밑점'}
                , {name: 'Barrier', value: 'barrier', color: '', title: '3m이하, 10m 이상의 연속된 barrier'}
                , {name: 'Barrier Group', value: 'barrier_group', color: '', title: '2개 이상 그룹으로 도로 위에 설치되어 있는 3m이하의 PE barrier 블록, 콘크리트 barrier 블록의 밑면'}
                , {name: 'Nature', value: 'nature', color: '', title: '풀, 모래로 끝나는 도로 경계'}
                , {name: 'Indoor', value: 'indoor', color: '', title: '실내주차장의 기둥 및 벽으로 끝나는 도로경계'}
                , {name: 'Wall', value: 'wall', color: '', title: '높이 3m 이상, 길이 10m이상 벽 혹은 가벽으로 끝나는 도로 경계 (건물 제외)'}
                , {name: 'Etc', value: 'etc', color: '', title: '위에서 정의하지 않은 객체로 끝나는 도로경계(건물외벽, 3m이하의 구조물, 바위 등)'}
            ],
            tagTypeCd: "PNT",
            tagValTypeCd: "30",
            valueFilterLetter: "Y",
            valueFilterNumber: "Y",
            valueFilterSpecial: "Y"
        });
    }
}