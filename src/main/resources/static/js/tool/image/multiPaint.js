let paint = {};

paint.const = {};
paint.const.pointsInterval = 3;
paint.const.drawCanvasId = "pt_canvasInput";
paint.const.resultCanvasId = "pt_canvasOutput";
paint.const.button = {};
paint.const.button.reset     = "reset";
paint.const.button.brush    = "brush";
paint.const.button.eraser   = "eraser";
paint.const.button.contours = "contours";
paint.const.button.preview = "preview";
paint.const.button.visible = "visible";
paint.const.button.restore = "restore";

paint.const.html = {};
paint.const.html.eventHandler = "<div class='paint_event_handler'></div>"
paint.const.html.cursorBrush = "<div class='paint_cursor_brush' ondragstart='return false;' ondrop='return false;'></div>";
paint.const.html.toolPopupId = "popup_paint_tool";
paint.const.html.toolPopup =
    "<div id='popup_paint_tool'>"
    +"<div class='popup_paint_header'>Painter Tools <button class='material-icons' onclick='paint.fn.stop();'>close</button></div>"
    +"<div class='paint_buttons'></div>"
    +"<div class='paint_size_slider paint_sliders' title='Size of brush'>"
    +   "<input type='number' id='configBrushSize' class='paintSliderValue' onclick='paint.fn.focusInput();' onblur='paint.fn.applyConfig(\"brushSize\", this.value, \"input\");'>"
    +"</div>"
    +"<div class='paint_opacity paint_sliders' title='Transparency control'>"
    +   "<input type='number' id='configPaintOpacity' class='paintSliderValue' onclick='paint.fn.focusInput();' onblur='paint.fn.applyConfig(\"opacity\", this.value, \"input\");'>"
    +"</div>"
    +"<div class='paint_interval_point paint_sliders' title='Adjusting the space between points forming the outline'>"
    +   "<input type='number' id='configPaintAdjust' class='paintSliderValue' onclick='paint.fn.focusInput();' onblur='paint.fn.applyConfig(\"interval\", this.value, \"input\");'>"
    +"</div>"
    +"</div>";

paint.const.brush = {};
paint.const.brush.size = 50;
paint.const.brush.color = "#ff00eb";
paint.const.brush.eraserColor = "#ffffff";
paint.const.brush.interval = 5;


paint.const.cookie = {};
paint.const.cookie.drawOpacity = "tool.image.paint.opacity";
paint.const.cookie.interval = "tool.image.paint.interval";
paint.const.cookie.brushSize = "tool.image.paint.brushSize";
paint.const.cookie.brushColor = "tool.image.paint.brushColor";

paint.data = {};
paint.data.popup = {};
paint.data.popup.parent = null;
paint.data.popup.isDragging = false;
paint.data.popup.mouseX = 0;
paint.data.popup.mouseY = 0;
paint.data.popup.popupX = 0;
paint.data.popup.popupY = 0;

paint.data.isInit = false;
paint.data.isDrawingPaint = false;
paint.data.targetImage = null;
paint.data.canvas = {};
paint.data.canvas.draw = null;
paint.data.canvas.drawCtx = null
paint.data.canvas.result = null;
paint.data.canvas.handler = null;

paint.data.draw = {};
paint.data.draw.method = paint.const.button.none
paint.data.draw.eventEnalble = false;
paint.data.draw.cursorBrush = null;
paint.data.draw.brush = null;
paint.data.draw.interval = 5;
paint.data.draw.preview = false;
paint.data.draw.opacity = 0.8;

paint.data.tool = {};
paint.data.tool.popup = null;

paint.data.return = null;

paint.lang = {};
paint.lang.button = {};
paint.lang.button.reset     = "Reset";
paint.lang.button.brush     = "Brush";
paint.lang.button.eraser    = "Eraser";
paint.lang.button.contours  = "Make object by paint";
paint.lang.button.preview   = "Preview";
paint.lang.button.visible   = "Visible";
paint.lang.button.restore   = "Restore from selected object";
paint.lang.alert = {};
paint.lang.alert.restore = "[##objectIndex#] is not an object drawn as a polygon.";

paint.fn = {};

/**
 *
 * @param {*} targetImageEl = Element ID or DOM Element
 * @param {*} option {
 *      language : {
 *          buttons : {
 *              none        : "None"
 *              , brush     : "Brush"
 *              , eraser    : "Eraser"
 *              , contours  : "Complete"
 *          }
 *      }, popup : {
 *          parent : document.body
 *      }, returnFunction : function(contoursResult){}
 *      , position: {
 *          top: 0
 *          , left: 0
 *      }
 * }
 */
paint.fn.init = function(targetImageEl, option) {
    let top = 10;
    let left = 10;
    let fileIndex = targetImageEl.split("_")[1];
    paint.data.isDrawingPaint = true;
    if(option && option.position) {
        if(option.position.left) {
            left = option.position.left;
        }
        if(option.position.top) {
            top = option.position.top;
        }
    }

    if(typeof(targetImageEl) == "string") {
        paint.data.targetImage = $("#"+targetImageEl);
    } else {
        paint.data.targetImage = $(targetImageEl)
    }
    if(paint.data.targetImage.length == 0) {
        paint.fn.log(targetImageEl);
        paint.fn.log(paint.data.targetImage);
        throw "Target Image is not exists.";
    }
    let canvas = document.createElement("CANVAS");
    paint.data.canvas.draw = $(canvas);
    paint.data.canvas.draw.prop('id', paint.const.drawCanvasId)
        .attr('width', paint.data.targetImage.get(0).naturalWidth)
        .attr('height', paint.data.targetImage.get(0).naturalHeight)
        .css("width", paint.data.targetImage.width())
        .css("height", paint.data.targetImage.height())
    ;
    paint.data.canvas.scale =  paint.data.targetImage.get(0).naturalWidth / paint.data.targetImage.width();
    paint.data.canvas.handler = $(paint.const.html.eventHandler);
    paint.data.canvas.handler
        .width(paint.data.targetImage.width())
        .height(paint.data.targetImage.height())
    ;
    let parent = paint.data.targetImage.parent();
    parent
        .append(paint.data.canvas.draw)
        .append(paint.data.canvas.handler)
    ;
    paint.data.draw.brush = new Path2D();
    paint.data.canvas.drawCtx = paint.data.canvas.draw.get(0).getContext("2d");
    paint.data.canvas.drawCtx.strokeStyle = paint.const.brush.color;
    paint.data.canvas.drawCtx.lineWidth = paint.const.brush.size;

    paint.data.canvas.draw
        .attr("ondragstart", "return false;")
        .attr("ondrop", "return false;")
    ;
    paint.data.canvas.handler.on("mousedown", function(event){
        paint.fn.log(event);
        if(event.which != 3 && event.button != 2) {
            paint.fn.eventDrawStart(event);
            paint.fn.eventDrawing(event);
        }
    });

    if(paint.data.isInit == false) {
        paint.data.isInit = true;
    } else {
        //throw "Already initialized of paint";
        paint.fn.log("Already initialized of paint. So i will reset paint.");
        $("#"+paint.const.html.toolPopupId).css("top", top).css("left", left).show();
        $("#"+paint.const.drawCanvasId).show();
        paint.fn.changeTool("brush");
        $('[data-paint-toggle="visible"]').addClass("on");
        paint.data.canvas.handler.show();
        paint.data.draw.cursorBrush.show();
        paint.data.canvas.draw
            .attr('width', paint.data.targetImage.get(0).naturalWidth)
            .attr('height', paint.data.targetImage.get(0).naturalHeight)
            .css("width", paint.data.targetImage.width())
            .css("height", paint.data.targetImage.height())
        ;
        paint.data.canvas.scale =  paint.data.targetImage.get(0).naturalWidth / paint.data.targetImage.width();
        paint.data.canvas.handler
            .width(paint.data.targetImage.width())
            .height(paint.data.targetImage.height())
        ;
        return false;
    }

    if(option) {
        if(option.returnFunction) {
            if(typeof(option.returnFunction) != "function") {
                throw "option.returnFunction must be function";
            }
            paint.data.return = option.returnFunction;
        }
        if(option.language) {
            if(option.language.buttons) {
                if(option.language.buttons.none) {
                    paint.lang.button.none = option.language.buttons.none;
                }
                if(option.language.buttons.brush) {
                    paint.lang.button.brush = option.language.buttons.brush;
                }
                if(option.language.buttons.eraser) {
                    paint.lang.button.eraser = option.language.buttons.eraser;
                }
            }
        }
        if(option.popup) {
            if(option.popup.parent) {
                if(typeof(option.popup.parent) == "string") {
                    paint.data.popup.parent = $("#"+option.popup.parent);
                } else {
                    paint.data.popup.parent = $(option.popup.parent);
                }

                if(paint.data.popup.parent.length != 1) {
                    throw "option.popup.parent is wrong value, must be dom element object or id";
                }
            }
        }
    }
    if(paint.data.popup.parent == null) {
        paint.data.popup.parent = $(document.body);
    }

    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            //setTimeout(function(){
            paint.fn.resizeCanvase();
            //}, 500);
        });
    });
    observer.observe(paint.data.targetImage.parent().get(0), { attributes : true, attributeFilter : ['style'] });

    paint.data.buttons = $(
        '<button class="material-icons on" title="'+paint.lang.button.reset+'" data-paint-button="reset" onclick="paint.fn.changeTool(\'reset\');">delete</button>'
        +'<button class="material-icons" title="'+paint.lang.button.brush+'" data-paint-button="brush" onclick="paint.fn.changeTool(\'brush\');">brush</button>'
        +'<button class="material-icons" title="'+paint.lang.button.eraser+'" data-paint-button="eraser" onclick="paint.fn.changeTool(\'eraser\');">blur_on</button>'
        +'<button class="material-icons" title="'+paint.lang.button.contours+'" data-paint-button="contours" onclick="paint.fn.changeTool(\'contours\');">auto_fix_high</button>'
        +'<button class="material-icons on" title="'+paint.lang.button.visible+'" data-paint-toggle="visible" onclick="paint.fn.setVisible();">remove_red_eye</button>'
        +'<button class="material-icons" title="'+paint.lang.button.restore+'" data-paint-toggle="visible" onclick="paint.fn.restoreObject(' + fileIndex + ');">restore</button>'
        +'<input class="colorPicker" name="colorPicker" />'
        //+'<button class="material-icons" title="'+paint.lang.button.preview+'" data-paint-toggle="preview" onclick="paint.fn.setPreview(\'preview\');">preview</button>'
    );
    paint.data.popup.parent.append(paint.const.html.toolPopup);

    $("#popup_paint_tool .paint_buttons").append(paint.data.buttons);

    $("#popup_paint_tool .popup_paint_header")
        .attr("ondragstart", "return false;")
        .attr("ondrop", "return false;")
        .on("mousedown", function(evt) {
            paint.fn.log("paint popup move start");
            paint.data.popup.isDragging = true;
            paint.data.popup.mouseX = evt.pageX;
            paint.data.popup.mouseY = evt.pageY;
            paint.data.popup.popupX = $("#popup_paint_tool").position().left;
            paint.data.popup.popupY = $("#popup_paint_tool").position().top;
        });
    $(window).on("mouseup", function(evt) {
        paint.fn.log("mouseup, type of paint popup move");
        if(paint.data.popup.isDragging) {
            paint.data.popup.isDragging = false;
        }
    }).on("mousemove", function(evt) {
        //paint.fn.log("move, type of paint popup move");
        if(paint.data.popup.isDragging) {
            let x = evt.pageX - paint.data.popup.mouseX;
            let y = evt.pageY - paint.data.popup.mouseY;
            $("#popup_paint_tool")
                .css("top", paint.data.popup.popupY + y)
                .css("left", paint.data.popup.popupX + x)
            ;
        }
    });
    $(document.body)
        .attr("ondragstart", "return false;")
        .attr("ondrop", "return false;")
    ;
    $(window).on("mousemove", function(evt){
        //paint.fn.log(evt.originalEvent.path);
        if(evt.originalEvent.path.includes(paint.data.canvas.handler.get(0))) {
            paint.fn.eventDrawing(evt);
        }
    });
    $(window).on("mouseup", function(evt) {
        paint.fn.log("mouseup, type-1");
        paint.fn.eventDrawStop(evt);
    });

    paint.const.brush.size = _common.cookie.get(paint.const.cookie.brushSize, paint.const.brush.size);
    $("#popup_paint_tool .paint_size_slider").slider({
        min: 1
        , max: 100
        , value : paint.const.brush.size
        , step: 1
        , slide: function( event, ui ) {
            paint.fn.applyConfig("brushSize", ui.value);
        }
    }).on("keydown", paint.fn.enterKeyBlur);
    paint.fn.applyConfig("brushSize", paint.const.brush.size);

    paint.data.draw.interval = _common.cookie.get(paint.const.cookie.interval, paint.data.draw.interval);
    $("#popup_paint_tool .paint_interval_point").slider({
        min: 1
        , max: 100
        , value : paint.data.draw.interval
        , step: 1
        , slide: function( event, ui ) {
            paint.fn.applyConfig("interval", ui.value);
        }
    }).on("keydown", paint.fn.enterKeyBlur);
    paint.fn.applyConfig("interval", paint.data.draw.interval);

    paint.data.draw.opacity = _common.cookie.get(paint.const.cookie.drawOpacity, paint.data.draw.opacity);
    $("#popup_paint_tool .paint_opacity").slider({
        min: 1
        , max: 100
        , step: 1
        , value : paint.data.draw.opacity * 100
        , slide: function( event, ui ) {
            paint.fn.applyConfig("opacity", parseInt(ui.value));
        }
    }).on("keydown", paint.fn.enterKeyBlur);
    paint.fn.applyConfig("opacity", paint.data.draw.opacity * 100);

    paint.const.brush.color = _common.cookie.get(paint.const.cookie.brushColor, paint.const.brush.color);
    $("#popup_paint_tool .colorPicker").minicolors({
        control: 'hue',
        defaultValue: paint.const.brush.color,
        format: 'hex',
        keywords: '',
        inline: false,
        letterCase: 'lowercase',
        opacity: false,
        position: 'bottom',
        swatches: [],
        change: function(value, opacity) {
            if(paint.data.draw.cursorBrush) {
                paint.data.draw.cursorBrush.css("background-color", value);
            }
            paint.const.brush.color = value;
            _common.cookie.set(paint.const.cookie.brushColor, paint.const.brush.color);
        },
        theme: 'bootstrap'
    });
    $("#"+paint.const.html.toolPopupId).css("top", top).css("left", left).show();
    paint.fn.resizeCanvase();
    paint.fn.changeTool("brush");
}
paint.fn.resizeCanvase = function() {
    paint.data.canvas.draw
        .css("width", paint.data.targetImage.width())
        .css("height", paint.data.targetImage.height())
    ;
    paint.data.canvas.scale =  paint.data.targetImage.get(0).naturalWidth / paint.data.targetImage.width();
    paint.data.canvas.scaleRev =  paint.data.targetImage.width() / paint.data.targetImage.get(0).naturalWidth;
    paint.data.canvas.handler
        .width(paint.data.targetImage.width())
        .height(paint.data.targetImage.height())
    ;
    if(paint.data.draw.cursorBrush != null) {
        paint.data.draw.cursorBrush
            .width(paint.const.brush.size * paint.data.canvas.scaleRev)
            .height(paint.const.brush.size * paint.data.canvas.scaleRev)
        ;
    }
}
paint.fn.setPreview = function() {
    let btn = $('[data-paint-toggle="preview"]');
    if(btn.hasClass("on")) {
        btn.removeClass("on")
        paint.data.draw.preview = false;
    } else {
        btn.addClass("on")
        paint.data.draw.preview = true;
    }
}
paint.fn.changeTool = function(method) {
    if($('[data-paint-button="'+method+'"]').length == 0) {
        throw method + " is not defined method.";
    }
    $("[data-paint-button]").removeClass("on");
    $('[data-paint-button="'+method+'"]').addClass("on");
    paint.data.draw.method = method;
    paint.fn.log("paint.fn.changeTool, method="+method);

    if(paint.data.draw.cursorBrush != null) {
        paint.data.draw.cursorBrush.remove();
        paint.data.draw.cursorBrush = null;
    }

    if(paint.data.draw.method == paint.const.button.reset) {
        paint.fn.reset();
    } else if(paint.data.draw.method == paint.const.button.brush) {
        paint.fn.log("init method, brush");
        paint.data.draw.cursorBrush = $(paint.const.html.cursorBrush);
        paint.data.targetImage.parent().append(paint.data.draw.cursorBrush);
        paint.data.draw.cursorBrush
            .width(paint.const.brush.size * paint.data.canvas.scaleRev)
            .height(paint.const.brush.size * paint.data.canvas.scaleRev)
            .css('background-color', paint.const.brush.color)
        //.css('border-radius', "50%")
        ;
    } else if(paint.data.draw.method == paint.const.button.eraser) {
        paint.fn.log("init method, brush");
        paint.data.draw.cursorBrush = $(paint.const.html.cursorBrush);
        paint.data.targetImage.parent().append(paint.data.draw.cursorBrush);
        paint.data.draw.cursorBrush
            .width(paint.const.brush.size * paint.data.canvas.scaleRev)
            .height(paint.const.brush.size * paint.data.canvas.scaleRev)
            .css('background-color', paint.const.brush.eraserColor)
        //.css('border-radius', "0px")
        ;
    } else if(paint.data.draw.method == paint.const.button.contours) {
        paint.fn.contours(false);
    }
}

paint.fn.eventDrawStart = function(evt) {
    if(paint.data.draw.method == paint.const.button.brush) {
        paint.data.draw.eventEnalble = true;
        paint.data.draw.cursorBrush.css('background-color', paint.const.brush.color);
    } else if(paint.data.draw.method == paint.const.button.eraser) {
        paint.data.draw.eventEnalble = true;
        paint.data.draw.cursorBrush.css('background-color', paint.const.brush.eraserColor);
    }
}
paint.fn.eventDrawStop = function(evt) {
    paint.data.draw.eventEnalble = false;
}

paint.fn.eventDrawing = function(evt) {
    if(paint.data.draw.method == paint.const.button.brush
        || paint.data.draw.method == paint.const.button.eraser) {
        paint.data.draw.cursorBrush
            .css('top', evt.offsetY - (paint.const.brush.size / 2 * paint.data.canvas.scaleRev))
            .css('left', evt.offsetX - (paint.const.brush.size / 2 * paint.data.canvas.scaleRev))
        ;
    }
    if(paint.data.draw.eventEnalble) {
        let half = paint.const.brush.size / 2
        let mouse = paint.fn.getMouse(evt);
        let imageAngle = $(`.drawingImage[data-file-index=${page.data.event.currentFileIndex}]`).attr("data-file-rotation");
        // 이미지가 회전 된 상태에서 paint로 오브젝트를 생성 시 회전되기 이전의 좌표로 현재의 paint 커서를 출력해주기 위해
        if (imageAngle != 0) {
            mouse = page.fn.drawing.calcRotationPoint(mouse, page.data.event.currentFileIndex, imageAngle);
        }
        if(paint.data.draw.method == paint.const.button.brush) {
            paint.data.canvas.drawCtx.beginPath();
            paint.data.canvas.drawCtx.scale(1, 1);
            paint.data.canvas.drawCtx.moveTo(0, 0);
            paint.data.canvas.drawCtx.arc(mouse.x, mouse.y, half, 0, 2 * Math.PI);
            paint.data.canvas.drawCtx.fillStyle = paint.const.brush.color;
            paint.data.canvas.drawCtx.fill();
        } else if(paint.data.draw.method == paint.const.button.eraser) {
            paint.fn.log("removing");
            //paint.data.canvas.drawCtx.clearRect(mouse.x - half, mouse.y - half, paint.const.brush.size, paint.const.brush.size);
            paint.data.canvas.drawCtx.save();
            paint.data.canvas.drawCtx.globalCompositeOperation = 'destination-out';
            paint.data.canvas.drawCtx.beginPath();
            paint.data.canvas.drawCtx.arc(mouse.x, mouse.y, half, 0, 2 * Math.PI, false);
            paint.data.canvas.drawCtx.fill();
            paint.data.canvas.drawCtx.restore();
        }
        if(paint.data.draw.preview) {
            paint.fn.contours(true);
        }
    }
}
paint.fn.getMouse = function(evt) {
    //log.info(evt, "paint.fn.getMouse");
    //let bounding = paint.data.canvas.draw.get(0).getBoundingClientRect();
    let bounding = paint.data.draw.cursorBrush.position();
    let mouse = {
        x   : (bounding.left + (paint.const.brush.size / 2 * paint.data.canvas.scaleRev)) * paint.data.canvas.scale
        , y : (bounding.top + (paint.const.brush.size / 2 * paint.data.canvas.scaleRev)) * paint.data.canvas.scale
    };
    //log.info(mouse);
    return mouse;
}

paint.fn.log = function(msg, header) {
    console.log(msg);
}

paint.fn.setVisible = function() {
    let btn = $('[data-paint-toggle="visible"]');
    if(btn.hasClass("on")) {
        btn.removeClass("on");
        $("#"+paint.const.drawCanvasId).fadeOut();
    } else {
        btn.addClass("on");
        $("#"+paint.const.drawCanvasId).fadeIn();
    }
}

paint.fn.contours = function(isPreview) {
    isPreview = isPreview === false ? false : true;
    let src = cv.imread(paint.const.drawCanvasId);
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.cvtColor(src , src , cv.COLOR_RGBA2GRAY);
    cv.threshold(src, dst, 40, 200, cv.THRESH_BINARY);

    const contours = new cv.MatVector();
    const hierarchy = new cv.Mat();
    cv.findContours(src , contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_NONE);
    cv.cvtColor(dst , dst , cv.COLOR_GRAY2RGB);

    let objectList = [];
    if(contours.size() == 0) {
        if(!isPreview) {
            page.fn.alert("Your drawing has none object.");
        }
        return false;
    }
    let tmp_points = [];
    if(contours.size() > 0) {
        for(let i = 0; i < contours.size(); i++) {
            const ci = contours.get(i);
            let idx = 0;
            let points = [];
            const max = 1500;
            paint.const.pointsInterval = Math.ceil(ci.data32S.length / max);
            paint.const.pointsInterval = Math.max(paint.const.pointsInterval, paint.data.draw.interval);
            for (let j = 0; j < ci.data32S.length; j += 2) {
                if (idx % paint.const.pointsInterval == 0) {
                    let p = [
                        ci.data32S[j]
                        , ci.data32S[j + 1]
                        , page.fn.data.createTempKey()
                    ];
                    points.push(p);
                    tmp_points.push(p);
                }
                idx++;
            }
            if(points.length > 2) {
                objectList.push(points);
            }
        }
        if(objectList.length == 0 && tmp_points.length > 2) {
            objectList.push(tmp_points);
        }
    }
    src.delete();
    dst.delete();
    contours.delete();
    hierarchy.delete();

    paint.data.temp = objectList;
    //paint.fn.drawResult();
    if(!isPreview) {
        if(paint.data.return) {
            //paint.fn.stop();
            return paint.data.return(objectList);
        } else {
            paint.fn.log("setup to option.returnFunction");
            paint.fn.log(objectList);
        }
    } else {
        log.info(points);
    }

}
paint.fn.drawResult = function() {
    if($("#"+paint.const.resultCanvasId).length == 1) {
        $("#"+paint.const.resultCanvasId).empty();
        const svgns = "http://www.w3.org/2000/svg";
        let ctx = document.getElementById(paint.const.resultCanvasId);
        let list = paint.data.temp;
        for(let i = 0; i < list.length; i++) {
            let circle = document.createElementNS(svgns, 'circle');
            circle.setAttribute("cx", list[i].x);
            circle.setAttribute("cy", list[i].y);
            circle.setAttribute("r", 1);
            ctx.appendChild(circle);
        }
    }
}

paint.fn.stop = function(isOutside) {
    if(paint.data.isInit) {
        try {
            $("#" + paint.const.html.toolPopupId).hide();
            $("#" + paint.const.drawCanvasId).remove();
            paint.data.canvas.handler.remove();
            if(paint.data.draw.cursorBrush != null) {
                paint.data.draw.cursorBrush.hide();
            }
            if (isOutside != true) {
                page.fn.drawing.startNewDrawing(page.constants.method.none);
            }
            paint.data.isDrawingPaint = false;
        } catch (E) {
            log.error(E, "paint.fn.stop");
        }
    }
}

paint.fn.reset = function() {
    let ctx = paint.data.canvas.draw.get(0).getContext("2d");
    ctx.clearRect(0, 0, parseInt(paint.data.canvas.draw.attr("width")), parseInt(paint.data.canvas.draw.attr("height")));
}

paint.fn.applyConfig = function(type, value, origin) {
    origin = _common.isEmpty(origin) ? "slider" : origin;
    try {
        parseInt(value)
    } catch (e) {
        value = "50";
    }
    if(value == "") {
        value = "50";
    } else if(parseInt(value) < 1) {
        value = "1";
    } else if(parseInt(value) > 100) {
        value = "100";
    }
    paint.const.brush.color = _common.cookie.get(paint.const.cookie.brushColor, paint.const.brush.color);
    paint.data.draw.opacity = _common.cookie.get(paint.const.cookie.drawOpacity, paint.data.draw.opacity);
    paint.data.draw.interval = _common.cookie.get(paint.const.cookie.interval, paint.data.draw.interval);
    if(type == "opacity") {
        paint.data.draw.opacity = Math.round(parseInt( value )) / 100;
        paint.data.canvas.draw.css("opacity", paint.data.draw.opacity);
        _common.cookie.set(paint.const.cookie.drawOpacity, paint.data.draw.opacity);
        $("#configPaintOpacity").val(Math.round(paint.data.draw.opacity * 100));
        if(origin == "input") {
            $("#popup_paint_tool .paint_opacity").slider('value', Math.round(paint.data.draw.opacity * 100));
        }
    } else if(type == "interval") {
        paint.data.draw.interval = parseInt( value );
        _common.cookie.set(paint.const.cookie.interval, paint.data.draw.interval);
        $("#configPaintAdjust").val(paint.data.draw.interval);
        if(origin == "input") {
            $("#popup_paint_tool .paint_interval_point").slider('value', paint.data.draw.interval);
        }
    } else if(type == "brushSize") {
        paint.const.brush.size = parseInt( value );
        if(paint.data.draw.cursorBrush != null) {
            paint.data.draw.cursorBrush
                .width(paint.const.brush.size * paint.data.canvas.scaleRev)
                .height(paint.const.brush.size * paint.data.canvas.scaleRev)
            ;
        }
        _common.cookie.set(paint.const.cookie.brushSize, paint.const.brush.size);
        $("#configBrushSize").val(paint.const.brush.size);
        if(origin == "input") {
            $("#popup_paint_tool .paint_size_slider").slider('value', paint.const.brush.size);
        }
    }
    page.data.event.isValidHotkey = true;
}

paint.fn.focusInput = function () {
    page.data.event.isValidHotkey = false;
}
paint.fn.enterKeyBlur = function(event) {
    let key = _common.getKeyboard(event);
    log.info(this);
    if(key.keyName == "ENTER") {
        $(this).children("input").blur();
    }
}

paint.fn.restoreObject = function(fileIndex) {
    if ($("#rootObjectList .colorIcon.checked").length == 0) {
        page.fn.alert(page.message.copyNoSelected);
        return false;
    }
    $("#rootObjectList .colorIcon.checked").each(function(idx, selected){
        let object = page.fn.data.getObject(fileIndex, $(selected).attr("imgobjectnumber"));
        log.info(object);
        if(object.objectTypeCd == "polygon") {
            paint.data.canvas.drawCtx.beginPath();
            paint.data.canvas.drawCtx.fillStyle = paint.const.brush.color;
            object.location.forEach(function(point, index){
                if(index == 0) {
                    paint.data.canvas.drawCtx.moveTo(point[0], point[1]);
                }
                paint.data.canvas.drawCtx.lineTo(point[0], point[1]);
            });
            paint.data.canvas.drawCtx.closePath();
            paint.data.canvas.drawCtx.fill();
        } else {
            page.fn.alert(_common.template.parseMessage(paint.lang.alert.restore, {"objectIndex" : object.orderSeq}));
        }
    });
}

paint.fn.isPainting = function() {
    if($("#popup_paint_tool").is(":visible")) {
        return true;
    } else {
        return false;
    }
}