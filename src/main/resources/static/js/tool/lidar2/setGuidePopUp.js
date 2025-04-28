
import * as THREE from "./build/three.module.js";
import { normalPopUpUI } from './normalPopUpUI.js';
import { controlPopUp } from './controlPopUp.js';
import { objects } from './variables.js';

function setGuidePopUp() {

    let imageFile;

    guidePopUpWrap.innerHTML = normalPopUpUI;
    guidePopUpWrap.style.top = "150px";
    guidePopUpWrap.style.left = "75px";

    const title = guidePopUpWrap.querySelector('.title');
    title.children[0].innerText = objects.taskInfo.guideTitle;
    const contentWrap = guidePopUpWrap.querySelector('.normalContentWrap');
    const buttonWrap = guidePopUpWrap.querySelector('.buttonWrap');

    // attach가 없는경우
    if((objects.taskInfo.desFiles !== "" && objects.taskInfo.desFiles != null) || (objects.taskInfo.attachFilePath !== "")){
        const imageLoader = new THREE.ImageLoader();
        if (objects.taskInfo.desFiles !== "" && objects.taskInfo.desFiles != null) {
            imageFile = objects.taskInfo.uploadLinkUrl + objects.taskInfo.desFiles;
        } else {
            imageFile =  objects.taskInfo.uploadLinkUrl + objects.taskInfo.attachFilePath;
        }
        imageLoader.load(imageFile,
            function ( image ) {
                makeGuideContent("image", image);
            },
            function () {
            },
            function () {
                makeGuideContent("file");
            }
        );
    }else{
        makeGuideContent("noAttachment");
    }

    controlPopUp(guidePopUpWrap);


    function makeGuideContent(sort, image){

        const div = document.createElement( 'div' );
        const p = document.createElement( 'p' );
        div.append(p);
        contentWrap.append(div);

        if(sort === "image") {
            div.classList = "htmlContent";
            p.innerHTML = objects.taskInfo.taskDescHTML.replaceAll('<br/>', '\n');
            contentWrap.append(image);
            setGuidePopUpFooter();
        }else if(sort === "file"){
            if(objects.taskInfo.taskDescHTML !== ""){
                div.classList = "htmlContent";
                p.innerHTML = objects.taskInfo.taskDescHTML.replaceAll('<br/>', '\n');
            }else{
                div.classList = "fileContent";
                p.innerHTML = objects.taskInfo.downloadFile;
            }
            setGuidePopUpFooter();
        }else if(sort === "noAttachment"){
            div.classList = "htmlContent";
            p.innerHTML = objects.taskInfo.taskDescHTML.replaceAll('<br/>', '\n');
        }

    }

    function setGuidePopUpFooter(sort) {

        const div = document.createElement( 'div' );
        const a = document.createElement( 'a' );
        div.classList = "footerFileInfo";
        div.innerText = objects.taskInfo.desOrgnFile;
        a.innerText = "download";
        a.classList = "btnDownload";
        a.addEventListener('click', function(e){
            downloadImage(imageFile, objects.taskInfo.desOrgnFile);
        });
        buttonWrap.append(div, a);

    }

    function downloadImage(url, name){
        fetch(url)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(() => alert('An error sorry'));
    }

}

export { setGuidePopUp }