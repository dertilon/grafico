var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, 'dark', {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

myChart.showLoading();
const data = {
  name: 'Descortezado',
  children: [
    {
      name: 'Cabaña Fausto',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA MECANICA BRUKS', value: 001 },
            { name: 'RUTINA MECANICA INGRESO MECANICO PREV.', value: 002},
            { name: 'CONTROL DESGASTE PUAS UNITIZADOR', value: 003 },
            { name: 'CONTROL CON TINTA EJE BRUKS 030', value: 004}
           
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'INGRESO DESCORTEZADO', value: 5 },
            { name: 'CADENA1', value: 6 },
            { name: 'PARADA PATIO', value: 7 },
            { name: 'CAMBIO DE DUELA', value: 8 }
          ]
        },
      
      ]
    },
    {
      name: 'Schardon Carlos',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA MECANICA CINTAS MECANICO PREV.', value: 001 },
            { name: 'MICROFILTRADO U.H. BRUCKS 025', value: 001 },
            { name: 'MICROFILTRADO U.H. BRUCKS 030', value: 002},
            { name: 'RUTINA SEMANAL UH DESCORTEZADO', value: 001 },
            { name: 'CRT206 CONTROL DESGASTE GUIAS INFERIOR SUPERIOR TRANSPORTES', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'SISTEMAS HIDRAULICOS PATIO DESCORTEZADO', value: 721 },
            { name: 'ESTIRAMIENTO CADENAS', value: 4294 },
            { name: 'CONTROL GUIAS', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Alarcon Juan',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA Rutina lubricación de descortezado', value: 001 },
            { name: 'RUTINA DIARIA DESCORTEZADOR ', value: 002},
            { name: 'CONTROL DE TORQUE TORNILLO ROLO PUA', value: 001 },
            { name: 'RT200 CONTROL DESGASTE ESTRIA DE ROLOS', value: 002},
            { name: 'CONTROL DESGASTE ROLO PUA', value: 001 },
            { name: 'REVISION SISTEMA LUBRICACION DESCORTEZ', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'SISTEMAS HIDRAULICOS PATIO VOLCADOR', value: 721 },
            { name: 'DESCORTEZADOR', value: 4294 },
            { name: 'CADENA 2', value: 4294 },
            { name: 'CADENA BAJO ESCANER', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Pereyra Diego',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA MECANICA LÍENA DE CLASIFICACION', value: 001 },
            { name: 'COTROL DE PRESION DE PATEO A BUZONES', value: 002},
            { name: 'INSPECCION LINEA DE VIDA DESCORTEZADO', value: 001 },
            { name: 'RT-180 CONTROL ESTAD CILI Y TIEMPO FUGAS', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'LINEA CLASIFICACION', value: 721 },
            { name: 'PARADA PATIO', value: 4294 },
            { name: 'CAMBIO DUELA', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Arguello Juan',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA SEMANAL MIERCOLES CORREAS', value: 001 },
            { name: 'RUTINA LUBRICACION LINEA DE CLASIDICACION', value: 002},
            { name: 'RUTINA SEMANAL VIERNES EXTRACTOR  CORTEZ', value: 001 }, 
            { name: 'CTRL EQUIPO OXICORTE DESCORTEZADO', value: 002},
            { name: 'INSPECCION DE ELEMENTOS MOVILES DESCORTEZADO', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'LINEA CLASIFICACION', value: 721 },
            { name: 'RASTRA', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Aguiar Cristofer',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA DE SENSORES Y VALV DESCORTEZADO', value: 001 },
            { name: 'RUTINA PREVENTIVA TRANSFORMADOR DESCORTEZADO', value: 002},
            { name: 'RUTINA CONSUMO DE MOTORES DESCORTEZADO', value: 001 },
            { name: 'RUTINA INSPECCION BANCO CAPACITORES DESCORTEZADO', value: 002},
            { name: 'CTRL ETIQUETAS MAQ-HERRAMIENTAS 015', value: 001 },
            { name: 'MANTENIMIENTO CAMARA DE VIDEO', value: 002}
          ]
        },
      ]
    },
    {
      name: 'OPE-MEC',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA DE SENSORES Y VALV DESCORTEZADO', value: 001 },
            { name: 'INSPECCION PROTECCIONES DESCORTEZADO', value: 002}
          ]
        },
      ]
    }
  ]
};
var data2 = {
  name: 'Patio',
  children: [
    {
      name: 'Cornonil Nestor',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA SEMANAL PATIO-VOLCADOR', value: 001 },
            { name: 'CONTROL ACEITE IMAN AUTOLIMPIANTE KO 135', value: 002},
            { name: 'CONTROL CALIBRACION DETECTOR METALES VOL', value: 001 }, 
            { name: 'MICROFILTRADO UH VOLCADOR', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'TRANSPORTES ALIMENTACION PLANTA TERMICA', value: 721 },
            { name: 'RRUTINA DE CONTROL Y DESGASTE RECHIPPER', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Sanchez Matias',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA SEMANAL PATIO-VOLCADOR', value: 001 },
            { name: 'CONTROL ACEITE IMAN AUTOLIMPIANTE KO 135', value: 002},
            { name: 'CONTROL CALIBRACION DETECTOR METALES VOL', value: 001 }, 
            { name: 'MICROFILTRADO UH VOLCADOR', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'TRANSPORTES ALIMENTACION MDF', value: 721 },
            { name: 'ZARANDA DE CHIP', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Di Cosmo Enzo',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA MENSUAL CADENA 120', value: 001 },
            { name: 'LIMPIEZA SALA DE BOMBAS', value: 002},
            { name: 'CONTROL MENSUL MOTOBOMBA INCENDIO PATI OASERRADERO', value: 001 }, 
            { name: 'CONTROL RED DE INCENDIO', value: 002},
            { name: 'INPECCION SALA DE BOMBAS RED DE INCENDIO', value: 002},
            { name: 'MEDICION CONSUMO DE AGUA PLANTA PM01', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'BOMBAS RED DE INCENDIO', value: 721 },
            { name: 'SISTEMA CONTRA INCENDIO TRANSPOORTES', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Gonzales Alberto',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'CONTROL ESTRUCTURAL VOLCADOR CAMIONES', value: 001 },
            { name: 'RUTINA CONTROL TAMBOR DESCORTEZADOR', value: 002},
            { name: 'LIMPIEZA DE TURNO TALLER MTO PATIO', value: 001 }, 
            { name: 'RUTINA DESGASTE Y CONTROL CHIPERA CARTHA', value: 002},
            { name: 'INSPECCION DE ELEMENTOS MOVILES PATIO', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'PATIO', value: 721 },
            { name: 'TRANSPORTES DE LEÑAN Y CHIP PATIO', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Vasquez Francisco',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: 'RUTINA CAMBIO DE DUELA', value: 001 },
            { name: 'RUTINA CONTROL M5', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: 'CONTROL ESTRUCTURAL M5', value: 721 },
            { name: 'CONTROL ESTRUCTURAL TAMBOR', value: 4294 }
          ]
        },
      
      ]
    },
    {
      name: 'Silvero Fernando',
      children: [
        {
          name: 'Rutinas',
          children: [
            { name: '---', value: 001 },
            { name: '---', value: 002},
            { name: '---', value: 001 }, 
            { name: '---', value: 002},
            { name: '---', value: 002}
          ]
        },
        {
          name: 'Maquinas',
          children: [
            { name: '---', value: 721 },
            { name: '---', value: 4294 }
          ]
        },
      
      ]
    },
    
    {
      name: 'Cristofer Aguiar',
      children: [
        { name: 'RUTINA INSP ELECTRICA SALA DE BOMBAS', value: 721 },
        { name: 'CONTROL LUMINARIAS EMERGENCIA PD', value: 4294 },
        { name: 'CONTROL SENSORES PATIO', value: 721 },
        { name: 'INPEC. MENSUAL MOTORES CHIP+COMBUSTIBLE', value: 4294 },
        { name: 'RUTINA INSP ELECTRICA SALA DE BOMBAS', value: 721 },
        { name: 'LIMPIEZA Y AJUSTE BORNES TABLEROS SERV', value: 4294 },
        { name: 'LIMPIEZA SALAS ELECTRICAS', value: 721 },
        { name: 'RUTINA CONTROL ELECTRICO GRÚA FIJA PATIO', value: 4294 }
      ]
    }
  ]
};
myChart.hideLoading();
myChart.setOption(
  (option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    legend: {
      top: '2%',
      left: '3%',
      orient: 'vertical',
      data: [
        {
          name: 'Descortezado',
          icon: 'rectangle'
        },
        {
          name: 'Patio',
          icon: 'rectangle'
        }
      ],
      borderColor: '#c23531'
    },
    series: [
      {
        type: 'tree',
        name: 'Descortezado',
        data: [data],
        top: '5%',
        left: '10%',
        bottom: '10%',
        right: '60%',
        symbolSize: 20,
        edgeShape: 'polyline',
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },
        emphasis: {
          focus: 'descendant'
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      },
      {
        type: 'tree',
        name: 'Patio',
        data: [data2],
        top: '5%',
        left: '60%',
        bottom: '10%',
        right: '25%',
        symbolSize: 20,
        edgeShape: 'polyline',
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },
        expandAndCollapse: true,
        emphasis: {
          focus: 'descendant'
        },
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  })
);


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);