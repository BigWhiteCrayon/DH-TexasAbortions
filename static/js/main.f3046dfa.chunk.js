(this["webpackJsonpdh-texas_abortions"]=this["webpackJsonpdh-texas_abortions"]||[]).push([[0],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(17),r=a.n(i),o=(a(73),a(36),a(11)),c=a(12),l=a(16),d=a(15),u=(a(74),a(18)),h=a(35),b=a.p+"static/media/texas_counties.bb62b53f.png",m=a(1),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={time:"current",overlay:!1,radius:!1,radiusDistance:160934.4},e.handleClickCurrent=function(){e.setState({time:"current"})},e.handleClick1973=function(){e.setState({time:"1973"})},e.handleClickOverlay=function(){e.setState({overlay:!e.state.overlay})},e.handleClickRadiusOff=function(){e.setState({radius:!1})},e.handleClickRadius100M=function(){e.setState({radius:!0,radiusDistance:160934.4})},e.handleClickRadius200M=function(){e.setState({radius:!0,radiusDistance:321868.8})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=[],a=b;return"current"===this.state.time?t=h.currentLocations:"1973"===this.state.time&&(t=h.Loc1973),Object(m.jsxs)("div",{className:"containerStyle",children:[Object(m.jsx)(u.d,{googleMapsApiKey:"AIzaSyA1xBPWF85rfCy6rgAnURPEY97LQdM-sRA",children:Object(m.jsxs)(u.b,{mapContainerStyle:O,center:j,zoom:5.5,children:[this.state.overlay?Object(m.jsx)(u.c,{bounds:g,url:a}):null,t.map((function(t,a){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u.e,{position:{lat:t.lat,lng:t.long}},a),Object(m.jsx)(u.a,{center:{lat:t.lat,lng:t.long},radius:e.state.radiusDistance,visible:e.state.radius,options:{strokeWeight:0,fillColor:"mediumSlateBlue"}},a)]})}))]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"dateButton",onClick:this.handleClick1973,disabled:"1973"===this.state.time,children:"1973"}),Object(m.jsx)("button",{className:"dateButton",onClick:this.handleClickCurrent,disabled:"current"===this.state.time,children:"Current"}),Object(m.jsx)("button",{className:"overlayButton",onClick:this.handleClickOverlay,children:"Toggle Overlay"}),Object(m.jsx)("button",{className:"radiusButton",onClick:this.handleClickRadiusOff,disabled:!1===this.state.radius,children:"Radius Off"}),Object(m.jsx)("button",{className:"radiusButton",onClick:this.handleClickRadius100M,disabled:!0===this.state.radius&&160934.4===this.state.radiusDistance,children:"100 Mile Radius"}),Object(m.jsx)("button",{className:"radiusButton",onClick:this.handleClickRadius200M,disabled:!0===this.state.radius&&321868.8===this.state.radiusDistance,children:"200 Mile Radius"})]})]})}}]),a}(s.a.Component),j={lat:32,lng:-99.5},O={display:"flex",alignSelf:"center",width:"100%",height:"650px",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"},g={north:38.98,south:23.35,east:-92.85,west:-107.4},x=f,y=a(68),p=a.n(y),v=[a.p+"static/media/TEST.c8167c86.md",a.p+"static/media/Test2.b7482284.md"],S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).text=[],e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.forEach((function(t){return fetch(t).then((function(e){return e.text()})).then((function(t){e.text.push(t),e.setState({ready:"y"})}))}))}},{key:"render",value:function(){return this.text.map((function(e,t){return Object(m.jsx)("div",{className:"Card",children:Object(m.jsx)(p.a,{children:e},t)})}))}}]),a}(s.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)("iframe",{title:"form",src:"https://docs.google.com/forms/d/e/1FAIpQLSc19dDCeinx97Rl94eB06T85TXiLu4HSaE3EbVVsEfroicztQ/viewform?embedded=true",width:"75%",height:"700",justifySelf:"center",boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",frameBorder:"0",marginHeight:"0",marginWidth:"0",children:"Loading\u2026"})}}]),a}(s.a.Component);var N=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"Header",children:[Object(m.jsx)("header",{className:"Title",children:"How Hard has Getting an Abortion Been in Texas"}),Object(m.jsx)("header",{className:"Subtitle",children:"and Why is that so Hard to Answer"})]}),Object(m.jsxs)("div",{className:"TopCard",children:[Object(m.jsx)("header",{className:"Subtitle",children:"The Change in Abortion Availabilty through the Years"}),Object(m.jsx)("div",{className:"Divider"}),Object(m.jsx)("text",{className:"bodyText",children:"We wanted to look at how the number of clinics available to women has fluctuated throughout the years in Texas. To do this we found snapshots though the years surrounding pivotal events in a woman\u2019s ability to seek out an abortion. This includes the first clinic in Dallas in 1973, the years surrounding the contentious enactment of HB2 and the subsequent repeal, and the reality of the current day.  In an effort to show how this effects women of different backgrounds, we included a toggleable overlay displaying the median household income per county and the ability to see a 100 mile and 200 mile radius around each  clinic to see the distances some women in Texas may have traveled for a federally ensured right."}),Object(m.jsx)(x,{})]}),Object(m.jsxs)("div",{className:"Card",children:[Object(m.jsx)("header",{className:"Subtitle",children:"The Steps They Took"}),Object(m.jsx)("div",{className:"Divider"}),Object(m.jsx)("text",{className:"bodyText",children:"Women seeking abortion in Texas face numerous obstacles in their efforts to safely terminate a pregnancy. The following quiz highlights some of the difficulties they have faced and puts you, the user in their shoes. If you were suffering from an unwanted pregnancy, would you be able to safely and successfully get an abortion?"}),Object(m.jsx)(C,{})]}),Object(m.jsx)(S,{})]})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},35:function(e){e.exports=JSON.parse('{"Loc1973":[{"name":"Southwestern Women\'s","lat":32.88677263747155,"long":-96.75984034637284}],"currentLocations":[{"name":"Southwestern Women\'s","lat":32.88677263747155,"long":-96.75984034637284},{"name":"PP El Paso","lat":31.770626500234933,"long":-106.476550586872},{"name":"PP Stafford","lat":29.639180783826408,"long":-95.58304905808744},{"name":"HOUSTON WOMENS CLINIC","lat":29.730060347944757,"long":-95.38429353110503},{"name":"HOUSTON WOMENS REPRODUCTIVE SERVICES","lat":29.776905376506917,"long":-95.41399024459403},{"name":"SUBURBAN WOMENS CLINIC","lat":29.733699293668252,"long":-95.42492711761477},{"name":"SUBURBAN WOMENS Medical Center","lat":30.019154950846925,"long":-95.52696130598198},{"name":"WOMEN\\"S CENTER OF HOUSTON","lat":29.689275926871716,"long":-95.52696130598198},{"name":"WHOLE WOMANS HEALTH OF MCALLEN","lat":26.196826080514107,"long":-98.23579224281823},{"name":"PP Lubbock","lat":33.57464859787259,"long":-101.89608838868158},{"name":"PP Waco","lat":31.517466234503853,"long":-97.205168234984},{"name":"WHOLE WOMANS HEALTH OF FORT WORTH","lat":32.72533027263901,"long":-97.43523083103058},{"name":"AUSTIN WOMENS HEALTH CENTER","lat":30.239598550116895,"long":-97.73884637527591},{"name":"WHOLE WOMANS HEALTH ALLIANCE","lat":30.411933176699485,"long":-97.72785904457878}]}')},36:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[183,1,2]]]);
//# sourceMappingURL=main.f3046dfa.chunk.js.map