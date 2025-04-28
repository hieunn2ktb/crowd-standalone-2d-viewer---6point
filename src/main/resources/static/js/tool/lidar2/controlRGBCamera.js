
import * as THREE from './build/three.module.js';
import { changeSvgList } from './changeSvgList.js';
import { setSvgStatus } from './initSvgViewer.js';
import { setParamsInRgbCanvas } from "./setObjectsInRgbCanvas.js";
import { objects, events, globalData } from './variables.js';


function setRGBCamera(){

    // RGB Camera가 없는 task는 return함
    if(!globalData.hasRGBCamera) return;

    // event의 handler가 setRGBCamera가 호출될때마다 셋팅되면 addEvent는 handler가 다르다고 생각하고
    // addEvent를 하나 더 추가시킨다 그래서 handler는 한번만 셋팅함
    if( events.rgbSelectChange === null){
        events.rgbSelectChange = function(e){
            changeRGBCamera();
            if(objects.svgs.length) changeSvgList();
        }    
    }

    globalData.rgbCameraTarget =  objects.rgbCameras[0].camId;

    objects.rgbCameras.forEach((object)=>{
        // option 셋팅
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(object.name + ` [${object.shortName }]`));
        rgbSelect.appendChild(option);    

        // camera 셋팅
        object.camera = new THREE.PerspectiveCamera(object.fov, object.aspect, object.near, object.far);
        object.camera.position.set( object.position[0], object.position[1], object.position[2] );
        object.camera.rotation.set( object.rotation[0], object.rotation[1], object.rotation[2] );

    });
    
    rgbSelect.removeEventListener('change', events.rgbSelectChange );
    rgbSelect.addEventListener('change', events.rgbSelectChange );

}

function changeRGBCamera(){

    // RGB Camera가 없는 task는 return함
    if(!globalData.hasRGBCamera) return;

    let index = rgbSelect.selectedIndex;

    globalData.rgbCameraTarget = objects.rgbCameras[index].camId;
    const targetPcd = objects.pcds.findIndex((pcd)=>{ return pcd.workTicketId === globalData.pcdTarget; });
    const targetRGB = objects.pcds[targetPcd].rgbImages.findIndex((rgb)=>{ return rgb.camId === globalData.rgbCameraTarget; });
    const loadedData = objects.pcds[targetPcd].rgbImages[targetRGB].loadedData;
    const imageFile = objects.pcds[targetPcd].rgbImages[targetRGB].loadedImage;

    // rgb camera가 변경되면 거기에 따른 svg 셋팅값이 변경되어야함
    setSvgStatus();

    rgbImage.src = imageFile.src;

    objects.cameras[0].position.set(
        objects.rgbCameras[index].position[0],
        objects.rgbCameras[index].position[1],
        objects.rgbCameras[index].position[2]
        );
    objects.cameras[0].rotation.set(
        objects.rgbCameras[index].rotation[0],
        objects.rgbCameras[index].rotation[1],
        objects.rgbCameras[index].rotation[2]
    );
    objects.cameras[0].fov = objects.rgbCameras[index].fov;
    objects.cameras[0].near = objects.rgbCameras[index].near;
    objects.cameras[0].far = objects.rgbCameras[index].far;


    setParamsInRgbCanvas();
}

export { setRGBCamera, changeRGBCamera }