import React from 'react'

const adHtml = `
<script type="text/javascript">
  ( function() {
    if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
    var unit = {"calltype":"async[2]","publisher":"AustinOkhala","width":320,"height":50,"sid":"Chitika Default"};
    var placement_id = window.CHITIKA.units.length;
    window.CHITIKA.units.push(unit);
    document.write('<div id="chitikaAdBlock-' + placement_id + '"></div>');
}());
</script>
<script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>
`

const infoLinksAd =`
<script type="text/javascript">
    var infolinks_pid = 3113047;
    var infolinks_wsid = 0;
</script>
<script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
`

const AdUnit = () =>(
    <div dangerouslySetInnerHTML={{__html: adHtml}} />
)

const InfoLinksAdUnit = () =>(
    <div dangerouslySetInnerHTML={{__html: infoLinksAd}} />
)

export default {
    AdUnit,
    InfoLinksAdUnit
}