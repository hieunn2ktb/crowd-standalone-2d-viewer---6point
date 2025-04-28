Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";

    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

HashMap = function(){ this.map = new Array(); };
HashMap.prototype = {
    getAllDataToList : function() {
        let list = [];
        for(i in this.map){
            list.push(this.map[i]);
        }
        return list;
    },
    length : function() {
        return this.keySet().length;
    },
    createKey : function() {
        return moment().format('YYYYMMDDHHmmssSSS');
    },
    getLastKey : function() {
        let keys = this.keySet();
        return keys[keys.length - 1];
    },
    getLastData : function() {
        let keys = this.keySet();
        return this.get(keys[keys.length - 1]);
    },
    put : function(key, value){
        key = key == null ? this.createKey() : key;
        key += "";
        this.map[key] = value;
    },
    get : function(key){
        key += "";
        return this.map[key];
    },
    getAll : function(){
        return this.map;
    },
    clear : function(){
        this.map = new Array();
    },
    isEmpty : function(){
        return (this.keySet().length == 0);
    },
    remove : function(key){
        key += "";
        delete this.map[key];
    },
    toString : function(){
        var temp = '';
        for(i in this.map){
            temp = temp + ',' + i + ':' +  this.map[i];
        }
        temp = temp.replace(',','');
        return temp;
    },
    keySet : function(){
        var keys = new Array();
        for(i in this.map){
            keys.push(i);
        }
        return keys;
    }
};

/**
 * 숫자 입력만 허용
 * 사용법 : $('#'+elementId).numericOnly() or $('#'+elementId).numericOnly({allow:"."}) 후자의 경우 . 를 허용하기 위한것 추가적인 허용을 해야할 경우가 있다면
 * 이 함수를 수정할여 추가할것 단 정규식때문에 아무거나 넣는 방식은 안된다
 * 이 함수는 jquery의 numeric가 한글에 대해서 적절한 반응을 하지 못하는 것때문에 만들었으며 keyup이벤트와 change이벤트에 반응한다.
 * 현재 허용 allow 목록 : {allow:".-"}
 */
$.fn.numericOnly = function(param) {
    var allowList = "\\d+";

    if(param && param.allow && param.allow.length > 0) {
        if(param.allow.indexOf(".") > -1) {
            allowList += "(\\.\\d+)?";
        }
        if(param.allow.indexOf("-") > -1) {
            allowList = "-?" + allowList;
        }
    }

    return this.each(function() {
        var target = $(this);
        var regExp = new RegExp(allowList);
        var resultArr;
        target.on("keyup change", function() {
            $(this).val($(this).val().replace(/[^\d\-\.\,]/g, ""));
        })
        .on("blur", function() {
            resultArr = regExp.exec($(this).val());
            if(_ai.common.isEmpty(resultArr)) {
                $(this).val("");
            } else {
                $(this).val(resultArr[0]);
            }

            if(_ai.common.isEmpty($(this).val())) {
                $(this).val("");
            }
        });
    });
};

_ai = {};
_ai.common = {
    isUndefined : function(v) {
        return typeof v == "undefined";
    }
    , isNull : function(v) {
        return v == null;
    }
    , isNotNull : function(v) {
        return !this.isNull(v);
    }
    , isEmpty : function(v) {
        return (typeof v == "undefined" || v == null || $.trim(v) == "");
    }
    , isNotEmpty : function(v) {
        return !this.isEmpty(v);
    }
    , isBlank : function(v) {
        return (typeof v == "undefined" || v == null || $.trim(v) == "");
    }
    , isNotBlank : function(v) {
        return !this.isEmpty(v);
    }
    , default : function(v, d) {
        if(_ai.common.isBlank(v)) {
            if(_ai.common.isBlank(d)) {
                return "";
            } else {
                return d;
            }
        } else {
            return v;
        }
    }
    , checkEmail : function(email) {
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        return regex.test(email);
    }
    , formToObject : function(formId) {
        if ( _ai.common.isEmpty(formId) ) {
            return;
        }

        var formArr = $('#'+formId).serializeArray();

        var returnValue = {};
        for (var i = 0; i < formArr.length; i++){
            if( returnValue.hasOwnProperty(formArr[i]['name']) ) {
                if ( _ai.common.isNotEmpty(formArr[i]['value']) ) {
                    var innerObject = returnValue[formArr[i]['name']];
                    if(Array.isArray(innerObject)) {
                        innerObject.push(formArr[i]['value']);
                        returnValue[formArr[i]['name']] = innerObject;
                    } else {
                        var innerArray = new Array();
                        innerArray.push(innerObject);

                        innerArray.push(formArr[i]['value']);
                        returnValue[formArr[i]['name']] = innerArray;
                    }
                }
            } else {
                if ( _ai.common.isNotEmpty(formArr[i]['value']) ) {
                    returnValue[formArr[i]['name']] = formArr[i]['value'];
                }
            }
        }

        return returnValue;
    }, objectToForm: function(vo, formId, keys) {
        var $f = $("#" + formId);
        if (_ai.common.isEmpty(keys)) {
            keys = [];
            for (var k in vo) {
                if (k == "_csrf") continue;
                keys.push(k);
            }
        }
        $(keys).each(function(i, e) {
            $f.find(":input[name=" + e + "]:not(':radio'):not(':checkbox')").val(vo[e]);
        });
    }, resetForm : function(formId, keys) {
        var $f = $("#" + formId);
        if(_ai.common.isEmpty(keys)) {
            $f[0].reset();
        } else {
            $(keys).each(function(i, e) {
                $f.find("input[name=" + e + "]:not(':radio'):not(':checkbox'), textarea[name=" + e + "]").val("");
                $f.find("select[name=" + e + "]").val($f.find("select[name=" + e + "] option:first").val());
            });
        }
    }, checkCellPhone : function(number){
        number = number.split('-').join('');
        var regPhone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
        return regPhone.test(number);
    }, nvl : function(_str, defaultVal) {
        defaultVal = defaultVal ? defaultVal : "";
        if(_str == null) {
            _str = defaultVal;
        }else if(_str == undefined) {
            _str = defaultVal;
        }else if(_str == NaN) {
            _str = defaultVal;
        }

        return _str;
    }, getUUID : function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
            return v.toString(16);
        });
    }
}

_ai.message = {
    alert : function(_message, _callback) {
        if (_ai.common.isEmpty(_message)) {
            return;
        }
        if (_ai.common.isNull(_callback) || typeof _callback != "function") {
            _callback = function() {};
        }

        alert(_message);
        _callback();
    }
    , confirm : function(_message, _callback) {
        if (_ai.common.isEmpty(_message)) {
            return;
        }
        if (_ai.common.isNull(_callback) || typeof _callback != "function") {
            _callback = function() {};
        }

        let result = confirm(_message);
        if(result == true) {
            _callback();
        }
    }
}

_ai.ajax = {
    /******************************************************************************
     * var option = new Object();
     * option.url               :
     * option.data              : Object / Json Object / Query String
     * option.async             : boolean type(default:true)
     * option.contentType       : (default:application/x-www-form-urlencoded; charset=UTF-8)
     * option.successCallback   : function type
     * option.failCallback      : function type
     * option.callback          : function type
     * option.callbackParam     : Object(Json,Array,String...)
     * option.checkLogin        : boolean type(default:false)
     * option.showDimm          : boolean type(default:true)
     */
    send : function(option) {
        if(_ai.common.isEmpty(option)){
            console.error("option is null");
            return false;
        }
        if(_ai.common.isEmpty(option.url)) {
            console.error("option is null or option.url is null");
            return false;
        }
        if(_ai.common.isNotEmpty(option.async) && typeof option.async != "boolean"){
            console.error("option.async is not boolean");
            return false;
        }
        if(_ai.common.isEmpty(option.async)){
            option.async = true;
        }
        if(_ai.common.isNotEmpty(option.successCallback) && typeof option.successCallback != "function"){
            console.error("option.successCallback is not function");
        }
        if(_ai.common.isNotEmpty(option.failCallback) && typeof option.failCallback != "function"){
            console.error("option.failCallback is not function");
        }
        if(_ai.common.isNotEmpty(option.callback) && typeof option.callback != "function"){
            console.error("option.callback is not function");
        }
        let isShowDimm = (option.showDimm == false) ? false : true;

        let ajaxParam = new Object();
        ajaxParam.url = option.url;
        ajaxParam.data = option.data;
        ajaxParam.async = option.async;
        ajaxParam.method = "POST";
        ajaxParam.cache = false;
        ajaxParam.dataType = "json";

        if(_ai.common.isNotEmpty(option.contentType)){
            ajaxParam.contentType = option.contentType;
        }

        ajaxParam.beforeSend = function(xhr) {
            if(ajaxParam.async && isShowDimm) {
                loadingDiv(true);
            }
        };
        ajaxParam.success = function(data) {
            if(_ai.common.isNotEmpty(option.successCallback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.successCallback(data, option.callbackParam);
                } else {
                    option.successCallback(data);
                }
            }
        };
        ajaxParam.error = function(xhr) {
            if(_ai.common.isNotEmpty(option.failCallback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.failCallback(xhr, option.callbackParam);
                } else {
                    option.failCallback(xhr);
                }
            } else {
                let errorMsg = "처리중 오류가 발생하였습니다.";
                let errorCode;
                if (xhr) {
                    if (xhr.status === 400) {
                        errorCode = "400";
                    } else if (xhr.status === 401) {
                        errorCode = "401";
                    } else if (xhr.status === 403) {
                        errorCode = "403";
                    } else if (xhr.status === 404) {
                        errorCode = "404";
                    } else if (xhr.status === 500) {
                        errorCode = "500";
                    } else if (xhr.status === 503) {
                        errorCode = "503";
                    } else {
                        errorCode = "ETC";
                    }
                } else {
                    errorCode = "ETC";
                }
                _ai.message.alert(errorMsg +"["+errorCode+"]");
            }
        };
        ajaxParam.complete = function(xhr) {
            if(isShowDimm) {
                loadingDiv(false);
            }

            if(_ai.common.isNotEmpty(option.callback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.callback(xhr, option.callbackParam);
                } else {
                    option.callback(xhr);
                }
            }
        };

        return $.ajax(ajaxParam);
    }
    , sendHtml : function(option){
        if(_ai.common.isEmpty(option)){
            console.error("option is null");
            return false;
        }
        if(_ai.common.isEmpty(option.url)) {
            console.error("option is null or option.url is null");
            return false;
        }
        if(_ai.common.isNotEmpty(option.async) && typeof option.async != "boolean"){
            console.error("option.async is not boolean");
            return false;
        }
        if(_ai.common.isEmpty(option.async)){
            option.async = true;
        }
        if(_ai.common.isNotEmpty(option.successCallback) && typeof option.successCallback != "function"){
            console.error("option.successCallback is not function");
        }
        if(_ai.common.isNotEmpty(option.failCallback) && typeof option.failCallback != "function"){
            console.error("option.failCallback is not function");
        }
        if(_ai.common.isNotEmpty(option.callback) && typeof option.callback != "function"){
            console.error("option.callback is not function");
        }
        let isShowDimm = (option.showDimm == false) ? false : true;

        let ajaxParam = new Object();
        ajaxParam.url = option.url;
        ajaxParam.data = option.data;
        ajaxParam.async = option.async;
        ajaxParam.method = "POST";
        ajaxParam.cache = false;
        ajaxParam.dataType = "html";

        if(_ai.common.isNotEmpty(option.contentType)){
            ajaxParam.contentType = option.contentType;
        }

        ajaxParam.beforeSend = function(xhr) {
            if(ajaxParam.async && isShowDimm) {
                loadingDiv(true);
            }
        };
        ajaxParam.success = function(data) {
            if(_ai.common.isNotEmpty(option.successCallback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.successCallback(data, option.callbackParam);
                } else {
                    option.successCallback(data);
                }
            }
        };
        ajaxParam.error = function(xhr) {
            let errorMsg = "처리중 오류가 발생하였습니다.";
            let errorCode;
            if (xhr) {
                if (xhr.status === 400) {
                    errorCode = "400";
                } else if (xhr.status === 401) {
                    errorCode = "401";
                } else if (xhr.status === 403) {
                    errorCode = "403";
                } else if (xhr.status === 404) {
                    errorCode = "404";
                } else if (xhr.status === 500) {
                    errorCode = "500";
                } else if (xhr.status === 503) {
                    errorCode = "503";
                } else {
                    errorCode = "ETC";
                }
            } else {
                errorCode = "ETC";
            }
            _ai.message.alert(errorMsg +"["+errorCode+"]");

            if(_ai.common.isNotEmpty(option.failCallback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.failCallback(xhr, option.callbackParam);
                } else {
                    option.failCallback(xhr);
                }
            }
        };
        ajaxParam.complete = function(xhr) {
            if(isShowDimm) {
                loadingDiv(false);
            }

            if(_ai.common.isNotEmpty(option.callback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.callback(xhr, option.callbackParam);
                } else {
                    option.callback(xhr);
                }
            }
        };

        return $.ajax(ajaxParam);
    }
    /******************************************************************************
     * var option = new Object();
     * option.url               :
     * option.formId            : formId
     * option.async             : boolean type(default:true)
     * option.successCallback   : function type
     * option.failCallback      : function type
     * option.callback          : function type
     * option.callbackParam     : Object(Json,Array,String...)
     * option.checkLogin        : boolean type(default:false)
     * option.showDimm          : boolean type(default:true)
     */
    , sendMultipart : function(option){
        if(_ai.common.isEmpty(option)){
            console.error("option is null");
            return false;
        }
        if(_ai.common.isEmpty(option.url)) {
            console.error("option is null or option.url is null");
            return false;
        }
        if(_ai.common.isEmpty(option.formId)) {
            console.error("option is null or option.formId is null");
            return false;
        }
        if(_ai.common.isNotEmpty(option.async) && typeof option.async != "boolean"){
            console.error("option.async is not boolean");
            return false;
        }
        if(_ai.common.isEmpty(option.async)){
            option.async = true;
        }
        if(_ai.common.isNotEmpty(option.successCallback) && typeof option.successCallback != "function"){
            console.error("option.successCallback is not function");
        }
        if(_ai.common.isNotEmpty(option.failCallback) && typeof option.failCallback != "function"){
            console.error("option.failCallback is not function");
        }
        if(_ai.common.isNotEmpty(option.callback) && typeof option.callback != "function"){
            console.error("option.callback is not function");
        }
        let isShowDimm = (option.showDimm == false) ? false : true;

        var ajaxParam = new Object();
        ajaxParam.url = option.url;
        ajaxParam.data = new FormData($('#'+option.formId)[0])
        ajaxParam.async = option.async;
        ajaxParam.method = "POST";
        ajaxParam.cache = false;
        ajaxParam.enctype = "multipart/form-data";
        ajaxParam.processData = false;
        ajaxParam.contentType = false;
        ajaxParam.beforeSend = function(xhr) {
            if(ajaxParam.async && isShowDimm) {
                loadingDiv(true);
            }
        };
        ajaxParam.success = function(data) {
            if(_ai.common.isNotEmpty(option.successCallback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.successCallback(data, option.callbackParam);
                } else {
                    option.successCallback(data);
                }
            }
        };
        ajaxParam.error = function(xhr) {
            let errorMsg = "처리중 오류가 발생하였습니다.";
            let errorCode;
            if (xhr) {
                if (xhr.status === 400) {
                    errorCode = "400";
                } else if (xhr.status === 401) {
                    errorCode = "401";
                } else if (xhr.status === 403) {
                    errorCode = "403";
                } else if (xhr.status === 404) {
                    errorCode = "404";
                } else if (xhr.status === 500) {
                    errorCode = "500";
                } else if (xhr.status === 503) {
                    errorCode = "503";
                } else {
                    errorCode = "ETC";
                }
            } else {
                errorCode = "ETC";
            }
            _ai.message.alert(errorMsg +"["+errorCode+"]");

            if(_ai.common.isNotEmpty(option.failCallback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.failCallback(xhr, option.callbackParam);
                } else {
                    option.failCallback(xhr);
                }
            }
        };
        ajaxParam.complete = function(xhr) {
            if(isShowDimm) {
                loadingDiv(false);
            }

            if(_ai.common.isNotEmpty(option.callback)) {
                if(_ai.common.isNotEmpty(option.callbackParam)) {
                    option.callback(xhr, option.callbackParam);
                } else {
                    option.callback(xhr);
                }
            }
        };

        return $.ajax(ajaxParam);
    }
}
