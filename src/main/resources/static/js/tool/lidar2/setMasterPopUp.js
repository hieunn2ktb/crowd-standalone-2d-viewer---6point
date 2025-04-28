
import { normalPopUpUI } from './normalPopUpUI.js';
import { controlPopUp } from './controlPopUp.js';
import { objects, globalData } from './variables.js';


function setMasterPopUp(controlData) {

    masterPopUpWrap.innerHTML = normalPopUpUI;
    // style을 display none으로 셋팅해서 getBounding이 안됨
    // const left = rightWrap.getBoundingClientRect().left - reviewPopUpWrap.getBoundingClientRect().width;
    const left = rightWrap.getBoundingClientRect().left - 280;
    masterPopUpWrap.style.top = "120px";
    masterPopUpWrap.style.left = left + "px";
    masterPopUpWrap.style.width = "381";

    const title = masterPopUpWrap.querySelector('.title');
    title.children[0].innerText = "Comment";
    const contentWrap = masterPopUpWrap.querySelector('.normalContentWrap');
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const button = document.createElement('button');
    const textarea = document.createElement('textarea');

    div1.classList.add("normalContentWrap");
    div1.append(textarea);

    textarea.addEventListener('focus', function (e) {
        globalData.allowInputEvent = true;
        globalData.inputTextAreaTarget = this;
    });

    textarea.addEventListener('blur', function (e) {
        globalData.allowInputEvent = false;
        globalData.inputTextAreaTarget = null;
    });

    textarea.style.resize = 'none';

    // div.innerHTML = `
    //                     File Name : 57585.039376.pcd<br>
    //                     status : Review Assign<br>
    //                     Worker/Fall Count: label20<br>
    //                     Worked Date : 2022-07-18 13:50:23<br>
    //                     Reviewer: yrin97<br>
    //                     Reviewed Date:
    //                 `;

    // div1.innerText = "Reason For NG";
    // div1.className = "subTitle";
    // div2.className = "checkBoxWrap";

    // objects.InspectErrorCodes.forEach((list)=>{
    //     const label = document.createElement( 'label' );
    //     label.className = "checkBoxItem";
    //     label.innerHTML = `
    //                     <input type="checkbox" value="${ list.value }">
    //                     ${ list.name }<br>
    //                     `;
    //     div2.append(label);
    // });

    // errorCodes는 추후에 작업해야함(2023.04.19)
    // contentWrap.append(div, div1, div2, textarea);
    // contentWrap.append(div, div1, textarea);
    button.id = 'btnFailConfirm';
    button.textContent = 'Confirm'
    button.onclick = function() {
        saveComment(this);
    };
    div2.classList.add("buttonWrap");
    div2.classList.add("single");
    div2.append(button);

    masterPopUpWrap.append(div);
    masterPopUpWrap.append(div1);
    masterPopUpWrap.append(div2);


    // const buttonWrap = masterPopUpWrap.querySelector('.buttonWrap');
    //
    // // 하단 버튼 추가
    // const button1 = document.createElement( 'button' );
    // const button2 = document.createElement( 'button' );
    // button1.innerText = "OK";
    // button2.innerText = "NG";
    // button1.id = "btnOK";
    // button2.id = "btnNG";
    // buttonWrap.append(button1, button2);
    //
    // button1.addEventListener('click',function(e){
    //     controlData("OK");
    // });
    // button2.addEventListener('click',function(e){
    //
    //     for(let i=0 ; i<div2.children.length ; i++){
    //         const input = div2.children[i].querySelector("input");
    //         if(input.checked){
    //             globalData.NGData.errorCode.push(input.value);
    //         }
    //     }
    //
    //     globalData.NGData.message = textarea.value;
    //
    //     console.log(globalData.NGData)
    //     controlData("NG");
    //     textarea.value = "";
    // });

    changeMasterPopUp();
    controlPopUp(masterPopUpWrap);


}


function changeMasterPopUp() {

    //로드할 pcd가 없는 경우 return
    if (!objects.pcds.length) {
        return;
    }

    const targetPcdIndex = objects.pcds.findIndex((pcd) => {
        return pcd.workTicketId === globalData.pcdTarget; });
    const fileName = objects.pcds[targetPcdIndex].orgnfileName;
    const status = objects.pcds[targetPcdIndex].status;
    const workedDatetime = objects.pcds[targetPcdIndex].workedDatetime;
    const reviewerId = objects.pcds[targetPcdIndex].reviewerId;
    const annotatorId = objects.pcds[targetPcdIndex].annotatorId;
    const reviewedDatetime = objects.pcds[targetPcdIndex].reviewedDatetime;

    const contentWrap = masterPopUpWrap.querySelector('.normalContentWrap');

    contentWrap.innerHTML = `
                        File Name : ${ fileName }<br>    
                    `;

}


export { setMasterPopUp ,changeMasterPopUp }