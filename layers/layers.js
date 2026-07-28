var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2026LPG_WGS_1 = new ol.format.GeoJSON();
var features_2026LPG_WGS_1 = format_2026LPG_WGS_1.readFeatures(json_2026LPG_WGS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026LPG_WGS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026LPG_WGS_1.addFeatures(features_2026LPG_WGS_1);
var lyr_2026LPG_WGS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026LPG_WGS_1, 
                style: style_2026LPG_WGS_1,
                popuplayertitle: '2026경북LPG리스트_WGS',
                interactive: true,
    title: '2026경북LPG리스트_WGS<br />\
    <img src="styles/legend/2026LPG_WGS_1_0.png" /> <br />\
    <img src="styles/legend/2026LPG_WGS_1_1.png" /> <br />\
    <img src="styles/legend/2026LPG_WGS_1_2.png" /> <br />\
    <img src="styles/legend/2026LPG_WGS_1_3.png" /> <br />\
    <img src="styles/legend/2026LPG_WGS_1_4.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_2026LPG_WGS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2026LPG_WGS_1];
lyr_2026LPG_WGS_1.set('fieldAliases', {'_번호': '_번호', '림스ID': '림스ID', '업소명': '업소명', '시도': '시도', '주소': '주소', '검사횟수': '검사횟수', '2022': '2022', '2023': '2023', '2024': '2024', '2025': '2025', '2026': '2026', '입력주소': '입력주소', 'X': 'X', 'Y': 'Y', 'CLSS': 'CLSS', 'PNU': 'PNU', '주소구분': '주소구분', '표준신주소': '표준신주소', '표준구주소': '표준구주소', '우편번호': '우편번호', '행정동코드': '행정동코드', '행정동명': '행정동명', '법정동코드': '법정동코드', '법정동명': '법정동명', });
lyr_2026LPG_WGS_1.set('fieldImages', {'_번호': 'Range', '림스ID': 'Range', '업소명': 'TextEdit', '시도': 'TextEdit', '주소': 'TextEdit', '검사횟수': 'Range', '2022': 'DateTime', '2023': 'DateTime', '2024': 'DateTime', '2025': 'DateTime', '2026': 'DateTime', '입력주소': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CLSS': 'TextEdit', 'PNU': 'TextEdit', '주소구분': 'TextEdit', '표준신주소': 'TextEdit', '표준구주소': 'TextEdit', '우편번호': 'TextEdit', '행정동코드': 'TextEdit', '행정동명': 'TextEdit', '법정동코드': 'TextEdit', '법정동명': 'TextEdit', });
lyr_2026LPG_WGS_1.set('fieldLabels', {'_번호': 'no label', '림스ID': 'no label', '업소명': 'no label', '시도': 'no label', '주소': 'no label', '검사횟수': 'no label', '2022': 'no label', '2023': 'no label', '2024': 'no label', '2025': 'no label', '2026': 'no label', '입력주소': 'no label', 'X': 'no label', 'Y': 'no label', 'CLSS': 'no label', 'PNU': 'no label', '주소구분': 'no label', '표준신주소': 'no label', '표준구주소': 'no label', '우편번호': 'no label', '행정동코드': 'no label', '행정동명': 'no label', '법정동코드': 'no label', '법정동명': 'no label', });
lyr_2026LPG_WGS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});