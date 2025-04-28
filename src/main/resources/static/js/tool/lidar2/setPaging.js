
import { globalData } from './variables.js';


function setPaging(data, controlData){

    // ajax에서 paging  return과 pcd list return이 따로 분리 되어 있기 때문에
    // pcd list를 위해서 삭제 함수를 사용하지 못하고 paging 관련 요소들은 여기서 삭제함
    const pagingWrapClone = [...pagingWrap.children];
    pagingWrapClone.forEach((child)=>{
        child.remove();
    });

    const total = data.totalCount;
    const perPaging = data.perPaging;
    let lastPage = globalData.currentPage * perPaging;
    (lastPage > total) ? lastPage = total : lastPage;
    const pagingMax = Math.ceil(total / perPaging);

    const span = document.createElement( 'span' );
    const select = document.createElement( 'select' );

    // span.innerHTML = `${ globalData.currentPage } ~ ${ lastPage } ( ${ total } )`;

    span.innerHTML = `${ ((globalData.currentPage-1)*perPaging) + 1 } ~ ${ lastPage } ( ${ total } )`;

    for(let i=0 ; i < pagingMax ; i++){
        const option = document.createElement("option");
        option.value = i+1;
        option.appendChild(document.createTextNode(i+1));
        select.appendChild(option);
    }

    select.selectedIndex = globalData.currentPage-1;

    pagingWrap.append(span, select);

    select.addEventListener('change', function(e){
        globalData.currentPage = this.value;
        controlData("getPcdList");
    });

}

export { setPaging }