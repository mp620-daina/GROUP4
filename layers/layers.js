ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32737").setExtent([483940.660931, 9248569.625633, 500209.948668, 9257700.946588]);
var wms_layers = [];

var lyr_Sentnenl_2016_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sentnenl_2016<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sentnenl_2016_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4325468.340003, -758889.020254, 4343498.199660, -749122.177622]
        })
    });
var lyr_sentinel_2025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sentinel_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sentinel_2025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4325468.340003, -758889.020254, 4343498.199660, -749122.177622]
        })
    });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Reclass_Weigmarkets2_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reclass_Weigmarkets2<br />\
    <img src="styles/legend/Reclass_Weigmarkets2_3_0.png" /> 7608<br />\
    <img src="styles/legend/Reclass_Weigmarkets2_3_1.png" /> 8612<br />\
    <img src="styles/legend/Reclass_Weigmarkets2_3_2.png" /> 5666<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Reclass_Weigmarkets2_3.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494334.576124, 9257475.929060]
        })
    });
var lyr_Reclass_Weigmarkets1_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reclass_Weigmarkets1<br />\
    <img src="styles/legend/Reclass_Weigmarkets1_4_0.png" /> 7608<br />\
    <img src="styles/legend/Reclass_Weigmarkets1_4_1.png" /> 8612<br />\
    <img src="styles/legend/Reclass_Weigmarkets1_4_2.png" /> 5666<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Reclass_Weigmarkets1_4.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494334.576124, 9257475.929060]
        })
    });
var lyr_reclass_weighospital_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'reclass_weighospital<br />\
    <img src="styles/legend/reclass_weighospital_5_0.png" /> 7650<br />\
    <img src="styles/legend/reclass_weighospital_5_1.png" /> 8615<br />\
    <img src="styles/legend/reclass_weighospital_5_2.png" /> 5621<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/reclass_weighospital_5.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494334.576124, 9257475.929060]
        })
    });
var lyr_Air_Temp_2010_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Air_Temp_2010<br />\
    <img src="styles/legend/Air_Temp_2010_6_0.png" /> 26.1620<br />\
    <img src="styles/legend/Air_Temp_2010_6_1.png" /> 26.1681<br />\
    <img src="styles/legend/Air_Temp_2010_6_2.png" /> 26.1742<br />\
    <img src="styles/legend/Air_Temp_2010_6_3.png" /> 26.1802<br />\
    <img src="styles/legend/Air_Temp_2010_6_4.png" /> 26.1863<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Air_Temp_2010_6.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489813.883739, 9248829.937482, 494282.270515, 9257468.818582]
        })
    });
var lyr_Air_Temp_2015_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Air_Temp_2015<br />\
    <img src="styles/legend/Air_Temp_2015_7_0.png" /> 26.0942<br />\
    <img src="styles/legend/Air_Temp_2015_7_1.png" /> 26.1012<br />\
    <img src="styles/legend/Air_Temp_2015_7_2.png" /> 26.1082<br />\
    <img src="styles/legend/Air_Temp_2015_7_3.png" /> 26.1152<br />\
    <img src="styles/legend/Air_Temp_2015_7_4.png" /> 26.1222<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Air_Temp_2015_7.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489813.883739, 9248829.937482, 494282.270515, 9257468.818582]
        })
    });
var lyr_Air_Temp_2025_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Air_Temp_2025<br />\
    <img src="styles/legend/Air_Temp_2025_8_0.png" /> 26.0461<br />\
    <img src="styles/legend/Air_Temp_2025_8_1.png" /> 26.0462<br />\
    <img src="styles/legend/Air_Temp_2025_8_2.png" /> 26.0463<br />\
    <img src="styles/legend/Air_Temp_2025_8_3.png" /> 26.0464<br />\
    <img src="styles/legend/Air_Temp_2025_8_4.png" /> 26.0466<br />\
    <img src="styles/legend/Air_Temp_2025_8_5.png" /> 26.0467<br />\
    <img src="styles/legend/Air_Temp_2025_8_6.png" /> 26.0468<br />\
    <img src="styles/legend/Air_Temp_2025_8_7.png" /> 26.0469<br />\
    <img src="styles/legend/Air_Temp_2025_8_8.png" /> 26.0471<br />\
    <img src="styles/legend/Air_Temp_2025_8_9.png" /> 26.0472<br />\
    <img src="styles/legend/Air_Temp_2025_8_10.png" /> 26.0473<br />\
    <img src="styles/legend/Air_Temp_2025_8_11.png" /> 26.0474<br />\
    <img src="styles/legend/Air_Temp_2025_8_12.png" /> 26.0476<br />\
    <img src="styles/legend/Air_Temp_2025_8_13.png" /> 26.0477<br />\
    <img src="styles/legend/Air_Temp_2025_8_14.png" /> 26.0478<br />\
    <img src="styles/legend/Air_Temp_2025_8_15.png" /> 26.0479<br />\
    <img src="styles/legend/Air_Temp_2025_8_16.png" /> 26.0481<br />\
    <img src="styles/legend/Air_Temp_2025_8_17.png" /> 26.0482<br />\
    <img src="styles/legend/Air_Temp_2025_8_18.png" /> 26.0483<br />\
    <img src="styles/legend/Air_Temp_2025_8_19.png" /> 26.0484<br />\
    <img src="styles/legend/Air_Temp_2025_8_20.png" /> 26.0485<br />\
    <img src="styles/legend/Air_Temp_2025_8_21.png" /> 26.0487<br />\
    <img src="styles/legend/Air_Temp_2025_8_22.png" /> 26.0488<br />\
    <img src="styles/legend/Air_Temp_2025_8_23.png" /> 26.0489<br />\
    <img src="styles/legend/Air_Temp_2025_8_24.png" /> 26.0490<br />\
    <img src="styles/legend/Air_Temp_2025_8_25.png" /> 26.0492<br />\
    <img src="styles/legend/Air_Temp_2025_8_26.png" /> 26.0493<br />\
    <img src="styles/legend/Air_Temp_2025_8_27.png" /> 26.0494<br />\
    <img src="styles/legend/Air_Temp_2025_8_28.png" /> 26.0495<br />\
    <img src="styles/legend/Air_Temp_2025_8_29.png" /> 26.0497<br />\
    <img src="styles/legend/Air_Temp_2025_8_30.png" /> 26.0498<br />\
    <img src="styles/legend/Air_Temp_2025_8_31.png" /> 26.0499<br />\
    <img src="styles/legend/Air_Temp_2025_8_32.png" /> 26.0500<br />\
    <img src="styles/legend/Air_Temp_2025_8_33.png" /> 26.0502<br />\
    <img src="styles/legend/Air_Temp_2025_8_34.png" /> 26.0503<br />\
    <img src="styles/legend/Air_Temp_2025_8_35.png" /> 26.0504<br />\
    <img src="styles/legend/Air_Temp_2025_8_36.png" /> 26.0505<br />\
    <img src="styles/legend/Air_Temp_2025_8_37.png" /> 26.0506<br />\
    <img src="styles/legend/Air_Temp_2025_8_38.png" /> 26.0508<br />\
    <img src="styles/legend/Air_Temp_2025_8_39.png" /> 26.0509<br />\
    <img src="styles/legend/Air_Temp_2025_8_40.png" /> 26.0510<br />\
    <img src="styles/legend/Air_Temp_2025_8_41.png" /> 26.0511<br />\
    <img src="styles/legend/Air_Temp_2025_8_42.png" /> 26.0513<br />\
    <img src="styles/legend/Air_Temp_2025_8_43.png" /> 26.0514<br />\
    <img src="styles/legend/Air_Temp_2025_8_44.png" /> 26.0515<br />\
    <img src="styles/legend/Air_Temp_2025_8_45.png" /> 26.0516<br />\
    <img src="styles/legend/Air_Temp_2025_8_46.png" /> 26.0518<br />\
    <img src="styles/legend/Air_Temp_2025_8_47.png" /> 26.0519<br />\
    <img src="styles/legend/Air_Temp_2025_8_48.png" /> 26.0520<br />\
    <img src="styles/legend/Air_Temp_2025_8_49.png" /> 26.0521<br />\
    <img src="styles/legend/Air_Temp_2025_8_50.png" /> 26.0523<br />\
    <img src="styles/legend/Air_Temp_2025_8_51.png" /> 26.0524<br />\
    <img src="styles/legend/Air_Temp_2025_8_52.png" /> 26.0525<br />\
    <img src="styles/legend/Air_Temp_2025_8_53.png" /> 26.0526<br />\
    <img src="styles/legend/Air_Temp_2025_8_54.png" /> 26.0527<br />\
    <img src="styles/legend/Air_Temp_2025_8_55.png" /> 26.0529<br />\
    <img src="styles/legend/Air_Temp_2025_8_56.png" /> 26.0530<br />\
    <img src="styles/legend/Air_Temp_2025_8_57.png" /> 26.0531<br />\
    <img src="styles/legend/Air_Temp_2025_8_58.png" /> 26.0532<br />\
    <img src="styles/legend/Air_Temp_2025_8_59.png" /> 26.0534<br />\
    <img src="styles/legend/Air_Temp_2025_8_60.png" /> 26.0535<br />\
    <img src="styles/legend/Air_Temp_2025_8_61.png" /> 26.0536<br />\
    <img src="styles/legend/Air_Temp_2025_8_62.png" /> 26.0537<br />\
    <img src="styles/legend/Air_Temp_2025_8_63.png" /> 26.0539<br />\
    <img src="styles/legend/Air_Temp_2025_8_64.png" /> 26.0540<br />\
    <img src="styles/legend/Air_Temp_2025_8_65.png" /> 26.0541<br />\
    <img src="styles/legend/Air_Temp_2025_8_66.png" /> 26.0542<br />\
    <img src="styles/legend/Air_Temp_2025_8_67.png" /> 26.0544<br />\
    <img src="styles/legend/Air_Temp_2025_8_68.png" /> 26.0545<br />\
    <img src="styles/legend/Air_Temp_2025_8_69.png" /> 26.0546<br />\
    <img src="styles/legend/Air_Temp_2025_8_70.png" /> 26.0547<br />\
    <img src="styles/legend/Air_Temp_2025_8_71.png" /> 26.0548<br />\
    <img src="styles/legend/Air_Temp_2025_8_72.png" /> 26.0550<br />\
    <img src="styles/legend/Air_Temp_2025_8_73.png" /> 26.0551<br />\
    <img src="styles/legend/Air_Temp_2025_8_74.png" /> 26.0552<br />\
    <img src="styles/legend/Air_Temp_2025_8_75.png" /> 26.0553<br />\
    <img src="styles/legend/Air_Temp_2025_8_76.png" /> 26.0555<br />\
    <img src="styles/legend/Air_Temp_2025_8_77.png" /> 26.0556<br />\
    <img src="styles/legend/Air_Temp_2025_8_78.png" /> 26.0557<br />\
    <img src="styles/legend/Air_Temp_2025_8_79.png" /> 26.0558<br />\
    <img src="styles/legend/Air_Temp_2025_8_80.png" /> 26.0560<br />\
    <img src="styles/legend/Air_Temp_2025_8_81.png" /> 26.0561<br />\
    <img src="styles/legend/Air_Temp_2025_8_82.png" /> 26.0562<br />\
    <img src="styles/legend/Air_Temp_2025_8_83.png" /> 26.0563<br />\
    <img src="styles/legend/Air_Temp_2025_8_84.png" /> 26.0565<br />\
    <img src="styles/legend/Air_Temp_2025_8_85.png" /> 26.0566<br />\
    <img src="styles/legend/Air_Temp_2025_8_86.png" /> 26.0567<br />\
    <img src="styles/legend/Air_Temp_2025_8_87.png" /> 26.0568<br />\
    <img src="styles/legend/Air_Temp_2025_8_88.png" /> 26.0569<br />\
    <img src="styles/legend/Air_Temp_2025_8_89.png" /> 26.0571<br />\
    <img src="styles/legend/Air_Temp_2025_8_90.png" /> 26.0572<br />\
    <img src="styles/legend/Air_Temp_2025_8_91.png" /> 26.0573<br />\
    <img src="styles/legend/Air_Temp_2025_8_92.png" /> 26.0574<br />\
    <img src="styles/legend/Air_Temp_2025_8_93.png" /> 26.0576<br />\
    <img src="styles/legend/Air_Temp_2025_8_94.png" /> 26.0577<br />\
    <img src="styles/legend/Air_Temp_2025_8_95.png" /> 26.0578<br />\
    <img src="styles/legend/Air_Temp_2025_8_96.png" /> 26.0579<br />\
    <img src="styles/legend/Air_Temp_2025_8_97.png" /> 26.0581<br />\
    <img src="styles/legend/Air_Temp_2025_8_98.png" /> 26.0582<br />\
    <img src="styles/legend/Air_Temp_2025_8_99.png" /> 26.0583<br />\
    <img src="styles/legend/Air_Temp_2025_8_100.png" /> 26.0584<br />\
    <img src="styles/legend/Air_Temp_2025_8_101.png" /> 26.0585<br />\
    <img src="styles/legend/Air_Temp_2025_8_102.png" /> 26.0587<br />\
    <img src="styles/legend/Air_Temp_2025_8_103.png" /> 26.0588<br />\
    <img src="styles/legend/Air_Temp_2025_8_104.png" /> 26.0589<br />\
    <img src="styles/legend/Air_Temp_2025_8_105.png" /> 26.0590<br />\
    <img src="styles/legend/Air_Temp_2025_8_106.png" /> 26.0592<br />\
    <img src="styles/legend/Air_Temp_2025_8_107.png" /> 26.0593<br />\
    <img src="styles/legend/Air_Temp_2025_8_108.png" /> 26.0594<br />\
    <img src="styles/legend/Air_Temp_2025_8_109.png" /> 26.0595<br />\
    <img src="styles/legend/Air_Temp_2025_8_110.png" /> 26.0597<br />\
    <img src="styles/legend/Air_Temp_2025_8_111.png" /> 26.0598<br />\
    <img src="styles/legend/Air_Temp_2025_8_112.png" /> 26.0599<br />\
    <img src="styles/legend/Air_Temp_2025_8_113.png" /> 26.0600<br />\
    <img src="styles/legend/Air_Temp_2025_8_114.png" /> 26.0602<br />\
    <img src="styles/legend/Air_Temp_2025_8_115.png" /> 26.0603<br />\
    <img src="styles/legend/Air_Temp_2025_8_116.png" /> 26.0604<br />\
    <img src="styles/legend/Air_Temp_2025_8_117.png" /> 26.0605<br />\
    <img src="styles/legend/Air_Temp_2025_8_118.png" /> 26.0606<br />\
    <img src="styles/legend/Air_Temp_2025_8_119.png" /> 26.0608<br />\
    <img src="styles/legend/Air_Temp_2025_8_120.png" /> 26.0609<br />\
    <img src="styles/legend/Air_Temp_2025_8_121.png" /> 26.0610<br />\
    <img src="styles/legend/Air_Temp_2025_8_122.png" /> 26.0611<br />\
    <img src="styles/legend/Air_Temp_2025_8_123.png" /> 26.0613<br />\
    <img src="styles/legend/Air_Temp_2025_8_124.png" /> 26.0614<br />\
    <img src="styles/legend/Air_Temp_2025_8_125.png" /> 26.0615<br />\
    <img src="styles/legend/Air_Temp_2025_8_126.png" /> 26.0616<br />\
    <img src="styles/legend/Air_Temp_2025_8_127.png" /> 26.0618<br />\
    <img src="styles/legend/Air_Temp_2025_8_128.png" /> 26.0619<br />\
    <img src="styles/legend/Air_Temp_2025_8_129.png" /> 26.0620<br />\
    <img src="styles/legend/Air_Temp_2025_8_130.png" /> 26.0621<br />\
    <img src="styles/legend/Air_Temp_2025_8_131.png" /> 26.0623<br />\
    <img src="styles/legend/Air_Temp_2025_8_132.png" /> 26.0624<br />\
    <img src="styles/legend/Air_Temp_2025_8_133.png" /> 26.0625<br />\
    <img src="styles/legend/Air_Temp_2025_8_134.png" /> 26.0626<br />\
    <img src="styles/legend/Air_Temp_2025_8_135.png" /> 26.0627<br />\
    <img src="styles/legend/Air_Temp_2025_8_136.png" /> 26.0629<br />\
    <img src="styles/legend/Air_Temp_2025_8_137.png" /> 26.0630<br />\
    <img src="styles/legend/Air_Temp_2025_8_138.png" /> 26.0631<br />\
    <img src="styles/legend/Air_Temp_2025_8_139.png" /> 26.0632<br />\
    <img src="styles/legend/Air_Temp_2025_8_140.png" /> 26.0634<br />\
    <img src="styles/legend/Air_Temp_2025_8_141.png" /> 26.0635<br />\
    <img src="styles/legend/Air_Temp_2025_8_142.png" /> 26.0636<br />\
    <img src="styles/legend/Air_Temp_2025_8_143.png" /> 26.0637<br />\
    <img src="styles/legend/Air_Temp_2025_8_144.png" /> 26.0639<br />\
    <img src="styles/legend/Air_Temp_2025_8_145.png" /> 26.0640<br />\
    <img src="styles/legend/Air_Temp_2025_8_146.png" /> 26.0641<br />\
    <img src="styles/legend/Air_Temp_2025_8_147.png" /> 26.0642<br />\
    <img src="styles/legend/Air_Temp_2025_8_148.png" /> 26.0644<br />\
    <img src="styles/legend/Air_Temp_2025_8_149.png" /> 26.0645<br />\
    <img src="styles/legend/Air_Temp_2025_8_150.png" /> 26.0646<br />\
    <img src="styles/legend/Air_Temp_2025_8_151.png" /> 26.0647<br />\
    <img src="styles/legend/Air_Temp_2025_8_152.png" /> 26.0648<br />\
    <img src="styles/legend/Air_Temp_2025_8_153.png" /> 26.0650<br />\
    <img src="styles/legend/Air_Temp_2025_8_154.png" /> 26.0651<br />\
    <img src="styles/legend/Air_Temp_2025_8_155.png" /> 26.0652<br />\
    <img src="styles/legend/Air_Temp_2025_8_156.png" /> 26.0653<br />\
    <img src="styles/legend/Air_Temp_2025_8_157.png" /> 26.0655<br />\
    <img src="styles/legend/Air_Temp_2025_8_158.png" /> 26.0656<br />\
    <img src="styles/legend/Air_Temp_2025_8_159.png" /> 26.0657<br />\
    <img src="styles/legend/Air_Temp_2025_8_160.png" /> 26.0658<br />\
    <img src="styles/legend/Air_Temp_2025_8_161.png" /> 26.0660<br />\
    <img src="styles/legend/Air_Temp_2025_8_162.png" /> 26.0661<br />\
    <img src="styles/legend/Air_Temp_2025_8_163.png" /> 26.0662<br />\
    <img src="styles/legend/Air_Temp_2025_8_164.png" /> 26.0663<br />\
    <img src="styles/legend/Air_Temp_2025_8_165.png" /> 26.0665<br />\
    <img src="styles/legend/Air_Temp_2025_8_166.png" /> 26.0666<br />\
    <img src="styles/legend/Air_Temp_2025_8_167.png" /> 26.0667<br />\
    <img src="styles/legend/Air_Temp_2025_8_168.png" /> 26.0668<br />\
    <img src="styles/legend/Air_Temp_2025_8_169.png" /> 26.0669<br />\
    <img src="styles/legend/Air_Temp_2025_8_170.png" /> 26.0671<br />\
    <img src="styles/legend/Air_Temp_2025_8_171.png" /> 26.0672<br />\
    <img src="styles/legend/Air_Temp_2025_8_172.png" /> 26.0673<br />\
    <img src="styles/legend/Air_Temp_2025_8_173.png" /> 26.0674<br />\
    <img src="styles/legend/Air_Temp_2025_8_174.png" /> 26.0676<br />\
    <img src="styles/legend/Air_Temp_2025_8_175.png" /> 26.0677<br />\
    <img src="styles/legend/Air_Temp_2025_8_176.png" /> 26.0678<br />\
    <img src="styles/legend/Air_Temp_2025_8_177.png" /> 26.0679<br />\
    <img src="styles/legend/Air_Temp_2025_8_178.png" /> 26.0681<br />\
    <img src="styles/legend/Air_Temp_2025_8_179.png" /> 26.0682<br />\
    <img src="styles/legend/Air_Temp_2025_8_180.png" /> 26.0683<br />\
    <img src="styles/legend/Air_Temp_2025_8_181.png" /> 26.0684<br />\
    <img src="styles/legend/Air_Temp_2025_8_182.png" /> 26.0686<br />\
    <img src="styles/legend/Air_Temp_2025_8_183.png" /> 26.0687<br />\
    <img src="styles/legend/Air_Temp_2025_8_184.png" /> 26.0688<br />\
    <img src="styles/legend/Air_Temp_2025_8_185.png" /> 26.0689<br />\
    <img src="styles/legend/Air_Temp_2025_8_186.png" /> 26.0690<br />\
    <img src="styles/legend/Air_Temp_2025_8_187.png" /> 26.0692<br />\
    <img src="styles/legend/Air_Temp_2025_8_188.png" /> 26.0693<br />\
    <img src="styles/legend/Air_Temp_2025_8_189.png" /> 26.0694<br />\
    <img src="styles/legend/Air_Temp_2025_8_190.png" /> 26.0695<br />\
    <img src="styles/legend/Air_Temp_2025_8_191.png" /> 26.0697<br />\
    <img src="styles/legend/Air_Temp_2025_8_192.png" /> 26.0698<br />\
    <img src="styles/legend/Air_Temp_2025_8_193.png" /> 26.0699<br />\
    <img src="styles/legend/Air_Temp_2025_8_194.png" /> 26.0700<br />\
    <img src="styles/legend/Air_Temp_2025_8_195.png" /> 26.0702<br />\
    <img src="styles/legend/Air_Temp_2025_8_196.png" /> 26.0703<br />\
    <img src="styles/legend/Air_Temp_2025_8_197.png" /> 26.0704<br />\
    <img src="styles/legend/Air_Temp_2025_8_198.png" /> 26.0705<br />\
    <img src="styles/legend/Air_Temp_2025_8_199.png" /> 26.0707<br />\
    <img src="styles/legend/Air_Temp_2025_8_200.png" /> 26.0708<br />\
    <img src="styles/legend/Air_Temp_2025_8_201.png" /> 26.0709<br />\
    <img src="styles/legend/Air_Temp_2025_8_202.png" /> 26.0710<br />\
    <img src="styles/legend/Air_Temp_2025_8_203.png" /> 26.0711<br />\
    <img src="styles/legend/Air_Temp_2025_8_204.png" /> 26.0713<br />\
    <img src="styles/legend/Air_Temp_2025_8_205.png" /> 26.0714<br />\
    <img src="styles/legend/Air_Temp_2025_8_206.png" /> 26.0715<br />\
    <img src="styles/legend/Air_Temp_2025_8_207.png" /> 26.0716<br />\
    <img src="styles/legend/Air_Temp_2025_8_208.png" /> 26.0718<br />\
    <img src="styles/legend/Air_Temp_2025_8_209.png" /> 26.0719<br />\
    <img src="styles/legend/Air_Temp_2025_8_210.png" /> 26.0720<br />\
    <img src="styles/legend/Air_Temp_2025_8_211.png" /> 26.0721<br />\
    <img src="styles/legend/Air_Temp_2025_8_212.png" /> 26.0723<br />\
    <img src="styles/legend/Air_Temp_2025_8_213.png" /> 26.0724<br />\
    <img src="styles/legend/Air_Temp_2025_8_214.png" /> 26.0725<br />\
    <img src="styles/legend/Air_Temp_2025_8_215.png" /> 26.0726<br />\
    <img src="styles/legend/Air_Temp_2025_8_216.png" /> 26.0728<br />\
    <img src="styles/legend/Air_Temp_2025_8_217.png" /> 26.0729<br />\
    <img src="styles/legend/Air_Temp_2025_8_218.png" /> 26.0730<br />\
    <img src="styles/legend/Air_Temp_2025_8_219.png" /> 26.0731<br />\
    <img src="styles/legend/Air_Temp_2025_8_220.png" /> 26.0732<br />\
    <img src="styles/legend/Air_Temp_2025_8_221.png" /> 26.0734<br />\
    <img src="styles/legend/Air_Temp_2025_8_222.png" /> 26.0735<br />\
    <img src="styles/legend/Air_Temp_2025_8_223.png" /> 26.0736<br />\
    <img src="styles/legend/Air_Temp_2025_8_224.png" /> 26.0737<br />\
    <img src="styles/legend/Air_Temp_2025_8_225.png" /> 26.0739<br />\
    <img src="styles/legend/Air_Temp_2025_8_226.png" /> 26.0740<br />\
    <img src="styles/legend/Air_Temp_2025_8_227.png" /> 26.0741<br />\
    <img src="styles/legend/Air_Temp_2025_8_228.png" /> 26.0742<br />\
    <img src="styles/legend/Air_Temp_2025_8_229.png" /> 26.0744<br />\
    <img src="styles/legend/Air_Temp_2025_8_230.png" /> 26.0745<br />\
    <img src="styles/legend/Air_Temp_2025_8_231.png" /> 26.0746<br />\
    <img src="styles/legend/Air_Temp_2025_8_232.png" /> 26.0747<br />\
    <img src="styles/legend/Air_Temp_2025_8_233.png" /> 26.0748<br />\
    <img src="styles/legend/Air_Temp_2025_8_234.png" /> 26.0750<br />\
    <img src="styles/legend/Air_Temp_2025_8_235.png" /> 26.0751<br />\
    <img src="styles/legend/Air_Temp_2025_8_236.png" /> 26.0752<br />\
    <img src="styles/legend/Air_Temp_2025_8_237.png" /> 26.0753<br />\
    <img src="styles/legend/Air_Temp_2025_8_238.png" /> 26.0755<br />\
    <img src="styles/legend/Air_Temp_2025_8_239.png" /> 26.0756<br />\
    <img src="styles/legend/Air_Temp_2025_8_240.png" /> 26.0757<br />\
    <img src="styles/legend/Air_Temp_2025_8_241.png" /> 26.0758<br />\
    <img src="styles/legend/Air_Temp_2025_8_242.png" /> 26.0760<br />\
    <img src="styles/legend/Air_Temp_2025_8_243.png" /> 26.0761<br />\
    <img src="styles/legend/Air_Temp_2025_8_244.png" /> 26.0762<br />\
    <img src="styles/legend/Air_Temp_2025_8_245.png" /> 26.0763<br />\
    <img src="styles/legend/Air_Temp_2025_8_246.png" /> 26.0765<br />\
    <img src="styles/legend/Air_Temp_2025_8_247.png" /> 26.0766<br />\
    <img src="styles/legend/Air_Temp_2025_8_248.png" /> 26.0767<br />\
    <img src="styles/legend/Air_Temp_2025_8_249.png" /> 26.0768<br />\
    <img src="styles/legend/Air_Temp_2025_8_250.png" /> 26.0769<br />\
    <img src="styles/legend/Air_Temp_2025_8_251.png" /> 26.0771<br />\
    <img src="styles/legend/Air_Temp_2025_8_252.png" /> 26.0772<br />\
    <img src="styles/legend/Air_Temp_2025_8_253.png" /> 26.0773<br />\
    <img src="styles/legend/Air_Temp_2025_8_254.png" /> 26.0777<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Air_Temp_2025_8.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489813.883739, 9248829.937482, 494282.270515, 9257468.818582]
        })
    });
var lyr_Rainfall_2010_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_2010<br />\
    <img src="styles/legend/Rainfall_2010_9_0.png" /> 903.1277<br />\
    <img src="styles/legend/Rainfall_2010_9_1.png" /> 908.8086<br />\
    <img src="styles/legend/Rainfall_2010_9_2.png" /> 914.4894<br />\
    <img src="styles/legend/Rainfall_2010_9_3.png" /> 920.1703<br />\
    <img src="styles/legend/Rainfall_2010_9_4.png" /> 925.8512<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_2010_9.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_Rainfall_2015_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_2015<br />\
    <img src="styles/legend/Rainfall_2015_10_0.png" /> 1079.6633<br />\
    <img src="styles/legend/Rainfall_2015_10_1.png" /> 1083.7497<br />\
    <img src="styles/legend/Rainfall_2015_10_2.png" /> 1087.8361<br />\
    <img src="styles/legend/Rainfall_2015_10_3.png" /> 1091.9224<br />\
    <img src="styles/legend/Rainfall_2015_10_4.png" /> 1096.0088<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_2015_10.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_Rainfall_2025_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_2025<br />\
    <img src="styles/legend/Rainfall_2025_11_0.png" /> 1226.5883<br />\
    <img src="styles/legend/Rainfall_2025_11_1.png" /> 1232.8456<br />\
    <img src="styles/legend/Rainfall_2025_11_2.png" /> 1239.1030<br />\
    <img src="styles/legend/Rainfall_2025_11_3.png" /> 1245.3604<br />\
    <img src="styles/legend/Rainfall_2025_11_4.png" /> 1251.6178<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_2025_11.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var format_buildings_12 = new ol.format.GeoJSON();
var features_buildings_12 = format_buildings_12.readFeatures(json_buildings_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_buildings_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_12.addFeatures(features_buildings_12);
var lyr_buildings_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_12, 
                style: style_buildings_12,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_12.png" /> buildings'
            });
var format_roads_13 = new ol.format.GeoJSON();
var features_roads_13 = format_roads_13.readFeatures(json_roads_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_roads_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_13.addFeatures(features_roads_13);
var lyr_roads_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_13, 
                style: style_roads_13,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_13.png" /> roads'
            });
var format_Mkuza_14 = new ol.format.GeoJSON();
var features_Mkuza_14 = format_Mkuza_14.readFeatures(json_Mkuza_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Mkuza_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mkuza_14.addFeatures(features_Mkuza_14);
var lyr_Mkuza_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mkuza_14, 
                style: style_Mkuza_14,
                popuplayertitle: 'Mkuza',
                interactive: true,
                title: '<img src="styles/legend/Mkuza_14.png" /> Mkuza'
            });
var group_rainfallvariation = new ol.layer.Group({
                                layers: [lyr_Rainfall_2010_9,lyr_Rainfall_2015_10,lyr_Rainfall_2025_11,],
                                fold: 'close',
                                title: 'rainfall variation'});
var group_airtemp_variation = new ol.layer.Group({
                                layers: [lyr_Air_Temp_2010_6,lyr_Air_Temp_2015_7,lyr_Air_Temp_2025_8,],
                                fold: 'close',
                                title: 'airtemp_variation'});
var group_suitabilityanalyisis = new ol.layer.Group({
                                layers: [lyr_Reclass_Weigmarkets2_3,lyr_Reclass_Weigmarkets1_4,lyr_reclass_weighospital_5,],
                                fold: 'close',
                                title: 'suitability analyisis'});
var group_LULC = new ol.layer.Group({
                                layers: [lyr_Sentnenl_2016_0,lyr_sentinel_2025_1,lyr_OpenStreetMap_2,],
                                fold: 'close',
                                title: 'LULC'});

lyr_Sentnenl_2016_0.setVisible(true);lyr_sentinel_2025_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Reclass_Weigmarkets2_3.setVisible(true);lyr_Reclass_Weigmarkets1_4.setVisible(true);lyr_reclass_weighospital_5.setVisible(true);lyr_Air_Temp_2010_6.setVisible(true);lyr_Air_Temp_2015_7.setVisible(true);lyr_Air_Temp_2025_8.setVisible(true);lyr_Rainfall_2010_9.setVisible(true);lyr_Rainfall_2015_10.setVisible(true);lyr_Rainfall_2025_11.setVisible(true);lyr_buildings_12.setVisible(true);lyr_roads_13.setVisible(true);lyr_Mkuza_14.setVisible(true);
var layersList = [group_LULC,group_suitabilityanalyisis,group_airtemp_variation,group_rainfallvariation,lyr_buildings_12,lyr_roads_13,lyr_Mkuza_14];
lyr_buildings_12.set('fieldAliases', {'confidence': 'confidence', 'area_in_me': 'area_in_me', });
lyr_roads_13.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Mkuza_14.set('fieldAliases', {});
lyr_buildings_12.set('fieldImages', {'confidence': '', 'area_in_me': '', });
lyr_roads_13.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_Mkuza_14.set('fieldImages', {});
lyr_buildings_12.set('fieldLabels', {'confidence': 'no label', 'area_in_me': 'no label', });
lyr_roads_13.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Mkuza_14.set('fieldLabels', {});
lyr_Mkuza_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});