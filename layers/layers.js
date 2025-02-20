var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_202105_ShapefileAMI_1 = new ol.format.GeoJSON();
var features_202105_ShapefileAMI_1 = format_202105_ShapefileAMI_1.readFeatures(json_202105_ShapefileAMI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202105_ShapefileAMI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202105_ShapefileAMI_1.addFeatures(features_202105_ShapefileAMI_1);
var lyr_202105_ShapefileAMI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202105_ShapefileAMI_1, 
                style: style_202105_ShapefileAMI_1,
                popuplayertitle: '2021.05_ShapefileAMI',
                interactive: true,
    title: '2021.05_ShapefileAMI<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_0.png" /> Abruzzo<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_1.png" /> Basilicata<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_2.png" /> Bolzano<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_3.png" /> Calabria<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_4.png" /> Campania<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_5.png" /> Emilia-Romagna<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_6.png" /> Friuli Venezia Giulia<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_7.png" /> Lazio<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_8.png" /> Liguria<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_9.png" /> Lombardia<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_10.png" /> Marche<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_11.png" /> Molise<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_12.png" /> Piemonte<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_13.png" /> Puglia<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_14.png" /> Sardegna<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_15.png" /> Sicilia<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_16.png" /> Toscana<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_17.png" /> Trento<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_18.png" /> Umbria<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_19.png" /> Valle D\'Aosta<br />\
    <img src="styles/legend/202105_ShapefileAMI_1_20.png" /> Veneto<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_202105_ShapefileAMI_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_202105_ShapefileAMI_1];
lyr_202105_ShapefileAMI_1.set('fieldAliases', {'STATO': 'STATO', 'ID PUNTO': 'ID PUNTO', 'TIPOLOGIA': 'TIPOLOGIA', 'REGIONE': 'REGIONE', 'PROVINCIA': 'PROVINCIA', 'COMUNE': 'COMUNE', 'LOCALITA\'': 'LOCALITA\'', 'LATITUDINE': 'LATITUDINE', 'LONGITUDIN': 'LONGITUDINE', 'QUOTA': 'QUOTA', 'GENERE': 'GENERE', 'SPECIE': 'SPECIE', 'NOME VOLG': 'NOME VOLGARE', 'ALTRE SPEC': 'ALTRE SPECIE INS. PLUR', 'CONTESTO': 'CONTESTO', 'CR ETA\'': 'CR ETA\'', 'CR CIRCONF': 'CR CIRCONFERENZA', 'CR ALTEZZA': 'CR ALTEZZA', 'CR AMPIEZZ': 'CR AMPIEZZA CHIOMA', 'CR FM O PO': 'CR FORMA O PORTAMENTO', 'CR VALORE': 'CR VALORE ECOLOGICO', 'CR RARITA\'': 'CR RARITA\' BOTANICA', 'CR ARCHIT': 'CR ARC VEGETALE', 'CR PAESAG': 'CR PAESAGGISTICO', 'CR STORICO': 'CR STORICO', 'AL IS - H': 'ALB IS - ALTEZZA', 'AL IS - C': 'ALB IS - CIRC. 1.30', 'INS - Cmed': 'INS - Cmed', 'INS - Hmed': 'INS - Hmed', 'INS - Cmax': 'INS - Cmax', 'INS - Hmax': 'INS - Hmax', 'DECR DI IN': 'DECR DI INSERIMENTO', 'DECR MODIF': 'DECR MODIFICA', });
lyr_202105_ShapefileAMI_1.set('fieldImages', {'STATO': 'TextEdit', 'ID PUNTO': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'REGIONE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNE': 'TextEdit', 'LOCALITA\'': 'TextEdit', 'LATITUDINE': 'TextEdit', 'LONGITUDIN': 'TextEdit', 'QUOTA': 'TextEdit', 'GENERE': 'TextEdit', 'SPECIE': 'TextEdit', 'NOME VOLG': 'TextEdit', 'ALTRE SPEC': 'TextEdit', 'CONTESTO': 'TextEdit', 'CR ETA\'': 'TextEdit', 'CR CIRCONF': 'TextEdit', 'CR ALTEZZA': 'TextEdit', 'CR AMPIEZZ': 'TextEdit', 'CR FM O PO': 'TextEdit', 'CR VALORE': 'TextEdit', 'CR RARITA\'': 'TextEdit', 'CR ARCHIT': 'TextEdit', 'CR PAESAG': 'TextEdit', 'CR STORICO': 'TextEdit', 'AL IS - H': 'TextEdit', 'AL IS - C': 'TextEdit', 'INS - Cmed': 'TextEdit', 'INS - Hmed': 'TextEdit', 'INS - Cmax': 'TextEdit', 'INS - Hmax': 'TextEdit', 'DECR DI IN': 'TextEdit', 'DECR MODIF': 'TextEdit', });
lyr_202105_ShapefileAMI_1.set('fieldLabels', {'STATO': 'no label', 'ID PUNTO': 'no label', 'TIPOLOGIA': 'no label', 'REGIONE': 'no label', 'PROVINCIA': 'no label', 'COMUNE': 'no label', 'LOCALITA\'': 'no label', 'LATITUDINE': 'no label', 'LONGITUDIN': 'no label', 'QUOTA': 'no label', 'GENERE': 'no label', 'SPECIE': 'no label', 'NOME VOLG': 'no label', 'ALTRE SPEC': 'no label', 'CONTESTO': 'no label', 'CR ETA\'': 'no label', 'CR CIRCONF': 'no label', 'CR ALTEZZA': 'no label', 'CR AMPIEZZ': 'no label', 'CR FM O PO': 'no label', 'CR VALORE': 'no label', 'CR RARITA\'': 'no label', 'CR ARCHIT': 'no label', 'CR PAESAG': 'no label', 'CR STORICO': 'no label', 'AL IS - H': 'no label', 'AL IS - C': 'no label', 'INS - Cmed': 'no label', 'INS - Hmed': 'no label', 'INS - Cmax': 'no label', 'INS - Hmax': 'no label', 'DECR DI IN': 'no label', 'DECR MODIF': 'no label', });
lyr_202105_ShapefileAMI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});