var checkLine = require("checkLine");
var drawF = require("draw");
cc.Class({
    extends: cc.Component,

    properties: {
        draw:cc.Graphics,
    },


    start () {
        
        
    },
    buttnClick1:function(event, customEventData){
        var answer = [{"X":-314.2301349325337,"Y":360,"ID":12},{"X":-312.2301349325337,"Y":361,"ID":12},{"X":-311.2301349325337,"Y":361,"ID":12},{"X":-309.2301349325337,"Y":363,"ID":12},{"X":-306.2301349325337,"Y":365,"ID":12},{"X":-305.2301349325337,"Y":366,"ID":12},{"X":-304.2301349325337,"Y":366,"ID":12},{"X":-303.2301349325337,"Y":368,"ID":12},{"X":-300.2301349325337,"Y":370,"ID":12},{"X":-297.2301349325337,"Y":372,"ID":12},{"X":-295.2301349325337,"Y":373,"ID":12},{"X":-294.2301349325337,"Y":374,"ID":12},{"X":-294.2301349325337,"Y":375,"ID":12},{"X":-292.2301349325337,"Y":376,"ID":12},{"X":-289.2301349325337,"Y":377,"ID":12},{"X":-288.2301349325337,"Y":378,"ID":12},{"X":-287.2301349325337,"Y":379,"ID":12},{"X":-285.2301349325337,"Y":380,"ID":12},{"X":-284.2301349325337,"Y":381,"ID":12},{"X":-282.2301349325337,"Y":382,"ID":12},{"X":-280.2301349325337,"Y":382,"ID":12},{"X":-279.2301349325337,"Y":384,"ID":12},{"X":-277.2301349325337,"Y":384,"ID":12},{"X":-276.2301349325337,"Y":385,"ID":12},{"X":-273.2301349325337,"Y":387,"ID":12},{"X":-272.2301349325337,"Y":387,"ID":12},{"X":-272.2301349325337,"Y":388,"ID":12},{"X":-271.2301349325337,"Y":389,"ID":12},{"X":-269.2301349325337,"Y":390,"ID":12},{"X":-268.2301349325337,"Y":390,"ID":12},{"X":-268.2301349325337,"Y":391,"ID":12},{"X":-267.2301349325337,"Y":391,"ID":12},{"X":-266.2301349325337,"Y":392,"ID":12},{"X":-266.2301349325337,"Y":393,"ID":12},{"X":-265.2301349325337,"Y":394,"ID":12},{"X":-264.2301349325337,"Y":394,"ID":12},{"X":-263.2301349325337,"Y":394,"ID":12},{"X":-261.2301349325337,"Y":397,"ID":12},{"X":-259.2301349325337,"Y":398,"ID":12},{"X":-259.2301349325337,"Y":399,"ID":12},{"X":-258.2301349325337,"Y":400,"ID":12},{"X":-257.2301349325337,"Y":400,"ID":12},{"X":-256.2301349325337,"Y":402,"ID":12},{"X":-255.2301349325337,"Y":403,"ID":12},{"X":-251.2301349325337,"Y":405,"ID":12},{"X":-250.2301349325337,"Y":406,"ID":12},{"X":-249.2301349325337,"Y":407,"ID":12},{"X":-248.2301349325337,"Y":409,"ID":12},{"X":-246.2301349325337,"Y":410,"ID":12},{"X":-245.2301349325337,"Y":411,"ID":12},{"X":-244.2301349325337,"Y":411,"ID":12},{"X":-242.2301349325337,"Y":412,"ID":12},{"X":-239.2301349325337,"Y":416,"ID":12},{"X":-237.2301349325337,"Y":417,"ID":12},{"X":-234.2301349325337,"Y":419,"ID":12},{"X":-233.2301349325337,"Y":419,"ID":12},{"X":-232.2301349325337,"Y":420,"ID":12},{"X":-231.2301349325337,"Y":420,"ID":12},{"X":-229.2301349325337,"Y":420,"ID":12},{"X":-227.2301349325337,"Y":421,"ID":12},{"X":-226.2301349325337,"Y":422,"ID":12},{"X":-222.2301349325337,"Y":424,"ID":12},{"X":-221.2301349325337,"Y":425,"ID":12},{"X":-218.2301349325337,"Y":427,"ID":12},{"X":-217.2301349325337,"Y":427,"ID":12},{"X":-213.2301349325337,"Y":430,"ID":12},{"X":-211.2301349325337,"Y":431,"ID":12},{"X":-209.2301349325337,"Y":433,"ID":12},{"X":-205.2301349325337,"Y":436,"ID":12},{"X":-205.2301349325337,"Y":437,"ID":12},{"X":-203.2301349325337,"Y":439,"ID":12},{"X":-202.2301349325337,"Y":441,"ID":12},{"X":-200.2301349325337,"Y":442,"ID":12},{"X":-199.2301349325337,"Y":443,"ID":12},{"X":-196.2301349325337,"Y":444,"ID":12},{"X":-195.2301349325337,"Y":446,"ID":12},{"X":-194.2301349325337,"Y":447,"ID":12},{"X":-193.2301349325337,"Y":447,"ID":12},{"X":-190.2301349325337,"Y":449,"ID":12},{"X":-189.2301349325337,"Y":450,"ID":12},{"X":-188.2301349325337,"Y":450,"ID":12},{"X":-187.2301349325337,"Y":452,"ID":12},{"X":-186.2301349325337,"Y":452,"ID":12},{"X":-184.2301349325337,"Y":455,"ID":12},{"X":-183.2301349325337,"Y":456,"ID":12},{"X":-181.2301349325337,"Y":457,"ID":12},{"X":-179.2301349325337,"Y":458,"ID":12},{"X":-179.2301349325337,"Y":459,"ID":12},{"X":-177.2301349325337,"Y":459,"ID":12},{"X":-176.2301349325337,"Y":460,"ID":12},{"X":-174.2301349325337,"Y":462,"ID":12},{"X":-174.2301349325337,"Y":463,"ID":12},{"X":-171.2301349325337,"Y":465,"ID":12},{"X":-170.2301349325337,"Y":465,"ID":12},{"X":-168.2301349325337,"Y":467,"ID":12},{"X":-166.2301349325337,"Y":468,"ID":12},{"X":-165.2301349325337,"Y":469,"ID":12},{"X":-165.2301349325337,"Y":470,"ID":12},{"X":-163.2301349325337,"Y":471,"ID":12},{"X":-162.2301349325337,"Y":472,"ID":12},{"X":-160.2301349325337,"Y":473,"ID":12},{"X":-159.2301349325337,"Y":474,"ID":12},{"X":-157.2301349325337,"Y":475,"ID":12},{"X":-156.2301349325337,"Y":476,"ID":12},{"X":-153.2301349325337,"Y":477,"ID":12},{"X":-150.2301349325337,"Y":478,"ID":12},{"X":-149.2301349325337,"Y":478,"ID":12},{"X":-148.2301349325337,"Y":480,"ID":12},
        {"X":-147.2301349325337,"Y":481,"ID":12},{"X":-146.2301349325337,"Y":482,"ID":12},{"X":-143.2301349325337,"Y":485,"ID":12},{"X":-142.2301349325337,"Y":488,"ID":12},{"X":-141.2301349325337,"Y":488,"ID":12},{"X":-140.2301349325337,"Y":489,"ID":12},{"X":-139.2301349325337,"Y":490,"ID":12},{"X":-138.2301349325337,"Y":490,"ID":12},{"X":-136.2301349325337,"Y":491,"ID":12},{"X":-133.2301349325337,"Y":493,"ID":12},{"X":-132.2301349325337,"Y":494,"ID":12},{"X":-131.2301349325337,"Y":494,"ID":12},{"X":-129.2301349325337,"Y":496,"ID":12},{"X":-127.2301349325337,"Y":496,"ID":12},{"X":-127.2301349325337,"Y":497,"ID":12},{"X":-124.2301349325337,"Y":497,"ID":12},{"X":-122.2301349325337,"Y":497,"ID":12},{"X":-122.2301349325337,"Y":498,"ID":12},{"X":-121.2301349325337,"Y":499,"ID":12},{"X":-120.2301349325337,"Y":500,"ID":12},{"X":-119.2301349325337,"Y":500,"ID":12},{"X":-118.2301349325337,"Y":502,"ID":12},{"X":-116.2301349325337,"Y":503,"ID":12},{"X":-114.2301349325337,"Y":505,"ID":12},{"X":-113.2301349325337,"Y":506,"ID":12},{"X":-112.2301349325337,"Y":506,"ID":12},{"X":-109.2301349325337,"Y":509,"ID":12},{"X":-109.2301349325337,"Y":510,"ID":12},{"X":-105.2301349325337,"Y":512,"ID":12},{"X":-103.2301349325337,"Y":513,"ID":12},{"X":-103.2301349325337,"Y":514,"ID":12},{"X":-102.2301349325337,"Y":515,"ID":12},{"X":-100.2301349325337,"Y":516,"ID":12},{"X":-99.2301349325337,"Y":517,"ID":12},{"X":-99.2301349325337,"Y":518,"ID":12},{"X":-97.2301349325337,"Y":520,"ID":12},{"X":-96.2301349325337,"Y":520,"ID":12},{"X":-96.2301349325337,"Y":521,"ID":12},{"X":-95.2301349325337,"Y":521,"ID":12},{"X":-94.2301349325337,"Y":522,"ID":12},{"X":-93.2301349325337,"Y":522,"ID":12},{"X":-92.2301349325337,"Y":524,"ID":12},{"X":-90.2301349325337,"Y":525,"ID":12},{"X":-88.2301349325337,"Y":526,"ID":12},{"X":-85.2301349325337,"Y":527,"ID":12},{"X":-84.2301349325337,"Y":527,"ID":12},{"X":-83.2301349325337,"Y":527,"ID":12},{"X":-83.2301349325337,"Y":528,"ID":12},{"X":-82.2301349325337,"Y":528,"ID":12},{"X":-81.2301349325337,"Y":529,"ID":12},{"X":-80.2301349325337,"Y":529,"ID":12},{"X":-79.2301349325337,"Y":530,"ID":12},{"X":-78.2301349325337,"Y":532,"ID":12},{"X":-76.2301349325337,"Y":533,"ID":12},{"X":-75.2301349325337,"Y":533,"ID":12},{"X":-74.2301349325337,"Y":533,"ID":12},{"X":-72.2301349325337,"Y":532,"ID":12},{"X":-71.2301349325337,"Y":532,"ID":12},{"X":-71.2301349325337,"Y":531,"ID":12},{"X":-70.2301349325337,"Y":530,"ID":12},{"X":-69.2301349325337,"Y":529,"ID":12},{"X":-68.2301349325337,"Y":529,"ID":12},{"X":-67.2301349325337,"Y":528,"ID":12},{"X":-67.2301349325337,"Y":527,"ID":12},{"X":-64.2301349325337,"Y":527,"ID":12},{"X":-60.2301349325337,"Y":524,"ID":12},{"X":-58.2301349325337,"Y":524,"ID":12},{"X":-57.2301349325337,"Y":523,"ID":12},{"X":-54.2301349325337,"Y":521,"ID":12},{"X":-53.2301349325337,"Y":520,"ID":12},{"X":-52.2301349325337,"Y":519,"ID":12},{"X":-50.2301349325337,"Y":518,"ID":12},{"X":-48.2301349325337,"Y":518,"ID":12},{"X":-45.2301349325337,"Y":517,"ID":12},{"X":-44.2301349325337,"Y":517,"ID":12},{"X":-43.2301349325337,"Y":515,"ID":12},{"X":-42.2301349325337,"Y":514,"ID":12},{"X":-41.2301349325337,"Y":512,"ID":12},{"X":-38.2301349325337,"Y":511,"ID":12},{"X":-38.2301349325337,"Y":510,"ID":12},{"X":-35.2301349325337,"Y":509,"ID":12},{"X":-33.2301349325337,"Y":507,"ID":12},{"X":-31.2301349325337,"Y":507,"ID":12},{"X":-29.2301349325337,"Y":506,"ID":12},{"X":-28.2301349325337,"Y":505,"ID":12},{"X":-27.2301349325337,"Y":504,"ID":12},{"X":-26.2301349325337,"Y":503,"ID":12},{"X":-24.2301349325337,"Y":502,"ID":12},{"X":-23.2301349325337,"Y":501,"ID":12},{"X":-22.2301349325337,"Y":501,"ID":12},{"X":-22.2301349325337,"Y":500,"ID":12},{"X":-19.2301349325337,"Y":498,"ID":12},{"X":-18.2301349325337,"Y":498,"ID":12},{"X":-16.2301349325337,"Y":496,"ID":12},{"X":-14.230134932533701,"Y":494,"ID":12},{"X":-11.230134932533701,"Y":492,"ID":12},{"X":-11.230134932533701,"Y":491,"ID":12},{"X":-8.230134932533701,"Y":490,"ID":12},{"X":-6.230134932533701,"Y":488,"ID":12},{"X":-4.230134932533701,"Y":486,"ID":12},{"X":-1.2301349325337014,"Y":485,"ID":12},{"X":1.7698650674662986,"Y":482,"ID":12},{"X":5.769865067466299,"Y":481,"ID":12},{"X":5.769865067466299,"Y":480,"ID":12},{"X":8.769865067466299,"Y":477,"ID":12},{"X":9.769865067466299,"Y":477,"ID":12},{"X":11.769865067466299,"Y":475,"ID":12},{"X":12.769865067466299,"Y":475,"ID":12},{"X":15.769865067466299,"Y":473,"ID":12},{"X":19.7698650674663,"Y":471,"ID":12},
        {"X":19.7698650674663,"Y":470,"ID":12},{"X":22.7698650674663,"Y":468,"ID":12},{"X":23.7698650674663,"Y":467,"ID":12},{"X":28.7698650674663,"Y":465,"ID":12},{"X":32.7698650674663,"Y":462,"ID":12},{"X":35.7698650674663,"Y":461,"ID":12},{"X":37.7698650674663,"Y":459,"ID":12},{"X":38.7698650674663,"Y":459,"ID":12},{"X":39.7698650674663,"Y":458,"ID":12},{"X":40.7698650674663,"Y":456,"ID":12},{"X":42.7698650674663,"Y":456,"ID":12},{"X":42.7698650674663,"Y":455,"ID":12},{"X":47.7698650674663,"Y":452,"ID":12},{"X":50.7698650674663,"Y":450,"ID":12},{"X":52.7698650674663,"Y":449,"ID":12},{"X":54.7698650674663,"Y":447,"ID":12},{"X":59.7698650674663,"Y":444,"ID":12},{"X":60.7698650674663,"Y":444,"ID":12},{"X":62.7698650674663,"Y":442,"ID":12},{"X":62.7698650674663,"Y":441,"ID":12},{"X":65.7698650674663,"Y":439,"ID":12},{"X":66.7698650674663,"Y":438,"ID":12},{"X":70.7698650674663,"Y":435,"ID":12},{"X":72.7698650674663,"Y":433,"ID":12},{"X":73.7698650674663,"Y":432,"ID":12},{"X":79.7698650674663,"Y":430,"ID":12},{"X":82.7698650674663,"Y":427,"ID":12},{"X":87.7698650674663,"Y":426,"ID":12},{"X":89.7698650674663,"Y":425,"ID":12},{"X":91.7698650674663,"Y":423,"ID":12},{"X":92.7698650674663,"Y":422,"ID":12},{"X":94.7698650674663,"Y":421,"ID":12},{"X":98.7698650674663,"Y":418,"ID":12},{"X":101.7698650674663,"Y":416,"ID":12},{"X":105.7698650674663,"Y":412,"ID":12},{"X":109.7698650674663,"Y":410,"ID":12},{"X":112.7698650674663,"Y":406,"ID":12},{"X":112.7698650674663,"Y":405,"ID":12},{"X":115.7698650674663,"Y":402,"ID":12},{"X":117.7698650674663,"Y":400,"ID":12},{"X":122.7698650674663,"Y":397,"ID":12},{"X":126.7698650674663,"Y":394,"ID":12},{"X":127.7698650674663,"Y":394,"ID":12},{"X":128.7698650674663,"Y":393,"ID":12},{"X":129.7698650674663,"Y":392,"ID":12},{"X":131.7698650674663,"Y":391,"ID":12},{"X":133.7698650674663,"Y":390,"ID":12},{"X":138.7698650674663,"Y":388,"ID":12},{"X":140.7698650674663,"Y":387,"ID":12},{"X":141.7698650674663,"Y":386,"ID":12},{"X":143.7698650674663,"Y":384,"ID":12},{"X":144.7698650674663,"Y":383,"ID":12},{"X":147.7698650674663,"Y":382,"ID":12},{"X":150.7698650674663,"Y":381,"ID":12},{"X":154.7698650674663,"Y":380,"ID":12},{"X":155.7698650674663,"Y":378,"ID":12},{"X":157.7698650674663,"Y":377,"ID":12},{"X":159.7698650674663,"Y":376,"ID":12},{"X":164.7698650674663,"Y":374,"ID":12},{"X":167.7698650674663,"Y":373,"ID":12},{"X":170.7698650674663,"Y":370,"ID":12},{"X":172.7698650674663,"Y":369,"ID":12},{"X":174.7698650674663,"Y":369,"ID":12},{"X":175.7698650674663,"Y":367,"ID":12},{"X":177.7698650674663,"Y":365,"ID":12},{"X":178.7698650674663,"Y":364,"ID":12},{"X":180.7698650674663,"Y":363,"ID":12},{"X":181.7698650674663,"Y":363,"ID":12},{"X":182.7698650674663,"Y":363,"ID":12},{"X":183.7698650674663,"Y":363,"ID":12},{"X":186.7698650674663,"Y":364,"ID":12},{"X":187.7698650674663,"Y":364,"ID":12},{"X":187.7698650674663,"Y":366,"ID":12},{"X":188.7698650674663,"Y":366,"ID":12},{"X":189.7698650674663,"Y":368,"ID":12},{"X":190.7698650674663,"Y":369,"ID":12},{"X":191.7698650674663,"Y":369,"ID":12},{"X":193.7698650674663,"Y":371,"ID":12},{"X":193.7698650674663,"Y":372,"ID":12},{"X":195.7698650674663,"Y":374,"ID":12},{"X":195.7698650674663,"Y":375,"ID":12},{"X":197.7698650674663,"Y":376,"ID":12},{"X":198.7698650674663,"Y":377,"ID":12},{"X":199.7698650674663,"Y":377,"ID":12},{"X":200.7698650674663,"Y":378,"ID":12},{"X":201.7698650674663,"Y":379,"ID":12},{"X":203.7698650674663,"Y":380,"ID":12},{"X":204.7698650674663,"Y":380,"ID":12},{"X":206.7698650674663,"Y":381,"ID":12},{"X":207.7698650674663,"Y":382,"ID":12},{"X":209.7698650674663,"Y":383,"ID":12},{"X":211.7698650674663,"Y":385,"ID":12},{"X":213.7698650674663,"Y":386,"ID":12},{"X":214.7698650674663,"Y":387,"ID":12},{"X":217.7698650674663,"Y":388,"ID":12},{"X":219.7698650674663,"Y":389,"ID":12},{"X":221.7698650674663,"Y":391,"ID":12},{"X":222.7698650674663,"Y":391,"ID":12},{"X":224.7698650674663,"Y":393,"ID":12},{"X":225.7698650674663,"Y":393,"ID":12},{"X":228.7698650674663,"Y":394,"ID":12},{"X":232.7698650674663,"Y":395,"ID":12},{"X":234.7698650674663,"Y":397,"ID":12},{"X":237.7698650674663,"Y":398,"ID":12},{"X":239.7698650674663,"Y":400,"ID":12},{"X":240.7698650674663,"Y":400,"ID":12},{"X":242.7698650674663,"Y":401,"ID":12},{"X":245.7698650674663,"Y":402,"ID":12},{"X":250.7698650674663,"Y":404,"ID":12},{"X":253.7698650674663,"Y":406,"ID":12},{"X":257.7698650674663,"Y":407,"ID":12},{"X":258.7698650674663,"Y":408,"ID":12},
        {"X":260.7698650674663,"Y":409,"ID":12},{"X":261.7698650674663,"Y":411,"ID":12},{"X":263.7698650674663,"Y":412,"ID":12},{"X":266.7698650674663,"Y":414,"ID":12},{"X":267.7698650674663,"Y":414,"ID":12},{"X":268.7698650674663,"Y":415,"ID":12},{"X":270.7698650674663,"Y":417,"ID":12},{"X":272.7698650674663,"Y":418,"ID":12},{"X":274.7698650674663,"Y":420,"ID":12},{"X":276.7698650674663,"Y":421,"ID":12},{"X":276.7698650674663,"Y":422,"ID":12},{"X":277.7698650674663,"Y":423,"ID":12},{"X":279.7698650674663,"Y":424,"ID":12},{"X":281.7698650674663,"Y":425,"ID":12},{"X":282.7698650674663,"Y":426,"ID":12},{"X":283.7698650674663,"Y":427,"ID":12},{"X":285.7698650674663,"Y":430,"ID":12},{"X":285.7698650674663,"Y":432,"ID":12},{"X":286.7698650674663,"Y":434,"ID":12},{"X":288.7698650674663,"Y":436,"ID":12},{"X":290.7698650674663,"Y":440,"ID":12},{"X":291.7698650674663,"Y":440,"ID":12},{"X":291.7698650674663,"Y":441,"ID":12},{"X":293.7698650674663,"Y":443,"ID":12},{"X":294.7698650674663,"Y":443,"ID":12},{"X":296.7698650674663,"Y":445,"ID":12},{"X":297.7698650674663,"Y":446,"ID":12},{"X":302.7698650674663,"Y":450,"ID":12},{"X":307.7698650674663,"Y":454,"ID":12},{"X":310.7698650674663,"Y":457,"ID":12},{"X":313.7698650674663,"Y":459,"ID":12},{"X":315.7698650674663,"Y":461,"ID":12},{"X":317.7698650674663,"Y":463,"ID":12},{"X":320.7698650674663,"Y":465,"ID":12},{"X":322.7698650674663,"Y":467,"ID":12},{"X":324.7698650674663,"Y":468,"ID":12},{"X":325.7698650674663,"Y":470,"ID":12},{"X":327.7698650674663,"Y":471,"ID":12},{"X":328.7698650674663,"Y":473,"ID":12},{"X":329.7698650674663,"Y":473,"ID":12},{"X":331.7698650674663,"Y":475,"ID":12},{"X":333.7698650674663,"Y":476,"ID":12},{"X":335.7698650674663,"Y":477,"ID":12},{"X":337.7698650674663,"Y":478,"ID":12},{"X":338.7698650674663,"Y":478,"ID":12},{"X":339.7698650674663,"Y":479,"ID":12},{"X":340.7698650674663,"Y":479,"ID":12},{"X":343.7698650674663,"Y":482,"ID":12},{"X":344.7698650674663,"Y":483,"ID":12},{"X":349.7698650674663,"Y":486,"ID":12},{"X":351.7698650674663,"Y":487,"ID":12},{"X":351.7698650674663,"Y":488,"ID":12},{"X":352.7698650674663,"Y":489,"ID":12},{"X":353.7698650674663,"Y":489,"ID":12},{"X":354.7698650674663,"Y":491,"ID":12},{"X":356.7698650674663,"Y":492,"ID":12},{"X":358.7698650674663,"Y":494,"ID":12},{"X":360.7698650674663,"Y":496,"ID":12},{"X":362.7698650674663,"Y":497,"ID":12},{"X":364.7698650674663,"Y":499,"ID":12},{"X":364.7698650674663,"Y":500,"ID":12},{"X":365.7698650674663,"Y":500,"ID":12},{"X":366.7698650674663,"Y":502,"ID":12},{"X":368.7698650674663,"Y":503,"ID":12},{"X":370.7698650674663,"Y":503,"ID":12},{"X":371.7698650674663,"Y":505,"ID":12},{"X":374.7698650674663,"Y":506,"ID":12},{"X":375.7698650674663,"Y":506,"ID":12},{"X":379.7698650674663,"Y":508,"ID":12},{"X":383.7698650674663,"Y":509,"ID":12},{"X":385.7698650674663,"Y":510,"ID":12},{"X":389.7698650674663,"Y":511,"ID":12},{"X":392.7698650674663,"Y":513,"ID":12},{"X":394.7698650674663,"Y":514,"ID":12},{"X":397.7698650674663,"Y":514,"ID":12},{"X":400.7698650674663,"Y":515,"ID":12},{"X":400.7698650674663,"Y":516,"ID":12},{"X":403.7698650674663,"Y":517,"ID":12},{"X":406.7698650674663,"Y":518,"ID":12},{"X":406.7698650674663,"Y":519,"ID":12},{"X":408.7698650674663,"Y":520,"ID":12},{"X":409.7698650674663,"Y":520,"ID":12},{"X":410.7698650674663,"Y":520,"ID":12},{"X":411.7698650674663,"Y":521,"ID":12},{"X":412.7698650674663,"Y":521,"ID":12},{"X":412.7698650674663,"Y":522,"ID":12},{"X":413.7698650674663,"Y":523,"ID":12},{"X":415.7698650674663,"Y":524,"ID":12},{"X":415.7698650674663,"Y":526,"ID":12},{"X":417.7698650674663,"Y":528,"ID":12},{"X":417.7698650674663,"Y":529,"ID":12},{"X":418.7698650674663,"Y":530,"ID":12},{"X":418.7698650674663,"Y":531,"ID":12},{"X":419.7698650674663,"Y":531,"ID":12},{"X":419.7698650674663,"Y":532,"ID":12},{"X":424.7698650674663,"Y":532,"ID":12}];
        var point = JSON.parse(cc.sys.localStorage.getItem('pointInfo'));
        checkLine.FilterPoints(point,answer,function(t){
            alert("结果"+t);
        });
    },
    buttnClick2:function(event, customEventData){
        this.draw.clear();
        drawF.clearPosition();
        localStorage.removeItem('pointInfo');
        cc.log("点"+cc.sys.localStorage.getItem('pointInfo'));
    },
    buttnClick3:function(event, customEventData){
        Alert.show("难道还有这种操作？",function(t){
            cc.log("确定")
        });
    },
});
