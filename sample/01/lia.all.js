

var Lia = {

    KeyCode : {

        ENTER : 13,
        ESCAPE : 27,

        LEFT : 37,
        TOP : 38,
        RIGHT : 39,
        BOTTOM : 40
    },

    UriConversionType : {

        ENCODE_DECODE_URI_COMPONENT : 0,
        ENCODE_DECODE_URI : 1,
        ESCAPE_UNESCAPE : 2,

        DEFAULT : 0
    },

    Component : {

        Name : {

            BUTTON : 'button',
            FORM_ELEMENT : 'form_element',
            PIE : 'pie',
            IMAGE_BUTTON : 'image_button',
            IMAGE_BOX : 'image_box',
            FLAT_BUTTON : 'flat_button',
            IMAGE_SELECT : 'image_select',
            IMAGE_SELECT_LIST : 'image_select_list',
            RESIZE : 'resize',
            DIM : 'dim',
            POPUP : 'popup',
            DIV_PLACEHOLDER_INPUT : 'div_placeholder_input',
            TEXT_PLACEHOLDER_INPUT : 'text_placeholder_input',
            IMAGE_INPUT : 'image_input',
            LOADING_INDICATOR : 'loading_indicator',
            LANG : 'lang',
            TEXT_EDITOR : 'text_editor',
            PAGER : 'pager',
            COMBO_BOX : 'combo_box',

            SORTABLE : 'sortable',
            SORTABLE_ITEM  : 'sortable_item',
            SORTABLE_MOVER : 'sortable_mover',

            FILE_UPLOADER : 'file_uploader',
            FILE_UPLOADER_LIST : 'file_uploader_list'
        },

        Flag : {

            HOVER : 'hover',
            PRESS: 'press',
            NO_CHANGE : 'no_change',
            NO_BIND : 'no_bind',
            NO_DIM : 'no_dim',
            PRESSED : 'pressed',
            PRESSING : 'pressing',
            HOVERING : 'hovering',

            NO_RESIZE : 'no_resize',
            NO_ADJUST : 'no_adjust',
            HIDDEN_OVERFLOW : 'hidden_overflow',
            ALIGN_LEFT : 'align_left',
            ALIGN_RIGHT : 'align_right',
            ALIGN_CENTER : 'align_center',
            SHOWING : 'showing',
            PASSWORD : 'password',
            TEXTAREA : 'textarea',
            PLACEHOLDER : 'placeholder',
            WITHOUT_ANIMATING : 'without_animating',
            JUT : 'jut',
            RADIO : 'radio',
            CHECK : 'check',
            DISABLED : 'disabled',
            CANCELABLE : 'cancelable',
            PLAYING : 'playing',
            LOADING : 'loading',
            MOVABLE : 'movable',
            MOVING : 'moving',

            INITED : 'inited',

            IMAGE_BUTTON_INITED : 'image_buton_inited',
            IMAGE_BOX_INITED : 'image_box_inited',
            FLAT_BUTTON_INITED : 'flat_button_inited',

            LOADING_INITED : 'loading_inited',
            JUT_INITED : 'jut_inited',
            CHECK_INITED : 'check_inited',
            RADIO_INITED : 'radio_inited'
        },

        AttrName : {

            SRC : 'lia-src',

            SELECTOR : 'lia-selector',
            DEFAULT_BACKGROUND_COLOR : 'lia-background-color',
            HOVERING_BACKGROUND_COLOR : 'lia-hovering-background-color',
            PRESSED_BACKGROUND_COLOR : 'lia-pressed-background-color',
            DEFAULT_TEXT_COLOR : 'lia-text-color',
            HOVERING_TEXT_COLOR :'lia-hovering-text-color',
            PRESSED_TEXT_COLOR : 'lia-pressed-text-color',
            ROUND_WIDTH : 'lia-round-width',
            DIRECTION : 'lia-direction',
            SHADOW_WIDTH : 'lia-shadow-width',
            POSTFIX : 'lia-postfix',

            PADDING : 'lia-padding',
            PADDING_LEFT : 'lia-padding-left',
            PADDING_RIGHT : 'lia-padding-right',
            PADDING_TOP : 'lia-padding-top',
            PADDING_BOTTOM : 'lia-padding-bottom',
            PADDING_VERTICAL : 'lia-padding-vertical',
            PADDING_HORIZONTAL : 'lia-padding-horizontal',

            MARGIN : 'lia-margin',
            MARGIN_LEFT : 'lia-margin-left',
            MARGIN_RIGHT : 'lia-margin-right',
            MARGIN_TOP : 'lia-margin-top',
            MARGIN_BOTTOM : 'lia-margin-bottom',
            MARGIN_VERTICAL : 'lia-margin-vertical',
            MARGIN_HORIZONTAL : 'lia-margin-horizontal',

            TEXT_COLOR : 'lia-text-color',

            WIDTH: 'lia-width',
            HEIGHT: 'lia-height',
            TOP: 'lia-top',
            LEFT: 'lia-left',
            RIGHT: 'lia-right',
            BOTTOM: 'lia-bottom',

            FONT_SIZE: 'lia-font-size',
            LINE_HEIGHT: 'lia-line-height',

            BORDER_WIDTH: 'lia-border-width',
            BORDER_TOP_WIDTH: 'lia-border-top-width',
            BORDER_BOTTOM_WIDTH: 'lia-border-bottom-width',
            BORDER_LEFT_WIDTH: 'lia-border-left-width',
            BORDER_RIGHT_WIDTH: 'lia-border-right-width',

            BORDER_RADIUS: 'lia-border-radius',
            BACKGROUND_SIZE: 'lia-background-size',
            MIN_HEIGHT: 'lia-min-height',

            JUT_DEFAULT_BACKGROUND_COLOR : 'lia-jut-background-color',
            JUT_HOVERING_BACKGROUND_COLOR : 'lia-jut-hovering-background-color',
            JUT_PRESSED_BACKGROUND_COLOR : 'lia-jut-pressed-background-color',

            HOVER_COLOR : 'lia-hover-color',
            ROW_HEIGHT : 'lia-row-height',

            FONT_FAMILY : 'lia-font-family',
            FONT_WEIGHT : 'lia-font-weight',

            PLACEHOLDER : 'lia-placeholder',
            PLACEHOLDER_TEXT_COLOR : 'lia-placeholder-text-color',
            PLACEHOLDER_FONT_WEIGHT : 'lia-placeholder-font-weight',
            PLACEHOLDER_FONT_FAMILY : 'lia-placeholder-font-family',
            PLACEHOLDER_FONT_SIZE : 'lia-placeholder-font-size',

            Z_INDEX : 'lia-z-index',

            NAME : 'lia-name',
            VALUE : 'lia-value',
            CHECK : 'lia-check',
            TYPE : 'lia-type',

            GROUP :  'lia-group',
            OPACITY : 'lia-opacity',

            BACKGROUND_IMAGE : 'lia-background-image',
            BACKGROUND_COLOR : 'lia-background-color',

            DIM_BACKGROUND_COLOR : 'lia-dim-background-color',

            DIM : 'lia-dim',
            POPUP : 'lia-popup',

            INDEX : 'lia-index',
            START_INDEX : 'lia-start-index',
            END_INDEX : 'lia-end-index',

            INDEX_FORMAT : 'lia-index-format',
            POSITION_TOP : 'lia-position-top',
            POSITION_LEFT : 'lia-position-left',

            REFER_COUNT : 'lia-refer-count',

            KEY : 'lia-key',
            ATTR : 'lia-attr',
            CSS : 'lia-css',

            POSITION : 'lia-position'
        },

        Event : {

            SELECTED : 'lia:selected',
            STATUS_CHANGED : 'lia:statuschanged',
            SHOW : 'lia:show',
            HIDE : 'lia:hide'
        },

        Value : {

            Button : {

                SRC_DEFAULT_POSTFIX : '.png',
                SRC_PRESSED_POSTFIX : '_pressed.png',
                SRC_HOVERING_POSTFIX : '_hovering.png',

                Status : {

                    DEFAULT : 'default',
                    HOVERING : 'hovering',
                    PRESSING : 'pressing',
                    PRESSED : 'pressed'
                },

                ImageBox : {

                    DEFAULT_INDEX : 0,
                    PRESSED_INDEX : 1,
                    HOVERING_INDEX : 2,

                    IMAGE_BOX_INDEX : 'image-box-index'
                },

                FlatButton : {

                    DEFAULT_SHADOW_WIDTH : '7px',
                    DEFAULT_ROUND_WIDTH : '10px'

                }

            },

            LoadingIndicator : {

                TIMER_DURATION : 100,
                DEFAULT_START_INDEX : 1,
                REPLACE_INDEX_WORD : '{index}'
            },

            FormSerializer : {

                Boolean : {

                    TRUE : 1,
                    FALSE : 0
                }
            },

            ImagePlaceholderInput : {

                REPLACEMENT_POSTFIX : '.png',

                DEFAULT_POSTFIX : 'placeholder',
                DEFAULT_HORIZONTAL_PADDING : '10px',
                DEFAULT_VERTICAL_PADDING : '0px',
                DEFAULT_TEXT_COLOR : '#000000'
            },

            ImageSelect : {

                NAME : 'name',
                VALUE : 'value',
                INDEX :'index',

                SELECT : 'image_select',
                LIST : 'list',
                LIST_ARRAY : 'image-select-list-array',
                DEFAULT_LIST_ROW_HEIGHT : '20px',
                LIST_FADE_DURATION : 300
            },

            Popup : {

                DEFAULT_Z_INDEX : 10000,
                DEFAULT_DIM_BACKGROUND_COLOR : '#000000',
                DEFAULT_DIM_OPACITY : 0.7,
                FADE_DURATION : 300,

                Position : {

                    FIXED : 'fixed',
                    ABSOLUTE : 'absolute'
                },
                DEFAULT_POSITION : 'fixed',

                NEXT_POPUP : '{next-popup}',
                PREV_DIM : '{prev-dim}'

            },

            FormUpload : {

                NAME : 'name',
                PATH : 'path',
                FORM : 'form',
                TAG : 'tag',
                RESPONSE : 'response',

                DEFAULT_PATH_NODE_NAME : 'path'
            },

            TextPlaceholderInput : {

                DEFAULT_PADDING : '0px',
                APPEND_TEXT : '   '
            },

            Resize : {

                DEFAULT_BASE_WIDTH : 640,
                DEFAULT_BASE_HEIGHT : 960
            },

            Requester : {

                DefaultRequestValue : {

                    DEFAULT_SYNC : false,
                    DEFAULT_DATA_TYPE : 'json',
                    DEFAULT_Q : true,
                    DEFAULT_METHOD : 'post',
                    DEFAULT_NO_EXECUTE_ON_RESPONSE_WHEN_ERROR : false
                },

                Status: {

                    SUCCESS: 10000,
                    ERROR: 20000
                },

                Type: {

                    REQUEST: 1,
                    EXECUTE: 2
                }
            }
        }
    },

    isMobile : undefined,
    ieVersion : undefined,

    /**
     * 초기화
     */
    init : function() {
    },

    /**
     * 모바일 환경인지 체크
     *
     * @returns {boolean}
     */
    checkMobile : function() {

        var ua = navigator.userAgent;
        var mobileKeyWords = ['iPhone', 'iPod', 'iPad', 'BlackBerry', 'Android', 'Windows CE'];
        for (var i = 0, l = mobileKeyWords.length; i < l; i++)
        {
            if (ua.match(mobileKeyWords[i]) != null)
                return true;
        }

        return false;
    },

    /**
     * 리스트 키를 맵 형태로 만듬
     *
     * @returns {boolean}
     */
    convertListToMap : function( list, key ) {

        var map = {};
        for( var listKey in list ) {
            var item = list[listKey];
            map[ item[key] ] = item;
        }
        return map;
    },

    /**
     * 맵을 리스트 맵 리스트 안으로 만듬
     *
     * @returns {boolean}
     */
    convertListToListMap : function( list, key ) {

        var map = {};
        for( var listKey in list ) {

            var item = list[listKey];

            var itemKey = item[key];
            if (  map[itemKey] == undefined )
                map[itemKey] = [];

            map[itemKey].push(item);
        }

        return map;
    },

    /**
     * 아이폰, 아이패드, 아이팟인지 체크
     *
     * @returns {boolean}
     */
    checkiPhoneSeries : function() {

        var ua = navigator.userAgent;
        var iphoneKeyWords = ['iPhone', 'iPod', 'iPad'];
        for (var i = 0, l = iphoneKeyWords.length; i < l; i++)
        {
            if (ua.match(iphoneKeyWords[i]) != null)
                return true;
        }

        return false;
    },

    /**
     * 안드로이드 인지 체크
     *
     * @returns {boolean}
     */
    checkAndroid : function() {

        return navigator.userAgent.indexOf('Android') > -1;
    },

    /**
     * 인터넷 익스플로러 버젼 체크
     * 익스가 아니라면 -1 리턴
     *
     * @returns {number}
     */
    checkInternetExplorerVersion : function() {

        var version = -1;
        var ua = navigator.userAgent;
        if ( ua.indexOf('MSIE') != -1 )
        {
            var regexp = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
            if (regexp.exec(ua) != null)
                version = parseFloat(RegExp.$1);
        }
        else if ( ua.indexOf('Trident') != -1 )
        {
            version = 11;
        }

        return version;
    },

    /**
     * 크롬인지 체크
     *
     * @returns {boolean}
     */
    checkChrome : function() {

        return navigator.userAgent.indexOf('Chrome') > -1;
    },

    /**
     * 사파리인지 체크
     *
     * @returns {boolean}
     */
    checkSafari : function() {

        var ua = navigator.userAgent;
        return (ua.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1);
    },

    /**
     * 파이어폭스인지 체크
     *
     * @returns {boolean}
     */
    checkFirefox : function() {

        return navigator.userAgent.indexOf('Firefox') > -1;
    },

    /**
     * 오페라인지 체크
     * @returns {boolean}
     */
    checkOpera : function() {

        return navigator.userAgent.indexOf('Presto') > -1;
    },

    /**
     * 타임스켐프 얻음
     */
    getTimestamp : function() {

        return new Date().getTime();
    },

    /**
     * 폼을 생성하여 페이지 이동
     *
     * @param method
     * @param url
     * @param parameter
     */
    redirectForm : function ( method, url, parameter ) {

        var paramterTagText = '';
        if ( parameter != undefined )
        {
            for(var key in parameter)
                paramterTagText += '<input type="hidden" name="'+key+'" value="'+parameter[key]+'" />';
        }

        var jForm = $('<form method="'+method+'" action="'+url+'" style="width:0px;height:0px;">'+paramterTagText+'</form>');
        jQuery('body').append(jForm);
        jForm.submit();
    },

    /**
     * POST로 페이지 이동
     *
     * @param url
     * @param parameter
     */
    redirectPost : function ( url, parameter ) {

        Lia.redirectForm('post', url, parameter);
    },

    /**
     * GET으로 페이지 이동
     *
     * @param url
     * @param parameter
     */
    redirectGet : function (url, parameter) {

        Lia.redirectForm('get', url, parameter);
    },

    /**
     * URL방식으로 페이지 이동
     *
     * @param url
     * @param parameter
     */
    redirect : function( url, parameter, uriConversionType ) {

        var addingMark = (url.indexOf('?') >= 0)?'&':'?';
        window.location.href = url + Lia.convertArrayToQueryString(parameter, uriConversionType, addingMark);
    },

    /**
     * 페이지 새로고침
     */
    refresh : function( forceget ) {

        if ( forceget == undefined )
            forceget = true;

        window.location.reload(forceget);
    },

    /**
     * 배열을 쿼리 스트링으로 변환
     *
     * @param array
     * @returns {string}
     */
    convertArrayToQueryString : function ( array, uriConversionType, addingMark ) {

        if ( addingMark == undefined )
            addingMark = '?';

        var queryString = '';
        if ( array != undefined )
        {
            for(var key in array)
            {
                if ( queryString != '' )
                    queryString += '&';

                queryString += key+'='+ Lia.encodeUri(array[key], uriConversionType);
            }

            if ( addingMark != '' && queryString != '' )
                queryString = addingMark + queryString;
        }
        return queryString;
    },

    /**
     * 객체 deep copy
     *
     * @param object
     * @returns {*}
     */
    deepCopy : function(object) {

        if ( typeof object == "object" ) {

            var map = {};
            for(var key in object) {
                map[key] = object[key];
            }

            object = map;
        }

        return object;
    },

    /**
     * 객체의 내용 복사
     *
     * @param toObject
     * @param fromObject
     * @returns {*}
     */
    combine : function( toObject, fromObject ) {

        for( var key in fromObject ) {

            toObject[key] = fromObject[key];
        }

        return toObject;

    },

    /**
     * uri 인코딩
     * @param text
     * @param type
     * @returns {*}
     */
    encodeUri : function(text, type) {

        if ( type == undefined )
            type = Lia.UriConversionType.DEFAULT;

        if ( type == Lia.UriConversionType.ENCODE_DECODE_URI )
            return encodeURI(text);
        else if ( type == Lia.UriConversionType.ESCAPE_UNESCAPE )
            return escape(text);

        return encodeURIComponent(text);
    },

    /**
     * uri 디코딩
     * @param text
     * @param type
     * @returns {*}
     */
    decodeUri : function(text, type) {

        if ( type == undefined )
            type = Lia.UriConversionType.DEFAULT;

        if ( type == Lia.UriConversionType.ENCODE_DECODE_URI )
            return decodeURI(text);
        else if ( type == Lia.UriConversionType.ESCAPE_UNESCAPE )
            return unescape(text);

        return decodeURIComponent(text);
    },

    /**
     * uri 디코딩 ( try - catch )
     *
     * @param text
     * @param type
     * @returns {*}
     */
    decodeUriSafety : function( text,type ) {

        try {
            return Lia.decodeUri(text, type);
        } catch (e) {
            return text;
        }
    },

    /**
     * 주소창에 있는 Get을 통하여 들오언 파라미터 추출
     *
     * @returns {{}}
     */
    extractGetParameter : function( uriConversionType ) {

        return Lia.convertQueryStringToArray(window.location.search.substring(1), uriConversionType);
    },

    /**
     * URL을 기준으로 들어온 파라미터 추출
     *
     * @returns {{}}
     */
    extractGetParameterFromUrl : function ( url, uriConversionType ) {

        var idx = url.lastIndexOf('?');
        return Lia.convertQueryStringToArray( idx==-1?undefined:url.substring(idx+1), uriConversionType );
    },

    /**
     *  QueryString Javasscript 객체로 변환
     *
     * @returns {{}}
     */
    convertQueryStringToArray : function( queryString, uriConversionType ) {

        var queryParameter = {};
        if ( String.isNullOrWhitespace(queryString) )
            return queryParameter;

        var items = queryString.split('&');

        for (var i= 0, l=items.length; i<l; i++)
        {
            var pair = items[i].split('=');
            queryParameter[pair[0]] = Lia.decodeUri(pair[1], uriConversionType);
        }

        return queryParameter
    },

    /**
     * 해당 위치까지 스크롤
     *
     * @param y
     * @param duration
     * @param easing
     */
    scrollTo : function (y, duration, easing, complete) {

        if ( duration == undefined)
            duration = 400;

        if ( easing  == undefined )
            easing = 'swing';

        jQuery('html, body').animate({ scrollTop: y }, duration, easing, complete);
    },

    /**
     * y축 스크롤 위치 반환
     *
     * @returns top
     */
    getScrollTop : function() {

        var scrollTop = $('body').scrollTop();
        if ( scrollTop == 0 )
            scrollTop = $('html').scrollTop();

        return scrollTop;

    },

    /**
     * x축 스크롤 위치 반환
     *
     * @returns left
     */
    getScrollLeft : function() {

        var scrollTop = $('body').scrollLeft();
        if ( scrollTop == 0 )
            scrollTop = $('html').scrollLeft();

        return scrollTop;

    },

    /**
     * 파일 확장자 추출
     * 추출할 수 없으면 null
     *
     * @param file
     * @returns {*}
     */
    extractFileExt : function ( file ) {

        if ( String.isNullOrWhitespace(file))
            return null;

        var len = file.length;
        var last = file.lastIndexOf('.');
        if( last == -1 )
            return null;

        var ext = file.substring(last, len);
        ext = ext.toLowerCase();

        return ext;
    },

    /**
     * 파일 이름 추출
     * 추출할 수 없으면 null
     *
     * @param file
     * @returns {*}
     */
    extractFilename : function ( file ) {

        if ( String.isNullOrWhitespace(file))
            return null;

        var len = file.length;
        var last = file.lastIndexOf('/');
        if( last == -1 )
        {
            last = file.lastIndexOf("\\");
            if( last == -1 )
                return null;
        }

        var filename = file.substring(last+1, len);
        return filename;
    },

    /**
     * Whitespace를 &nbsp 태그로 변환
     *
     * @returns {string}
     */
    ws2tag : function (text) {

        return text.replace(/ /g, '&nbsp;');
    },

    /**
     * Whitespace를 &nbsp 태그로 변환
     * 2칸 기준으로
     *
     * @returns {string}
     */
    ws2tagInHtml : function (text) {

        return text.replace(/  /g, '&nbsp; ');
    },

    /**
     * 꺽쇠 변환
     *
     * @returns {string}
     */
    inequalitySign2tag : function (text) {

        if(text == undefined)
            return text;

        return text.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
    },

    /**
     * 개행 문자를 BR 태그로 변환
     *
     * @returns {string}
     */
    nl2br : function (text) {

        return text.replace(/\n/g, '<br />');
    },

    /**
     * BR태그를 개행문자로 변환
     *
     * @returns {string}
     */
    br2nl : function (text) {

        return text.replace(/\<br[ ]*\/?\>/g, '\n');
    },

    /**
     * 올바른 아이디인지 체크
     * 숫자와 영문자 - _ 만으로 구성되어야 함
     *
     * @param text
     * @returns {boolean}
     */
    checkValidId : function ( text ) {

        return !(/[^0-9a-zA-Z_\-]/.test(text));
    },

    /**
     * 올바른 이름인지 체크
     *
     * @param text
     * @returns {boolean}
     */
    checkValidName : function ( text ) {

        return !(/[^0-9a-zA-Z()\[\]\-_ 가-힣]/.test(text));
    },

    /**
     * 올바른 이메일 형식인지 체크
     *
     * @param text
     * @returns {boolean}
     */
    checkValidEmail : function ( text ) {

        return (/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/.test(text));
    },

    /**
     * 숫자로만 이루어져 있는지 체크
     *
     * @param text
     * @returns {boolean}
     */
    checkValidDigit : function ( text ) {

        return !(/[^0-9]/.test(text));
    },

    /**
     * 숫자인지 체크
     *
     * @param text
     * @returns {boolean}
     */
    checkValidNumeric : function ( text ) {

        return $.isNumeric(text);
    },

    /**
     * 배열 사이즈 구함
     *
     * @param array
     * @returns {Number}
     */
    assocArraySize : function( array ) {

        var size = 0, key;
        for (key in array)
            ++size

        return size;
    },

    extractPropertyWithDefault : function() {

        var length = arguments.length;
        if ( length < 1 )
            return  undefined;

        var defaultValue = arguments[0];
        if ( length < 2 )
            return defaultValue;

        var object = arguments[1];
        if ( object == undefined )
            return defaultValue;

        for( var i = 2; i < length; i++ ) {

            var key = arguments[i];
            object = object[key];
            if ( object  == undefined )
                return defaultValue;
        }

        return object;
    },

    extractProperty : function() {

        var length = arguments.length;
        if ( length <= 1 )
            return undefined;

        var object = arguments[0];
        if ( object == undefined )
            return undefined;

        for( var i = 1; i < length; i++ ) {

            var key = arguments[i];
            object = object[key];
            if ( object  == undefined )
                return undefined;
        }

        return object;
    },

    /**
     * 2개 객체에서 기본 값 추출
     * (1번 객체, 2번 객체, 파라미터 ... )
     * 1번 검색 - 없으면 2번 검색
     *
     * @returns {*}
     */
    extractPropertyFromTwoMap : function() {

        if ( arguments.length < 2 ) {
            return undefined;
        }

        var map1 = Lia.extractProperty(arguments, 0);
        var map2 = Lia.extractProperty(arguments, 1);

        var map1ParameterList = [];
        map1ParameterList.push(map1);

        var map2ParameterList = [];
        map2ParameterList.push(map2);

        for( var i = 2, l = arguments.length; i < l; i++ ) {

            map1ParameterList.push(arguments[i]);
            map2ParameterList.push(arguments[i]);
        }

        var object = Lia.extractProperty.apply(this, map1ParameterList);
        if ( object == undefined )
            object = Lia.extractProperty.apply(this, map2ParameterList);

        return object;
    },

    /**
     * 2개 객체에서 기본 값 추출 with 기본값
     * (기본값, 1번 객체, 2번 객체, 파라미터 ... )
     * 2번 검색 - 없으면 1번 검색 - 없으면 기본 값 반환
     *
     * @returns {*}
     */
    extractPropertyFromTwoMapWithDefault : function() {

        var defaultValues = arguments[0];
        if ( arguments.length < 3 ) {
            return defaultValues;
        }

        var map1 = Lia.extractProperty(arguments, 1);
        var map2 = Lia.extractProperty(arguments, 2);

        var map1ParameterList = [];
        map1ParameterList.push(map1);

        var map2ParameterList = [];
        map2ParameterList.push(map2);

        for( var i = 3, l = arguments.length; i < l; i++ ) {

            map1ParameterList.push(arguments[i]);
            map2ParameterList.push(arguments[i]);
        }

        var object = Lia.extractProperty.apply(this, map2ParameterList);
        if ( object == undefined )
            object = Lia.extractProperty.apply(this, map1ParameterList);
        if ( object == undefined )
            object = defaultValues;

        return object;
    },

    /**
     * 현재 시간이 해당 시간 내에 있는지 체크
     *
     * @param startHour
     * @param endHour
     * @returns {boolean}
     */
    checkHourIn : function( startHour, endHour ) {

        var hour = new Date().getHours();

        if ( startHour == endHour ) {
            return (hour == startHour);
        } else if ( startHour < endHour ) {
            return ( hour >= startHour && hour <= endHour );
        } else if ( startHour > endHour ) {
            return ( hour >= startHour || hour <= endHour );
        }

        return false;
    },

    /**
     * 현재 시간이 해당 요일 안에 있는지 체크
     *
     * @param startHour
     * @param endHour
     * @returns {boolean}
     */
    checkDayOfWeekIn : function( startDay, endDay ) {

        var day = new Date().getDay();

        if ( startDay == endDay ) {
            return (day == startDay);
        } else if ( startDay < endDay ) {
            return ( day >= startDay && day <= endDay );
        } else if ( startDay > endDay ) {
            return ( day >= startDay || day <= endDay );
        }

        return false;
    },

    convertSecToTime : function( sec ) {

        if (sec == undefined)
            return false;

        var hours = Math.floor(sec / 3600) < 10 ? ("00" + Math.floor(sec / 3600)).slice(-2) : Math.floor(sec / 3600);
        var minutes = ("00" + Math.floor((sec % 3600) / 60)).slice(-2);
        var seconds = ("00" + (sec % 3600) % 60).slice(-2);

        return hours + ":" + minutes + ":" + seconds;

    },

    /**
     * 같은 key - value 가지고 있는지
     *
     * @returns {boolean}
     */
    isSameMap : function( map1, map2 ) {

        if ( map1 == map2 ) {
            return true;
        }

        if ( map1 == undefined || map2 == undefined ) {
            return false;
        }

        if ( map1.length != map2.length ) {
            return false;
        }

        for(var key in map1) {

            if ( map1[key] != map2[key] ) {

                return false;
            }

        }

        return true;
    },

    convertBytesToSize : function(bytes, decimals) {
        if(bytes == 0) return '0 Byte';
        var k = 1000; // or 1024 for binary
        var dm = decimals + 1 || 3;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
};

if( typeof String.isNullOrWhitespace !== 'function' )
{
    /**
     * Whitespace 거나 NULL 이면 true 반환
     *
     * @param text
     * @returns {boolean}
     */
    String.isNullOrWhitespace = function ( text ) {

        if ( text == null )
            return true;

        if ( typeof text == 'string' && text.trim().length == 0 )
            return true;

        return false;
    }
}

if( typeof String.isNotNullOrWhitespace !== 'function' )
{
    /**
     * Whitespace 거나 NULL 이면 true 반환
     *
     * @param text
     * @returns {boolean}
     */
    String.isNotNullOrWhitespace = function ( text ) {

        return !String.isNullOrWhitespace(text);
    }
}



if( typeof String.isBlank !== 'function' )
{
    /**
     * Whitespace 거나 NULL 이면 true 반환
     *
     * @param text
     * @returns {boolean}
     */
    String.isBlank = String.isNullOrWhitespace;
}

if( typeof String.isNotBlank !== 'function' )
{
    /**
     * Whitespace 거나 NULL 이면 true 반환
     *
     * @param text
     * @returns {boolean}
     */
    String.isNotBlank = String.isNotNullOrWhitespace;
}


if( typeof Array.isBlank !== 'function' )
{
    /**
     * undefined거나 list 개수가 0이면 true 리턴
     *
     * @param text
     * @returns {boolean}
     */
    Array.isBlank = function( array ) {

        return ( array == undefined || array.length == 0 );
    }
}

if( typeof Array.isNotBlank !== 'function' )
{
    /**
     * undefined거나 list 개수가 0이면 true 리턴
     *
     * @param text
     * @returns {boolean}
     */
    Array.isNotBlank = function( array ) {

        return !(Array.isBlank(array));
    }
}



if( typeof String.prototype.endsWith !== 'function' )
{
    /**
     * 문자열이 해당 suffix 로 끝나는지 체크
     *
     * @param suffix
     * @returns {boolean}
     */
    String.prototype.endsWith = function (suffix) {

        return this.indexOf(
                suffix,
                this.length - suffix.length) != -1;
    };
}


if( typeof String.prototype.startsWith !== 'function' )
{
    /**
     * 문자열이 해당 suffix 로 시작하는지 체크
     *
     * @param suffix
     * @returns {boolean}
     */
    String.prototype.startsWith = function (suffix) {

        return this.indexOf(suffix) == 0;
    };
}


if( typeof String.prototype.trim !== 'function' )
{
    /**
     * 문자열 끝의 공백 없앰
     *
     * @returns {string}
     */
    String.prototype.trim = function() {

        return this.replace(/^\s+|\s+$/g, '');
    }
}


if( typeof String.prototype.removeWhitespace !== 'function' )
{
    /**
     * 문자열 안 공백 삭제
     *
     * @returns {string}
     */
    String.prototype.removeWhitespace = function() {

        return this.replace(/ /g, '');
    }
}


if( typeof String.prototype.removeBlank !== 'function' )
{
    /**
     * 문자열 안 공백 삭제
     *
     * @returns {string}
     */
    String.prototype.removeBlank = String.prototype.removeWhitespace;
}


if( typeof String.prototype.contains !== 'function' )
{
    String.prototype.contains = function (suffix) {

        return this.indexOf(suffix) >= 0;
    };
}


Lia.isMobile = Lia.checkMobile();
Lia.ieVersion = Lia.checkInternetExplorerVersion();
Lia.p = Lia.extractProperty;
Lia.pd = Lia.extractPropertyWithDefault;
Lia.pt = Lia.extractPropertyFromTwoMap;
Lia.ptd = Lia.extractPropertyFromTwoMapWithDefault;

var console = window.console || {log:function(){}};

// window.setTimeout 으로 호출해야 함
//if ( Lia.ieVersion != -1 && Lia.ieVersion <= 9 ) {

    var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

    window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
        var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
        return __nativeST__(vCallback instanceof Function ? function () {
            vCallback.apply(oThis, aArgs);
        } : vCallback, nDelay);
    };

    window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
        var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
        return __nativeSI__(vCallback instanceof Function ? function () {
            vCallback.apply(oThis, aArgs);
        } : vCallback, nDelay);
    };
//}
/**
 * pie.js 임포트 해야함
 * 쓰기 조금 편하도록 헬퍼 함수 제공
 *
 */
/*
    $(document).ready(function() {
        $.attachPIE();
    });
 */

(function ($) {


    $.extend({

        /**
         * 초기화
         */
        attachPIE: function ( j ) {

            var selector = '.' + Lia.Component.Name.PIE;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find(selector);

            return j.attachPIE();
        }
    });

    $.fn.extend({

        /**
         * pie 적용
         *
         * @param pressed
         * @returns {*}
         */
        attachPIE: function () {

            if (window.PIE) {

                this.each(function() {
                    PIE.attach(this);
                });

            }

            return this;

        }
    });
})(jQuery);
/*

lia.lang.js
여러가지 언어 사용할 수 있도록 지원

<span class="lang" lia-name="{항목 이름}" lia-attr="{적용할 attr}"></span>
lia-attr 이 없으면 text 함수 사용

맵은 이런식으로

var LANG_MAP = {

    'name' : {
        'us' : 'test',
        'ko' : '테스트'
    }
};

 $.initLang(LANG_MAP, 'us');         // 초기화
 $.applyLang( selector );            // 적용
 $.getLangValue( name, 'us');        // 값 반환
 $.getLangValue( name );             // 값 반환 ( 기본 키로 )
 
 */

jQuery.extend({

    liaLangMap : undefined,
    liaLangKey : undefined,
    initLang : function( langMap, langKey ) {

        jQuery.liaLangMap = langMap;
        jQuery.liaLangKey = langKey;
    },

    applyLang : function ( j ) {

        var selector = '.' + Lia.Component.Name.LANG;

        if ( j == undefined )
            j = $( selector );
        else
            j = j.find(selector);

        return j.applyLang();
    },

    getLangValue : function( name, key ) {

        var langMap = jQuery.liaLangMap;
        if ( langMap == undefined )
            return '';

        if ( key == undefined )
            key = jQuery.liaLangKey;
        if ( key == undefined )
            return '';

        var value = undefined;
        var map = langMap[name];
        if ( map != undefined )
            value = map[key];

        if ( String.isNullOrWhitespace(value) )
            value = '';

        return value;

    }

});

jQuery.fn.extend({

    applyLang : function () {

        return this.each(function(){

            var j = jQuery(this);
            if (!j.hasClass( Lia.Component.Name.LANG ))
                return;

            var name = j.attr( Lia.Component.AttrName.NAME );
            if ( String.isNullOrWhitespace(name) )
                return;

            var value = jQuery.getLangValue(name);

            var attr = j.attr( Lia.Component.AttrName.ATTR );
            if ( attr != undefined ) {
                j.attr(attr, value);
                return;
            }

            var css = j.attr( Lia.Component.AttrName.CSS );
            if ( css != undefined ) {
                j.css(css, value);
                return;
            }

            j.html(value);
        });

    }

});



 /**
 * popup
 *
 * 구현 가이드
 *      사이트 콘텐츠 부분을 wrapping하는 div의 position을 absolute로
 *      제일 하단에 dim 객체와 popup 객체를 위치
 *
 *      <body>
 *          <div id="wrapper" style="position:absolute;>
 *              ...
 *          </div>
 *
 *          <div class="dim [cancelable]" lia-z-index="{z-index 값}" lia-popup="{연결된 Popup Selector}" lia-opacity lia-dim-background-color lia-opacity></div>
 *          <div id="info_popup" class="popup" style="width:{popup width};height:{popup height}" lia-z-index="{z-index 값}"
  *          lia-position-top="{위치 값 고정 시}"
  *          lia-position="{위치 : fiexed, absolute}"
  *          lia-dim="{사용할 Dim Selector}"></div>
 *      </body>
 *
 * popup
 *      .popupShow
 *          팝업 보여짐
 *      .popupHide
 *          팝업 사라짐
 *
 * $.showPopup()
 *      있는팝업 모두 다 보여짐
 * $.showPopup(selector)
 *      해당 selector 팝업 show
 * $.hidePopup()
 *      있는팝업 모두 다 사라짐
 * $.hidePopup(selector)
 *      해당 selector 팝업 hide
 *
 */
/*
초기화 코드

$(document).ready(function () {

    $.initDim();
    $.initPopup();

    $(window).resize(function(){

        $.adjustPopup();
    });
});

*/

 jQuery.extend({

     liaPopupZIndex : Lia.Component.Value.Popup.DEFAULT_Z_INDEX,

     /**
      * 팝업 순서 지정해줄 함수
      *
      * @param index
      */
     initPopupZIndex : function( index ) {

         jQuery.liaPopupZIndex = index;
     },

     /**
      * 초기화
      */
     initPopup : function( j, options ) {

         var selector = '.' + Lia.Component.Name.POPUP;

         if ( j == undefined )
             j = jQuery( selector );
         else
             j = j.find( selector );

         return j.initPopup( options );
     },


     /**
      * 초기화
      */
     initDim : function(j) {

         var selector = '.' + Lia.Component.Name.DIM;

         if ( j == undefined )
             j = jQuery( selector );
         else
             j = j.find( selector );

         return j.initDim();
     },

     /**
      * 조정
      */
     adjustPopup : function(j) {

         var selector = '.' + Lia.Component.Name.POPUP;

         if ( j == undefined )
             j = jQuery( selector );
         else
             j = j.find( selector );

         return j.adjustPopup();
     },

     /**
      * 팝업 표시
      *   해당 selector
      *   모든 팝업 : 인자 없을 때
      *
      * @param selector
      */
     showPopup : function( selector, options ) {

         if ( selector == undefined )
             return jQuery('.' + Lia.Component.Name.POPUP).showPopup( options );
         else
             return jQuery(selector).showPopup( options );

     },

     /**
      * 팝업 내려기
      *   해당 selector
      *   모든 팝업 : 인자 없을 때
      *
      * @param selector
      */
     hidePopup : function( selector, options ) {

         if ( selector == undefined )
             return jQuery('.' + Lia.Component.Name.POPUP).hidePopup( options );
         else
             return jQuery( selector ).hidePopup( options );
     },

     /**
      * 팝업이 표시되고 있는지 여부
      *   해당 selector
      *   모든 팝업 : 인자 없을 때
      *
      * @param selector
      * @returns {*}
      */
     isShowingPopup : function(selector) {

         if ( selector == undefined )
             return jQuery('.' + Lia.Component.Name.POPUP).isShowingPopup();
         else
             return jQuery(selector).isShowingPopup();
     }
 });

 jQuery.fn.extend({

     /**
      * dim 초기화
      *
      * @returns {*}
      */
     initDim : function () {

         return this.each(function(){

             var jThis = jQuery(this);
             if ( jThis.hasClass( Lia.Component.Flag.INITED ) )
                 return;

             var position = jThis.attr( Lia.Component.AttrName.POSITION );
             if ( position == undefined )
                 position = Lia.Component.Value.Popup.DEFAULT_POSITION;

             var opacity = jThis.attr( Lia.Component.AttrName.OPACITY );
             if ( opacity == undefined )
                 opacity = Lia.Component.Value.Popup.DEFAULT_DIM_OPACITY;

             var dimBackgroundColor = jThis.attr( Lia.Component.AttrName.DIM_BACKGROUND_COLOR);
             if ( dimBackgroundColor == undefined )
                 dimBackgroundColor = Lia.Component.Value.Popup.DEFAULT_DIM_BACKGROUND_COLOR;

             jThis.css( {
                 'background-color' : dimBackgroundColor,
                 'opacity' : opacity,
                 'position' : position,

                 'left' : '0px',
                 'top' : '0px',
                 'width' : '100%',
                 'height' : '100%'

             }).click(function(e){

                 e.preventDefault();

                 var jThis = jQuery(this);
                 var cancelable = jThis.hasClass( Lia.Component.Flag.CANCELABLE );
                 if ( cancelable ) {

                     var jPopup = undefined;

                     var popup = jThis.attr(Lia.Component.AttrName.POPUP);
                     if ( popup == Lia.Component.Value.Popup.NEXT_POPUP ) {

                         jPopup = jThis.next( '.' + Lia.Component.Name.POPUP );

                     } else if ( popup != undefined ) {

                         jPopup = jQuery('.' + Lia.Component.Name.POPUP).filter(popup);
                     }

                    if ( jPopup != undefined ) {
                        jPopup.hidePopup();
                    }
                 }

             }).hide();

             jThis.addClass( Lia.Component.Flag.INITED );
         });
     },

     /**
      * popup 초기화
      *
      * @returns {*}
      */
     initPopup : function( options ) {

         return this.each(function(){

             var jThis = jQuery(this);
             if ( jThis.hasClass( Lia.Component.Flag.INITED ) )
                 return;

             var position = jThis.attr( Lia.Component.AttrName.POSITION );
             if ( position == undefined )
                 position = Lia.Component.Value.Popup.DEFAULT_POSITION;

             jThis.css( {
                 'position' : position,
                 'left' : '0px',
                 'top' : '0px'
             }).adjustPopup().hide();

             jThis.addClass( Lia.Component.Flag.INITED );
         });
     },

     /**
      * 팝업 위치 조정
      *
      * @returns {*}
      */
     adjustPopup : function() {

         return this.each(function(){

             var jWindow = jQuery(window);
             var windowWidth = parseFloat(jWindow.width());
             var windowHeight = parseFloat(jWindow.height());

             var jThis = jQuery(this);
             var width = parseFloat(jThis.outerWidth(true));
             var height = parseFloat(jThis.outerHeight(true));

             var position = jThis.attr( Lia.Component.AttrName.POSITION );
             if ( position == undefined )
                 position = Lia.Component.Value.Popup.DEFAULT_POSITION;

             var positionTop = jThis.attr( Lia.Component.AttrName.POSITION_TOP );
             if ( positionTop != undefined ) {

                 jThis.css({
                     'top' :  positionTop
                 });

             } else {

                 if ( !jThis.hasClass(Lia.Component.Flag.NO_ADJUST) ) {

                     if ( position == Lia.Component.Value.Popup.Position.FIXED )
                     {
                         jThis.css({
                             'top' :  (( windowHeight- height ) / 2) + 'px'
                         });
                     }
                      else if ( position == Lia.Component.Value.Popup.Position.ABSOLUTE )
                      {
                          var scrollTop = Lia.getScrollTop();
                          var top = ( scrollTop + (( windowHeight- height ) / 2) );
                          if ( top < 0 ) {
                              top = 0;
                          }

                          jThis.css({
                              'top' : top + 'px'
                          });

                      }
                 }
             }

             var positionLeft = jThis.attr( Lia.Component.AttrName.POSITION_LEFT );
             if ( positionLeft != undefined ) {

                 jThis.css({
                     'left': positionLeft
                 });

             } else {

                 jThis.css({
                     'left' :  (( windowWidth - width ) / 2) + 'px'
                 });
             }



         });
     },

     /**
      * 팝업 표시 여부
      *
      * @returns {*}
      */
     isShowingPopup : function() {

         return this.hasClass( Lia.Component.Flag.SHOWING );
     },

     /**
      * 팝업 표시
      *
      * @returns {*}
      */
     showPopup : function( options ) {

         for ( var i = 0, l = this.length; i < l; i++ ) {

             var jThis = this.eq(i);
             if ( !jThis.hasClass( Lia.Component.Flag.NO_DIM ) ) {

                 var jDim = undefined;
                 var dim = jThis.attr(Lia.Component.AttrName.DIM);
                 if ( dim == Lia.Component.Value.Popup.PREV_DIM ) {

                     jDim = jThis.prev( '.' + Lia.Component.Name.DIM );

                 } else if ( dim != undefined ) {

                     jDim = jQuery('.' + Lia.Component.Name.DIM).filter(dim);
                 }

                 if ( jDim != undefined )
                    jDim.each(liaShowPopup);
             }

             liaShowPopup.call( jThis.get(0) );
             jThis.adjustPopup();

         }

         return this;
     },

     /**
      * 팝업 내리기
      *
      * @returns {*}
      */
     hidePopup : function( options ) {

         for ( var i = 0, l = this.length; i < l; i++ ) {

             var jThis = this.eq(i);
             if ( !jThis.hasClass( Lia.Component.Flag.NO_DIM) )
             {
                 var jDim = undefined;

                 var dim = jThis.attr(Lia.Component.AttrName.DIM);
                 if ( dim == Lia.Component.Value.Popup.PREV_DIM ) {

                     jDim = jThis.prev( '.' + Lia.Component.Name.DIM );

                 } else if ( dim != undefined ) {

                     jDim = jQuery('.' + Lia.Component.Name.DIM).filter(dim);
                 }

                 if ( jDim != undefined )
                    jDim.each(liaHidePopup);
             }

             liaHidePopup.call( jThis.get(0), options );
         }

         return this;
     }
 });

function liaShowPopup( options )
{
    var jThis = jQuery(this);
    if ( !jThis.hasClass( Lia.Component.Flag.SHOWING ) )
    {
        var zIndex = jThis.attr(Lia.Component.AttrName.Z_INDEX );
        if ( String.isBlank(zIndex) ) {

            zIndex = jQuery.liaPopupZIndex;
            var jList = jQuery( '.' + Lia.Component.Name.DIM +',.' + Lia.Component.Name.POPUP);
            for( var i = 0, l = jList.length; i < l; i++ ){
                var baseZIndex = jList.eq(i).css('z-index');
                if ( String.isNotBlank(baseZIndex) ) {
                    baseZIndex = parseInt(baseZIndex);
                    if ( baseZIndex > zIndex ) {
                        zIndex = baseZIndex;
                    }
                }
            }

            ++zIndex;
        }


        jThis.css('z-index', zIndex).addClass( Lia.Component.Flag.SHOWING );
        if ( jThis.hasClass( Lia.Component.Flag.WITHOUT_ANIMATING ) ) {

            jThis.show();
            var showEvent = new jQuery.Event( Lia.Component.Event.SHOW );
            jThis.trigger(showEvent);

        } else {
            jThis.fadeIn(Lia.Component.Value.Popup.FADE_DURATION);
            window.setTimeout.call(this, function( data ) {

                var jThis = jQuery(this);
                var showEvent = new jQuery.Event( Lia.Component.Event.SHOW );
                jThis.trigger(showEvent);

            }, Lia.Component.Value.Popup.FADE_DURATION);
        }
    }
}



function liaHidePopup( options )
{
    var jThis = jQuery(this);

    if ( jThis.hasClass( Lia.Component.Flag.SHOWING ) )
    {
        jThis.removeClass( Lia.Component.Flag.SHOWING );
        if ( jThis.hasClass( Lia.Component.Flag.WITHOUT_ANIMATING ) ) {
            jThis.hide();
            var hideEvent = new jQuery.Event( Lia.Component.Event.HIDE );
            jThis.trigger(hideEvent);
        } else {
            jThis.fadeOut(Lia.Component.Value.Popup.FADE_DURATION);
            window.setTimeout.call(this, function( data ) {

                var jThis = jQuery(this);
                var hideEvent = new jQuery.Event( Lia.Component.Event.HIDE );
                jThis.trigger(hideEvent);

            }, Lia.Component.Value.Popup.FADE_DURATION);
        }
    }
}



/**
 * lia.queue.js
 *
 * queue class
 *
 **/
/*
 */

Lia.Queue = function() {

    this.init();
};

Lia.Queue.prototype.init = function( ) {
    this.list = [];
};

Lia.Queue.prototype.enqueue = function( element ) {
    this.list.push(element);
};

Lia.Queue.prototype.peek = function() {
    if ( this.empty() )
        return null;
    return this.list[0];
};

Lia.Queue.prototype.dequeue = function() {

    if( this.empty() ) {
        return null;
    } else {
        return this.list.shift();
    }
};

Lia.Queue.prototype.empty = function() {
    return (this.list.length == 0);
};

Lia.Queue.prototype.size = function() {
    return this.list.length;
};

Lia.Queue.prototype.clear = function() {
    while(this.list.length > 0) {
        this.list.pop();
    }
};
/**
 * pager
 *
 * 페이지 순서대로 크고 끼고 할 수 있도록
 *
 */
/*
초기화 코드

$(document).ready(function () {

    $.initImageSelect();
    $.initImageSelectList();
});
*/

(function ($) {

    $.fn.extend({

        pagerIndex : function(index) {

            if ( index == undefined ) {

                return this.eq(0).children('.' + Lia.Component.Flag.SHOWING).index();
            }

            for(var i = 0, l = this.length; i < l; i++ ) {

                var jEq = this.eq(i);
                var jChildren = jEq.children();

                jChildren.hide().filter(Lia.Component.Flag.SHOWING).removeClass(Lia.Component.Flag.SHOWING);
                jChildren.eq(index).addClass(Lia.Component.Flag.SHOWING).show();
            }

            return this;
        }
    });
})(jQuery);
/**
 * resize
 *
 * 화면 사이즈에 맞도록 크기 변경
 *
 * <tag class="resize"
        lia-padding-left="{padding-left}"
        lia-padding-right="{padding-right}"
        lia-padding-top="{padding-top}"
        lia-padding-bottom="{padding-bottom}"
        lia-margin-left="{margin-left}"
        lia-margin-right="{margin-right}"
        lia-margin-top="{margin-top}"
        lia-margin-bottom="{margin-bottom}"
        lia-width="{width}"
        lia-height="{height}"
        lia-font-size="{font-size}"
        lia-top="{top}"
        lia-left="{left}"
        lia-line-height="{line-height}"
 */
/*
 초기화 코드

 $(document).ready(function () {

     $.adjustResize();
     $(window).resize(function() {
        $.adjustResize();
     });
 });
 */

(function ($) {


    $.extend({

        liaIsResizeBaseOnOnlyWidth : true,
        setResizeBaseOnOnlyWidth : function( isResizeBaseOnOnlyWidth ) {
            jQuery.liaIsResizeBaseOnOnlyWidth = isResizeBaseOnOnlyWidth;
        },

        liaResizeBaseWidth : Lia.Component.Value.Resize.DEFAULT_BASE_WIDTH,
        setResizeBaseWidth : function(width) {
            jQuery.liaResizeBaseWidth = width;
        },

        liaResizeBaseHeight : Lia.Component.Value.Resize.DEFAULT_BASE_HEIGHT,
        setResizeBaseHeight : function(height) {
            jQuery.liaResizeBaseHeight = height;
        },

        liaResizeSelector : undefined,
        setResizeSelector : function(selector) {
            jQuery.liaResizeSelector = selector;
        },

        /**
         * 조정
         */
        adjustResize : function( j,jWindow ) {

            var selector = '.' + Lia.Component.Name.RESIZE;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            if(jWindow==undefined)
            {
                j.adjustResize();
            }
            else
            {
                j.adjustResize(jWindow);
            }
        }
    });

    $.fn.extend({

        adjustResize : function(jWindow) {

            var jWindow = jWindow==undefined?(jQuery( jQuery.liaResizeSelector==undefined ? window : jQuery.liaResizeSelector )):jWindow;
            return this.each(function()
            {
                var jThis = $(this);
                var deviceWidth = parseFloat(jWindow.width());
                var deviceHeight = parseFloat(jWindow.height());

                var css = {};

                var w = $.liaIsResizeBaseOnOnlyWidth;

                liaSet(jThis, Lia.Component.AttrName.PADDING_LEFT, css, deviceWidth, deviceHeight, true);
                liaSet(jThis, Lia.Component.AttrName.PADDING_RIGHT, css, deviceWidth, deviceHeight, true);
                liaSet(jThis, Lia.Component.AttrName.PADDING_TOP, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.PADDING_BOTTOM, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.MARGIN_LEFT, css, deviceWidth, deviceHeight, true);
                liaSet(jThis, Lia.Component.AttrName.MARGIN_RIGHT, css, deviceWidth, deviceHeight, true);
                liaSet(jThis, Lia.Component.AttrName.MARGIN_TOP, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.MARGIN_BOTTOM, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.WIDTH, css, deviceWidth, deviceHeight, true);
                liaSet(jThis, Lia.Component.AttrName.HEIGHT, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.FONT_SIZE, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.TOP, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.LEFT, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.RIGHT, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BOTTOM, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.LINE_HEIGHT, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BORDER_WIDTH, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BORDER_TOP_WIDTH, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BORDER_BOTTOM_WIDTH, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BORDER_LEFT_WIDTH, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BORDER_RIGHT_WIDTH, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BORDER_RADIUS, css, deviceWidth, deviceHeight, w);
                liaSet(jThis, Lia.Component.AttrName.BACKGROUND_SIZE, css, deviceWidth, deviceHeight, true);
                liaSet(jThis, Lia.Component.AttrName.MIN_HEIGHT, css, deviceWidth, deviceHeight, w);

                jThis.css(css);
            });
        }

    });


})(jQuery);

function liaSet(j, baseAttrName, css, deviceWidth, deviceHeight, w)
{
    var px = j.attr(baseAttrName);
    if ( px != undefined )
        css[baseAttrName.replace('lia-', '')] = ( parseFloat(px) * (w?deviceWidth:deviceHeight) / ( w?$.liaResizeBaseWidth:$.liaResizeBaseHeight) ) + 'px';
}
/**
 * button
 *
 * 버튼 컴포넌트 공용 모듈
 * ( image_button, image_box, flat_button, flat_button jut )
 */
/*
 $(document).ready(function() {
 $.initButton();
 });
 */

(function ($) {


    $.extend({

        /**
         * 초기화
         */
        initButton: function ( j, options ) {

            var selector = '.' + Lia.Component.Name.BUTTON;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find(selector);

            return j.initButton( options );
        }
    });

    $.fn.extend({

        /**
         * 각 해당 컴포넌트에 맞도록 버튼 상태 세팅 혹은 리턴
         *
         * @param pressed
         * @param isInternalCall
         * @returns {*}
         */
        buttonPressed: function (pressed, isInternalCall) {

            if (pressed == undefined)
                return this.hasClass( Lia.Component.Flag.PRESSED );
            else if (pressed)
                this.addClass( Lia.Component.Flag.PRESSED );
            else
                this.removeClass( Lia.Component.Flag.PRESSED );

            return this.checkButtonStatus( isInternalCall );
        },

        /**
         * 초기화
         */
        initButton : function() {

            for(var i = 0, l = this.length; i < l; i++ ) {

                var jEq = this.eq(i);
                if ( jEq.hasClass(Lia.Component.Flag.INITED))
                    continue;

                var noBind = jEq.hasClass(Lia.Component.Flag.NO_BIND);
                if ( !noBind ) {

                    if (Lia.isMobile) {
                        jEq.on('touchstart', liaButtonDown).on('touchend', liaButtonLeave);
                    } else {
                        jEq.on('mousedown', liaButtonDown)
                            .on('mouseup', liaButtonUp)
                            .on('mouseenter', liaButtonEnter)
                            .on('mouseleave', liaButtonLeave);
                    }
                }

                jEq.checkButtonStatus();
                jEq.addClass(Lia.Component.Flag.INITED);
            }

            return this;
        },

        getButtonStatus : function() {

            var status = Lia.Component.Value.Button.Status.DEFAULT;

            var pressing = this.hasClass(Lia.Component.Flag.PRESSING);
            var hovering = this.hasClass(Lia.Component.Flag.HOVERING);
            var pressed = this.hasClass(Lia.Component.Flag.PRESSED);

            if ( pressed ) {
                status = Lia.Component.Value.Button.Status.PRESSED;
            } else if ( pressing ) {
                status = Lia.Component.Value.Button.Status.PRESSING;
            } else if ( hovering ) {
                status = Lia.Component.Value.Button.Status.HOVERING;
            }

            return status;
        },

        checkButtonStatus : function() {

            for (var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var status = jThis.getButtonStatus();

                var statusChangedEvent = new jQuery.Event( Lia.Component.Event.STATUS_CHANGED );
                statusChangedEvent.status = status;
                jThis.trigger(statusChangedEvent);
            }

            return this;
        }
    });
})(jQuery);


function liaButtonEnter(e) {

    var jThis = $(this);

    var isNoChange = jThis.hasClass(Lia.Component.Flag.NO_CHANGE);
    if ( isNoChange )
        return;

    var status = jThis.getButtonStatus();

    jThis.addClass(Lia.Component.Flag.HOVERING);

    if ( status == jThis.getButtonStatus() )
        return;

    jThis.checkButtonStatus();
}

function liaButtonLeave(e) {

    var jThis = $(this);

    var isNoChange = jThis.hasClass(Lia.Component.Flag.NO_CHANGE);
    if ( isNoChange )
        return;

    var status = jThis.getButtonStatus();

    jThis.removeClass(Lia.Component.Flag.PRESSING).removeClass(Lia.Component.Flag.HOVERING);

    if ( status == jThis.getButtonStatus() )
        return;

    jThis.checkButtonStatus();
}

function liaButtonDown(e) {

    var jThis = $(this);

    var isNoChange = jThis.hasClass(Lia.Component.Flag.NO_CHANGE);
    if ( isNoChange )
        return;

    var status = jThis.getButtonStatus();

    jThis.addClass(Lia.Component.Flag.PRESSING);

    if ( status == jThis.getButtonStatus() )
        return;

    jThis.checkButtonStatus();
}

function liaButtonUp(e) {

    var jThis = $(this);

    var isNoChange = jThis.hasClass(Lia.Component.Flag.NO_CHANGE);
    if ( isNoChange )
        return;

    var status = jThis.getButtonStatus();

    jThis.removeClass(Lia.Component.Flag.PRESSING);

    if ( status == jThis.getButtonStatus() )
        return;

    jThis.checkButtonStatus();
}


/**
 * datejs 사용하여 처리
 *
 * @type {{}}
 */
jQuery.DateHelper = {

    FORMAT_YY_MM_DD_HH_mm_ss : 'yyyy-MM-dd HH:mm:ss',
    FORMAT_YY_MM_DD : 'yyyy-MM-dd',

    getDateObject : function( text ) {

        if ( typeof text == 'string' ) {
            return new Date(text);
        } else {
            return text;
        }
    },

    dateStringToYY_MM_DD : function( text, defaultString ) {

        if ( String.isBlank(text) )
            return defaultString;


        if ( text.length < 10 ) {
            return defaultString;
        }


        return text.substr(0, 10);
    }




};


jQuery.FormatHelper = {

    toPrice : function( number ) {

        if (number == undefined || isNaN(number))
            return;

        var num = parseInt(number);
        var len, point, str;

        num = num + "";
        point = num.length % 3;
        len = num.length;

        str = num.substring(0, point);
        while (point < len) {
            if (str != "") str += ",";
            str += num.substring(point, point + 3);
            point += 3;
        }

        return str;
    },


    toCamel : function( item ) {
        return item.replace(/[-_]([a-z])/g, function (a) { return a[1].toUpperCase(); })
    },

    toUnderscore : function( item ) {
        return item.replace(/([A-Z])/g, function (a) { return '_' + a[0].toLowerCase(); })
    },

    arrayKeyToUnderscore : function( item ) {

        var r = {};
        for(var key in item) {
            r[jQuery.FormatHelper.toUnderscore(key)] = item[key];
        }

        return r;
    },

    arrayKeyToCamel : function( item ) {

        var r = {};
        for(var key in item) {
            r[jQuery.FormatHelper.toCamel(key)] = item[key];
        }

        return r;
    }

};


jQuery.CookieHelper = {

    set: function (key, value) {
        $.cookie(key, value, {expires: 365 * 3, path: '/'});
    },

    get: function (key) {
        return $.cookie(key);
    },

    remove: function (key) {
        $.removeCookie(key, {expires: 365 * 3, path: '/'});
    }
};


jQuery.Base64Helper = {

    KEY : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    encode: function(input, key) {

        if ( key == undefined ) {
            key = jQuery.Base64Helper.KEY;
        }

        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = jQuery.Base64Helper._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
        }

        return output;
    },


    decode: function(input, key) {

        if ( key == undefined ) {
            key = jQuery.Base64Helper.KEY;
        }

        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = key.indexOf(input.charAt(i++));
            enc2 = key.indexOf(input.charAt(i++));
            enc3 = key.indexOf(input.charAt(i++));
            enc4 = key.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }

        output = jQuery.Base64Helper._utf8_decode(output);

        return output;

    },

    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = 0;
        var c2 = 0;
        var c3 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }

        return string;
    }

};/**
 *  ajax 호출
**/

jQuery.Requester = function( parameter ) {
    this.init(parameter);
};

jQuery.Requester.DefaultRequestValue = function(parameter) {

    this.sync = Lia.Component.Value.Requester.DefaultRequestValue.DEFAULT_SYNC;
    this.dataType = Lia.Component.Value.Requester.DefaultRequestValue.DEFAULT_DATA_TYPE;
    this.method = Lia.Component.Value.Requester.DefaultRequestValue.DEFAULT_METHOD;
    this.q = Lia.Component.Value.Requester.DefaultRequestValue.DEFAULT_Q;
    this.noExecuteOnResponseWhenError = Lia.Component.Value.Requester.DefaultRequestValue.DEFAULT_NO_EXECUTE_ON_RESPONSE_WHEN_ERROR;

    if ( parameter != undefined ) {

        var sync = parameter['sync'];
        if (sync != undefined)
            this.sync = sync;

        var dataType = parameter['dataType'];
        if (dataType != undefined)
            this.dataType = dataType;

        var method = parameter['method'];
        if (method != undefined)
            this.method = method;

        var q = parameter['q'];
        if (q != undefined)
            this.q = q;

        var noExecuteOnResponseWhenError = parameter['noExecuteOnResponseWhenError'];
        if (noExecuteOnResponseWhenError != undefined)
            this.noExecuteOnResponseWhenError = q;
    }
};

jQuery.Requester.DefaultRequestValue.prototype.setQ =  function (q) {
    this.q = q;
};
jQuery.Requester.DefaultRequestValue.prototype.getQ =  function () {
    return this.q;
};

jQuery.Requester.DefaultRequestValue.prototype.setMethod = function (method) {
    this.method = method;
};
jQuery.Requester.DefaultRequestValue.prototype.getMethod = function () {
    return this.method;
};

jQuery.Requester.DefaultRequestValue.prototype.setSync = function (sync) {
    this.sync = sync;
};
jQuery.Requester.DefaultRequestValue.prototype.getSync = function () {
    return this.sync;
};

jQuery.Requester.DefaultRequestValue.prototype.setDataType = function (dataType) {
    this.dataType = dataType;
};
jQuery.Requester.DefaultRequestValue.prototype.getDataType = function () {
    return this.dataType;
};
jQuery.Requester.DefaultRequestValue.prototype.setNoExecuteOnResponseWhenError = function (noExecuteOnResponseWhenError) {
    this.noExecuteOnResponseWhenError = noExecuteOnResponseWhenError;
};
jQuery.Requester.DefaultRequestValue.prototype.getNoExecuteOnResponseWhenError = function () {
    return this.noExecuteOnResponseWhenError;
};

jQuery.Requester.Status = Lia.Component.Value.Requester.Status;
jQuery.Requester.Type = Lia.Component.Value.Requester.Type;

jQuery.Requester.prototype.init = function( parameter ) {

    this.defaultRequestValue = new jQuery.Requester.DefaultRequestValue(parameter);
    this.requesting = false;
    this.queue = new Lia.Queue();
    this.queueXhr = undefined;

    if ( parameter != undefined ) {

        var responseCheckHandler = parameter['responseCheckHandler'];
        if ( responseCheckHandler != undefined ) {
            this.responseCheckHandler = responseCheckHandler;
        }

        var onPreRequest = parameter['onPreRequest'];
        if ( onPreRequest != undefined ) {
            this.onPreRequest = onPreRequest;
        }

        var onRequestEnded = parameter['onRequestEnded'];
        if ( onRequestEnded != undefined ) {
            this.onRequestEnded = onRequestEnded;
        }

        var onRequestStart = parameter['onRequestStart'];
        if ( onRequestStart != undefined ) {
            this.onRequestStart = onRequestStart;
        }

        // 기본 값
        var noExecuteOnResponseWhenError = parameter['noExecuteOnResponseWhenError'];
        if ( noExecuteOnResponseWhenError != undefined ) {
            this.defaultRequestValue.setNoExecuteOnResponseWhenError(noExecuteOnResponseWhenError);
        }

        var sync = parameter['sync'];
        if ( sync != undefined ) {
            this.defaultRequestValue.setSync(sync);
        }

        var dataType = parameter['dataType'];
        if (dataType != undefined)
            this.defaultRequestValue.setDataType(dataType);

        var method = parameter['method'];
        if (method != undefined)
            this.defaultRequestValue.setMethod(method);

        var q = parameter['q'];
        if (q != undefined)
            this.defaultRequestValue.setQ(q);

    }
};

jQuery.Requester.prototype.isRequesting = function () {
    return this.requesting;
};

jQuery.Requester.prototype.setRequesting = function ( requesting ) {
    this.requesting = requesting;
};

jQuery.Requester.prototype.onRequestStart = function (request) {
};

jQuery.Requester.prototype.setOnRequestStart = function (func) {
    this.onRequestStart = func;
};

jQuery.Requester.prototype.onRequestEnded = function (status, data, request) {
};
jQuery.Requester.prototype.setOnRequestEnded = function (func) {
    this.onRequestEnded = func;
};

jQuery.Requester.prototype.responseCheckHandler = function (status, data, request) {
    return status;
};

jQuery.Requester.prototype.setResponseCheckHandler = function (func) {
    this.responseCheckHandler = func;
};

jQuery.Requester.prototype.onPreRequest = function ( request ) {

    var parameterMap = request['parameterMap'];
    if ( parameterMap != undefined ) {

        var newParameterMap = {};

        for( var key in parameterMap ) {
            var value = parameterMap[key];
            if ( value != undefined )
                newParameterMap[key] = value;
        }

        request['parameterMap'] = newParameterMap;
    }
};

jQuery.Requester.prototype.setOnPreRequest = function (func) {
    this.onPreRequest = func;
};

jQuery.Requester.prototype.next = function () {

    if ( this.requesting == false ) {

        var object = this.queue.dequeue();
        if ( object == null )
            return;

        var type = object['type'];
        if ( type == jQuery.Requester.Type.EXECUTE ) {

            this.requesting = true;

            var onExecute = object['onExecute'];
            if ( onExecute != undefined ) {
                onExecute(object);
            }

            this.requesting = false;
            this.next();

        } else { // if ( type == jQuery.Requester.Type.REQUEST ) {

            object['q'] = false;
            object['nextRequest'] = true;

            this.requesting = true;
            this.request(object);
        }

    }
};

jQuery.Requester.prototype.abort = function () {

    this.queue.clear();
    if ( this.queueXhr != undefined ) {
        this.queueXhr.abort();
        this.queueXhr = undefined;
    }

    this.requesting = false;
};

jQuery.Requester.prototype.setQueueXhr = function( xhr ) {
    this.queueXhr = xhr;
};

jQuery.Requester.prototype.execute = function( excute ) {

    //request['onExecute'];
    excute['type'] = jQuery.Requester.Type.EXECUTE;

    this.queue.enqueue(excute);

    if ( this.requesting == false ) {
        this.next();
    }
};

jQuery.Requester.prototype.request = function (request) {

    var onResponse = request['onResponse'];
    var noExecuteOnResponseWhenError = request['noExecuteOnResponseWhenError'];
    var object = request['object'];
    var sync = request['sync'];
    var q = request['q'];
    var dataType = request['dataType'];
    var method = request['method'];
    var nextRequest = request['nextRequest'];
    var jForm = request['jForm'];

    //var onProgress = request['onProgress'];
    //var parameterMap = request['parameterMap'];
    //var url = request['url'];

    if (sync == undefined)
        sync = this.defaultRequestValue.getSync();

    if (dataType == undefined)
        dataType = this.defaultRequestValue.getDataType();

    if (q == undefined)
        q = this.defaultRequestValue.getQ();

    if (method == undefined)
        method = this.defaultRequestValue.getMethod();

    if ( noExecuteOnResponseWhenError == undefined ) {
        noExecuteOnResponseWhenError = this.defaultRequestValue.getNoExecuteOnResponseWhenError();
    }

    request['noExecuteOnResponseWhenError'] = noExecuteOnResponseWhenError;
    request['sync'] = sync;
    request['dataType'] = dataType;
    request['q'] = q;
    request['method'] = method;
    request['requester'] = this;
    request['type'] = jQuery.Requester.Type.REQUEST;

    if ( q ) {

        this.queue.enqueue(request);

        if ( this.requesting == false ) {
            this.next();
        }

    } else {

        this.onPreRequest(request);

        this.onRequestStart(request);

        if ( jForm != undefined ) {

            jForm.ajaxSubmit({

                method : request['method'],
                context : request,
                url : request['url'],
                forceSync: request['sync'],
                dataType : request['dataType'],
                data : request['parameterMap'],
                uploadProgress : function( event, position, total, percentComplete ) {

                    if ( this.onProgress == undefined )
                        return;

                    var data = {
                        event : event,
                        position : position,
                        total : total,
                        percentComplete : percentComplete
                    };

                    this.onProgress(data, request);
                },
                error : function(jqXhr) {

                    var status = this.requester.responseCheckHandler(jQuery.Requester.Status.ERROR, jqXhr.status, this);

                    if (this.onResponse != undefined) {

                        if ( status != jQuery.Requester.Status.ERROR || !this.noExecuteOnResponseWhenError ) {

                            this.onResponse(status, jqXhr.status, this);
                        }
                    }

                    this.requester.onRequestEnded(status, jqXhr.status, this);

                    this.requester.setRequesting(false);

                    if ( this.nextRequest ) {
                        this.requester.setQueueXhr(undefined);
                        this.requester.next();
                    }
                },
                success: function(data) {


                    var status = this.requester.responseCheckHandler(jQuery.Requester.Status.SUCCESS, data, this);

                    if (this.onResponse != undefined) {

                        if ( status != jQuery.Requester.Status.ERROR || !this.noExecuteOnResponseWhenError ) {

                            this.onResponse(status, data, this);
                        }
                    }

                    this.requester.onRequestEnded(status, data, this);

                    this.requester.setRequesting(false);

                    if ( this.nextRequest ) {
                        this.requester.setQueueXhr(undefined);
                        this.requester.next();
                    }
                }
            });

            if ( nextRequest ) {
                this.queueXhr = jForm.data('jqxhr');
            }

        } else {

            var ajaxOptions = {
                type: request['method'],
                method : request['method'],
                url: request['url'] + '?t=' + Lia.getTimestamp(),
                async: !request['sync'],
                dataType: request['dataType'],
                data: request['parameterMap'],
                context: request,
                error: function (jqXhr, options, error) {

                    if (jqXhr && jqXhr.status == 0)
                        return;

                    var status = this.requester.responseCheckHandler(jQuery.Requester.Status.ERROR, jqXhr.status, this);

                    if (this.onResponse != undefined ) {

                        if ( status != jQuery.Requester.Status.ERROR || !this.noExecuteOnResponseWhenError ) {
                            this.onResponse(status, jqXhr.status, this);
                        }
                    }

                    this.requester.onRequestEnded(status, jqXhr.status, this);
                },
                success: function (data) {

                    var status = this.requester.responseCheckHandler(jQuery.Requester.Status.SUCCESS, data, this);

                    if (this.onResponse != undefined) {

                        if ( status != jQuery.Requester.Status.ERROR || !this.noExecuteOnResponseWhenError ) {

                            this.onResponse(status, data, this);
                        }
                    }

                    this.requester.onRequestEnded(status, data, this);
                },
                complete : function( jqXHR, textStatus ) {

                    this.requester.setRequesting(false);

                    if ( this.nextRequest ) {
                        this.requester.setQueueXhr(undefined);
                        this.requester.next();
                    }
                }
            };

            var xhr = jQuery.ajax(ajaxOptions);
            if ( nextRequest ) {
                this.queueXhr = xhr;
            }
        }
    }

};

jQuery.Requester.prototype.func = function( onExecute, object ) {

    var execute = {
        onExecute : onExecute,
        object : object
    };

    this.execute(execute);
};



jQuery.Requester.prototype.ajaxWithoutBlank = function( url, parameterMap, onResponse, object, noExecuteOnResponseWhenError, q ) {

    var newParameterMap = undefined;
    if ( parameterMap != undefined ) {
        newParameterMap = {};

        for ( var key in parameterMap ) {

            var value = parameterMap[key];

            if ( !String.isNullOrWhitespace(value) )
                newParameterMap[key] = value;
        }
    }

    this.ajax(url, newParameterMap, onResponse, object, noExecuteOnResponseWhenError, q);
};


jQuery.Requester.prototype.ajaxWithoutBlankWithoutQ = function( url, parameterMap, onResponse, object, noExecuteOnResponseWhenError ) {

    this.ajaxWithoutBlank(url, parameterMap, onResponse, object, noExecuteOnResponseWhenError, false);
};


jQuery.Requester.prototype.ajax = function( url, parameterMap, onResponse, object, noExecuteOnResponseWhenError, q ) {

    var request = {
        url : url,
        noExecuteOnResponseWhenError : noExecuteOnResponseWhenError,
        parameterMap : parameterMap,
        onResponse : onResponse,
        object : object,
        sync : false,
        q : q
    };

    this.request(request);
};

//var data = {
//    event : event,
//    position : position,
//    total : total,
//    percentComplete : percentComplete
//};
jQuery.Requester.prototype.formUpload = function( url, parameterMap, jForm, onResponse, onProgress,
                                                  object, noExecuteOnResponseWhenError ) {

    var request = {
        url : url,
        jForm : jForm,
        onProgress : onProgress,
        noExecuteOnResponseWhenError : noExecuteOnResponseWhenError,
        parameterMap : parameterMap,
        onResponse : onResponse,
        object : object,
        sync : false,
        q : true
    };

    this.request(request);
};

jQuery.Requester.prototype.formUploadWithoutBlank = function( url, parameterMap, jForm, onResponse, onProgress,
                                                              object, noExecuteOnResponseWhenError ) {

    var newParameterMap = undefined;
    if ( parameterMap != undefined ) {
        newParameterMap = {};

        for ( var key in parameterMap ) {

            var value = parameterMap[key];

            if ( !String.isNullOrWhitespace(value) )
                newParameterMap[key] = value;
        }
    }

    this.formUpload(url, newParameterMap, jForm, onResponse, onProgress,
        object, noExecuteOnResponseWhenError);
};

jQuery.Requester.prototype.open = function( url, parameterMap, options ) {

    var optionString = '';

    if ( options != undefined ) {

        for ( var key in options ) {

            var value = options[key];

            if ( String.isNotBlank(optionString) ) {
                optionString += ',';
            }

            optionString += key + '=' + value;
        }
    }

    window.open(url + Lia.convertArrayToQueryString(parameterMap), '', optionString);
};

jQuery.Requester.prototype.openWithoutBlank = function( url, parameterMap, options ) {

    var newParameterMap = undefined;
    if ( parameterMap != undefined ) {
        newParameterMap = {};

        for ( var key in parameterMap ) {

            var value = parameterMap[key];

            if ( !String.isNullOrWhitespace(value) )
                newParameterMap[key] = value;
        }
    }

    this.open(url, newParameterMap, options);
};

jQuery.Requester.init = function() {
};
jQuery.Requester.checkProgressSupported = function() {
    var ieVersion = Lia.checkInternetExplorerVersion();
    if ( ieVersion != -1 )
        return ieVersion > 9;
    else
        return Lia.checkiPhoneSeries() || Lia.checkAndroid() || Lia.checkChrome() || Lia.checkSafari() || Lia.checkOpera() || Lia.checkFirefox();
};
jQuery.Requester.isProgressSupported = jQuery.Requester.checkProgressSupported();


jQuery.Requester.prototype.awb = jQuery.Requester.prototype.ajaxWithoutBlank;
jQuery.Requester.prototype.awbwq = jQuery.Requester.prototype.ajaxWithoutBlankWithoutQ;
jQuery.Requester.prototype.a = jQuery.Requester.prototype.ajax;
jQuery.Requester.prototype.o = jQuery.Requester.prototype.open;
jQuery.Requester.prototype.owb = jQuery.Requester.prototype.openWithoutBlank;

/**
 * image_input
 *
 * <div class="image_input" lia-src="{배경 이미지 주소}"
             style="width:{배경 이미지 width};height:{배경 이미지 height};" lia-padding="{양 쪽 패딩 px}"></div>
 *      input type=text
 * <div class="image_input textarea" lia-src="{배경 이미지 주소}"
             style="width:{배경 이미지 width};height:{배경 이미지 height};" lia-padding="{양 쪽 패딩 px}"></div>
 *      textarea
 * <div class="image_input placeholder" lia-src="{배경 이미지 주소}"
            style="width:{배경 이미지 width};height:{배경 이미지 height};" lia-padding="{양 쪽 패딩 px}"
            lia-postfix="{placeholder 파일 접미사}"></div>
 *      placehoder 들어감
 *      lia-postfix 가 들어가 있으면 해당 파일로 _{파일 접미사}.png 가 붙음
 *      안들어가 있으면 _placeholder.png 가 붙음
 *
 * .imageInputVal
 *      입력 값 설정 및 받아오기
 * .imageInput
 *      실제 입력 DOM객체 받아오기
 *
 */
/*
 초기화 코드

 $(document).ready(function () {

    $.imageInput();
 });

 */
(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initImageInput : function( j ) {

            var selector = '.' + Lia.Component.Name.IMAGE_INPUT;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initImageInput();
        }
    });

    $.fn.extend({

        /**
         * 입력된 내용 세팅, 리턴
         * @param val
         * @returns {*}
         */
        imageInputVal: function (val) {

            if (val == undefined)
                return this.find(':input').val();
            else
                this.find(':input').val(val);

            return this;
        },

        /**
         * 내용에 다른 placeholder 체크
         * @returns {*}
         */
        checkImageInput : function() {

            return this.find(':input').change();

        },

        /**
         * 실제 input 태그 반환
         * @returns {*}
         */
        imageInput: function () {
            return this.find(':input');
        },

        /**
         * 초기화
         * @returns {*}
         */
        initImageInput : function() {

            return this.each(function () {

                var jThis = $(this);
                if ( jThis.hasClass( Lia.Component.Flag.INITED ) )
                    return;

                var height = jThis.height() + 'px';
                var width =  jThis.width() + 'px';
                var path = jThis.attr( Lia.Component.AttrName.SRC );

                var jPlaceholder = $('<div />');
                jPlaceholder.css({
                    'position': 'relative',
                    'width': width,
                    'height': height
                });

                jThis.append(jPlaceholder);

                var isTextarea = jThis.hasClass( Lia.Component.Flag.TEXTAREA );
                var jInput = $('<' + ( isTextarea ? 'textarea' : 'input' ) + ' />');

                if (!isTextarea)
                {
                    var type = jThis.hasClass( Lia.Component.Flag.PASSWORD ) ? 'password' : 'text';
                    jInput.attr('type', type);
                }
                else
                {
                    var isImageInputNoResize = jThis.hasClass( Lia.Component.Flag.NO_RESIZE );
                    if (isImageInputNoResize)
                        jInput.css('resize', 'none');

                    var isImageInputHiddenOverflow = jThis.hasClass( Lia.Component.Flag.HIDDEN_OVERFLOW );
                    var overflow = 'auto';
                    if (isImageInputHiddenOverflow)
                        overflow = 'hidden';

                    jInput.css('overflow', overflow);
                }

                var textAlign = "left";
                var isAlignCenter = jThis.hasClass( Lia.Component.Flag.ALIGN_CENTER );
                var isAlignRight = jThis.hasClass( Lia.Component.Flag.ALIGN_RIGHT );
                if (isAlignCenter)
                    textAlign = "center";
                if (isAlignRight)
                    textAlign = "right";

                var paddingLeft = Lia.Component.Value.ImagePlaceholderInput.DEFAULT_HORIZONTAL_PADDING;
                var paddingRight = Lia.Component.Value.ImagePlaceholderInput.DEFAULT_HORIZONTAL_PADDING;
                var paddingTop = Lia.Component.Value.ImagePlaceholderInput.DEFAULT_VERTICAL_PADDING;
                var paddingBottom = Lia.Component.Value.ImagePlaceholderInput.DEFAULT_VERTICAL_PADDING;
                var padding = jThis.attr( Lia.Component.AttrName.PADDING );
                if ( padding != undefined )
                {
                    paddingLeft = padding;
                    paddingRight = padding;
                    paddingTop = padding;
                    paddingBottom = padding;
                }

                padding = jThis.attr( Lia.Component.AttrName.PADDING_HORIZONTAL );
                if ( padding != undefined )
                {
                    paddingLeft = padding;
                    paddingRight = padding;
                }

                padding = jThis.attr( Lia.Component.AttrName.PADDING_VERTICAL );
                if ( padding != undefined )
                {
                    paddingTop = padding;
                    paddingBottom = padding;
                }

                padding = jThis.attr( Lia.Component.AttrName.PADDING_LEFT );
                if ( padding != undefined )
                    paddingLeft = padding;

                padding = jThis.attr( Lia.Component.AttrName.PADDING_RIGHT );
                if ( padding != undefined )
                    paddingRight = padding;

                padding = jThis.attr( Lia.Component.AttrName.PADDING_TOP );
                if ( padding != undefined )
                    paddingTop = padding;

                padding = jThis.attr( Lia.Component.AttrName.PADDING_BOTTOM );
                if ( padding != undefined )
                    paddingBottom = padding;

                var textColor = jThis.attr( Lia.Component.AttrName.TEXT_COLOR );
                if ( textColor == undefined )
                    textColor = Lia.Component.Value.ImagePlaceholderInput.DEFAULT_TEXT_COLOR;


                width = (parseFloat(width) - parseFloat(paddingLeft) - parseFloat(paddingRight)) + 'px';
                height = (parseFloat(height) - parseFloat(paddingTop) - parseFloat(paddingBottom)) + 'px';

                jInput.css({
                    'color' : textColor,
                    'position' : 'relative',
                    'background-color': 'transparent',
                    'border-width': '0px',
                    'outline': 'none',
                    'width': width,
                    'padding-left' : paddingLeft,
                    'padding-right' : paddingRight,
                    'padding-top': paddingTop,
                    'padding-bottom': paddingBottom,
                    'height': height,
                    'text-align': textAlign
                });

                if (!isTextarea && Lia.ieVersion != -1)
                    jInput.css('line-height', height);

                jThis.css('background-image',"url('" + path + "')");

                jPlaceholder.append(jInput);

                jThis.filter( '.' + Lia.Component.Flag.PLACEHOLDER ).find(':input').change(liaCheckImageInput).focus(function () {

                    var jThis = $(this);
                    var jPlaceholder = jThis.parent();

                    jPlaceholder.css('background-image', '');

                }).focusout(liaCheckImageInput).change();

                jThis.addClass( Lia.Component.Flag.INITED );

            });
        }

    });
})(jQuery);

function liaCheckImageInput()
{
    var jThis = $(this);
    var jPlaceholder = jThis.parent();
    var jParent = jPlaceholder.parent();

    var path = jParent.attr('src');
    var postfix = jParent.attr( Lia.Component.AttrName.POSTFIX );
    if ( postfix == undefined )
        postfix = Lia.Component.Value.ImagePlaceholderInput.DEFAULT_POSTFIX;

    var url;
    if (jThis.val() == '')
        url = "url('" + (path = path.replace( Lia.Component.Value.ImagePlaceholderInput.REPLACEMENT_POSTFIX, postfix)) + "')";
    else
        url = '';

    jPlaceholder.css('background-image', url);

}
/**
 * deprecated
 *
 *  jquery.form.js 임포트 시켜야 함
 *
**/

/*
사용 코드

var formUpload = new $.FormUpload( {url} );
formUpload.init( { url } );
formUpload.setUrl( { url } );
formUpload.setContext(context);
formUpload.add('name', $(...));
formUpload.setOnCompleted(function(uploadList){});
formUpload.upload();

노드 이름 변경 ( static 함수 )

$.FormUpload.setPathNodeName( name );

 }
*/

jQuery.FormUpload = function( url ) {

    this.init( url );
};

jQuery.FormUpload.NAME = Lia.Component.Value.FormUpload.NAME;
jQuery.FormUpload.FORM = Lia.Component.Value.FormUpload.FORM;
jQuery.FormUpload.TAG = Lia.Component.Value.FormUpload.TAG;
jQuery.FormUpload.PATH = Lia.Component.Value.FormUpload.PATH;
jQuery.FormUpload.RESPONSE = Lia.Component.Value.FormUpload.RESPONSE;


/**
 * 초기화
 */
jQuery.FormUpload.prototype.init = function( url ) {

    this.url = url;
    this.uploadList = [];
    this.uploadedList = [];
    this.currentUploadIndex = 0;
};

jQuery.FormUpload.pathNodeName = Lia.Component.Value.FormUpload.DEFAULT_PATH_NODE_NAME;
jQuery.FormUpload.isSupportedProgress = undefined;
jQuery.FormUpload.init = function() {

    var ieVersion = Lia.checkInternetExplorerVersion();
    if ( ieVersion != -1 )
        jQuery.FormUpload.isSupportedProgress = ieVersion > 9;
    else
        jQuery.FormUpload.isSupportedProgress = Lia.checkiPhoneSeries() || Lia.checkAndroid() || Lia.checkChrome() || Lia.checkSafari() || Lia.checkOpera() || Lia.checkFirefox();
};

/**
 * 주소 노드 이름 설정
 * @param name
 */
jQuery.FormUpload.setPathNodeName = function (name) {

    jQuery.FormUpload.pathNodeName = name;
};

/**
 * url 설정
 *
 *  @param url
 */
jQuery.FormUpload.prototype.setUrl = function( url ) {

    this.url = url;
};

/**
 * context 설정
 *
 *  @param context
 */
jQuery.FormUpload.prototype.setContext = function( context ) {

    this.context = context;
};

/**
 * 현재 컨텍스트 얻기
 *
 * @returns context
 */
jQuery.FormUpload.prototype.getContext = function() {

    return ((this.context == undefined)?this:this.context);
};

/**
 * 경초 찾기 함수
 *
 * @param uploadedList
 */
jQuery.FormUpload.prototype.onFindPath = function( response ) {

    return response[jQuery.FormUpload.pathNodeName];

};

/**
 * 경로 찾기 함수 설정
 *
 * @param func
 */
jQuery.FormUpload.prototype.setOnFindPath = function(func) {

    this.onFindPath = func;
};

/**
 * 업로드
 */
jQuery.FormUpload.prototype.upload = function() {

    if ( this.uploadedList == null )
    {
        this.onCompleted.call(this.getContext(), null);
        return;
    }

    if (this.currentUploadIndex == this.uploadList.length )
    {
        this.onCompleted.call(this.getContext(), this.uploadedList);
        return;
    }

    this.uploadList[this.currentUploadIndex][Lia.Component.Value.FormUpload.FORM].submit();

};

/**
 * 추가
 *
 * @param name
 * @param jForm
 */
jQuery.FormUpload.prototype.add = function (name, jForm, tag) {

    jForm.ajaxForm({

        context : this,
        url : this.url,
        dataType : 'json',
        uploadProgress : function( event, position, total, percentComplete ) {

            if ( this.uploadList == undefined )
                return;

            var currentUpload =  this.uploadList[this.currentUploadIndex];
            if ( this.onProgress == undefined )
                return;

            this.onProgress.call(this.getContext(), currentUpload, event, position, total, percentComplete );
        },
        error : function() {
            this.onCompleted.call(this.getContext(), null);
            return;
        },
        success: function(response) {

            var path = null;
            if ( response == null || String.isNullOrWhitespace( path = this.onFindPath.call(this, response ) ) )
            {
                this.onCompleted.call(this.getContext(), null);
                return;
            }

            var uploaded = {};

            var currentUpload =  this.uploadList[this.currentUploadIndex];
            for ( var key in currentUpload )
                uploaded[key] = currentUpload[key];

            uploaded[jQuery.FormUpload.PATH] = path;
            uploaded[jQuery.FormUpload.RESPONSE] = response;

            this.uploadedList.push(uploaded);

            ++this.currentUploadIndex;
            this.upload();
        }
    });

    var upload = {};
    upload[jQuery.FormUpload.NAME] = name;
    upload[jQuery.FormUpload.FORM] = jForm;
    upload[jQuery.FormUpload.TAG] = tag;
    this.uploadList.push(upload);
};

/**
 * 진행 업데이트 함수
 *
 * @param upload add 함술 입력한 객체
 * @param event 브라우져 이벤트값
 * @param position 현재
 * @param total 전체값
 * @param percentComplete 퍼센테이지값(100기준)
 */
jQuery.FormUpload.prototype.onProgress = undefined;
// function( upload, event, position, total, percentComplete ) {};

/**
 * 진행 함수 설정
 *
 * @param func
 */
jQuery.FormUpload.prototype.setOnProgress = function(func) {

    this.onProgress = func;
};


/**
 * 기본 진행 함수
 * @param uploadedList
 */
jQuery.FormUpload.prototype.onCompleted = function(uploadedList) {

    alert('Set onCompleted Function!\r\nUploaded List :\r\n' + JSON.stringify(uploadedList));
};


/**
 * 완료함수 설정
 *
 * @param func
 */
jQuery.FormUpload.prototype.setOnCompleted = function(func) {

    this.onCompleted = func;
};
/**
 * input_select
 *
 * image_select_list 의 부모 뷰에 마우스가 벗어나면 콤보박스가 사라짐
 * 아래 형식처럼 코딩
 * height 지정해주지 말고 position:relative 로
 *
    <div style="{총 크기 설정해 주어야 함}">
       <div class="image_select {텍스트 정렬 방법}"
             style="{위치 잡아주어야 함}"
             lia-background-image="{이미지 주소}" ></div>
       <div class="image_select_list {텍스트 청렬 방법}"
                style="{위치 잡아주어야 함}"
                lia-background-image="{이미지 주소}" lia-row-height="{한 줄당 길이}"
                lia-text-color="{글자 색상}" lia-hover-color="{마우스 오버될 때의 색상}"></div>
    </div>
 *
 * {텍스트 정렬 방법} = align_left, align_right, align_center
 *
 * image_select
 *      .imageSelectVal
 *          보여지는 텍스트 설정 및 겨져오기
 *      .imageSelectIndex
 *          보여지는 인덱스 설정 및 가져오기
 *      .imageSelectList
 *          콤보박스 객체 설정 및 가져오기 (.image_select_list, jquery 객체)
 *
 * image_select_list
 *      .imageSelectListArray
 *          리스트 설정 및 가져오기 [ { text :  'abc', value : '1' }, { text : 'def', value : '2'} ]
 *
 */
/*
초기화 코드

$(document).ready(function () {

    $.initImageSelect();
    $.initImageSelectList();
});
*/

(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initImageSelect : function( j ) {

            var selector = '.' + Lia.Component.Name.IMAGE_SELECT;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initImageSelect();
        },

        /**
         * 초기화
         */
        initImageSelectList : function( j ) {

            var selector = '.' + Lia.Component.Name.IMAGE_SELECT_LIST;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            j.initImageSelectList();
        }
    });

    $.fn.extend({

        /**
         * 선택된 있는 값 세팅, 리턴
         *
         * @param val
         * @returns {*}
         */
        imageSelectVal : function(val) {

            if ( val == undefined ) {

                var imageSelectList = this.data( Lia.Component.Value.ImageSelect.LIST );
                if ( imageSelectList == undefined )
                    return undefined;

                var array = imageSelectList.data( Lia.Component.Value.ImageSelect.LIST_ARRAY );
                var index = this.imageSelectIndex();

                return Lia.p(array, index, Lia.Component.Value.ImageSelect.VALUE );
            }

            for( var i = 0, l= this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var index = undefined;

                var imageSelectList = jThis.data( Lia.Component.Value.ImageSelect.LIST );
                if ( imageSelectList == undefined )
                    return;

                var array = imageSelectList.data( Lia.Component.Value.ImageSelect.LIST_ARRAY );
                if ( array != undefined ) {

                    for ( var k = 0, kl = array.length; k < kl; k++ ){

                        var item = array[k];
                        var value = item[ Lia.Component.Value.ImageSelect.VALUE ];
                        if ( value == val ) {
                            index = k;
                            break;
                        }
                    }
                }


                jThis.imageSelectIndex(index);
            }
        },

        /**
         * 선택된 인덱스 세팅, 리턴
         *
         * @param index
         * @returns {*}
         */
        imageSelectIndex : function(index) {

            if ( index == undefined )
                return this.data( Lia.Component.Value.ImageSelect.INDEX );

            return this.data( Lia.Component.Value.ImageSelect.INDEX, index ).each( function() {

                var jThis = $(this);

                var index = jThis.data( Lia.Component.Value.ImageSelect.INDEX );
                if ( index == undefined )
                    return;

                var imageSelectList = jThis.data( Lia.Component.Value.ImageSelect.LIST );
                if ( imageSelectList == undefined )
                    return;

                var array = imageSelectList.data( Lia.Component.Value.ImageSelect.LIST_ARRAY );

                var name = Lia.p(array, index, Lia.Component.Value.ImageSelect.NAME );
                jThis.empty().append(name);
            });

        },

        /**
         * image_select_list 컴포넌트 새팅, 리턴
         *
         * @param imageSelectList
         * @returns {*}
         */
        imageSelectList : function ( imageSelectList ) {

            if ( imageSelectList == undefined )
            {
                if ( this.length == 0 )
                    return undefined;

                return this.data( Lia.Component.Value.ImageSelect.LIST );
            }

            imageSelectList.data( Lia.Component.Value.ImageSelect.SELECT, this );
            return this.data( Lia.Component.Value.ImageSelect.LIST, imageSelectList);
        },

        /**
         * image_select_list 에 들어갈 리스트 세팅, 리턴
         * @param array
         * @returns {*}
         */
        imageSelectListArray : function ( array ) {

            if ( array == undefined )
            {
                if ( this.length == 0 )
                    return undefined;

                return this.data( Lia.Component.Value.ImageSelect.LIST_ARRAY );
            }

            for( var i = 0, l = this.length; i < l; i++ )
            {
                var j = this.eq(i);

                var rowHeight = j.attr( Lia.Component.AttrName.ROW_HEIGHT );
                if ( rowHeight == undefined )
                    rowHeight = Lia.Component.Value.ImageSelect.DEFAULT_LIST_ROW_HEIGHT;

                var jUl = $('<ul></ul>');
                jUl.css({
                    'width' : '100%',
                    'height' : '100%',
                    'overflow-y' : 'auto',
                    'overflow-x' : 'hidden'
                });

                var textAlign = "left";
                var isAlignCenter = j.hasClass( Lia.Component.Flag.ALIGN_CENTER );
                var isAlignRight = j.hasClass( Lia.Component.Flag.ALIGN_RIGHT );
                if (isAlignCenter)
                    textAlign = "center";
                if (isAlignRight)
                    textAlign = "right";

                var textColor = j.attr( Lia.Component.AttrName.TEXT_COLOR );
                for(var i = 0, l = array.length; i < l; i++ )
                {

                    var item = array[i];
                    var name = item[ Lia.Component.Value.ImageSelect.NAME ];

                    var jLi = $('<li>'+name+'</li>');
                    jLi.css({
                        'width':'100%',
                        'line-height':rowHeight,
                        'text-align' : textAlign
                    });
                    if ( textColor )
                        jLi.css({'color' : textColor});

                    if ( Lia.isMobile )
                        jLi.bind('touchstart', liaImageSelectListEnter()).bind('touchend', liaImageSelectListLeave);
                    else
                        jLi.mouseenter(liaImageSelectListEnter).mouseleave(liaImageSelectListLeave);

                    jLi.click(function(){

                        var jThis = $(this);
                        var index = jThis.index();

                        var imageSelectList = jThis.parent().parent();
                        var array = imageSelectList.data( Lia.Component.Value.ImageSelect.LIST_ARRAY );
                        if ( array == undefined )
                            return;

                        var imageSelect = imageSelectList.data( Lia.Component.Value.ImageSelect.SELECT );
                        if ( imageSelect == undefined )
                            return;

                        imageSelect.imageSelectIndex(index);
                        imageSelect.removeClass( Lia.Component.Flag.SHOWING );
                        imageSelectList.fadeOut( Lia.Component.Value.ImageSelect.LIST_FADE_DURATION );
                    });

                    jUl.append(jLi);
                }

                j.remove('ul').append(jUl).data( Lia.Component.Value.ImageSelect.LIST_ARRAY, array);
            }

            return this;
        },

        /**
         * image_select 초기화
         *
         * @returns {*}
         */
        initImageSelect : function () {

            return this.each( function() {

                var jThis = $(this);
                if ( jThis.hasClass( Lia.Component.Flag.INITED ) )
                    return;

                jThis.click(function(){

                    var jThis = $(this);
                    var jSelectList =  jThis.data( Lia.Component.Value.ImageSelect.LIST );
                    if ( jSelectList == undefined )
                        return;

                    if ( jThis.hasClass( Lia.Component.Flag.SHOWING ) )
                    {
                        jSelectList.fadeOut( Lia.Component.Value.ImageSelect.LIST_FADE_DURATION );
                        jThis.removeClass( Lia.Component.Flag.SHOWING );
                    }
                    else
                    {
                        jSelectList.fadeIn( Lia.Component.Value.ImageSelect.LIST_FADE_DURATION );
                        jSelectList.children().scrollTop(0);
                        jThis.addClass( Lia.Component.Flag.SHOWING );
                    }

                });

                var height = jThis.height() + 'px';
                var src = jThis.attr( Lia.Component.AttrName.BACKGROUND_IMAGE );

                var textAlign = "left";
                var isAlignCenter = jThis.hasClass( Lia.Component.Flag.ALIGN_CENTER );
                var isAlignRight = jThis.hasClass( Lia.Component.Flag.ALIGN_RIGHT );
                if (isAlignCenter)
                    textAlign = "center";
                if (isAlignRight)
                    textAlign = "right";

                jThis.css({
                    'overflow': 'hidden',
                    'text-align' : textAlign,
                    'line-height' : height,
                    'background-image' : "url('"+ src+ "')",
                    'cursor':'pointer'
                });

                jThis.addClass( Lia.Component.Flag.INITED );


            });

        },

        /**
         * image_select_list 초기화
         *
         * @returns {*}
         */
        initImageSelectList : function() {

            this.each(function(){

                var jThis = $(this);
                var src = jThis.attr( Lia.Component.AttrName.BACKGROUND_IMAGE );
                jThis.css({
                    'background-image' : "url('"+ src+ "')"
                });

            }).hide();

            if ( !Lia.isMobile )
            {
                // 부모 벗어나면 리스트 창 끄기
                this.parent().mouseleave(function () {

                    var jThis = $(this);
                    var jImageSelectList = jThis.children('.' + Lia.Component.Name.IMAGE_SELECT_LIST );
                    if (jImageSelectList.length == 0)
                        return;

                    var jImageSelect = jImageSelectList.data( Lia.Component.Value.ImageSelect.SELECT );
                    if (jImageSelect == undefined)
                        return;

                    if (jImageSelect.hasClass( Lia.Component.Flag.SHOWING )) {
                        jImageSelectList.fadeOut( Lia.Component.Value.ImageSelect.LIST_FADE_DURATION );
                        jImageSelect.removeClass( Lia.Component.Flag.SHOWING );
                    }
                });
            }
            return this;
        }


    });
})(jQuery);

function liaImageSelectListEnter()
{
    var jThis = $(this);
    var hoverColor = jThis.parent().parent().attr(Lia.Component.AttrName.HOVER_COLOR);
    if ( hoverColor )
        jThis.css('background-color', hoverColor);
}

function liaImageSelectListLeave()
{
    var jThis = $(this);
    jThis.css('background-color', '');
}
/**
 *  jquery.history.js 임포트 시켜서 사용
 *  lia.requester.js 임포트 시켜서 사용
 *  ajax 호출
 **/

jQuery.Page = function() {
    this.jPageContainer = undefined;
    this.jPage = undefined;
    this.cssLoading = undefined;
    this.htmlLoading = undefined;
};
jQuery.Page.prototype.set = function ( options ) {

    if ( options != undefined) {

        var jPageContainer = options['jPageContainer'];
        if ( jPageContainer != undefined )
            this.jPageContainer = jPageContainer;

        var jPage = options['jPage'];
        if ( jPage != undefined )
            this.jPage = jPage;
    }
};
jQuery.Page.prototype.checkCssLoading  = function() {
    return this.cssLoading;
};
jQuery.Page.prototype.checkHtmlLoading  = function() {
    return this.htmlLoading;
};
jQuery.Page.prototype.getJPageContainer  = function() {
    return this.jPageContainer;
};
jQuery.Page.prototype.getJPage = jQuery.Page.prototype.get = function() {
    return this.jPage;
};
jQuery.Page.prototype.find = function( selector ) {
    return this.jPage.find(selector);
};
jQuery.Page.prototype.extend = function( map ) {
    for( var key in map ) {
        this[key] = map[key];
    }
};

jQuery.PageManager = {

    Constants : {
        SUID : '_suid'
    },

    ContentType : {

        CSS : 'css',
        JS : 'js',
        HTML : 'html'
    },

    Status : {

        START : 'START',
        SUCCESS : 'SUCCESS',
        ERROR : 'ERROR'
    },

    title : '',
    History : window.History,
    cssLoading : true,
    htmlLoading : true,
    jsLoading : true,

    requester : undefined,

    ajaxQSync : false,
    ajaxQCssMethod : 'get',
    ajaxQJsMethod : 'get',
    ajaxQHtmlMethod : 'get',

    pageList : [],
    pageContentList : {
        css : [],
        js : [],
        html : []
    },
    pageParameterNameList : [],
    setPageParameterNameList : function(pageParameterNameList) {
        jQuery.PageManager.pageParameterNameList = pageParameterNameList;
    },

    pageContainerSelectorList : [],
    depth : -1,
    parameterMap : undefined,
    beforeDepth : undefined,
    beforeParameterMap : undefined,

    originalParameterMap : undefined,
    beforeOriginalParameterMap : undefined,

    uriConversionType : Lia.UriConversionType.DEFAULT,
    parameterPostfixAdding : false,
    setParameterPostfixAdding : function(parameterPostfixAdding) {
        jQuery.PageManager.parameterPostfixAdding = parameterPostfixAdding;
    },
    parameterPostfix : '%',
    setParameterPostfix : function(parameterPostfix) {
        jQuery.PageManager.parameterPostfix = parameterPostfix;
    },

    getParameterMap : function() {
        return jQuery.PageManager.parameterMap;
    },

    getBeforeParameterMap : function() {
        return jQuery.PageManager.beforeParameterMap;
    },

    /**
     * 페이지 변경 시작 공용 함수
     */
    setOnPageChangeStart : function ( func ) {
        jQuery.PageManager.onPageChangeStart = func;
    },

    onPageChangeStart : function ( beforeDepth, baseDepth, depth, requesting ) {
    },

    /**
     * 페이지 변경 끝 공용 함수
     */
    setOnPageChangeEnd : function ( func ) {
        jQuery.PageManager.onPageChangeEnd = func;
    },

    onPageChangeEnd : function ( beforeDepth, baseDepth, depth, requesting ) {
    },

    /**
     * 페이지 초기화 공용 함수
     */
    setOnPageInit : function ( func ) {
        jQuery.PageManager.onPageInit = func;
    },

    onPageInit : function ( jPage, jPageContainer, depth ) {
    },

    /**
     * 페이지 릴리즈 공용 함수
     */
    setOnPageRelease : function( func ) {
        jQuery.PageManager.onPageRelease = func;
    },

    onPageRelease : function( jPage, jPageContainer, depth ) {
    },

    /**
     * 페이지 추가 공용 함수
     */
    setOnPageAdd : function ( func ) {
        jQuery.PageManager.onPageAdd = func;
    },

    onPageAdd : function ( jPage, jPageContainer, depth ) {
        jPageContainer.empty().append(jPage);
    },

    /**
     * 페이지 삭제 공용 함수
     */
    setOnPageRemove : function( func ) {
        jQuery.PageManager.onPageRemove = func;
    },

    onPageRemove : function( jPage, jPageContainer, depth ) {
        jPageContainer.empty();
    },

    onNormalizeParameter : function( data ) {
        return data;
    },
    filePathFormatHandler : function(path, parameterMap, i) {
        return path;
    },
    cssFilePathFormatHandler : function(path, parameterMap, i) {
        return '/res/css/' + path + '.css';
    },
    htmlFilePathFormatHandler : function(path, parameterMap, i) {
        return '/res/html/' + path + '.html';
    },
    jsFilePathFormatHandler : function(path, parameterMap, i) {
        return '/res/js/' + path + '.js';
    },
    onMoveCheck : function( parameterMap ) {
        return true;
    },
    onPageCheck : function( parameterMap ) {
        return true;
    },
    onSameCheck : function( parameterMap ) {
        return true;
    },
    setOnSameCheck : function( listener ) {
        jQuery.PageManager.onSameCheck = listener;
    },

    /**
     * 페이지 체크 함수 설정
     */
    setOnPageCheck : function( listener ) {
        jQuery.PageManager.onPageCheck = listener;
    },

    /**
     * 받을 페이지 인자값 이름 설정
     */
    setPageParameterNameList : function( pageParameterNameList ) {
        jQuery.PageManager.pageParameterNameList = pageParameterNameList;
    },

    /**
     * title 설정
     */
    setTitle : function(title, setting ) {
        jQuery.PageManager.title = title;
        if ( setting == undefined || setting == true )
            document.title = title;
    },

    /**
     * css 로딩 여부 설정
     */
    setCssLoading : function( loading ) {
        jQuery.PageManager.cssLoading = loading;
    },


    /**
     * html 로딩 여부 설정
     */
    setHtmlLoading : function( loading ) {
        jQuery.PageManager.htmlLoading = loading;
    },


    /**
     * js 로딩 여부 설정
     */
    setJsLoading : function( loading ) {
        jQuery.PageManager.jsLoading = loading;
    },

    /**
     * check 함수 설정
     */
    setOnMoveCheck : function ( listener ) {
        jQuery.PageManager.onMoveCheck = listener;
    },

    /**
     * 변경될 page selector 들 설정
     */
    setPageContainerSelectorList : function( pageContainerSelectorList ) {
        jQuery.PageManager.pageContainerSelectorList = pageContainerSelectorList;
    },

    /**
     * 들어온 파라키터 노말라이즈 하는 함수 세팅
     */
    setOnNormalizeParameter : function( func ) {
        jQuery.PageManager.onNormalizeParameter = func;
    },

    /**
     * ajax로 sync 설정
     */
    setAjaxQSync : function( sync ) {
        jQuery.PageManager.ajaxQSync = sync;
    },

    /**
     * ajax로 css 요청시 method 설정
     */
    setAjaxQCssMethod : function( method ) {
        jQuery.PageManager.ajaxQCssMethod = method;
    },
    /**
     * ajax로 js 요청시 method 설정
     */
    setAjaxQJsMethod : function( method ) {
        jQuery.PageManager.ajaxQJsMethod = method;
    },
    /**
     * ajax html 요청시 method 설정
     */
    setAjaxQHtmlMethod : function( method ) {
        jQuery.PageManager.ajaxQHtmlMethod = method;
    },

    /**
     * request할 파일 포멧 핸들러 설정
     */
    setFilePathFormatHandler : function( handler ) {
        jQuery.PageManager.filePathFormatHandler = handler;
    },

    /**
     * request할 css 파일 포멧 핸들러 설정
     */
    setCssFilePathFormatHandler : function( handler ) {
        jQuery.PageManager.cssFilePathFormatHandler = handler;
    },

    /**
     * request할 html 파일 포멧 핸들러 설정
     */
    setHtmlFilePathFormatHandler : function( handler ) {
        jQuery.PageManager.htmlFilePathFormatHandler = handler;
    },

    /**
     * reqeust할 js 파일 포멧 핸들러 설정
     */
    setJsFilePathFormatHandler : function( handler ) {
        jQuery.PageManager.jsFilePathFormatHandler = handler;
    },

    /**
     * 진행 상황 객체
     */
    onProgress : function( status, parameterMap, beforeParameterMap ) {
    },

    /**
     * 진행 상황 리스터 등록
     */
    setOnProgress : function( listener ) {
        jQuery.PageManager.onProgress = listener;
    },


    /**
     * 파리미터 얻기
     */
    getParameter : function( key, map ) {

        var parameterMap = (map==undefined)?jQuery.PageManager.parameterMap:map;
        if ( parameterMap == undefined )
            return '';

        var r = parameterMap[key];
        if ( r == undefined )
            return '';

        return r;
    },

    /**
     * 파리미터 얻기 : 공백 - undefined로
     */
    getParameterWithChecking : function( key, map ) {

        var parameter = jQuery.PageManager.getParameter(key, map);
        if ( String.isNullOrWhitespace(parameter) )
            return undefined;

        return parameter;
    },

    /**
     * 파리미터 얻기 : 공백 - undefined로
     */
    getParameterWithCheckingAndDefault : function( defaultValue, key, map ) {

        var parameter = jQuery.PageManager.getParameterWithChecking(key, map);
        if ( parameter == undefined )
            return defaultValue;

        return parameter;
    },


    /**
     * 이전 파라미터 얻기
     */
    getBeforeParameter : function( key ) {

        return jQuery.PageManager.getParameter(key, jQuery.PageManager.beforeParameterMap);
    },

    /**
     * 이전 파리미터 얻기
     */
    getBeforeParameterWithChecking : function( key ) {

        var parameter = jQuery.PageManager.getBeforeParameter(key);
        if ( String.isNullOrWhitespace(parameter) )
            return undefined;

        return parameter;
    },

    getBeforeParameterWithCheckingAndDefault : function( defaultValue, key ) {

        var parameter = jQuery.PageManager.getBeforeParameterWithChecking(key);
        if ( parameter == undefined )
            return defaultValue;

        return parameter;
    },

    /**
     * 현재 페이지로 파라미터만 변경해서 이동
     */
    goCurrentPage : function( parameterMap ) {

        jQuery.PageManager.goPage( undefined, parameterMap, false );
    },

    /**
     * 현재 페이지로 현제 페이지로 이동
     */
    goCurrentPageWithCurrentParameterMap : function( parameterMap ) {

        jQuery.PageManager.goPage( undefined, parameterMap, true );
    },

    /**
     * 현재 페이지로 기준으로 이동
     */
    goPage : function( name, parameterMap, withCurrentParameter ) {

        // 파라미터 체크
        if ( name == undefined )
            name = [];
        if ( typeof name == "string" )
            name = [ name ];

        var resultParameterMap = {};

        // 그전 파라미터 넣어줌
        var beforeParameterMap = jQuery.PageManager.parameterMap;
        if ( withCurrentParameter && beforeParameterMap != undefined ) {

            for( var key in beforeParameterMap ) {

                resultParameterMap[key] = beforeParameterMap[key];
            }
        }

        // 현재 메뉴관련 파라미터 입력해줌
        if ( beforeParameterMap != undefined && name != undefined ) {

            var depth = jQuery.PageManager.depth;
            var nameStartIndex = depth - ( name.length - 1);
            for(var i = 0; i <= depth; i++ ) {

                var menuKey = jQuery.PageManager.getMenuKey(i);
                if ( i < nameStartIndex ) {
                    resultParameterMap[menuKey] = beforeParameterMap[menuKey];
                } else {
                    resultParameterMap[menuKey] = name[i-nameStartIndex];
                }
            }
        }

        // 입력한 파라미터 입력
        if ( parameterMap != undefined ) {

            for ( var key in parameterMap ) {

                if ( !String.isNullOrWhitespace( parameterMap[key] ) ) {
                    resultParameterMap[key] = parameterMap[key];
                } else {
                    delete resultParameterMap[key];
                }
            }
        }

        jQuery.PageManager.move(resultParameterMap);
    },

    /**
     * 현제 페이지 기준으로 기존 파라미터와 함꼐 이동
     */
    goPageWithCurrentParameterMap :function( name, parameterMap ) {

        jQuery.PageManager.goPage( name, parameterMap, true );
    },

    /**
     * 페이지 이동
     */
    go : function( name, parameterMap, withCurrentParameter ) {

        // 파라미터 체크
        if ( typeof name == "string" )
            name = [ name ];

        var resultParameterMap = {};

        // 그전 파라미터 넣어줌
        var beforeParameterMap = jQuery.PageManager.parameterMap;
        if ( withCurrentParameter && beforeParameterMap != undefined ) {

            for( var key in beforeParameterMap ) {

                resultParameterMap[key] = beforeParameterMap[key];
            }
        }

        // 이름 입력되어 있으면 해당 내용 적용
        if ( name != undefined ) {

            var nameLength = name.length;

            for ( var i = 0, l = Math.max(nameLength-1, jQuery.PageManager.depth); i <= l; i++ ) {

                var menuKey = jQuery.PageManager.getMenuKey(i);

                if ( i < nameLength ) {

                    resultParameterMap[menuKey] = name[i];

                } else {

                    resultParameterMap[menuKey] = undefined;
                    delete resultParameterMap[menuKey];
                }
            }
        }

        // 입력한 파라미터 입력
        if ( parameterMap != undefined ) {

            for ( var key in parameterMap ) {

                if ( !String.isNullOrWhitespace( parameterMap[key] ) ) {
                    resultParameterMap[key] = parameterMap[key];
                } else {
                    delete resultParameterMap[key];
                }
            }
        }

        jQuery.PageManager.move(resultParameterMap);
    },

    /**
     * 현재 페이지와 함꼐 이동
     */
    goWithCurrentParameterMap : function( name, parameterMap ) {

        jQuery.PageManager.go( name, parameterMap, true );

    },

    /**
     * 파라미터 대로 이동
     */
    move : function( parameterMap ) {

        if ( !jQuery.PageManager.onMoveCheck(parameterMap) )
            return;

        if ( jQuery.PageManager.parameterPostfixAdding ) {
            parameterMap = jQuery.PageManager.encodeParameter(Lia.deepCopy(parameterMap));
        }

        jQuery.PageManager.History.pushState(null, jQuery.PageManager.title, Lia.convertArrayToQueryString(parameterMap, jQuery.PageManager.uriConversionType ) );
    },

    /**
     * 다른 페이지로 이동
     */
    redirect : function( url, name, parameterMap ) {

        // 파라미터 체크
        if ( typeof name == "string" )
            name = [ name ];

        var resultParameterMap = {};

        // 이름 입력되어 있으면 해당 내용 적용
        for ( var i = 0, l = name.length; i < l; i++ ) {
            var menuKey = jQuery.PageManager.getMenuKey(i);
            resultParameterMap[menuKey] = name[i];
        }

        // 입력한 파라미터 입력
        if ( parameterMap != undefined ) {

            for ( var key in parameterMap ) {

                if ( !String.isNullOrWhitespace( parameterMap[key] ) ) {
                    resultParameterMap[key] = parameterMap[key];
                } else {
                    delete resultParameterMap[key];
                }
            }
        }

        if ( jQuery.PageManager.parameterPostfixAdding ) {
            resultParameterMap = jQuery.PageManager.encodeParameter(resultParameterMap);
        }

        Lia.redirect(url, resultParameterMap);
    },


    createRedirectUrl : function( url, name, parameterMap ) {

        // 파라미터 체크
        if ( typeof name == "string" )
            name = [ name ];

        var resultParameterMap = {};

        // 이름 입력되어 있으면 해당 내용 적용
        for ( var i = 0, l = name.length; i < l; i++ ) {
            var menuKey = jQuery.PageManager.getMenuKey(i);
            resultParameterMap[menuKey] = name[i];
        }

        // 입력한 파라미터 입력
        if ( parameterMap != undefined ) {

            for ( var key in parameterMap ) {

                if ( !String.isNullOrWhitespace( parameterMap[key] ) ) {
                    resultParameterMap[key] = parameterMap[key];
                } else {
                    delete resultParameterMap[key];
                }
            }
        }

        if ( jQuery.PageManager.parameterPostfixAdding ) {
            resultParameterMap = jQuery.PageManager.encodeParameter(resultParameterMap);
        }


        return url + Lia.convertArrayToQueryString(resultParameterMap);
    },

    open : function( url, name, parameterMap, options ) {

        // 파라미터 체크
        if ( typeof name == "string" )
            name = [ name ];

        var resultParameterMap = {};

        // 이름 입력되어 있으면 해당 내용 적용
        for ( var i = 0, l = name.length; i < l; i++ ) {
            var menuKey = jQuery.PageManager.getMenuKey(i);
            resultParameterMap[menuKey] = name[i];
        }

        // 입력한 파라미터 입력
        if ( parameterMap != undefined ) {

            for ( var key in parameterMap ) {

                if ( !String.isNullOrWhitespace( parameterMap[key] ) ) {
                    resultParameterMap[key] = parameterMap[key];
                } else {
                    delete resultParameterMap[key];
                }
            }
        }

        if ( jQuery.PageManager.parameterPostfixAdding ) {
            resultParameterMap = jQuery.PageManager.encodeParameter(resultParameterMap);
        }


        jQuery.PageManager.requester.open(url, resultParameterMap, options)
    },


    /**
     * 뒤로 이동
     */
    back : function() {

        jQuery.PageManager.History.back();
    },

    /**
     * 함수 등록 및 초기화
     *
     * onSameCheck
     * title
     * pageParameterNameList
     * cssLoading
     * htmlLoading
     * jsLoading
     * onProgress
     * onMoveCheck
     * onPageCheck
     * onPageInit
     * onPageRelease
     * onPageAdd
     * onPageRemove
     * onPageChangeStart
     * onPageChangeEnd
     * onNormalizeParameter
     * filePathFormatHandler
     * cssFilePathFormatHandler
     * htmlFilePathFormatHandler
     * jsFilePathFormatHandler
     * pageContainerSelectorList
     * ajaxQSync
     * ajaxQCssMethod
     * ajaxQJsMethod
     * ajaxQHtmlMethod
     *
     * uriConversionType
     *
     * parameterPostfixAdding
     * parameterPostfix
     *
     * requester
     *
     */
    set : function( options ) {

        for(var key in options) {

            var value = options[key];
            jQuery.PageManager[key] = value;
        }
    },


    init : function( options ) {

        jQuery.PageManager.set(options);

        if ( jQuery.PageManager.requester == undefined )
            jQuery.PageManager.requester = new jQuery.Requester();

        jQuery.PageManager.bind();
    },

    /**
     * 주소 바인드
     */
    bind : function() {

        // # ? 형태의 주소가 붙어잇으면 bind, statechange 함수 에서 호출되므로 호출할 필요 없음
        var doCheck = false;
        var state = jQuery.PageManager.History.getState();
        var url = state.url;
        if ( !String.isNullOrWhitespace(url) )
        {
            var sharpIndex = url.lastIndexOf('#');
            if ( sharpIndex == -1 || url.indexOf('?', sharpIndex) == -1 )
                doCheck = true;
        }

        jQuery.PageManager.History.Adapter.bind(window, 'statechange',function() {
            jQuery.PageManager.checkPage();
        });

        // 바인딩이 되고 나서 체크해주어야지 페이지 이동이 된다.
        if ( doCheck )
            jQuery.PageManager.checkPage();
    },

    /**
     * 인덱스에 맞는 메뉴 키 얻음
     */
    getMenuKey : function( i ) {

        if ( jQuery.PageManager.pageParameterNameList == undefined ) {
            return undefined;
        }

        return jQuery.PageManager.pageParameterNameList[i];
    },

    /**
     * 인덱스에 맞는 메뉴 파라미터 얻음
     */
    getMenuParameter : function( i, map ) {

        var key = jQuery.PageManager.getMenuKey(i);
        if ( String.isNullOrWhitespace(key) ) {
            return '';
        }

        return jQuery.PageManager.getParameter(key, map);
    },

    /**
     * 인덱스에 맞는 메뉴 전 파라미터 얻음
     */
    getBeforeMenuParameter : function( i ) {

        return jQuery.PageManager.getMenuParameter(i,
            jQuery.PageManager.beforeParameterMap);
    },

    /**
     * 페이지 객체 얻음
     * (인자값 없다면 제일 마지막 객체)
     */
    getPage : function ( i ) {

        if ( jQuery.PageManager.pageList == undefined ) {
            return undefined;
        }

        if ( i == undefined ) {
            i = jQuery.PageManager.depth;
        }

        return jQuery.PageManager.pageList[i];
    },

    encodeParameter : function( object, parameterPostfixAdding ) {

        if ( parameterPostfixAdding == undefined )
            parameterPostfixAdding = jQuery.PageManager.parameterPostfixAdding;

        if ( parameterPostfixAdding ) {

            if ( typeof object == "object" ) {

                for(var key in object)
                    object[key] = jQuery.PageManager.encodeParameter(object[key], parameterPostfixAdding);

            } else {

                object += jQuery.PageManager.parameterPostfix;
            }
        }

        return object;

    },

    decodeParameter : function( object, parameterPostfixAdding ) {

        if ( parameterPostfixAdding == undefined )
            parameterPostfixAdding = jQuery.PageManager.parameterPostfixAdding;

        if ( parameterPostfixAdding ) {

            if ( typeof object == "object" ) {

                for(var key in object)
                    object[key] = jQuery.PageManager.decodeParameter(object[key], parameterPostfixAdding);

            } else {

                while( !String.isNullOrWhitespace(object) ) {

                    var decoded = Lia.decodeUriSafety(object, jQuery.PageManager.uriConversionType);
                    if ( object.endsWith(jQuery.PageManager.parameterPostfix) ) {
                        object = object.substring(0, object.length-1);
                        break;
                    } else if ( object == decoded )
                        break;

                    object = decoded;
                }
            }
        }

        return object;
    },

    /**
     * 현재 페이지 인자값 검사
     */
    checkPage : function() {

        var state = jQuery.PageManager.History.getState();
        var url = state.url;

        if ( String.isNullOrWhitespace(url) )
            return;

        // 같인 요청이 들어올 때 체크하여 스킵
        var originalParameterMap = Lia.extractGetParameterFromUrl(url, jQuery.PageManager.uriConversionType);
        var beforeOriginalParameterMap = jQuery.PageManager.originalParameterMap;
        if ( beforeOriginalParameterMap != undefined ) {

            var originalSame = true;
            for ( var key in originalParameterMap ) {

                if ( key == jQuery.PageManager.Constants.SUID )
                    continue;

                if ( originalParameterMap[key] != beforeOriginalParameterMap[key] ) {
                    originalSame = false;
                    break;
                }
            }

            if ( originalSame == true ) {

                for ( var key in beforeOriginalParameterMap ) {

                    if ( key == jQuery.PageManager.Constants.SUID )
                        continue;

                    if ( originalParameterMap[key] != beforeOriginalParameterMap[key] ) {
                        originalSame = false;
                        break;
                    }
                }

                if ( originalSame == true )
                    return;
            }
        }

        jQuery.PageManager.originalParameterMap = originalParameterMap;
        jQuery.PageManager.beforeOriginalParameterMap = beforeOriginalParameterMap;

        var parameterMap = jQuery.PageManager.onNormalizeParameter(
            jQuery.PageManager.decodeParameter(Lia.deepCopy(originalParameterMap))
        );

        if ( !jQuery.PageManager.onPageCheck(parameterMap) )
            return;

        var depth = 0;
        var path = null;
        var paths = [];
        while ( true ) {
            var menu = parameterMap[jQuery.PageManager.getMenuKey(depth)];

            if ( String.isNullOrWhitespace(menu) )
                break;

            if ( path == null ) {
                path = menu;
            } else {
                path += '/' + menu;
            }

            paths[depth++] = path;
        }
        --depth;

        // 언제까지 언로드하여여야 할 지 체크
        // baseDepth 미만 onChanged
        // baseDepth 이상 새로받음
        var beforeDepth = jQuery.PageManager.depth;
        var beforeParameterMap = jQuery.PageManager.parameterMap;
        var baseDepth = beforeDepth + 1;
        for( var i = beforeDepth; i >= 0; i-- ) {
            var menuKey = jQuery.PageManager.getMenuKey(i);
            if (parameterMap[menuKey] != undefined && parameterMap[menuKey] != beforeParameterMap[menuKey] ) {
                baseDepth = i;
            }
        }

        jQuery.PageManager.depth = depth;
        jQuery.PageManager.parameterMap = parameterMap;
        jQuery.PageManager.beforeDepth = beforeDepth;
        jQuery.PageManager.beforeParameterMap = beforeParameterMap;

        jQuery.PageManager.onProgress(jQuery.PageManager.Status.START, parameterMap, beforeParameterMap);

        // 최근 것이랑 같을 때만 예외처리
        var requesting = ( depth == beforeDepth && baseDepth == beforeDepth + 1);
        if ( requesting ) {

            if ( jQuery.PageManager.onSameCheck(parameterMap) ) {

                jQuery.PageManager.onPageChangeStart(depth, depth, depth, false);

                // 요청 해야하는 케이스가 아니면 onChange만 날려줌
                for( var i = 0; i <= depth; i++ ) {

                    var page = jQuery.PageManager.pageList[i];
                    if ( page != undefined && page.onChange != undefined ) {
                        var jPage = page.getJPage();
                        var jPageContainer = page.getJPageContainer();

                        //try {
                            page.onChange(jPage, jPageContainer, i, parameterMap, beforeParameterMap);
                        //} catch(err) {
                        //    console.log(err);
                        //}
                    }
                }

                jQuery.PageManager.onPageChangeEnd(depth, depth, depth, false);

                jQuery.PageManager.onProgress(jQuery.PageManager.Status.SUCCESS, parameterMap, beforeParameterMap);

            } else {

                // 가장 최근것만 날려서 다시 갈아끼움
                jQuery.PageManager.requestPage(depth, depth, depth, paths, parameterMap, beforeParameterMap);
            }

        } else {

            // 필요한 만큼 요청
            jQuery.PageManager.requestPage(baseDepth, depth, beforeDepth, paths, parameterMap, beforeParameterMap);
        }
    },

    requestPage : function( baseDepth, depth, beforeDepth, paths, parameterMap, beforeParameterMap ) {


        // 기존 기록 삭제
        for( var i = baseDepth; i <= depth; i++ ) {

            jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.CSS][i] = undefined;
            jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.HTML][i] = undefined;
            jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.JS][i] = undefined;
        }

        // js 기록
        if ( jQuery.PageManager.jsLoading ) {

            for (var i = baseDepth; i <= depth; i++) {

                var path = jQuery.PageManager.filePathFormatHandler(paths[i], parameterMap, i);
                if (path != undefined) {

                    var jsUrl = jQuery.PageManager.jsFilePathFormatHandler(path, parameterMap, i);
                    if ( jsUrl != undefined ) {

                        jQuery.PageManager.request(jsUrl, function (status, data, request) {

                            var object = request['object'];
                            if( status == jQuery.Requester.Status.ERROR ||  object == undefined ) {

                                jQuery.PageManager.abort();
                                jQuery.PageManager.onProgress(jQuery.PageManager.Status.ERROR, jQuery.PageManager.parameterMap, jQuery.PageManager.beforeParameterMap);
                                return;
                            }

                            var index = object['index'];
                            jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.JS][index] = data;

                        }, jQuery.PageManager.ajaxQJsMethod, parameterMap, {
                            index : i
                        });
                    }
                }
            }
        }

        jQuery.PageManager.execute(function( execute ){

            var object = execute['object'];

            var pageList = [];

            // 페이지 생성
            for (var i = baseDepth; i <= depth; i++) {

                var page = new jQuery.Page();

                var pageJs = jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.JS][i];
                if ( pageJs != undefined )
                    page.extend ( eval(jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.JS][i]) );

                pageList[i] = page;

                // html 로딩
                var path = jQuery.PageManager.filePathFormatHandler(paths[i], parameterMap, i);
                if (path == undefined)
                    continue;

                var htmlLoading = Lia.pd(jQuery.PageManager.htmlLoading, page.checkHtmlLoading());
                if ( htmlLoading ) {

                    var htmlUrl = jQuery.PageManager.htmlFilePathFormatHandler(path, parameterMap, i);
                    if ( htmlUrl != undefined ) {

                        jQuery.PageManager.request(htmlUrl, function (status, data, request) {

                            var object = request['object'];
                            if( status == jQuery.Requester.Status.ERROR ||  object == undefined ) {

                                jQuery.PageManager.abort();
                                jQuery.PageManager.onProgress(jQuery.PageManager.Status.ERROR, jQuery.PageManager.parameterMap, jQuery.PageManager.beforeParameterMap);
                                return;
                            }

                            var index = object['index'];
                            jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.HTML][index] = data;

                        }, jQuery.PageManager.ajaxQJsMethod, parameterMap, {
                            index : i
                        });

                    }

                }

                var cssLoading = Lia.pd(jQuery.PageManager.cssLoading, page.checkCssLoading());
                if ( cssLoading ) {

                    var cssUrl = jQuery.PageManager.cssFilePathFormatHandler(path, parameterMap, i);
                    if ( cssUrl != undefined ) {

                        jQuery.PageManager.request(cssUrl, function (status, data, request) {

                            var object = request['object'];
                            if( status == jQuery.Requester.Status.ERROR ||  object == undefined ) {

                                jQuery.PageManager.abort();
                                jQuery.PageManager.onProgress(jQuery.PageManager.Status.ERROR, jQuery.PageManager.parameterMap, jQuery.PageManager.beforeParameterMap);
                                return;
                            }

                            var index = object['index'];
                            jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.CSS][index] = data;

                        }, jQuery.PageManager.ajaxQJsMethod, parameterMap, {
                            index : i
                        });

                    }
                }
            }


            // 페이지 리스트 담기
            object['pageList'] = pageList;

            // 페이지 처리
            jQuery.PageManager.execute(function( execute ){

                var object = execute['object'];

                var parameterMap = object['parameterMap'];
                var beforeParameterMap = object['beforeParameterMap'];
                var depth = object['depth'];
                var baseDepth = object['baseDepth'];
                var beforeDepth = object['beforeDepth'];
                var pageList = object['pageList'];

                jQuery.PageManager.onPageChangeStart(beforeDepth, baseDepth, depth, true);

                // onRelease
                for( var i = beforeDepth; i >= baseDepth; i-- ) {

                    var page = jQuery.PageManager.pageList[i];
                    if (page != undefined) {

                        var jPage = page.getJPage();
                        var jPageContainer = page.getJPageContainer();

                        if ( page.onRelease != undefined ) {

                            //try {
                                page.onRelease(jPage, jPageContainer, i, parameterMap, beforeParameterMap);
                            //} catch(err) {
                            //    console.log(err);
                            //}
                        }

                        jQuery.PageManager.onPageRelease(jPage, jPageContainer, i, parameterMap, beforeParameterMap);
                        jQuery.PageManager.onPageRemove(jPage, jPageContainer, i, parameterMap, beforeParameterMap);
                        jQuery.PageManager.pageList[i] = undefined;
                    }
                }

                // onInit
                for ( var i = baseDepth; i <= depth; i++ ) {

                    var pageSelector = jQuery.PageManager.pageContainerSelectorList[i];
                    if ( pageSelector != undefined ) {

                        var text = '<div>';
                        var css = jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.CSS][i];
                        if ( jQuery.PageManager.cssLoading && css != undefined )
                            text += '<style type="text/css">'+ css +'</style>';

                        var html = jQuery.PageManager.pageContentList[jQuery.PageManager.ContentType.HTML][i];
                        if ( html != undefined )
                            text += html;
                        text += '</div>';

                        var jPageContainer = jQuery(pageSelector);
                        var jPage = jQuery(text);

                        jQuery.PageManager.onPageAdd(jPage, jPageContainer, i, parameterMap, beforeParameterMap);

                        var page = pageList[i];
                        page.set({
                            jPage : jPage,
                            jPageContainer : jPageContainer
                        });

                        jQuery.PageManager.pageList[i] = page;
                        jQuery.PageManager.onPageInit(jPage, jPageContainer, i, parameterMap, beforeParameterMap);

                        if ( page != undefined && page.onInit != undefined ) {

                            //try {
                                page.onInit(jPage, jPageContainer, i, parameterMap, beforeParameterMap);
                            //} catch(err) {
                            //    console.log(err);
                            //}
                        }
                    }
                }

                // onChange
                for( var i = 0; i <= depth; i++ ) {

                    var page = jQuery.PageManager.pageList[i];
                    if ( page != undefined ) {

                        var jPage = page.getJPage();
                        var jPageContainer = page.getJPageContainer();

                        if ( page.onChange != undefined ) {

                            //try {
                                page.onChange(jPage, jPageContainer, i, parameterMap, beforeParameterMap);
                            //} catch(err) {
                            //    console.log(err);
                            //}

                        }
                    }
                }

                jQuery.PageManager.onPageChangeEnd(beforeDepth, baseDepth, depth, true);

                jQuery.PageManager.onProgress(jQuery.PageManager.Status.SUCCESS, jQuery.PageManager.parameterMap, jQuery.PageManager.beforeParameterMap);

            }, object);



        }, {
            parameterMap: parameterMap,
            beforeParameterMap: beforeParameterMap,
            depth: depth,
            baseDepth: baseDepth,
            beforeDepth: beforeDepth
        });
    },

    /**
     * 파일 요청
     */
    request : function( url, onResponse, method, parameterMap, object ) {

        var request = {
            url : url,
            onResponse : onResponse,
            object : object,
            parameterMap : parameterMap,
            method : method,

            ajaxQSync : jQuery.PageManager.ajaxQSync,
            q : true,
            dataType : 'text'
        };

        jQuery.PageManager.requester.request(request);
    },

    /**
     * 실행
     */
    execute : function( onExecute, object ) {

        var execute = {
            onExecute : onExecute,
            object : object
        };

        jQuery.PageManager.requester.execute(execute);
    },

    abort : function() {

        jQuery.PageManager.requester.abort();
    }

};

// 별칭
jQuery.PageManager.p = jQuery.PageManager.getParameter;
jQuery.PageManager.pc = jQuery.PageManager.getParameterWithChecking;
jQuery.PageManager.pcd = jQuery.PageManager.getParameterWithCheckingAndDefault;
jQuery.PageManager.cp = jQuery.PageManager.goCurrentPage;
jQuery.PageManager.cpcpm = jQuery.PageManager.goCurrentPageWithCurrentParameterMap;
jQuery.PageManager.pcpm = jQuery.PageManager.goPageWithCurrentParameterMap;
jQuery.PageManager.cpm = jQuery.PageManager.goWithCurrentParameterMap;

/**
 * image_box check
 <img class="image_box check" lia-src="{이미지 주소}" />
 * 체크 되었을 때 _pressed.png 파일 보임
 *
 * image_box radio
 <img class="image_box radio"
 lia-src="{이미지 주소}"
 lia-group="{그룹 명}" />
 * 선택 되었을 때 _pressed.png 파일 보임
 *
 * $.imageBoxRadioGroup(groupId)
 *  선택된 객체 리턴
 * $.imageBoxRadioGroup(groupId, selector)
 *  그룹의 selector를 선택
 *
 */
    /*
     초기화 코드

     $(document).ready(function () {

     $.initButtonGroup();
     });

     */

(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initButtonGroup : function( j ) {

            var selector = '.' + Lia.Component.Name.BUTTON + ', .' + Lia.Component.Name.IMAGE_BUTTON + ', .' + Lia.Component.Name.IMAGE_BOX + ', .' + Lia.Component.Name.FLAT_BUTTON;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            j.filter( '.' + Lia.Component.Flag.RADIO ).initButtonRadio();
            j.filter( '.' + Lia.Component.Flag.CHECK ).initButtonCheck();

            return j;
        },

        /**
         * 그룹 선택, 선택된 것 리턴
         *   선택되어 있지 않으면 null 리턴
         *   선택된 것 jquery 객체 리턴
         *
         * @param groupId
         * @param jItem
         * @returns {*}
         */
        buttonGroup : function( groupId, jItem ) {

            if ( jItem == undefined )
            {
                var jSelectedRadio = jQuery('.' + Lia.Component.Name.BUTTON + ', .' + Lia.Component.Name.IMAGE_BUTTON + ', .' + Lia.Component.Name.IMAGE_BOX + ', .' + Lia.Component.Name.FLAT_BUTTON)
                    .filter('.' + Lia.Component.Flag.RADIO + '.' + Lia.Component.Flag.PRESSED + '[' + Lia.Component.AttrName.GROUP + '="'+groupId+'"]');
                return jSelectedRadio;
            }

            var isDisabled = jItem.hasClass( Lia.Component.Flag.DISABLED );
            if ( isDisabled )
                return;

            var jRadioGroup = jQuery( '.' + Lia.Component.Name.BUTTON + ', .' + Lia.Component.Name.IMAGE_BUTTON + ', .' + Lia.Component.Name.IMAGE_BOX + ', .' + Lia.Component.Name.FLAT_BUTTON )
                .filter('.' + Lia.Component.Flag.RADIO + '['+Lia.Component.AttrName.GROUP+'="' + groupId + '"]');

            var jBefore = jRadioGroup.filter('.pressed').not(jItem);
            jBefore.buttonPressed(false);
        }

    });


    $.fn.extend({

        initButtonRadio : function() {

            return this.each(function(){

                var jThis = $(this);
                if ( jThis.hasClass( Lia.Component.Flag.RADIO_INITED ) )
                    return;

                jThis.on(Lia.Component.Event.STATUS_CHANGED, function(e){

                    var jThis = jQuery(this);
                    var isDisabled = jThis.hasClass( Lia.Component.Flag.DISABLED );
                    if ( isDisabled )
                        return;

                    var group = jThis.attr( Lia.Component.AttrName.GROUP );
                    if ( group == undefined )
                        return;

                    var status = e.status;
                    if ( status == Lia.Component.Value.Button.Status.PRESSED ) {
                        $.buttonGroup(group, jThis);
                    }
                });

                if ( !jThis.hasClass( Lia.Component.Flag.NO_BIND ) ){

                    var eventName = Lia.isMobile?'touchstart':'mousedown';
                    jThis.on(eventName, function(){
                        var jThis = jQuery(this);
                        jThis.buttonPressed( true );
                    });
                }

                jThis.addClass( Lia.Component.Flag.RADIO_INITED );
            });

        },

        initButtonCheck : function() {

            return this.each(function(){

                var jThis = $(this);
                if ( jThis.hasClass( Lia.Component.Flag.CHECK_INITED ) )
                    return;

                if ( !jThis.hasClass( Lia.Component.Flag.NO_BIND ) ){

                    if ( !jThis.hasClass( Lia.Component.Flag.NO_BIND ) ){

                        var eventName = Lia.isMobile?'touchstart':'mousedown';
                        jThis.on(eventName, function(){
                            var jThis = jQuery(this);
                            jThis.buttonPressed( !jThis.buttonPressed() );
                        });
                    }

                }

                jThis.addClass( Lia.Component.Flag.CHECK_INITED );
            });

        }


    });

})(jQuery);

/**
 * popup loading
 *
 *  <div class="dim [cancelable]" lia-z-index="{z-index 값}" lia-popup="{연결된 Popup Selector}" lia-dim-background-color></div>
 *  <div id="info_popup" class="popup loading" style="width:{popup width};height:{popup height}" lia-z-index="{z-index 값}" lia-dim="{사용할 Dim Selector}">
 *      <img class="loading_indicator" lia-src="{img 주소 format:/loading/{index}.png}" lia-index="{현재 인덱스}" lia-start-index="{시작 인덱스}" lia-end-index="{끝인덱스}" />
 *  </div>
 */
/*
 초기화 코드

뷰에 붙이고 나서 start 해야함
 $(document).ready(function () {

 $.initPopupLoading();
 });

 */

jQuery.extend({

    liaLoadingPopupAttrNames : [
        Lia.Component.AttrName.SRC,
        Lia.Component.AttrName.START_INDEX,
        Lia.Component.AttrName.END_INDEX
    ],

    initPopupLoading: function (j) {

        var selector = '.' + Lia.Component.Name.POPUP + '.' + Lia.Component.Flag.LOADING;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.initPopupLoading();
    },

    showPopupLoading: function (j) {

        var selector = '.' + Lia.Component.Name.POPUP + '.' + Lia.Component.Flag.LOADING;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.showPopupLoading();
    },

    hidePopupLoading: function (j) {

        var selector = '.' + Lia.Component.Name.POPUP + '.' + Lia.Component.Flag.LOADING;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.hidePopupLoading();
    },

    clearPopupLoading: function (j) {

        var selector = '.' + Lia.Component.Name.POPUP + '.' + Lia.Component.Flag.LOADING;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.clearPopupLoading();
    },

    clearAndHidePopupLoading: function (j) {

        var selector = '.' + Lia.Component.Name.POPUP + '.' + Lia.Component.Flag.LOADING;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.clearAndHidePopupLoading();
    }
});

jQuery.fn.extend({

    initPopupLoading : function() {

        return this.each(function(){

            var jThis = jQuery(this);
            if ( jThis.hasClass( Lia.Component.Flag.LOADING_INITED ) )
                return;

            var jLoadingIndicator = jThis.children('.' + Lia.Component.Name.LOADING_INDICATOR);
            if ( jLoadingIndicator.size() == 0 ) {

                jLoadingIndicator = jQuery('<img />');
                jLoadingIndicator.addClass( Lia.Component.Name.LOADING_INDICATOR );

                for( var key in jQuery.liaLoadingPopupAttrNames ) {
                    var value = jQuery.liaLoadingPopupAttrNames[key];
                    var attrValue = jThis.attr(value);
                    if ( attrValue != undefined )
                        jLoadingIndicator.attr( value,  attrValue );
                }

                jThis.append(jLoadingIndicator);
                jLoadingIndicator.initLoadingIndicator();
            }
            jThis.attr( Lia.Component.AttrName.REFER_COUNT, 0 );
            jThis.addClass( Lia.Component.Flag.LOADING_INITED );
        });
    },

    showPopupLoading : function() {

        return this.each(function(){

            var jThis = jQuery(this);
            var referCount = Math.max(0, parseInt(jThis.attr( Lia.Component.AttrName.REFER_COUNT )));
            if ( referCount == 0 ) {
                jThis.children().playLoadingIndicator();
                jThis.showPopup();
            }

            jThis.attr( Lia.Component.AttrName.REFER_COUNT, ++referCount );
        });
    },

    hidePopupLoading : function() {

        return this.each(function(){

            var jThis = jQuery(this);
            var referCount = Math.max(0, parseInt(jThis.attr( Lia.Component.AttrName.REFER_COUNT )) - 1);
            if ( referCount == 0 ) {
                jThis.children().pauseLoadingIndicator();
                jThis.hidePopup();
            }

            jThis.attr( Lia.Component.AttrName.REFER_COUNT, referCount );
        });
    },

    clearPopupLoading : function() {

        return this.attr( Lia.Component.AttrName.REFER_COUNT, 0 );
    },

    clearAndHidePopupLoading : function() {

        return this.clearPopupLoading().hidePopupLoading();
    }



});


/**
 * form parameter 할 수 있도록 도와줌
 *
 * class
 *  form_element
 *
 * attr
 *  lia-name ( form 전송 이름 )
 **/

jQuery.FormSerializer = function(  options ) {

    this.init( options );
};

/**
 * 초기화
 */
jQuery.FormSerializer.prototype.init = function( options ) {
};

jQuery.FormSerializer.Status = Lia.Component.Value.FormSerializer.Status;
jQuery.FormSerializer.checkboxTrueValue = Lia.Component.Value.FormSerializer.Boolean.TRUE;
jQuery.FormSerializer.checkboxTrueValue = Lia.Component.Value.FormSerializer.Boolean.FALSE;

/**
 * 올릴때의 체크 변수 설정 ( static 변수 설정 )
 *
 * @param type
 * @param value
 *
 */
jQuery.FormSerializer.setCheckboxValue = function( type, value ) {

    if ( type == true )
        jQuery.FormSerializer.checkboxTrueValue = value;
    else
        jQuery.FormSerializer.checkboxTrueValue = value;
};

jQuery.FormSerializer.getCheckboxValue = function( value ) {

    if ( value == true )
        return jQuery.FormSerializer.checkboxTrueValue;
    else
        return jQuery.FormSerializer.checkboxTrueValue;
};

jQuery.FormSerializer.prototype.serialize = function( j ) {

    //input radio checkbox
    //textarea
    //select
    //

    //- BUTTON : 'button',
    //- IMAGE_BUTTON : 'image_button',
    //- IMAGE_BOX : 'image_box',
    //- FLAT_BUTTON : 'flat_button',
    //- IMAGE_SELECT : 'image_select',

    //DIV_PLACEHOLDER_INPUT : 'div_placeholder_input',
    //TEXT_PLACEHOLDER_INPUT : 'text_placeholder_input',
    //IMAGE_INPUT : 'image_input',
    //TEXT_EDITOR : 'text_editor',

    var parameterMap = {};

    var selector = '.' + Lia.Component.Name.FORM_ELEMENT;

    var jFormElementList = undefined;
    if ( j != undefined ) {
        jFormElementList = j.find(selector);
    } else {
        jFormElementList = jQuery(selector);
    }

    while ( jFormElementList.length > 0 ) {

        var index = jFormElementList.length - 1;

        var jFormElement = jFormElementList.eq(index);
        var name = jFormElement.attr( Lia.Component.AttrName.NAME );
        if ( String.isBlank(name) ) {
            name = jFormElement.attr('name');
        }

        if ( !String.isBlank(name) ) {

            var value = undefined;

            if ( jFormElement.hasClass( Lia.Component.Name.RADIO ) ) {

                var jRadio = jFormElementList.filter( '.' + Lia.Component.Name.RADIO + '[' + Lia.Component.AttrName.NAME + '="'+name+'"]');
                value = jRadio.filter('.' + Lia.Component.Flag.PRESSED).attr( Lia.Component.AttrName.VALUE ) ;
                jFormElement = jRadio;

            } else if ( jFormElement.hasClass( Lia.Component.Name.BUTTON )
                || jFormElement.hasClass( Lia.Component.Name.IMAGE_BUTTON )
                || jFormElement.hasClass( Lia.Component.Name.IMAGE_BOX )
                || jFormElement.hasClass( Lia.Component.Name.FLAT_BUTTON )) {

                value = jQuery.FormSerializer.getCheckboxValue( jFormElement.buttonPressed() );

            } else if ( jFormElement.hasClass( Lia.Component.Name.IMAGE_SELECT ) ) {

                value = jFormElement.imageSelectVal();

            } else if ( jFormElement.hasClass( Lia.Component.Name.DIV_PLACEHOLDER_INPUT ) ) {

                value = jFormElement.divPlaceholderInputVal();

            } else if ( jFormElement.hasClass( Lia.Component.Name.TEXT_PLACEHOLDER_INPUT ) ) {

                value = jFormElement.textPlaceholderInputVal();

            } else if ( jFormElement.hasClass( Lia.Component.Name.IMAGE_INPUT ) ) {

                value = jFormElement.imageInputVal();

            } else if ( jFormElement.hasClass( Lia.Component.Name.TEXT_EDITOR ) ) {

                value = jFormElement.textEditorVal();

            } else if ( jFormElement.filter('input[type="checkbox"]').length > 0 ) {

                value = jQuery.FormSerializer.getCheckboxValue( jFormElement.prop('checked')  );

            } else if ( jFormElement.filter('input[type="radio"]').length > 0 ) {

                var inputName = jFormElement.attr('name');
                var jRadio = jFormElementList.filter( 'input[type="radio"]][name="'+inputName+'"]');
                value = jRadio.filter(':checked').val();
                jFormElement = jRadio;

            } else if ( jFormElement.filter('input, textarea').length > 0 ) {

                value = jFormElement.val();

            }  else if ( jFormElement.filter('select').length > 0 ) {

                value = jQuery.FormSerializer.getCheckboxValue( jFormElement.prop('checked')  );
            }

            parameterMap[name] = value;
        }

        jFormElementList= jFormElementList.not(jFormElement);

    }

    return parameterMap;
};
/**
 * image_button
 * 이미지 마우스 오버, 클릭시 이미지 변경
 *
 * <div class="image_box" lia-src="{이미지 주소}" />
 *      _pressed.png 가 클릭시 보여짐
 *
 * <div class="image_box hover" lia-src="{이미지 주소}" />
 *      _hovering.png 가 마우스 커서가 올라갈 대 보여짐
 *      _pressed.png 가 클릭시 보여짐
 *
 * <div class="image_box press" lia-src="{이미지 주소}" />*
 *      _pressed.png 가 마우스 커서가 올라갈 때, 클릭시 보여짐
 *
 */
/*
 초기화 코드

 $(document).ready(function () {

    $.initImageBox();
 });
 */

(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initImageBox : function( j ) {

            var selector = '.' + Lia.Component.Name.IMAGE_BOX;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initImageBox();
        }
    });

    $.fn.extend({

        imageBoxPressed: function (pressed) {

            return this.buttonPressed(pressed);
        },

        setImageBoxByPressed : function( pressed ) {

            for( var i = 0, l = this.length; i < l; i++ ) {
                var jThis = this.eq(i);

                var status = (pressed)? Lia.Component.Value.Button.Status.PRESSED:Lia.Component.Value.Button.Status.DEFAULT;
                jThis.setImageBoxByStatus( status );
            }

            return this;
        },

        setImageBoxByStatus : function( status ) {

            for( var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var imageBoxIndex = Lia.Component.Value.Button.ImageBox.DEFAULT_INDEX;
                if ( status == Lia.Component.Value.Button.Status.PRESSED ) {
                    imageBoxIndex = Lia.Component.Value.Button.ImageBox.PRESSED_INDEX;
                } else if ( status == Lia.Component.Value.Button.Status.HOVERING ) {
                    imageBoxIndex = Lia.Component.Value.Button.ImageBox.HOVERING_INDEX;
                }

                jThis.setImageBoxByIndex(imageBoxIndex);
            }

            return this;
        },

        setImageBoxByIndex : function(index) {


            for ( var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var imageBoxIndex = jThis.data( Lia.Component.Value.Button.ImageBox.IMAGE_BOX_INDEX );
                if ( index == imageBoxIndex )
                    return;

                var jChildren = jThis.children();
                jChildren.eq(index).show();

                if ( !String.isBlank(imageBoxIndex)) {
                    jChildren.eq(imageBoxIndex).hide();
                }

                jThis.data( Lia.Component.Value.Button.ImageBox.IMAGE_BOX_INDEX, index );

            }

            return this;

        },

        checkImageBoxByStatus : function ( status ) {

            for ( var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var isButtonPress = jThis.hasClass(Lia.Component.Flag.PRESS);
                var isButtonHover = jThis.hasClass(Lia.Component.Flag.HOVER);

                var buttonStatus = Lia.Component.Value.Button.Status.DEFAULT;
                if ( status == Lia.Component.Value.Button.Status.PRESSED || status == Lia.Component.Value.Button.Status.PRESSING || ( isButtonPress && status == Lia.Component.Value.Button.Status.HOVERING ) ) {
                    buttonStatus = Lia.Component.Value.Button.Status.PRESSED;
                } else if ( isButtonHover && status == Lia.Component.Value.Button.Status.HOVERING ) {
                    buttonStatus = Lia.Component.Value.Button.Status.HOVERING;
                }

                jThis.setImageBoxByStatus(buttonStatus);
            }

            return this;
        },

        adjustImageBox : function() {

            return this.each(function(){

                var jThis = $(this);
                var jChildren = jThis.children();

                var jDefaultImage = jChildren.eq( Lia.Component.Value.Button.Status.ImageBox.DEFAULT_INDEX );
                var css = {
                    width : jDefaultImage.outerWidth(true),
                    height : jDefaultImage.outerHeight(true)
                };

                jChildren.css(css).eq( jChildren.length - 1 ).css(css);
            });
        },

        /**
         * image_button 초기화
         *
         * @returns {*}
         */
        initImageBox : function () {

            return this.initButton().each(function () {

                var jThis = $(this);
                if ( jThis.hasClass(Lia.Component.Flag.IMAGE_BOX_INITED))
                    return;

                jThis.addClass('inline_block');
                jThis.css({
                    'position' : 'relative',
                    'overflow':'hidden'
                });

                var imageBoxHover = jThis.hasClass(Lia.Component.Flag.HOVER);
                var path = jThis.attr(Lia.Component.AttrName.SRC);
                path = path.replace(Lia.Component.Value.Button.SRC_PRESSED_POSTFIX, Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX);
                path = path.replace(Lia.Component.Value.Button.SRC_HOVERING_POSTFIX, Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX);

                var jDefaultImage = $('<img />').css({
                    'position' : 'absolute',
                    'top' : 0,
                    'left' : 0
                }).load(function(){

                    var jThis = $(this);
                    var jClickDiv = jThis.parent().children('div');
                    var css = {
                        width : jThis.outerWidth(true),
                        height : jThis.outerHeight(true)
                    };

                    jThis.css(css);
                    jClickDiv.css(css);

                }).attr({
                    'src' : path
                }).hide();

                jThis.append(jDefaultImage);

                var jPressedImage = $('<img />').css({
                    'float' : 'left',
                    'position' : 'absolute',
                    'top' : 0,
                    'left' : 0
                }).attr({
                    'src' : path.replace(Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX, Lia.Component.Value.Button.SRC_PRESSED_POSTFIX)
                }).hide();

                jThis.append(jPressedImage);

                if ( imageBoxHover )
                {
                    var jHoveringImage = $('<img />').css({
                        'float' : 'left',
                        'position' : 'absolute',
                        'top' : 0,
                        'left' : 0
                    }).attr({
                        'src' : path.replace(Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX, Lia.Component.Value.Button.SRC_HOVERING_POSTFIX)
                    }).hide();

                    jThis.append(jHoveringImage);
                }

                var jClickDiv = $('<div></div>').css({
                    'position' : 'relative',
                    'top' : 0,
                    'left' : 0
                });
                jThis.append(jClickDiv);

                jThis.on(Lia.Component.Event.STATUS_CHANGED, function(e) {

                    jQuery(this).checkImageBoxByStatus( e.status );
                });

                jThis.checkButtonStatus();
                jThis.addClass(Lia.Component.Flag.IMAGE_BOX_INITED);
            });
        }
    });

})(jQuery);





/**
 *  jquery.history.js 임포트 시켜서 사용
 *  lia.requester.js 임포트 시켜서 사용
 *  ajax 호출
 **/

/*
 */

jQuery.Popup = function() {

    this.jPopup = undefined;
    this.jLayout = undefined;
    this.cssLoading = undefined;
    this.htmlLoading = undefined;

    this.hided = false;
    this.inited = false;


};
jQuery.Popup.prototype.set = function ( options ) {

    if ( options != undefined ) {

        var jPopup = Lia.p(options, 'jPopup');
        if ( jPopup != undefined ) {
            this.jPopup = jPopup;
        }

        var jLayout = Lia.p(options, 'jLayout');
        if ( jLayout != undefined ) {
            this.jLayout = jLayout;
        }
    }
};
jQuery.Popup.prototype.getJLayout = jQuery.Popup.prototype.get = function() {
    return this.jLayout;
};
jQuery.Popup.prototype.getJPopup =  function() {
    return this.jPopup;
};
jQuery.Popup.prototype.find = function( selector ) {

    if ( this.jLayout != undefined )
        return this.jLayout.find(selector);

    return undefined;
};

jQuery.Popup.prototype.html = function( html ) {

    if ( this.jLayout != undefined )
        return this.jLayout.html(html);

    return undefined;
};


jQuery.Popup.prototype.append = function( item ) {

    if ( this.jLayout != undefined )
        return this.jLayout.append(item);

    return undefined;
};

jQuery.Popup.prototype.hide = function() {

    if ( this.jPopup != undefined )
        this.jPopup.hidePopup();

    this.hided = true;
    return this;
};
jQuery.Popup.prototype.isHided = function() {
    return this.hided;
};
jQuery.Popup.prototype.isInited = function() {
    return this.inited;
};
jQuery.Popup.prototype.setInited = function( inited ) {
    this.inited = inited;
    return this;
};
jQuery.Popup.prototype.checkCssLoading  = function() {
    return this.cssLoading;
};
jQuery.Popup.prototype.checkHtmlLoading  = function() {
    return this.htmlLoading;
};
jQuery.Popup.prototype.adjust = function() {
    jQuery.adjustPopup( this.get() );
};
jQuery.Popup.prototype.extend = function( map ) {
    for( var key in map ) {
        this[key] = map[key];
    }
};

jQuery.Popup.prototype.adjustPopup = jQuery.Popup.prototype.adjust;
jQuery.Popup.prototype.hidePoup = jQuery.Popup.prototype.hide;



jQuery.AjaxPopupManager = {

    ContentType : {

        CSS : 'css',
        JS : 'js',
        HTML : 'html'
    },

    Status : {

        START : 'START',
        SUCCESS : 'SUCCESS',
        ERROR : 'ERROR'
    },

    cssLoading : true,
    htmlLoading : true,
    jsLoading : true,

    requester : undefined,

    ajaxQSync : false,
    ajaxQMethod : {},
    ajaxQCssMethod : 'get',
    ajaxQJsMethod : 'get',
    ajaxQHtmlMethod : 'get',

    popupContentMap : {
        css : {},
        js : {},
        html : {}
    },

    popupListLayoutSelector : '#popup_list_layout',
    jPopupListLayout : undefined,

    filePathFormatHandler : function(path, object) {
        return path;
    },
    cssFilePathFormatHandler : function(path, object) {
        return '/res/popup/' + path + '.css';
    },
    htmlFilePathFormatHandler : function(path, object) {
        return '/res/popup/' + path + '.html';
    },
    jsFilePathFormatHandler : function(path, object) {
        return '/res/popup/' + path + '.js';
    },

    /**
     * css 로딩 여부 설정
     */
    setCssLoading : function( loading ) {
        jQuery.AjaxPopupManager.cssLoading = loading;
    },

    /**
     * html 로딩 여부 설정
     */
    setHtmlLoading : function( loading ) {
        jQuery.AjaxPopupManager.htmlLoading = loading;
    },

    /**
     * js 로딩 여부 설정
     */
    setJsLoading : function( loading ) {
        jQuery.AjaxPopupManager.jsLoading = loading;
    },

    /**
     * ajax로 sync 설정
     */
    setAjaxQSync : function( sync ) {
        jQuery.AjaxPopupManager.ajaxQSync = sync;
    },

    /**
     * ajax로 css 요청시 method 설정
     */
    setAjaxQCssMethod : function( method ) {
        jQuery.AjaxPopupManager.ajaxQCssMethod = method;
    },
    /**
     * ajax로 js 요청시 method 설정
     */
    setAjaxQJsMethod : function( method ) {
        jQuery.AjaxPopupManager.ajaxQJsMethod = method;
    },
    /**
     * ajax html 요청시 method 설정
     */
    setAjaxQHtmlMethod : function( method ) {
        jQuery.AjaxPopupManager.ajaxQHtmlMethod = method;
    },

    /**
     * request할 파일 포멧 핸들러 설정
     */
    setFilePathFormatHandler : function( handler ) {
        jQuery.AjaxPopupManager.filePathFormatHandler = handler;
    },

    /**
     * request할 css 파일 포멧 핸들러 설정
     */
    setCssFilePathFormatHandler : function( handler ) {
        jQuery.AjaxPopupManager.cssFilePathFormatHandler = handler;
    },

    /**
     * request할 html 파일 포멧 핸들러 설정
     */
    setHtmlFilePathFormatHandler : function( handler ) {
        jQuery.AjaxPopupManager.htmlFilePathFormatHandler = handler;
    },

    /**
     * reqeust할 js 파일 포멧 핸들러 설정
     */
    setJsFilePathFormatHandler : function( handler ) {
        jQuery.AjaxPopupManager.jsFilePathFormatHandler = handler;
    },

    /**
     * 진행 상황 객체
     */
    onProgress : function( status, path, object ) {
    },

    /**
     * 진행 상황 리스터 등록
     */
    setOnProgress : function( listener ) {
        jQuery.AjaxPopupManager.onProgress = listener;
    },

    onPopupInit : function( jLayout, path, object, jPopupListLayout ) {
    },

    setOnPopupInit : function( listener ) {
        jQuery.AjaxPopupManager.onPopupInit = listener;
    },

    onPopupConstruct : function( jLayout, path, object, jPopupListLayout ) {
    },

    setOnPopupConstruct : function( listener ) {
        jQuery.AjaxPopupManager.onPopupConstruct = listener;
    },

    onPopupShow : function( jLayout, path, object, jPopupListLayout ) {
    },

    setOnPopupShow : function( listener ) {
        jQuery.AjaxPopupManager.onPopupShow = listener;
    },

    onPopupHide : function( jLayout, path, object, jPopupListLayout ) {
    },

    setOnPopupHide : function( listener ) {
        jQuery.AjaxPopupManager.onPopupHide = listener;
    },

    filePathCachingHandler : function(path, object, contentType) {
        return true;
    },

    setFilePathCachingHandler : function( listener ) {
        jQuery.AjaxPopupManager.filePathCachingHandler = listener;
    },


    setPopupContent : function( content, path, contentType ) {

        var map = jQuery.AjaxPopupManager.popupContentMap[contentType];
        map[path] = content;
    },

    setCssPopupContent : function( content, path ) {

        jQuery.AjaxPopupManager.setPopupContent(content, path, jQuery.AjaxPopupManager.ContentType.CSS);
    },

    setJsPopupContent : function( content, path ) {

        jQuery.AjaxPopupManager.setPopupContent(content, path, jQuery.AjaxPopupManager.ContentType.JS);
    },

    setHtmlPopupContent : function( content, path ) {

        jQuery.AjaxPopupManager.setPopupContent(content, path, jQuery.AjaxPopupManager.ContentType.HTML);
    },


    /**
     * 함수 등록 및 초기화
     *
     * cssLoading
     * htmlLoading
     * jsLoading
     * requester
     * caching
     *
     * ajaxQSync
     * ajaxQCssMethod
     * ajaxQJsMethod
     * ajaxQHtmlMethod
     *
     */
    init : function( options ) {

        for(var key in options) {

            var value = options[key];
            jQuery.AjaxPopupManager[key] = value;
        }

        if ( jQuery.AjaxPopupManager.requester == undefined )
            jQuery.AjaxPopupManager.requester = new jQuery.Requester();

        jQuery.AjaxPopupManager.jPopupListLayout = jQuery(jQuery.AjaxPopupManager.popupListLayoutSelector);

    },


    /**
     * caching 우선순위
     *    options - caching
     *       undefined 이면
     *          filePathCachingHandler 체킹
     *
     */
    show : function( path, object, options, parameterMap) {

        var optionsCaching = Lia.p(options, 'caching' );

        jQuery.AjaxPopupManager.onProgress(jQuery.AjaxPopupManager.Status.START, path, object);

        var url = undefined;
        if( jQuery.AjaxPopupManager.jsLoading == true  ) {

            var requestPath = jQuery.AjaxPopupManager.filePathFormatHandler(path, object);

            // caching
            var caching = optionsCaching;
            if (caching == undefined) {
                caching = jQuery.AjaxPopupManager.filePathCachingHandler(path, object, jQuery.AjaxPopupManager.ContentType.JS );
            }

            if ( !caching || jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.JS ][path] == undefined ) {

                url = jQuery.AjaxPopupManager.jsFilePathFormatHandler(requestPath, object);
                if (url != undefined) {

                    jQuery.AjaxPopupManager.request(jQuery.AjaxPopupManager.ajaxQJsMethod, url, parameterMap, function (status, data, request) {

                        var path = Lia.p(request, 'object', 'path');

                        if (status != jQuery.Requester.Status.SUCCESS) {
                            jQuery.AjaxPopupManager.abort();
                            jQuery.AjaxPopupManager.onProgress(jQuery.AjaxPopupManager.Status.ERROR, path, Lia.p(request, 'object', 'object'));
                            return;
                        }

                        jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.JS ][path] = data;

                    }, {
                        path: path,
                        object: object
                    });
                } else {

                    // 로딩 안해야 되는 케이스
                    jQuery.AjaxPopupManager.popupContentMap[jQuery.AjaxPopupManager.ContentType.JS][path] = undefined;
                }
            }

        } else {

            // 로딩 안해야 되는 케이스
            jQuery.AjaxPopupManager.popupContentMap[jQuery.AjaxPopupManager.ContentType.JS][path] = undefined;
        }


        var popup = new jQuery.Popup();

        jQuery.AjaxPopupManager.execute( function( execute ) {

            var popup = Lia.p(execute, 'object', 'popup');
            var options = Lia.p(execute, 'object','options');
            var path = Lia.p(execute, 'object', 'path');
            var object = Lia.p(execute, 'object', 'object');
            var parameterMap = Lia.p(execute, 'object', 'parameterMap');

            // 스크립트 체크
            var js = jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.JS ][path];
            if ( js != undefined ) {
                popup.extend ( eval( js ) );
            }

            var htmlUrl = undefined;

            var htmlLoading = Lia.pd(jQuery.AjaxPopupManager.htmlLoading, popup.checkHtmlLoading());
            if ( htmlLoading ) {

                // caching
                var caching = optionsCaching;
                if (caching == undefined) {
                    caching = jQuery.AjaxPopupManager.filePathCachingHandler(path, object, jQuery.AjaxPopupManager.ContentType.HTML);
                }

                if (!caching || jQuery.AjaxPopupManager.popupContentMap[jQuery.AjaxPopupManager.ContentType.HTML][path] == undefined) {

                    htmlUrl = jQuery.AjaxPopupManager.htmlFilePathFormatHandler(requestPath, object);
                    if (htmlUrl != undefined) {

                        jQuery.AjaxPopupManager.request(jQuery.AjaxPopupManager.ajaxQHtmlMethod, htmlUrl, parameterMap, function (status, data, request) {

                            var path = Lia.p(request, 'object', 'path');

                            if (status != jQuery.Requester.Status.SUCCESS) {
                                jQuery.AjaxPopupManager.abort();
                                jQuery.AjaxPopupManager.onProgress(jQuery.AjaxPopupManager.Status.ERROR, path, Lia.p(request, 'object', 'object'));
                                return;
                            }

                            jQuery.AjaxPopupManager.popupContentMap[jQuery.AjaxPopupManager.ContentType.HTML][path] = data;

                        }, {
                            path: path,
                            object: object
                        });
                    } else {

                        // 로딩 안해야 되는 케이스
                        jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.HTML ][path] = undefined;
                    }

                }
            } else {

                // 로딩 안해야 되는 케이스
                jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.HTML ][path] = undefined;
            }


            var cssUrl = undefined;
            var cssLoading = Lia.pd(jQuery.AjaxPopupManager.cssLoading, popup.checkCssLoading());
            if ( cssLoading ) {

                // caching
                var caching = optionsCaching;
                if (caching == undefined) {
                    caching = jQuery.AjaxPopupManager.filePathCachingHandler(path, object, jQuery.AjaxPopupManager.ContentType.CSS );
                }

                if ( !caching || jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.CSS ][path] == undefined ) {

                    cssUrl = jQuery.AjaxPopupManager.cssFilePathFormatHandler(requestPath, object);
                    if (cssUrl != undefined) {

                        jQuery.AjaxPopupManager.request(jQuery.AjaxPopupManager.ajaxQCssMethod, cssUrl, parameterMap, function (status, data, request) {

                            var path = Lia.p(request, 'object', 'path');

                            if (status != jQuery.Requester.Status.SUCCESS) {
                                jQuery.AjaxPopupManager.abort();
                                jQuery.AjaxPopupManager.onProgress(jQuery.AjaxPopupManager.Status.ERROR, path, Lia.p(request, 'object', 'object'));
                                return;
                            }

                            jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.CSS ][path] = data;

                        }, {
                            path: path,
                            object: object
                        });

                    } else {

                        // 로딩 안해야 되는 케이스
                        jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.CSS ][path] = undefined;
                    }
                }

            } else {
                // 로딩 안해야 되는 케이스
                jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.CSS ][path] = undefined;
            }

            jQuery.AjaxPopupManager.execute( function( execute ) {

                var popup = Lia.p(execute, 'object', 'popup');
                var path = Lia.p(execute, 'object', 'path');
                var parameterMap = Lia.p(execute, 'object', 'parameterMap');
                var options = Lia.p(execute, 'object', 'options');
                var object = Lia.p(execute, 'object', 'object');

                // 키기 전에 하이드 된 경우
                if ( popup.isHided() ) {
                    return;
                }

                var css = jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.CSS ][ path ];
                var html = jQuery.AjaxPopupManager.popupContentMap[ jQuery.AjaxPopupManager.ContentType.HTML ][ path ];

                var jPopupListLayout = jQuery.AjaxPopupManager.jPopupListLayout;

                var text = '<div>';

                if ( css != undefined ) {
                    text += '<style type="text/css">'+ css +'</style>';
                }

                if ( html != undefined ) {
                    text += html;
                }

                text += '</div>';

                var jLayout = $(text);
                jPopupListLayout.append(jLayout);

                popup.set({
                    jLayout : jLayout
                });

                jQuery.AjaxPopupManager.onPopupConstruct(jLayout, path, object, jPopupListLayout);

                if ( popup.onConstruct != undefined ) {

                    //try {
                        popup.onConstruct(jLayout, path, object, jPopupListLayout);
                    //} catch ( err ) {
                    //    console.log(err);
                    //}
                }

                jQuery.initDim(jLayout);
                var jPopup =jQuery.initPopup(jLayout);

                popup.set({
                    jPopup : jPopup
                });

                jQuery.AjaxPopupManager.onPopupInit(jLayout, path, object, jPopupListLayout);

                jPopup.on( Lia.Component.Event.SHOW, {
                    jLayout : jLayout,
                    path : path,
                    object : object,
                    jPopupListLayout : jPopupListLayout
                }, function(e) {

                    var data = e.data;
                    var jLayout = data.jLayout;
                    var path = data.path;
                    var object = data.object;
                    var jPopupListLayout = data.jPopupListLayout;

                    if ( jLayout != undefined ) {
                        jQuery.AjaxPopupManager.onPopupShow(jLayout, path, object, jPopupListLayout);
                    }
                });

                if ( popup.onInit != undefined ) {

                    //try {
                        popup.onInit(jLayout, path, object, jPopupListLayout);
                    //} catch ( err ) {
                    //    console.log(err);
                    //}
                }

                popup.setInited(true);

                jPopup.on( Lia.Component.Event.SHOW, {
                    options : options,
                    popup : popup,
                    jLayout : jLayout,
                    path : path,
                    object : object,
                    jPopupListLayout : jPopupListLayout
                }, function(e) {

                    var data = e.data;

                    var options = data.options;
                    var popup = data.popup;
                    var jLayout = data.jLayout;
                    var path = data.path;
                    var object = data.object;
                    var jPopupListLayout = data.jPopupListLayout;

                    if ( jLayout != undefined && popup.onShow != undefined ) {

                        //try {
                            popup.onShow(jLayout, path, object, jPopupListLayout );
                        //} catch ( err ) {
                        //    console.log(err);
                        //}

                    }

                    var onShow = Lia.p(options, 'onShow');
                    if ( onShow != undefined ) {
                        onShow.call(popup, popup, jLayout, path, object, jPopupListLayout);
                    }
                });

                jPopup.on( Lia.Component.Event.HIDE, {
                    options : options,
                    popup : popup,
                    jLayout : jLayout,
                    path : path,
                    object : object,
                    jPopupListLayout : jPopupListLayout
                }, function(e) {

                    var data = e.data;

                    var options = data.options;
                    var popup = data.popup;
                    var jLayout = data.jLayout;
                    var path = data.path;
                    var object = data.object;
                    var jPopupListLayout = data.jPopupListLayout;

                    var onHide = Lia.p(options, 'onHide');
                    if ( onHide != undefined ) {
                        onHide.call(popup, popup, jLayout, path, object, jPopupListLayout);
                    }

                    if ( jLayout != undefined && popup.onHide != undefined ) {

                        //try {
                            popup.onHide( jLayout, path, object, jPopupListLayout );
                        //} catch ( err ) {
                        //    console.log(err);
                        //}
                    }

                    if ( jLayout != undefined ) {
                        jQuery.AjaxPopupManager.onPopupHide(jLayout, path, object, jPopupListLayout);
                        jLayout.remove();
                    }
                });

                jPopup.showPopup();

                jQuery.AjaxPopupManager.onProgress(jQuery.AjaxPopupManager.Status.SUCCESS, path, object);

            }, {
                path : path,
                popup : popup,
                object : object,
                options : options,
                parameterMap : parameterMap
            });

        }, {
            path : path,
            popup : popup,
            object : object,
            options : options,
            parameterMap : parameterMap
        });

        return popup;
    },

    request : function( method, url, parameterMap, onResponse, object ) {

        var request = {
            url : url,
            onResponse : onResponse,
            object : object,
            parameterMap : parameterMap,
            method : method,

            ajaxQSync : jQuery.AjaxPopupManager.ajaxQSync,
            q : true,
            dataType : 'text'
        };

        jQuery.AjaxPopupManager.requester.request(request);
    },

    execute : function( onExecute, object ) {

        jQuery.AjaxPopupManager.requester.execute({
            onExecute : onExecute,
            object : object
        });
    },

    abort : function() {

        jQuery.AjaxPopupManager.requester.abort();
    }


};



/**
 * loading_indicator
 *
 * <img class="loading_indicator" lia-src="{img 주소 format:/loading/{index}.png}" lia-index="{현재 인덱스}" lia-start-index="{시작 인덱스}" lia-end-index="{끝인덱스}" />
 *
 */
/*
 초기화 코드

 뷰에 붙이고 나서 start 해야함
 $(document).ready(function () {

 $.initAndPlayLoadingIndicator();

 });

 */

jQuery.extend({

    liaLoadingIndicatorOptions: undefined,
    setLoadingIndicatorOptions : function ( options ) {
        jQuery.liaLoadingIndicatorOptions = options;
    },

    liaLoadingIndicatorTimerId: undefined,

    loopLoadingIndicatorTimer : function () {

        if ( jQuery.liaLoadingIndicatorTimerId == undefined ) {

            jQuery.liaLoadingIndicatorTimerId = window.setInterval(function () {

                if ( jQuery('.' + Lia.Component.Name.LOADING_INDICATOR + '.' + Lia.Component.Flag.PLAYING ).nextLoadingIndicator().size() <= 0 ) {
                    jQuery.pauseLoadingIndicator();
                }

            }, Lia.Component.Value.LoadingIndicator.TIMER_DURATION);

        }
    },

    pauseLoadingIndicatorTimer : function () {

        if (jQuery.liaLoadingIndicatorTimerId != undefined) {
            clearInterval(jQuery.liaLoadingIndicatorTimerId);
            jQuery.liaLoadingIndicatorTimerId = undefined;
        }
    },

    /**
     * 초기화
     */
    initLoadingIndicator: function (j) {

        var selector = '.' + Lia.Component.Name.LOADING_INDICATOR;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.initLoadingIndicator();
    },

    /**
     * 시작
     */
    playLoadingIndicator : function(j) {

        var selector = '.' + Lia.Component.Name.LOADING_INDICATOR;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.playLoadingIndicator();
    },

    /**
     * 초기화 및 시작
     */
    initAndPlayLoadingIndicator : function(j) {

        var selector = '.' + Lia.Component.Name.LOADING_INDICATOR;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        return j.initAndPlayLoadingIndicator();
    },

    /**
     * 중지
     */
    removeLoadingIndicator: function (j) {

        var selector = '.' + Lia.Component.Name.LOADING_INDICATOR;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        j.remove();
    },

    /**
     * 중지
     */
    pauseLoadingIndicator: function (j) {

        var selector = '.' + Lia.Component.Name.LOADING_INDICATOR;

        if (j == undefined)
            j = jQuery(selector);
        else
            j = j.find(selector);

        j.pauseLoadingIndicator();
    }


});

jQuery.fn.extend({

    initLoadingIndicator: function () {

        return this.each(function(){

            var jThis = jQuery(this);
            if ( jThis.hasClass( Lia.Component.Flag.INITED ) )
                return;

            // 소스 체크
            var src = jThis.attr(Lia.Component.AttrName.SRC);
            if ( String.isBlank(src) ) {
                src = Lia.p(jQuery.liaLoadingIndicatorOptions, Lia.Component.AttrName.SRC);
                jThis.attr(Lia.Component.AttrName.SRC, src);
            }

            // 끝 변수 체크
            var endIndex = jThis.attr(Lia.Component.AttrName.END_INDEX);
            if ( String.isBlank(endIndex) ) {
                endIndex = Lia.p(jQuery.liaLoadingIndicatorOptions, Lia.Component.AttrName.END_INDEX);
                jThis.attr(Lia.Component.AttrName.END_INDEX, endIndex);
            }

            // 시작 변수 체크
            var startIndex = jThis.attr(Lia.Component.AttrName.START_INDEX);
            if ( String.isBlank(startIndex) ) {
                startIndex = Lia.p(jQuery.liaLoadingIndicatorOptions, Lia.Component.AttrName.START_INDEX);
            }
            if ( String.isBlank(startIndex) ) {
                startIndex = Lia.Component.Value.LoadingIndicator.DEFAULT_START_INDEX;
            } else {
                startIndex = parseInt(startIndex);
            }

            var index = startIndex;
            jThis.attr('src', src.replace( Lia.Component.Value.LoadingIndicator.REPLACE_INDEX_WORD, index));
            jThis.attr(Lia.Component.AttrName.INDEX, index);
            jThis.addClass( Lia.Component.Flag.INITED );
        });
    },

    initAndPlayLoadingIndicator : function() {

        return this.initLoadingIndicator().playLoadingIndicator();
    },

    playLoadingIndicator : function() {

        this.addClass( Lia.Component.Flag.PLAYING );
        jQuery.loopLoadingIndicatorTimer();
        return this;
    },

    nextLoadingIndicator: function () {

        return this.each(function () {

            var jThis = jQuery(this);
            var src = jThis.attr(Lia.Component.AttrName.SRC);

            var startIndex = jThis.attr(Lia.Component.AttrName.START_INDEX);
            if ( String.isBlank(startIndex) ) {
                startIndex = Lia.Component.Value.LoadingIndicator.DEFAULT_START_INDEX;
            } else {
                startIndex = parseInt(startIndex);
            }

            var endIndex = parseInt(jThis.attr(Lia.Component.AttrName.END_INDEX));

            var index = jThis.attr(Lia.Component.AttrName.INDEX);
            if (index == undefined) {
                index = startIndex;
            } else {
                index = parseInt(index);
            }

            ++index;
            if ( index > endIndex )
                index = startIndex;

            jThis.attr('src', src.replace( Lia.Component.Value.LoadingIndicator.REPLACE_INDEX_WORD, index));
            jThis.attr(Lia.Component.AttrName.INDEX, index);
        });

        return this;
    },

    pauseLoadingIndicator: function () {

        return this.removeClass(Lia.Component.Flag.PLAYING);
    }
});










/**
 * flat_button
 *
 * flat 한 버튼
 *
 *  <div class="button flat" />
 *
 *  속성
 *  lia-background-color
 *  lia-hovering-background-color
 *  lia-pressed-background-color
 *
 *  lia-text-color
 *  lia-hovering-text-color
 *  lia-pressed-text-color
 *
 *  lia-round-width - 라운드 크기
 *  lia-direction - 라운드 되는 방향
 *    ( left, right, top, bottom )
 *
 */
/*
 초기화 코드

 $(document).ready(function () {

 $.initFlatButton();
 });
 */

(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initFlatButton : function( j ) {

            var selector = '.' + Lia.Component.Name.FLAT_BUTTON;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initFlatButton();
        }
    });

    $.fn.extend({

        flatButtonPressed: function (pressed) {

            return this.buttonPressed(pressed);
        },

        setFlatButtonByPressed : function( pressed ) {

            for( var i = 0, l = this.length; i < l; i++ ) {
                var jThis = this.eq(i);

                var status = (pressed)? Lia.Component.Value.Button.Status.PRESSED:Lia.Component.Value.Button.Status.DEFAULT;
                jThis.setFlatButtonByStatus( status );
            }

            return this;
        },

        setFlatButtonByStatus : function( status ) {

            for( var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var defaultBackgroundColor = jThis.attr(Lia.Component.AttrName.DEFAULT_BACKGROUND_COLOR);
                var hoveringBackgroundColor = jThis.attr(Lia.Component.AttrName.HOVERING_BACKGROUND_COLOR);
                if ( hoveringBackgroundColor == undefined )
                    hoveringBackgroundColor = defaultBackgroundColor;
                var pressedBackgroundColor = jThis.attr(Lia.Component.AttrName.PRESSED_BACKGROUND_COLOR);
                if ( pressedBackgroundColor == undefined )
                    pressedBackgroundColor = hoveringBackgroundColor;

                var defaultTextColor = jThis.attr(Lia.Component.AttrName.DEFAULT_TEXT_COLOR);

                var hoveringTextColor = jThis.attr(Lia.Component.AttrName.HOVERING_TEXT_COLOR);
                if ( hoveringTextColor == undefined )
                    hoveringTextColor = defaultTextColor;
                var pressedTextColor = jThis.attr(Lia.Component.AttrName.PRESSED_TEXT_COLOR);
                if ( pressedTextColor == undefined )
                    pressedTextColor = hoveringTextColor;

                var backgroundColor = defaultBackgroundColor;
                var textColor = defaultTextColor;

                if ( status == Lia.Component.Value.Button.Status.PRESSED )
                {
                    backgroundColor = pressedBackgroundColor;
                    textColor = pressedTextColor;

                } else if ( status == Lia.Component.Value.Button.Status.HOVERING ) {

                    backgroundColor = hoveringBackgroundColor;
                    textColor = hoveringTextColor;
                }

                if ( backgroundColor != undefined )
                    jThis.css('background-color',backgroundColor);

                if ( textColor != undefined )
                    jThis.css('color', textColor);

            }

            return this;
        },

        checkFlatButtonByStatus : function ( status ) {

            for ( var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var isButtonPress = jThis.hasClass(Lia.Component.Flag.PRESS);
                var isButtonHover = jThis.hasClass(Lia.Component.Flag.HOVER);

                var buttonStatus = Lia.Component.Value.Button.Status.DEFAULT;
                if ( status == Lia.Component.Value.Button.Status.PRESSED || status == Lia.Component.Value.Button.Status.PRESSING || ( isButtonPress && status == Lia.Component.Value.Button.Status.HOVERING ) ) {
                    buttonStatus = Lia.Component.Value.Button.Status.PRESSED;
                } else if ( isButtonHover && status == Lia.Component.Value.Button.Status.HOVERING ) {
                    buttonStatus = Lia.Component.Value.Button.Status.HOVERING;
                }

                jThis.setFlatButtonByStatus(buttonStatus);
            }

            return this;
        },

        initFlatButton : function () {

            return this.initButton().each(function() {

                var jThis = $(this);
                if ( jThis.hasClass(Lia.Component.Flag.FLAT_BUTTON_INITED))
                    return;

                var roundWidth = jThis.attr( Lia.Component.AttrName.ROUND_WIDTH );
                if ( roundWidth == undefined )
                    roundWidth = Lia.Component.Value.Button.FlatButton.DEFAULT_ROUND_WIDTH;

                var direction = jThis.attr( Lia.Component.AttrName.DIRECTION );
                var cornerOptions = '';
                if ( direction != undefined )
                    cornerOptions += ' ' + direction + ' ';
                if ( roundWidth != undefined )
                    cornerOptions += ' ' + roundWidth + ' ';

                jThis.css( {'line-height' : jThis.height() + 'px' } );
                if ( roundWidth != undefined && parseFloat(roundWidth) != 0 ) {

                    var borderRadiusCss = {};
                    if ( String.isBlank(cornerOptions) ) {
                        borderRadiusCss['border-radius'] = roundWidth;
                    } else {

                        if ( cornerOptions.indexOf('left') ) {
                            borderRadiusCss['border-top-left-radius'] = roundWidth;
                            borderRadiusCss['border-bottom-left-radius'] = roundWidth;
                        }
                        if ( cornerOptions.indexOf('right') ) {
                            borderRadiusCss['border-top-right-radius'] = roundWidth;
                            borderRadiusCss['border-bottom-right-radius'] = roundWidth;
                        }
                        if ( cornerOptions.indexOf('top') ) {
                            borderRadiusCss['border-top-left-radius'] = roundWidth;
                            borderRadiusCss['border-top-right-radius'] = roundWidth;
                        }
                        if ( cornerOptions.indexOf('bottom') ) {
                            borderRadiusCss['border-bottom-left-radius'] = roundWidth;
                            borderRadiusCss['border-bottom-right-radius'] = roundWidth;
                        }
                    }

                    jThis.css(borderRadiusCss);
                }

                jThis.css({ 'text-align' : 'center' });

                jThis.on(Lia.Component.Event.STATUS_CHANGED, function(e) {

                    $(this).checkFlatButtonByStatus( e.status );
                });

                jThis.checkButtonStatus();
                jThis.addClass(Lia.Component.Flag.FLAT_BUTTON_INITED);
            });
        }
    });

})(jQuery);
/**
 * image_button
 * 이미지 마우스 오버, 클릭시 이미지 변경
 *
 * <img class="image_button" lia-src="{이미지 주소}" />
 *      _pressed.png 가 클릭시 보여짐
 *
 * <img class="image_button hover" lia-src="{이미지 주소}" />
 *      _hovering.png 가 마우스 커서가 올라갈 대 보여짐
 *      _pressed.png 가 클릭시 보여짐
 *
 * <img class="image_button press" lia-src="{이미지 주소}" />*
 *      _pressed.png 가 마우스 커서가 올라갈 때, 클릭시 보여짐
 *
 */
/*
 초기화 코드

 $(document).ready(function () {

    $.initImageButton();
 });
 */

(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initImageButton : function( j ) {

            var selector = '.' + Lia.Component.Name.IMAGE_BUTTON;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initImageButton();
        }
    });

    $.fn.extend({

        /**
         * image_button pressed 상태 세팅, 리턴
         *
         * @param pressed
         * @returns {*}
         */
        imageButtonPressed: function (pressed) {

            return this.buttonPressed(pressed);

        },

        setImageButtonByPressed : function( pressed ) {

            for( var i = 0, l = this.length; i < l; i++ ) {
                var jThis = this.eq(i);

                var status = (pressed)? Lia.Component.Value.Button.Status.PRESSED:Lia.Component.Value.Button.Status.DEFAULT;
                jThis.setImageButtonByStatus( status );
            }

            return this;
        },

        setImageButtonByStatus : function( status ) {

            for( var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var path = jThis.attr(Lia.Component.AttrName.SRC);
                path = path.replace( Lia.Component.Value.Button.SRC_PRESSED_POSTFIX, Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX );
                path = path.replace( Lia.Component.Value.Button.SRC_HOVERING_POSTFIX, Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX );


                if ( status == Lia.Component.Value.Button.Status.PRESSED ) {
                    path = path.replace( Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX, Lia.Component.Value.Button.SRC_PRESSED_POSTFIX );
                } else if ( status == Lia.Component.Value.Button.Status.HOVERING ) {
                    path = path.replace( Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX, Lia.Component.Value.Button.SRC_HOVERING_POSTFIX );
                }

                if ( jThis.attr('src') != path ) {
                    jThis.attr('src', path);
                }
            }

            return this;
        },

        checkImageButtonByStatus : function ( status ) {

            for ( var i = 0, l = this.length; i < l; i++ ) {

                var jThis = this.eq(i);

                var isButtonPress = jThis.hasClass(Lia.Component.Flag.PRESS);
                var isButtonHover = jThis.hasClass(Lia.Component.Flag.HOVER);

                var buttonStatus = Lia.Component.Value.Button.Status.DEFAULT;
                if ( status == Lia.Component.Value.Button.Status.PRESSED || status == Lia.Component.Value.Button.Status.PRESSING || ( isButtonPress && status == Lia.Component.Value.Button.Status.HOVERING ) ) {
                    buttonStatus = Lia.Component.Value.Button.Status.PRESSED;
                } else if ( isButtonHover && status == Lia.Component.Value.Button.Status.HOVERING ) {
                    buttonStatus = Lia.Component.Value.Button.Status.HOVERING;
                }

                jThis.setImageButtonByStatus(buttonStatus);
            }

            return this;
        },

        /**
         * image_button 초기화
         *
         * @returns {*}
         */
        initImageButton : function () {

            return this.initButton().each(function () {

                var jThis = $(this);
                if ( jThis.hasClass(Lia.Component.Flag.IMAGE_BUTTON_INITED))
                    return;

                var path = jThis.attr(Lia.Component.AttrName.SRC);
                var src = jThis.attr('src');
                if ( String.isBlank(path) && !String.isBlank(src) ) {
                    path = src;
                    path = path.replace( Lia.Component.Value.Button.SRC_PRESSED_POSTFIX, Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX );
                    path = path.replace( Lia.Component.Value.Button.SRC_HOVERING_POSTFIX, Lia.Component.Value.Button.SRC_DEFAULT_POSTFIX );
                    jThis.attr(Lia.Component.AttrName.SRC, path);
                }

                jThis.on(Lia.Component.Event.STATUS_CHANGED, function(e) {

                    jQuery(this).checkImageButtonByStatus( e.status );
                });

                jThis.checkButtonStatus();
                jThis.addClass(Lia.Component.Flag.IMAGE_BUTTON_INITED);
            });
        }
    });

})(jQuery);
/**
 * texteditor ckeditor
 */
/*
    $.initTextEditor();

 */
(function ($) {

    $.extend({

        liaTextEditorIdx : 0,
        liaTextEditorOptions : {
            'height' : '300px',
            'filebrowserUploadUrl' : '/api/file/ckEditorUpload',
            'extraAllowedContent' : 'span(*);br(*)'
        },

        setTextEditorOptions : function( options ) {

            jQuery.liaTextEditorOptions = options;
        },

        /**
         * 초기화
         */
        initTextEditor : function( j, option ) {

            var selector = '.' + Lia.Component.Name.TEXT_EDITOR;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initTextEditor(option);
        }

    });

    $.fn.extend({

        initTextEditor : function(options) {

            var newOptions = Lia.deepCopy(jQuery.liaTextEditorOptions);
            Lia.combine(newOptions, options);

            for(var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if ( !jItem.hasClass( Lia.Component.Flag.INITED ) ) {

                    var id = jItem.attr('id');
                    if ( String.isNullOrWhitespace(id) ) {

                        id = Lia.Component.Name.TEXT_EDITOR + '_id_' + Lia.getTimestamp() + jQuery.liaTextEditorIdx++;
                        if (jQuery.liaTextEditorIdx >= 100000000)
                            jQuery.liaTextEditorIdx = 0;

                        jItem.attr('id', id);

                    }

                    CKEDITOR.replace(id, newOptions);

                    jItem.addClass( Lia.Component.Flag.INITED );
                }

            }

            return this;

        },

        textEditorVal : function( val ) {

            if( val == undefined ) {

                if ( this.size() < 1 ) {

                    return undefined;

                } else {

                    var jItem = this.eq(0);
                    if ( jItem.hasClass( Lia.Component.Flag.INITED ) ) {

                        var id = jItem.attr('id');
                        return CKEDITOR.instances[id].getData();

                    } else {

                        return undefined;
                    }
                }
            }

            for(var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if ( jItem.hasClass( Lia.Component.Flag.INITED ) ) {

                    var id = jItem.attr('id');
                    CKEDITOR.instances[id].setData(val);
                }
            }

            return this;
        }

    });

})(jQuery);/**
 * div_placeholder_input
 *
 * input type=text
 * <div class="div_placeholder_input"
            style="width:{배경 이미지 width};height:{배경 이미지 height};" lia-padding 관련 속성></div>
 *
 * input type=password
 * <div class="image_placeholder_input password"
            style="width:{배경 이미지 width};height:{배경 이미지 height};" lia-padding 관련 속성>
        <input type="password" />
    </div>
 *
 * textarea
 * <div class="image_placeholder_input textarea"
             style="width:{배경 이미지 width};height:{배경 이미지 height};" lia-padding 관련 속성></div>
 *
 * border 속성은 css등 지정
 *
 * .divPlaceholderInputVal()
 *      입력 값 설정 및 받아오기
 * .divPlaceholderInput()
 *      실제 입력 DOM객체 받아오기
 *
 */
/*
 초기화 코드

 $(document).ready(function () {

    $.initDivPlaceholderInput();
 });

 */
(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initDivPlaceholderInput : function( j ) {

            var selector = '.' + Lia.Component.Name.DIV_PLACEHOLDER_INPUT;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initDivPlaceholderInput();
        }
    });

    $.fn.extend({


        /**
         * 포커스
         * @returns {*}
         */
        divPlaceholderInputFocus : function() {
            return this.children(':input').focus();
        },

        /**
         * 입력된 내용 세팅, 리턴
         * @param val
         * @returns {*}
         */
        divPlaceholderInputVal: function (val) {

            if (val == undefined)
                return this.children(':input').val();
            else
                this.children(':input').val(val);

            return this.checkDivPlaceholderInput();
        },

        /**
         * 내용에 다른 placeholder 체크
         * @returns {*}
         */
        checkDivPlaceholderInput : function() {

            return this.find(':input').change();

        },

        /**
         * 실제 input 태그 반환
         * @returns {*}
         */
        divPlaceholderInput: function () {
            return this.find(':input');
        },


        adjustDivPlaceholderSize : function() {

            return this.each(function(){

                var jThis = $(this);

                var height = jThis.height();
                var width =  jThis.width();

                var isTextarea = jThis.hasClass( Lia.Component.Flag.TEXTAREA );
                var jInput = jThis.children(':input');

                var padding = jThis.attr(Lia.Component.AttrName.PADDING);
                var paddingVertical = jThis.attr(Lia.Component.AttrName.PADDING_VERTICAL);
                if ( paddingVertical == undefined )
                    paddingVertical = padding;
                var paddingHorizontal = jThis.attr(Lia.Component.AttrName.PADDING_HORIZONTAL);
                if ( paddingHorizontal == undefined )
                    paddingHorizontal = padding;
                var paddingLeft = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingLeft == undefined )
                    paddingLeft = paddingHorizontal;
                var paddingRight = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingRight == undefined )
                    paddingRight = paddingHorizontal;
                var paddingTop = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingTop == undefined )
                    paddingTop = paddingVertical;
                var paddingBottom = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingBottom == undefined )
                    paddingBottom = paddingVertical;

                jInput.css({
                    'position' : 'relative',
                    'margin' : '0px'
                });

                if ( paddingLeft != undefined )
                    jInput.css({ 'paddingLeft' : paddingLeft });
                if ( paddingRight != undefined )
                    jInput.css({ 'paddingRight' : paddingRight });
                if ( paddingTop != undefined )
                    jInput.css({ 'paddingTop' : paddingTop });
                if ( paddingBottom != undefined )
                    jInput.css({ 'paddingBottom' : paddingBottom });

                var inputPaddingLeft = jInput.css('padding-left');
                var inputPaddingRight = jInput.css('padding-right');
                var inputPaddingTop = jInput.css('padding-top');
                var inputPaddingBottom = jInput.css('padding-bottom');
                var inputBorderLeftWidth = jInput.css('border-left-width');
                var inputBorderRightWidth = jInput.css('border-right-width');
                var inputBorderTopWidth = jInput.css('border-top-width');
                var inputBorderBottomWidth = jInput.css('border-bottom-width');
                var inputLeft = parseFloat(inputPaddingLeft) + parseFloat(inputBorderLeftWidth);
                var inputRight = parseFloat(inputPaddingRight) + parseFloat(inputBorderRightWidth);
                var inputTop = parseFloat(inputPaddingTop) + parseFloat(inputBorderTopWidth);
                var inputBottom = parseFloat(inputPaddingBottom) + parseFloat(inputBorderBottomWidth);

                var inputWidth = width - inputLeft - inputRight;
                var inputHeight = height - inputTop - inputBottom;
                jInput.css({
                    'width' : inputWidth + 'px',
                    'height' : inputHeight + 'px'
                });

                if (!isTextarea && Lia.ieVersion != -1)
                    jInput.css('line-height', inputHeight + 'px');

                var jPlaceholder = jThis.children('div');
                jPlaceholder.css({
                    'width' : inputWidth + 'px',
                    'height' : inputHeight + 'px',
                    'line-height' : inputHeight + 'px',
                    'padding-left' : inputLeft + 'px',
                    'padding-right' : inputRight + 'px',
                    'padding-top' : inputTop + 'px',
                    'padding-bottom' : inputBottom + 'px'
                });

            });

        },

        /**
         * 초기화
         * @returns {*}
         */
        initDivPlaceholderInput : function() {

            this.each(function () {

                var jThis = $(this);
                if ( jThis.hasClass( Lia.Component.Flag.INITED ) )
                    return;

                var height = jThis.height();
                var width =  jThis.width();

                var placeholder = jThis.attr( Lia.Component.AttrName.PLACEHOLDER );
                if ( String.isNullOrWhitespace(placeholder) )
                    placeholder = '';

                var isTextarea = jThis.hasClass( Lia.Component.Flag.TEXTAREA );
                var jInput = jThis.children(':input');
                if ( jInput.size() == 0 )
                {
                    jInput = $('<' + ( isTextarea ? 'textarea' : 'input' ) + ' ' +
                        ((isTextarea)?'': ( 'type="' + (jThis.hasClass( Lia.Component.Flag.PASSWORD ) ? 'password' : 'text') + '"' )) + '/>');
                    jThis.append(jInput);
                }


                if (isTextarea)
                {
                    var isImageInputNoResize = jThis.hasClass( Lia.Component.Flag.NO_RESIZE );
                    if (isImageInputNoResize)
                        jInput.css('resize', 'none');

                    var isImageInputHiddenOverflow = jThis.hasClass( Lia.Component.Flag.HIDDEN_OVERFLOW );
                    var overflow = 'auto';
                    if (isImageInputHiddenOverflow)
                        overflow = 'hidden';

                    jInput.css('overflow', overflow);
                }

                var padding = jThis.attr(Lia.Component.AttrName.PADDING);
                var paddingVertical = jThis.attr(Lia.Component.AttrName.PADDING_VERTICAL);
                if ( paddingVertical == undefined )
                    paddingVertical = padding;
                var paddingHorizontal = jThis.attr(Lia.Component.AttrName.PADDING_HORIZONTAL);
                if ( paddingHorizontal == undefined )
                    paddingHorizontal = padding;
                var paddingLeft = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingLeft == undefined )
                    paddingLeft = paddingHorizontal;
                var paddingRight = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingRight == undefined )
                    paddingRight = paddingHorizontal;
                var paddingTop = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingTop == undefined )
                    paddingTop = paddingVertical;
                var paddingBottom = jThis.attr(Lia.Component.AttrName.PADDING_LEFT);
                if ( paddingBottom == undefined )
                    paddingBottom = paddingVertical;

                jInput.css({
                    'position' : 'relative',
                    'margin' : '0px'
                });

                if ( paddingLeft != undefined )
                    jInput.css({ 'paddingLeft' : paddingLeft });
                if ( paddingRight != undefined )
                    jInput.css({ 'paddingRight' : paddingRight });
                if ( paddingTop != undefined )
                    jInput.css({ 'paddingTop' : paddingTop });
                if ( paddingBottom != undefined )
                    jInput.css({ 'paddingBottom' : paddingBottom });

                var inputPaddingLeft = jInput.css('padding-left');
                var inputPaddingRight = jInput.css('padding-right');
                var inputPaddingTop = jInput.css('padding-top');
                var inputPaddingBottom = jInput.css('padding-bottom');
                var inputBorderLeftWidth = jInput.css('border-left-width');
                var inputBorderRightWidth = jInput.css('border-right-width');
                var inputBorderTopWidth = jInput.css('border-top-width');
                var inputBorderBottomWidth = jInput.css('border-bottom-width');
                var inputLeft = parseFloat(inputPaddingLeft) + parseFloat(inputBorderLeftWidth);
                var inputRight = parseFloat(inputPaddingRight) + parseFloat(inputBorderRightWidth);
                var inputTop = parseFloat(inputPaddingTop) + parseFloat(inputBorderTopWidth);
                var inputBottom = parseFloat(inputPaddingBottom) + parseFloat(inputBorderBottomWidth);

                var inputWidth = width - inputLeft - inputRight;
                var inputHeight = height - inputTop - inputBottom;
                jInput.css({
                    'width' : inputWidth + 'px',
                    'height' : inputHeight + 'px'
                });

                if (!isTextarea && Lia.ieVersion != -1)
                    jInput.css('line-height', inputHeight + 'px');

                var textColor = jThis.attr( Lia.Component.AttrName.TEXT_COLOR );
                var fontWeight = jThis.attr( Lia.Component.AttrName.FONT_WEIGHT );
                var fontSize = jThis.attr( Lia.Component.AttrName.FONT_SIZE );
                var fontFamily = jThis.attr( Lia.Component.AttrName.FONT_FAMILY );

                if ( textColor != undefined )
                    jInput.css('color', textColor);

                if ( fontWeight != undefined )
                    jInput.css('font-weight', fontWeight);

                if ( fontSize != undefined )
                    jInput.css('font-size', fontSize);

                if ( fontFamily != undefined )
                    jInput.css('font-family', fontFamily);

                var jPlaceholder = $('<div />');
                jPlaceholder.css({
                    'position': 'absolute',
                    'display':'none',
                    'left' : '0px',
                    'top' :'0px',
                    'margin' : '0px',
                    'width' : inputWidth + 'px',
                    'height' : inputHeight + 'px',
                    'line-height' : inputHeight + 'px',
                    'padding-left' : inputLeft + 'px',
                    'padding-right' : inputRight + 'px',
                    'padding-top' : inputTop + 'px',
                    'padding-bottom' : inputBottom + 'px',
                    'cursor' : 'text'
                }).append($('<span>'+placeholder+'</span>'));


                var placeholderTextColor = jThis.attr( Lia.Component.AttrName.PLACEHOLDER_TEXT_COLOR );
                var placeholderFontWeight = jThis.attr( Lia.Component.AttrName.PLACEHOLDER_FONT_WEIGHT );
                var placeholderFontSize = jThis.attr( Lia.Component.AttrName.PLACEHOLDER_FONT_SIZE );
                var placeholderFontFamily = jThis.attr( Lia.Component.AttrName.PLACEHOLDER_FONT_FAMILY );

                if ( placeholderTextColor != undefined )
                    jPlaceholder.css('color', placeholderTextColor);

                if ( placeholderFontWeight != undefined )
                    jPlaceholder.css('font-weight', placeholderFontWeight);

                if ( placeholderFontSize != undefined )
                    jPlaceholder.css('font-size', placeholderFontSize);

                if ( placeholderFontFamily != undefined )
                    jPlaceholder.css('font-family', placeholderFontFamily);

                jThis.append(jPlaceholder);

                jThis.children('div').click(function(){
                    var jThis = $(this);
                    jThis.hide();
                    jThis.parent().children(':input').focus();
                });

                jThis.children(':input').change(liaCheckDivPlaceholderInput).focus(function () {

                    var jThis = $(this);
                    jThis.parent().children('div').hide();

                }).focusout(liaCheckDivPlaceholderInput).change();

                jThis.addClass(Lia.Component.Flag.INITED);
            });
        }

    });
})(jQuery);

function liaCheckDivPlaceholderInput()
{
    var jThis = $(this);
    var jParent = jThis.parent();

    if (jThis.val() == '')
        jParent.children('div').show();
    else
        jParent.children('div').hide();
}
/**
 * text_placeholder_input
 *
 *  <input type="text class="text_placeholder_input" lia-placeholder="{PLACEHOLDER}" />
 *
 * .textPlaceholderInputVal();
 * .
 *
 * outline:none; 속성으로 포커스시 하이라이트 없앨 수 있음
 * border 설정
 */
/*
$(document).ready(function() {
    $.initTextPlaceholderInput();
});
 */

(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initTextPlaceholderInput: function ( j ) {
            if ( j == undefined )
                j = $('.' + Lia.Component.Name.TEXT_PLACEHOLDER_INPUT);
            else
                j = j.find('.' + Lia.Component.Name.TEXT_PLACEHOLDER_INPUT);

            return j.initTextPlaceholderInput();
        }
    });

    $.fn.extend({

        /**
         * 내용 체크하여 placeholder 반영
         *
         * @returns {*}
         */
        checkTextPlaceholderInput : function() {

            return this.change();
        },

        /**
         * 실제 입력값 세팅, 리턴
         *
         * @param val
         * @returns {*}
         */
        textPlaceholderInputVal : function( val ) {

            if ( val == undefined )
            {
                val = this.val();

                var placeholderText = this.attr( Lia.Component.AttrName.PLACEHOLDER );
                if ( placeholderText == undefined )
                    return val;

                placeholderText += Lia.Component.Value.TextPlaceholderInput.APPEND_TEXT;

                if ( placeholderText == val )
                    val = '';

                return val;
            }

            return this.val(val).checkTextPlaceholderInput();

        },

        /**
         * placeholder view 상태 설정
         *
         * @param on
         */
        setTextPlaceHolderInputStatus : function( on ) {

            for(var i = 0, l = this.length; i < l; i++ )
            {
                var jItem = this.eq(i);

                var textColor = undefined;
                var fontWeight = undefined;
                var fontSize = undefined;
                var fontFamily = undefined;

                if ( on )
                {
                    textColor = jItem.attr( Lia.Component.AttrName.PLACEHOLDER_TEXT_COLOR );
                    fontWeight = jItem.attr( Lia.Component.AttrName.PLACEHOLDER_FONT_WEIGHT );
                    fontSize = jItem.attr( Lia.Component.AttrName.PLACEHOLDER_FONT_SIZE );
                    fontFamily = jItem.attr( Lia.Component.AttrName.PLACEHOLDER_FONT_FAMILY );
                }
                else
                {
                    textColor = jItem.attr( Lia.Component.AttrName.TEXT_COLOR );
                    fontWeight = jItem.attr( Lia.Component.AttrName.FONT_WEIGHT );
                    fontSize = jItem.attr( Lia.Component.AttrName.FONT_SIZE );
                    fontFamily = jItem.attr( Lia.Component.AttrName.FONT_FAMILY );
                }

                if ( textColor != undefined )
                    jItem.css('color', textColor);

                if ( fontWeight != undefined )
                    jItem.css('font-weight', fontWeight);

                if ( fontSize != undefined )
                    jItem.css('font-size', fontSize);

                if ( fontFamily != undefined )
                    jItem.css('font-family', fontFamily);
            }

        },

        /**
         * 크기 재조정
         *
         * @returns {*}
         */
        adjustTextPlaceHolderInput : function() {

            return this.each(function() {

                var jThis = $(this);

                var paddingLeft = Lia.Component.AttrName.PADDING_LEFT;
                var paddingRight = Lia.Component.AttrName.PADDING_RIGHT;
                var paddingTop = Lia.Component.AttrName.PADDING_TOP;
                var paddingBottom = Lia.Component.AttrName.PADDING_BOTTOM;
                var padding = jThis.attr( Lia.Component.AttrName.PADDING );
                if ( padding != undefined )
                {
                    paddingLeft = padding;
                    paddingRight = padding;
                    paddingTop = padding;
                    paddingBottom = padding;
                }

                padding = jThis.attr( Lia.Component.AttrName.PADDING_HORIZONTAL );
                if ( padding != undefined )
                {
                    paddingLeft = padding;
                    paddingRight = padding;
                }

                padding = jThis.attr( Lia.Component.AttrName.PADDING_VERTICAL );
                if ( padding != undefined )
                {
                    paddingTop = padding;
                    paddingBottom = padding;
                }

                padding = jThis.attr( Lia.Component.AttrName.PADDING_LEFT );
                if ( padding != undefined )
                    paddingLeft = padding;

                padding = jThis.attr( Lia.Component.AttrName.PADDING_RIGHT );
                if ( padding != undefined )
                    paddingRight = padding;

                padding = jThis.attr( Lia.Component.AttrName.PADDING_TOP );
                if ( padding != undefined )
                    paddingTop = padding;

                padding = jThis.attr( Lia.Component.AttrName.PADDING_BOTTOM );
                if ( padding != undefined )
                    paddingBottom = padding;

                jThis.css({
                    'padding-left' : paddingLeft,
                    'padding-right' : paddingRight,
                    'padding-top' : paddingTop,
                    'padding-bottom' : paddingBottom
                });

                var width = undefined;
                var inputWidth = jThis.attr( Lia.Component.AttrName.WIDTH );
                if ( inputWidth != undefined )
                    width = (parseFloat(inputWidth) - parseFloat(paddingLeft) - parseFloat(paddingRight)
                        - parseFloat(jThis.css('border-left-width')) - parseFloat(jThis.css('border-right-width')) ) + 'px';

                if ( width != undefined )
                    jThis.css('width', width);

                var height = undefined;
                var inputHeight = jThis.attr( Lia.Component.AttrName.HEIGHT );
                if ( inputHeight != undefined )
                    height = (parseFloat(inputHeight) - parseFloat(paddingTop) - parseFloat(paddingBottom)
                        - parseFloat(jThis.css('border-top-width')) - parseFloat(jThis.css('border-bottom-width')) ) + 'px';

                if ( height != undefined )
                    jThis.css('height', height);

                if ( this.tagName != 'TEXTAREA' && Lia.ieVersion != -1 && inputHeight != undefined )
                    jThis.css('line-height', height);
            });
        },

        /**
         * 초기화
         *
         * @returns {*}
         */
        initTextPlaceholderInput : function() {

            this.each(function() {

                var jThis = $(this);
                if ( jThis.hasClass( Lia.Component.Flag.INITED ) )
                    return;

                var path = jThis.attr( Lia.Component.AttrName.BACKGROUND_IMAGE );
                if ( path != undefined )
                    jThis.css('background-image', 'url('+path+')');

                jThis.adjustTextPlaceHolderInput().change(liaCheckTextPlaceholderInput).focus(function () {

                    var jThis = $(this);

                    var placeholderText = jThis.attr( Lia.Component.AttrName.PLACEHOLDER );
                    if ( placeholderText == undefined )
                        return;

                    placeholderText += Lia.Component.Value.TextPlaceholderInput.APPEND_TEXT;

                    var val = jThis.val();
                    if ( placeholderText == val )
                        jThis.val('');


                    jThis.setTextPlaceHolderInputStatus(false);

                }).focusout(liaCheckTextPlaceholderInput).change();

                jThis.addClass( Lia.Component.Flag.INITED );
            });

            return this;
        }

    });
})(jQuery);

function liaCheckTextPlaceholderInput()
{
    var jThis = $(this);
    var placeholderText = jThis.attr( Lia.Component.AttrName.PLACEHOLDER );
    if ( placeholderText == undefined )
        return;

    placeholderText += Lia.Component.Value.TextPlaceholderInput.APPEND_TEXT;

    var val = jThis.val();
    if ( val == '' )
        jThis.val(placeholderText);

    jThis.setTextPlaceHolderInputStatus(( val == '' || val == placeholderText));
}
/**
 *  flat_button jut
 *
 *  flat_button을 볼록 효과가 나도록 함
 *
 *  lia-shadow-width
 *    그림자 영역
 *    %, px 가능
 */
/*
 초기화 코드

 $(document).ready(function () {

     $.initFlatButton();
     $.initJutFlatButton();
 });
 */

(function ($) {

    $.extend({

        /**
         * 초기화
         */
        initJutFlatButton : function( j ) {

            var selector = '.' + Lia.Component.Name.FLAT_BUTTON + '.' + Lia.Component.Flag.JUT;

            if ( j == undefined )
                j = $( selector );
            else
                j = j.find( selector );

            return j.initJutFlatButton();
        }
    });

    $.fn.extend({

        jutFlatButtonPressed: function (pressed) {

            return this.buttonPressed(pressed);
        },

        initJutFlatButton : function () {

            return this.initFlatButton().each(function () {

                var jThis = $(this);
                if ( jThis.hasClass(Lia.Component.Flag.JUT_INITED))
                    return;

                var html = jThis.html();

                var jFlatButton = $('<div></div>');

                if ( jThis.hasClass( Lia.Component.Flag.HOVER ) )
                    jFlatButton.addClass( Lia.Component.Flag.HOVER );

                if ( jThis.hasClass( Lia.Component.Flag.PRESS ) ) {
                    jFlatButton.addClass(Lia.Component.Flag.PRESS);
                }

                if ( jThis.hasClass( Lia.Component.Flag.NO_CHANGE ) )
                    jFlatButton.addClass( Lia.Component.Flag.NO_CHANGE );

                if ( jThis.hasClass( Lia.Component.Flag.NO_BIND ) )
                    jFlatButton.addClass( Lia.Component.Flag.NO_BIND );

                if ( jThis.hasClass( Lia.Component.Flag.NO_DIM ) )
                    jFlatButton.addClass( Lia.Component.Flag.NO_DIM );

                if ( jThis.hasClass( Lia.Component.Flag.PRESSED ) )
                    jFlatButton.addClass( Lia.Component.Flag.PRESSED );

                jFlatButton.append(html);

                var pressDefaultBackgroundColor = jThis.attr(Lia.Component.AttrName.JUT_DEFAULT_BACKGROUND_COLOR);
                if ( pressDefaultBackgroundColor != undefined )
                    jFlatButton.attr(Lia.Component.AttrName.DEFAULT_BACKGROUND_COLOR, pressDefaultBackgroundColor);
                var pressHoveringBackgroundColor = jThis.attr(Lia.Component.AttrName.JUT_HOVERING_BACKGROUND_COLOR);
                if ( pressHoveringBackgroundColor != undefined )
                    jFlatButton.attr(Lia.Component.AttrName.HOVERING_BACKGROUND_COLOR, pressHoveringBackgroundColor);
                var pressPressedBackgroundColor = jThis.attr(Lia.Component.AttrName.JUT_PRESSED_BACKGROUND_COLOR);
                if ( pressPressedBackgroundColor != undefined )
                    jFlatButton.attr(Lia.Component.AttrName.PRESSED_BACKGROUND_COLOR, pressPressedBackgroundColor);

                var roundWidth = jThis.attr(Lia.Component.AttrName.ROUND_WIDTH);
                if ( roundWidth != undefined )
                    jFlatButton.attr(Lia.Component.AttrName.ROUND_WIDTH, roundWidth);

                var direction = jThis.attr(Lia.Component.AttrName.DIRECTION);
                if ( direction != undefined )
                    jFlatButton.attr(Lia.Component.AttrName.DIRECTION, direction);

                var height =jThis.height();
                var shadowWidth = jThis.attr(Lia.Component.AttrName.SHADOW_WIDTH);
                if ( shadowWidth == undefined )
                    shadowWidth = Lia.Component.Value.Button.FlatButton.DEFAULT_SHADOW_WIDTH;

                var shadowWidthPx = parseFloat(shadowWidth);
                if ( shadowWidth.lastIndexOf('%') )
                    shadowWidthPx = height * shadowWidthPx / 100;

                var width = jThis.width();

                jThis.empty().append(jFlatButton.css({
                    'position' : 'relative',
                    'width' : width + 'px',
                    'height' : (height - shadowWidthPx),
                    'top' : '0px',
                    'left' : '0px'
                }).initFlatButton());

                jThis.on(Lia.Component.Event.STATUS_CHANGED, {
                    jFlatButton: jFlatButton
                },function(e) {

                    var jFlatButton = Lia.p(e, 'data', 'jFlatButton');
                    jFlatButton.checkFlatButtonByStatus( e.status );
                });

                jThis.checkButtonStatus();
                jThis.addClass(Lia.Component.Flag.JUT_INITED);
            });
        }
    });

})(jQuery);


jQuery.Base64Helper = {

    KEY : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    encode: function(input, key) {

        if ( key == undefined ) {
            key = jQuery.Base64Helper.KEY;
        }

        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = jQuery.Base64Helper._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
        }

        return output;
    },


    decode: function(input, key) {

        if ( key == undefined ) {
            key = jQuery.Base64Helper.KEY;
        }

        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = key.indexOf(input.charAt(i++));
            enc2 = key.indexOf(input.charAt(i++));
            enc3 = key.indexOf(input.charAt(i++));
            enc4 = key.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }

        output = jQuery.Base64Helper._utf8_decode(output);

        return output;

    },

    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = 0;
        var c2 = 0;
        var c3 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }

        return string;
    }

};
