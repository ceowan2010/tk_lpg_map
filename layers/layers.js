var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LPG_WGS_1 = new ol.format.GeoJSON();
var features_LPG_WGS_1 = format_LPG_WGS_1.readFeatures(json_LPG_WGS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LPG_WGS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPG_WGS_1.addFeatures(features_LPG_WGS_1);
var lyr_LPG_WGS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LPG_WGS_1, 
                style: style_LPG_WGS_1,
                popuplayertitle: '대구경북LPG점검_WGS',
                interactive: true,
    title: '대구경북LPG점검_WGS<br />\
    <img src="styles/legend/LPG_WGS_1_0.png" /> 4 - 3<br />\
    <img src="styles/legend/LPG_WGS_1_1.png" /> 3 - 2<br />\
    <img src="styles/legend/LPG_WGS_1_2.png" /> 2 - 1<br />\
    <img src="styles/legend/LPG_WGS_1_3.png" /> 1 - 2<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_LPG_WGS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LPG_WGS_1];
lyr_LPG_WGS_1.set('fieldAliases', {'_업소명': '_업소명', '림스ID': '림스ID', '등급': '등급', '영업': '영업', '경영형태': '경영형태', '상표명': '상표명', '대표자': '대표자', '시도': '시도', '시군구': '시군구', '주소': '주소', '검사횟수': '검사횟수', '입력주소': '입력주소', 'X': 'X', 'Y': 'Y', 'CLSS': 'CLSS', 'PNU': 'PNU', '주소구분': '주소구분', '표준신주소': '표준신주소', '표준구주소': '표준구주소', '우편번호': '우편번호', '행정동코드': '행정동코드', '행정동명': '행정동명', '법정동코드': '법정동코드', '법정동명': '법정동명', });
lyr_LPG_WGS_1.set('fieldImages', {'_업소명': 'TextEdit', '림스ID': 'Range', '등급': 'TextEdit', '영업': 'TextEdit', '경영형태': 'TextEdit', '상표명': 'TextEdit', '대표자': 'TextEdit', '시도': 'TextEdit', '시군구': 'TextEdit', '주소': 'TextEdit', '검사횟수': 'Range', '입력주소': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CLSS': 'TextEdit', 'PNU': 'TextEdit', '주소구분': 'TextEdit', '표준신주소': 'TextEdit', '표준구주소': 'TextEdit', '우편번호': 'TextEdit', '행정동코드': 'TextEdit', '행정동명': 'TextEdit', '법정동코드': 'TextEdit', '법정동명': 'TextEdit', });
lyr_LPG_WGS_1.set('fieldLabels', {'_업소명': 'header label - always visible', '림스ID': 'no label', '등급': 'no label', '영업': 'inline label - always visible', '경영형태': 'no label', '상표명': 'no label', '대표자': 'no label', '시도': 'no label', '시군구': 'no label', '주소': 'no label', '검사횟수': 'no label', '입력주소': 'no label', 'X': 'no label', 'Y': 'no label', 'CLSS': 'no label', 'PNU': 'no label', '주소구분': 'no label', '표준신주소': 'no label', '표준구주소': 'no label', '우편번호': 'no label', '행정동코드': 'no label', '행정동명': 'no label', '법정동코드': 'no label', '법정동명': 'no label', });
lyr_LPG_WGS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});